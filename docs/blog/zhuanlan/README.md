---
title: "专栏"
permalink: "zhuanlan"
hideLastUpdated: True
---


<template>
  <div class="zhuanlan-ctn">
    <h1 class="zl-head">专栏</h1>
    <img
      style="height: 15rem; margin: 1rem auto; display:block;"
      :src="$withBase('/ills/zhuanlan.svg')"
      type="image/svg+xml" draggable="false"/>
    <div class="zl-item" v-for="(item, ind) in zhuanlan" :key="ind">
      <!-- 所有封面大小或者比例为 900 * 330 约 2.35 ：1 -->
      <div @click=lookup(item)>
        <img :src="item.cover" style="width: 100%; border-radius: 4px 4px 0 0;"/>
        <h4 class="zl-item__title">{{ item.title }}</h4>
        <p class="zl-item__info">共 {{ item.num }} 篇 · 发布于：{{ item.date }}</p>
      </div>
      <div v-if="item.showDetail" class="zl-item__pages">
        <div v-for="(page, ind) in item.pages" class="animated faster slideInDown">
          <el-link :underline="false" :href="page.path" type="primary"
            style="font-size: 1rem; font-weight: 500; line-height: 2rem; text-decorate: none;">
            {{ ind+1 }} - {{ page.title }} >>
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
      cover: "http://src.xerrors.fun/blog/20200105/zpJoCBLkleTs.png",
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
    transition opacity 0.3s ease
    opacity 0
    display inline-block
    padding-right 1rem
    float right
    color #aaa
  &__pages
    padding-bottom 2rem
    padding-left 1.5rem
    animation slow-in .5s

@keyframes slow-in
  0%
    max-height 0
  100%
    max-height 600px
</style>
