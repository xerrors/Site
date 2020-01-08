---
title: 友链
permalink: /links
hideLastUpdated: True
---

<template>
  <div>
    <h3>友链</h3>
    <p>
      <a href="mailto:xerrors@163.com?subject=申请友链&body=网站标题： 网站头像链接： 网站描述： 网站地址：">💌申请友链</a>
      请按照格式申请友链，并确保你的网站已经添加本站为友链
      <div style="border: 1px solid #f3f3f3; border-radius: 3px; padding: 2rem; font-weight: 600;">
        "title": "Yuchuan",<br>
        "avatar": "https://www.xerrors.fun/avatar.jpg",<br>
        "site": "https://www.xerrors.fun",<br>
        "description": "敬畏代码，敬畏技术"
      </div>
    </p>
    <br>
    <div class="my-links">
        <el-card class="link-card" shadow="hover" v-for="link in links">
          <img class="link-card__avatar" :src="link.avatar"/>
          <h3 class="link-card__title">{{ link.title }}</h3>
          <p>{{ link.description }}</p>
          <a :href="link.site" target="_blank">
            <el-button class="link-card__button" round>去看看 🚀
          </el-button></a>
        </el-card>
        <el-card class="link-card" shadow="hover">
          欢迎互加友链😎
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          "title": "Yuchuan",
          "avatar": "https://www.xerrors.fun/avatar.jpg",
          "site": "https://www.xerrors.fun",
          "description": "敬畏代码，敬畏技术"
        },
        {
          "title": "兰州小红鸡",
          "avatar": "https://me.idealli.com/images/head.png",
          "site": "https://me.idealli.com/",
          "description": "代码记录成长"
        },
        {
          "title": "故事胶片",
          "avatar": "https://toc.lieme.cn/img/avatar.gif",
          "site": "https://toc.lieme.cn/",
          "description": "用胶片定格故事的乐趣"
        },
        {
          "title": "mghio",
          "avatar": "http://q2epkjatk.bkt.clouddn.com/blog_mghio.png",
          "site": "https://www.mghio.cn",
          "description": "JAVA 搬运工 & 终身学习者"
        },
        {
          "title": "tcrush",
          "avatar": "http://tcrush.github.io/uploads/avatar.jpg",
          "site": "http://tcrush.github.io/",
          "description": "淡泊以明志、宁静以致远"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-links
    display flex
    flex-wrap wrap

    .link-card
      width 13rem
      height 20rem
      margin 1rem
      display flex
      justify-content center

      h3
        text-align center

      p
        text-align center

      &__avatar
        display block
        width 6rem
        height 6rem
        margin 0 auto
        border-radius:50%;
        border 4px solid #f4f4f4

      &__button
        margin 0 auto
        display: block

      &:hover
        transform:rotate(-1deg);
        text-decoration none
        
@media (max-width: 600px)
  .my-links
    flex-direction column
    .link-card
      margin 1rem auto
</style>