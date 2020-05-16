
<template>
  <div class="zhuanlan-ctn">
    <h1 class="zl-head">专栏</h1>
    <div class="zl-item" v-for="(item, ind) in zhuanlan" :key="ind" @click=lookup(item)>
      <!-- 所有封面大小或者比例为 900 * 330 约 2.35 ：1 -->
      <img :src="item.cover" style="width: 100%; border-radius: 4px 4px 0 0;"/>
      <h4 class="zl-item__title">{{ item.title }}</h4>
      <p class="zl-item__info">共 {{ item.num }} 篇 · 发布于：{{ item.date }}</p>
      <ul v-if="item.showDetail">
        <li v-for="page in item.pages">{{ page.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      zhuanlan: {}
    }
  },
  methods: {
    lookup(item) {
      console.log(item)
      item.showDetail = !item.showDetail
    }
  },
  mounted () {
    this.zhuanlan = [{
      cover: "https://xerrors.oss-cn-shanghai.aliyuncs.com/blog/20200104/ovQBUxdx1Gsp.jpg?imageslim",
      link: "python-base",
      title: "Python 简单讲解",
      date: "2019-10-07",
      showDetail: false,
      num: 0,
      pages: []
    }]
    var temp = this.$site.pages
    // 筛选标签中带有 zhuanlan 标志的文章

    for (var i = 0; i < temp.length; i++) {
      if (temp[i].frontmatter.zhuanlan) {
        var tempTag = temp[i].frontmatter.tag
        for (var j = 0; j < this.zhuanlan.length; j++){
          if (temp[i].frontmatter.zhuanlan === this.zhuanlan[j].link) {
            this.zhuanlan[j].pages.push(temp[i])
            this.num++
          }
        }
      }
    }
    this.num = this.posts.length
  }
}
</script>

<style lang="stylus" scoped>
.zl-head
  text-align center
  padding 3rem
.zl-item
  width 80%
  margin 2rem auto
  box-shadow 0px 1px 12px 2px rgba(0,0,0,.1)
  &:hover
    cursor pointer
    box-shadow 0px 1px 16px 2px rgba(0,0,0,.1)
    & ^[0]__info
      opacity 1
  border-radius 4px
  &__title
    display inline-block
    padding-left 1rem
  &__info
    transition all 0.3s ease
    opacity 0
    display inline-block
    padding-right 1rem
    float right
</style>