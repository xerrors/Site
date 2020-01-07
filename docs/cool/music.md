---
title: 音乐
permalink: /music
hideLastUpdated: True
# layout: Music
---

<template>
  <div style="padding: 100px 0;">
    <div>PS: 第一首歌会播放一场，不晓得因为啥子~</div>
    <music></music>
  <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=650 src="//music.163.com/outchain/player?type=0&id=3042446515&auto=1&height=430"></iframe> -->
  </div>
  
</template>

<script>
import Music from '../.vuepress/components/Music.vue'
export default {
  components: { Music }
}
</script>
