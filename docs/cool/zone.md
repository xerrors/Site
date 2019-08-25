---
permalink: /zone
---

<template>
    <div>
      <div class="my-head">
        <!-- <h3 class="my-head__title">动态</h3> -->
        <img class="my-head__svg" :src="$withBase('/svg/zone-bg.svg')" type="image/svg+xml" />
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
export default {
  data() {
    return {
      newMsg: {
        date: '',
        msg: '',
        status: ''
      },
      msgs: [
        {
          date: new Date(2019, 7, 25, 0, 0, 4),
          msg: '该死的备案，网站突然没法 https 访问了，可以 http 访问，我查了一大堆资料，花费了四五个小时，一直报错 ERR_CONNECTION_RESET，我还没学到计算机网络呢，哪里看得懂啊！最后才知道是因为没备案。。。',
          status: '😫'
        }
      ],
      options: ['😄', '😎', '😫', '😏', '😡', '😨' ],
    } 
  },

  methods: {
    submit() { 
      if (!this.newMsg.msg || this.newMsg.status) {
        this.$message.error('🤔状态或者内容不能为空哦~');
        return
      }
      this.$prompt('先告诉我 Token 是啥😇', '提示', {
          confirmButtonText: 'Yaeh',
          cancelButtonText: 'Nope',
          inputPattern: /^[A-Za-z0-9]{5,13}$/,
          inputErrorMessage: 'Token 格式不正确😕'
        }).then(({ value }) => {
          this.msgs.splice(0, 0, {
            date: new Date(),
            msg: this.newMsg.msg,
            status: this.newMsg.status,
            token: value
          })
          this.newMsg.msg = ''
          this.newMsg.status = ''
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '🥱不告诉算了。。。'
          });       
        });
    }
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
  width 80%
  margin-left 5rem
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
    width 80%
    margin-left 5rem
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