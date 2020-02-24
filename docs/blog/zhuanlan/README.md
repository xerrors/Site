---
title: "专栏"
permalink: "zhuanlan"
hideLastUpdated: True
---

<template>
  <div class="zhuanlan-ctn" style="width: 100%;">
    <img
      style="height: 10rem; margin: 1rem auto; display:block;"
      :src="$withBase('/ills/zhuanlan.svg')"
      type="image/svg+xml" draggable="false"/>
    <div class="zl-item" v-for="(item, ind) in zhuanlan" :key="ind">
      <!-- 所有封面大小或者比例为 900 * 330 约 2.35 ：1 -->
      <div @click=lookup(item)>
        <img :src="item.cover" style="width: 100%; border-radius: 4px 4px 0 0;"/>
        <h4 class="zl-item__title">{{ item.title }}</h4>
        <p class="zl-item__info">共 {{ item.num }} 篇 · 🕓 {{ item.date }}</p>
      </div>
      <div v-if="item.showDetail" class="zl-item__pages">
        <div style="font-size: .9rem; color: #666;">{{ item.decription }}</div>
        <el-divider></el-divider>
        <div v-for="(page, ind) in item.pages" class="animated faster slideInDown">
          <el-link :underline="false" :href="page.path" type="primary"
            style="font-size: 1rem; font-weight: 500; line-height: 2rem; text-decorate: none;">
            📄 {{ page.title }}
          </el-link>
        </div>
      </div>
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
      cover: "http://src.xerrors.fun/blog/20200224/xyfxYSdci11r.png",
      link: "python-sci",
      decription: "持续开辟新坑，这次所涉及到的是 Python 科学计算领域，参考书籍是《Python 科学计算（第二版）》张若愚著，为之后的科研研究铺路。需要一定的Python基础，如果Python基础不够扎实的话，可以参考另外一个专栏 《Python 快速扫盲》",
      title: "Python 科学计算",
      date: "2020-02-24",
      showDetail: false,
      num: 0,
      pages: []
    }, {
      cover: "http://src.xerrors.fun/blog/20200203/t7wXD6CoQdbk.png",
      link: "compile",
      decription: "这个专栏涉及到词法分析器以及语法分析器的构建，从 flex 开始讲起，直到后面的 bison 来构造语法分析器，一步一个脚印来将自己学习的知识应用到实践中去；",
      title: "编译原理：语法分析与词法分析",
      date: "2019-11-15",
      showDetail: false,
      num: 0,
      pages: []
    }, {
      cover: "http://src.xerrors.fun/blog/20200203/pa71gYHVDFVO.png",
      link: "python-base",
      decription: "这个专栏主要从Python的几个基础的地方来阐述，理解难度很低，并且可帮助有C语言基础的同学快速掌握Python的基础语法知识以及用法，平时写一些字符串处理脚本还是没有问题的；与此同时，该内容也可以帮助学习更深层次的Python的时候，打下一个基础。",
      title: "Python 快速扫盲",
      date: "2019-10-07",
      showDetail: false,
      num: 0,
      pages: []
    }]
    var temp = this.$site.pages
    // 筛选标签中带有 zhuanlan 标志的文章
    for (var i = 0; i < temp.length; i++) {
      const tempzl = temp[i].frontmatter.zhuanlan
      if (tempzl) {
        for (var j = 0; j < this.zhuanlan.length; j++){
          if (tempzl === this.zhuanlan[j].link) {
            this.zhuanlan[j].pages.push(temp[i])
            this.zhuanlan[j].num++
          }
        }
      }
    }
    for (var k = 0; k < this.zhuanlan.length; k++) {
      this.zhuanlan[k].pages.sort((a, b) => 
        (new Date(a.frontmatter.date)).getTime() - (new Date(b.frontmatter.date)).getTime())
    }
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
  transition .3s
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
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
    transition opacity 0.3s ease
    opacity 0
    display inline-block
    padding-right 1rem
    float right
    font-size 15px
    color #6c757d
  &__pages
    padding-bottom 2rem
    padding-left 1.5rem
    padding-right 1.5rem
    animation slow-in .5s

@media (max-width: $MQMobile)
  .zl-item
    width 100%
    &__info
      display none
    .el-link
      font-size .8rem

@keyframes slow-in
  0%
    max-height 0
  100%
    max-height 600px
</style>
