---
title: 动态
permalink: /zone
hideLastUpdated: True
---

<template>
    <div>
      <div class="my-head">
        <!-- <h3 class="my-head__title">动态</h3> -->
        <img class="my-head__svg" :src="$withBase('/svg/zone-bg.svg')" type="image/svg+xml" draggable="false"/>
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
          <el-select v-model="newMsg.status" placeholder="😏">
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
      <div class="my-msgs-container">
        <div class="my-msg" v-for="msg in msgs">
            <div class="my-msg__head">
                <span class="my-msg__status">{{ msg.status }}</span>
                <span class="my-msg__date">{{ msg.date.toLocaleDateString() }}</span>
                <span class="my-msg__date">{{ msg.date.toLocaleTimeString() }}</span>
            </div>  
            <div class="my-msg__body">
                <p class="my-msg__msg">{{ msg.msg }}</P>
            </div>  
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      newMsg: {
        date: '',
        msg: '',
        status: ''
      },
      msgs: [],
      options: ['😄', '😎', '😫', '😏', '😡', '😨' ],
    } 
  },

  methods: {
    getMsgs() {
      axios.get('http://116.62.110.131:8000/api/zone/getData')
      .then(res=>{
        // console.log(res);
        for (var item of res.data.data) {
          item.date = new Date(Date.parse(item.date))
        }
        this.msgs = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    uploadMsg(data) {
      axios({
            method: 'post',
            url: 'http://116.62.110.131:8000/api/zone/upload',
            data: JSON.stringify(data)
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

.my-msgs-container
  width 100%

  .my-msg
    margin-bottom 2.5rem
    border: 1px solid #d1d5da;
    border-radius 3px

    // test
    
    &__head
      padding 0.5rem
      background-color #f6f8fa
      border-bottom: 1px solid #d1d5da
      display flex
      align-items center

    &__status
      margin 0 0.5rem

    &__date
      margin 0 0.5rem
    
    &__body
      padding 1rem
</style>