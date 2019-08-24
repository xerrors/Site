<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <el-backtop></el-backtop>

    <div id="my-bg" :class="{ 'my-bg-home': $page.frontmatter.home }"></div>

    <Navbar :class="{
          'my-nav-home': $page.frontmatter.home && !scrollFlag, 
          'my-nav': !$page.frontmatter.home || scrollFlag
        }"
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  components: { Home, Page, Sidebar, Navbar },

  data () {
    return {
      isSidebarOpen: false,
      scrollFlag: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
          'my-layout-container': this.$page.frontmatter.home
        },
        userPageClass
      ]
    },

    navClasses () {
      return [
        {
          'my-nav-home': this.$page.frontmatter.home && !this.scrollFlag, 
          'my-nav': !this.$page.frontmatter.home || this.scrollFlag
        }
      ]
    }
  },

  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.myScroll)

    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  
  destroyed () {
    window.removeEventListener('scroll', this.myScroll)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    myScroll () {
      const that = this
      // 获取背景的高度
      var bg = document.getElementById('my-bg');
      var bgHeight = bg.offsetHeight;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop

      if (that.scrollTop > bgHeight / 5) {
        that.scrollFlag = true
      } else {
        that.scrollFlag = false
      }
    }
  }
}
</script>


<style>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

.my-layout-container {
  user-select:none;
}

.my-bg-home {
  position: absolute;
  width: 100%;
  height: 100vh;
  min-height: 42rem;
  max-height: 70rem;
  background-image: linear-gradient(-45deg, #00dbde 0%, #fc00ff 100%);
  background-size: 400% 400vh;
  animation: gradientBG 10s ease infinite;
  z-index: -1;
}

.my-nav-home {
  background-color: rgba(256, 256, 256, 0);
  color: white;
  border: 0;
}

.my-nav {
  background-color: white;
  border-bottom: 1px solid #eee;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}

.nav-dropdown {
  color:  #2c3e50;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
