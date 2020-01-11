<template>
  <main class="page" :class="{'need-zoom': isBlog}">
    <slot name="top"/>
    <!--<div class="my-top-box" style="height: 5rem;"></div>-->
    <div class="my-main">
      <div class="my-main-left" :class="{'notBlog':!isBlog}">
        <div ref="title" class="my-title-box" v-if="isBlog">
          <h3 style="text-align: center;">{{ this.$page.title }}</h3>
          <div style="text-align: center; color: #bbb">
            <span class="leancloud-visitors" data-flag-title="Your Article Title">
          {{ formatDate(this.$page.frontmatter.date) }} · <i class="el-icon-view"> · <span class="leancloud-visitors-count"></span>
        </span>
          </div>
        </div>
        <Content class="theme-default-content"/>
        <footer class="page-edit" v-if="showFooter">
          <div
            class="edit-link"
            v-if="editLink"
          >
            <a
              :href="editLink"
              target="_blank"
              rel="noopener noreferrer"
            >{{ editLinkText }}</a>
            <OutboundLink/>
          </div>

          <div
            class="last-updated"
            v-if="lastUpdated"
          >
            <span class="prefix">{{ lastUpdatedText }}: </span>
            <span class="time">{{ lastUpdated }}</span>
          </div>
        </footer>

        <div class="page-nav" v-if="prev || next">
          <p class="inner">
            <span
              v-if="prev"
              class="prev"
            >
              ←
              <router-link
                v-if="prev"
                class="prev"
                :to="prev.path"
              >
                {{ prev.title || prev.path }}
              </router-link>
            </span>

            <span
              v-if="next"
              class="next"
            >
              <router-link
                v-if="next"
                :to="next.path"
              >
                {{ next.title || next.path }}
              </router-link>
              →
            </span>
          </p>
        </div>
        <valine></valine>
      </div>
      <div v-show="isBlog" class="my-menu">
        <div class="my-menu__item">
          <h4 style="margin-top: 0;">目录</h4>
            <a
              v-for="menu in renderMenus"
              :href="$page.path + '#' + menu.slug"
              style="line-height: 1rem; display: block;"
              :class="{
                'my-menu__lv2': menu.level===2,
                'my-menu__lv3': menu.level===3,
              }">
              {{ menu.title }}</a>
        </div>
      </div>
    </div>

    <slot name="bottom"/>
  </main>
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from '../util'
import Valine from '@theme/components/Valine.vue'

export default {
  props: ['sidebarItems'],
  components: { Valine },
  computed: {
    renderMenus() {
      return this.$page.headers
    },
    isBlog () {
      // console.log(this.$page)
      // 判断这篇文章是不是博客
      if (this.$page.frontmatter.tag) {  
        return this.$page.frontmatter.tag == 'blog' || 'blog' == this.$page.frontmatter.tag[0]
      }
      return false
    },

    showFooter () {
      return !this.$page.frontmatter.hideFooter
    },

    lastUpdated () {
      // 通过 hideLastUpdated 标签来判断是否隐藏该标签
      if (this.$page.frontmatter.hideLastUpdated) {
        return false
      }
      return this.$page.lastUpdated 
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return prev
      }
      // if (prev === false) {
      //   return
      // } else if (prev) {
      //   return resolvePage(this.$site.pages, prev, this.$route.path)
      // } else {
      //   return resolvePrev(this.$page, this.sidebarItems)
      // }
    },

    next () {
      // 修改部分逻辑
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return next
      }
      // if (next === false) {
      //   return
      // } else if (next) {
      //   this.$router.push(next)
      //   return resolvePage(this.$site.pages, next, this.$route.path)
      // } else {
      //   return resolveNext(this.$page, this.sidebarItems)
      // }
    },

    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$site.themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '')
           + `/src`
           + `/${docsBranch}/`
           + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
           + path
           + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + `/edit`
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )
    },
    formatDate(date) {
      date = new Date(date)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.my-main
  // 刨坑保留
  max-width 70rem
  min-height 90vh
  margin 0 auto
  position relative

.my-title-box
  padding-top: 1.5rem
  margin: 0rem auto -2rem auto

.notBlog
  margin 0 auto

.my-main-left
  position relative
  max-width 53rem
  background-color white
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  padding-bottom 2rem

.my-menu
  position absolute
  top 0
  right 0
  margin-left 1rem
  width 250px
  &__lv3
    margin-top 8px
    padding-left 1rem
    &::before
      content: '·'
  &__lv2
    margin-top 16px
  &__item
    position fixed
    max-width 250px
    min-width 250px
    // background white
    padding 1rem
    // box-shadow 0 1px 2px 0 rgba(34,36,38,0.15)

@media (max-width: 1250px)
  .my-main-left
    margin 0 auto
  .my-menu
    display none

.page
  padding-bottom 2rem
  display block
  background #f0f2f5
  min-height 100vh

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

</style>
