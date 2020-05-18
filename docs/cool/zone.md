---
title: 动态
permalink: /zone
hideLastUpdated: True
---

<template>
    <div>
      <div class="my-head">
        <!-- <h3 class="my-head__title">动态</h3> -->
        <img class="my-head__svg" :src="$withBase('/ills/zone-bg.svg')" type="image/svg+xml" draggable="false"/>
      </div>
      <div class="my-input">
        <div class="my-input__content">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="吐槽一下吧( •̀ ω •́ )✧"
            v-model="newMsg.msg">
          </el-input>
        </div>
        <div class="my-input__select">
          <el-select v-model="newMsg.status" placeholder="😋">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="my-input__btn">
          <el-button @click="submit">发布 🚀</el-button>
        </div>
      </div>
      <loading v-if='loading'></loading>
      <div v-else class="my-msgs-container">
        <div class="my-msg" v-for="(msg, ind) in topMsgs">
          <div class="my-msg__head">
              <span class="my-msg__status">{{ msg.status }}</span>
              <span class="my-msg__date" @click="delMsg(ind)">{{ msg.formatDay }}</span>
              <div class="btn-love" :class="{'love-active': msg.active}" @click="love(ind)"></div>
          </div>
          <div class="my-msg__body">
              <p class="my-msg__msg">{{ msg.msg }}</P>
          </div>  
        </div>
        <div @click="loadMore" class="page-guide-btn" v-show="showBtn">
        <div ref="btn">加载更多</div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '@theme/user-components/Loading.vue'
export default {
  components: { Loading },
  data() {
    return {
      loading: true,
      count: 0, // 记录点击的次数
      step: 20, // 每一页显示的动态条数
      page: 1, // 显示的页数
      showBtn: false, // 控制是否显示加载按钮，当全部加载出来的时候消失
      newMsg: {
        date: '',
        msg: '',
        status: ''
      }, // 新动态的格式
      msgs: [], // 存从服务器获得的动态
      options: ['😂', '🥰', '😒', '😡', '🙄', '😁', '😭', '😵' ],
    } 
  },

  computed: {
    topMsgs() {
      this.showBtn =  this.page * this.step < this.msgs.length
      return this.getTopKMsgs(this.page * this.step)
    }
  },

  methods: {
    love(ind) {
      this.msgs[ind].active = true
      this.$message('英雄所见略同！')
    },
    getMsgs() {
      axios.get('https://www.xerrors.fun:8001/api/zone/getData')
      .then(res=>{
        // console.log(res);
        for (var item of res.data.data) {
          item.date = new Date(Date.parse(item.date))
          // ! 暂时本地保存骗一骗
          item.active = false
        }
        this.msgs = res.data.data;
        this.loading = false
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    uploadMsg(data) {
      axios({
        method: 'post',
        url: 'https://www.xerrors.fun:8001/api/zone/upload',
        data: data
      }).then(res=>{
        // console.log(res)
        // 本地改变数据
        if (res.data.code != 200 ) {
          this.$message.error(res.data.message);
        } else {
          this.msgs.splice(0, 0, data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    delMsg(ind) {
      if (this.count < 10) {
        this.count += 1
        return
      }

      this.$prompt('先告诉我口令是啥 😇', '提示', {
          confirmButtonText: 'Yaeh',
          cancelButtonText: 'Nope',
          inputPattern: /^[A-Za-z0-9]{5,13}$/,
          inputErrorMessage: '口令格式不正确😕'
        }).then(({ value }) => {
          // 创建临时变量
          var temp = {
            data: ind,
            token: value
          }
          // 发起 axios 请求
          axios({
            method: 'post',
            url: 'https://www.xerrors.fun:8001/api/zone/delete',
            data: temp
          }).then(res=>{
            // 本地改变数据
            if (res.data.code != 200 ) {
              this.$message.error(res.data.message);
            } else {
              this.msgs.splice(ind, 1);
            }
          })
          .catch(function (error) {
            console.log(error);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '🥱不告诉算了。。。'
          });       
        });
      this.count = 0;
    },

    getTopKMsgs(num) {
      return this.msgs
        .map(msg => {
          return {
            ...msg,
            submitTime: (new Date(msg.date)).getTime(),
            formatDay: this.formatDate(new Date(msg.date))
          }
        })
        .sort((a, b) => b.submitTime - a.submitTime)
        .slice(0, num)
    },

    formatDate(date) {
      if (!(date instanceof Date)) {
        return 
      }

      return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
    },

    loadMore() {
      this.page += 1
    },

    submit() { 
      if (!this.newMsg.msg || !this.newMsg.status) {
        this.$message.error('🤔状态或者内容不能为空哦~');
        return
      }
      this.$prompt('先告诉我 Token 是啥😇', '提示', {
          confirmButtonText: 'Yaeh',
          cancelButtonText: 'Nope',
          inputPattern: /^[A-Za-z0-9]{5,13}$/,
          inputErrorMessage: 'Token 格式不正确😕'
        }).then(({ value }) => {
          // 创建临时变量
          var temp = {
            data: {
              date: new Date(),
              msg: this.newMsg.msg,
              status: this.newMsg.status,
              // status: 'happy',
            },
            token: value
          }
          // 发起 axios 请求
          this.uploadMsg(temp)

          // 消息清空
          this.newMsg.msg = ''
          this.newMsg.status = ''
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '🥱不告诉算了。。。'
          });       
        });
    }
  },

  mounted() {
    this.getMsgs();
  }
}
</script>

<style lang="stylus" scoped>
.my-head
  width 100%
  // border 1px solid #d1d5da 
  // display flex
  // justify-content space-between

  &__svg
    height 15rem
    margin 1rem auto
    display block

.my-input
  margin-bottom 2rem
  border-radius 3px

  &__content
    width 100%
    margin-bottom 1rem

  &__select
    width 4.5rem
    display inline-block
  &__btn
    display inline-block
    float right

temp-color=$lightBg
.my-msgs-container
  width 100%
  position relative
  &::before
    content: '';
    width: 2px;
    height: 100%;
    background: temp-color;
    position: absolute;

  .my-msg
    margin-bottom 2.5rem
    border-radius 3px
    padding-left 2rem
    &::before
      z-index: 3;
      content: '';
      position: absolute;
      left: -6px;
      background: #797777;
      height: 10px;
      margin-top: 11px;
      border-radius: 100%;
      width: 10px;
      border: 2px solid white;

    &__head
      position relative
      padding 0.5rem
      background-color temp-color
      &::before
        position: absolute;
        right: 100%;
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 18px 10px 0;
        border-width: 10px 15px 10px 0;
        border-color: transparent temp-color transparent transparent;
    &__body
      border 1px solid temp-color
      letter-spacing 1px
      padding 0 1rem

    &__status
      margin 0 0.5rem

    &__date
      margin 0 0.5rem
      font-weight 500

.btn-love {
  position: absolute;
  right: 0;
  top: -10px;
  display: inline-block;
  background: url(https://xerrors.oss-cn-shanghai.aliyuncs.com/blog/20200222/xHqDqd9ROBhI.png) 0 0 no-repeat;
  background-size: 2900%;
  height: 60px;
  cursor: pointer;
  width: 60px;
}

.btn-love.love-active{
  -webkit-animation: heart-burst steps(28) 0.8s 1 both;
          animation: heart-burst steps(28) 0.8s 1 both;
}

@-webkit-keyframes heart-burst {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

@keyframes heart-burst {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
</style>

<style lang="stylus">
.el-message-box__wrapper {
  background: rgba(0,0,0,0.9);
}
</style>