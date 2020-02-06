<template>
<div>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <!--
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >
      -->

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <img
          v-if="feature.image"
          :src="$withBase(feature.image)"
          draggable="false"
        >
        <div class="my-text-box">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <Content class="theme-default-content custom"/>
  </main>
  <div
      class="footer"
      v-if="data.footer"
    >
      <!--<el-divider>{{ data.footer }}</el-divider>-->
      {{ data.footer }}
  </div>
</div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>


<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    // border-top 1px solid $borderColor
    // padding 1.2rem 0
    margin-top 2.5rem
    // display flex
    // flex-wrap wrap
    // align-items flex-start
    // align-content stretch
    // justify-content space-between

    // added below
    // box-shadow 0 1px 2px 0 rgba(0,0,0,.05)
    padding 2rem 0
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    margin 20rem 0 10rem 0
    border-radius 5px
    background white
    animation: showup 0.5s 2s forwards
  .feature
    flex-grow 1
    flex-basis 30%
    // max-width 30%
    // add feature styles
    width 100%
    display flex
    align-items center
    justify-content center
    // add img tag style
    img
      max-width 50%
      margin 5rem auto
      display block
      height 12rem
      object-fit contain
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
    // add style of my-title-box
    .my-text-box
      text-align: left
      width 50%

.footer
  padding 2.5rem
  border-top 1px solid $borderColor
  text-align center
  color lighten($textColor, 25%)
</style>


<style lang="stylus" scoped>
// 为了不打扰前面的，我们在这里修改
.home
  .hero
    h1
      opacity: 0;
      font-size: 10rem
      color: #0d302c;
      background linear-gradient(45deg, #b3feff, #ffa9ab)
      font-family algerian
      margin-top 6.5rem
      animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    p
      opacity 0
      color white
      animation: opacityto1 0.5s 0.5s ease forwards
    .action-button
      opacity: 0;
      color white
      background-color rgba(0,0,0,0)
      padding 0.3rem 4rem
      border-radius 0
      transition: border-color .2s cubic-bezier(0, 0.58, 0, 0.79);
      box-sizing border-box
      border: 1px solid white
      font-weight 300
      animation: opacityto1 0.5s 1s ease forwards

      &:hover
        background-color black
        border-color black

    .description
      font-weight 300
      text-decoration: underline;
.nav-bar {
  background-color: white;
}

@media (max-width: 700px)
  .home
    .hero
      h1
        font-size 6rem
    .feature
      flex-direction column
      img 
        margin 3rem auto
      .my-text-box
        width 80%
        text-align center

@media (max-width: 419px)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .featureflex-direction column
      // add style of my-title-box
      h2
        font-size 1.25rem

@keyframes showup {
  0% {
    transform: translateY(6rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes opacityto1 {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ----------------------------------------------
 * Generated by Animista on 2020-1-10 1:29:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}


</style>

 