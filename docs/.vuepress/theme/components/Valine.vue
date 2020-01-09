<template>
  <div style="background: white;">
    <section class="page-edit">
      <div>
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors" data-flag-title="Your Article Title"
          style="display: block; color: #999;">
          <span class="post-meta-item-text">阅读量： </span>
          <span class="leancloud-visitors-count"></span>
        </span>
        <br>
      </div>
      <div id="vcomments"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
  },
  watch: {
    $route (to, from) {
      if (from.path != to.path) {
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
      let path = location.origin + location.pathname
      // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
      document.getElementsByClassName('leancloud-visitors')[0].id = path
      this.valine.init({
        el: '#vcomments',
        appId: 'lBKeuOkAPgfaieov6tJObJyA-gzGzoHsz',// your appId
        appKey: 'g73DyYQYwPKg3hOwwf9lRY9i', // your appKey
        notify: false,
        verify: false,
        path: path,
        visitor: true,
        avatar: 'mm',
        placeholder: 'write here'
      });
    }
  }
}
</script>