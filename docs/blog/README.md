---
title: "博客"
permalink: "blog"
hideLastUpdated: True
---
<!--参考大佬的界面 https://xin-tan.com/guide/-->  
<!-- > 最近更新 👇 -->

<template>
    <div>
    <!--标签列表-->
      <div class="my-blog-head">
        <h3>标签 </h3>
        <div class="my-tag-box">
          <el-button 
            :class="{ 'select-tag': tag == selectedTag }"
            @click="myFlitter( tag )"
            v-for="tag in tags"
            type="primary"
            size="small"
            style="margin: 5px;"
            plain>{{ tag }}</el-button>
        </div>
      </div>
      <el-card :body-style="{ padding: '5px' }" v-for="(post, index) in topPublishPosts">
        <div style="padding: 14px;">
          <span><el-link :underline="false" :href="post.path" type="primary"><strong>{{ post.title }}</strong></el-link></span>
          <div v-if="post.frontmatter.tag" style="display: inline-block; float: right;">
            <el-tag 
              size="mini" 
              v-for="item in post.frontmatter.tag"
              style="margin-left: 10px;"
              type="info"
              >{{ item }}</el-tag>
          </div>
          <div class="bottom clearfix">
            <br>
            <span><small><i class="el-icon-time"></i>  {{ post.formatDay }}</small></span>
            <el-link 
              style="float: right;" 
              :href="post.path" 
              type="primary" 
              :underline="false"
            ><i class="el-icon-view"> 阅读全文</i></el-link>
          </div>
        </div>
      </el-card>
      <div @click="loadMore" class="page-guide-btn" v-show="showBtn">
        <div ref="btn">{{ btnInfo }}</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      step: 15,
      posts: [],
      tags: [],
      page: 1,
      num: 0,
      btnInfo: '加载更多',
      showBtn: true,
      selectedTag: "blog"
    }
  },

  mounted() {
    this.posts = []
    var temp = this.$site.pages
    // 筛选标签中带有 blog 标志的文章

    for (var i = 0; i < temp.length; i++) {
      if (temp[i].frontmatter.tag) {
        var tempTag = temp[i].frontmatter.tag

        for (var j = 0; j < tempTag.length; j++){
          var isInTags = false

          for (var k = 0; k < this.tags.length; k++){
            if (tempTag[j] === this.tags[k]){
              isInTags = true
            }
          }
          if (!isInTags) {
            this.tags.push(tempTag[j])
          }
        }
        if (tempTag == 'blog' || 'blog' == tempTag[0]){
          this.posts.push(temp[i])
        }
      }
    }
    this.num = this.posts.length
  },

  computed: {
    topPublishPosts() {
      this.showBtn =  this.page * this.step < this.num
      return this.getTopKPosts(this.page * this.step)
    }
  },

  methods: {
    getTopKPosts(num) {
      const re = /.*\/(.*?)\.(html|md)/

      return this.posts
        .map(post => {
          const execs = re.exec(post.relativePath)
          return {
            ...post,
            updateTimestamp: (new Date(post.lastUpdated)).getTime(),
            filename: execs ? execs['1'] : '',
            formatDay: this.formatDate(new Date(post.lastUpdated))
          }
        })
        .sort((a, b) => b.updateTimestamp - a.updateTimestamp)
        .slice(0, num)
    },
    
    formatDate(date) {
      if (!(date instanceof Date)) {
        return 
      }

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },

    loadMore() {
      this.page += 1
    },

    myFlitter(tag) {
      this.selectedTag = tag
      this.page = 1
      this.posts = []
      var temp = this.$site.pages

      for (var i = 0; i < temp.length; i++) {
        if (temp[i].frontmatter.tag) {
          var tempTag = temp[i].frontmatter.tag

          for (var j = 0; j < tempTag.length; j++) {
            if (tempTag[j] === tag) {
              this.posts.push(temp[i])
              break
            }
          }
        }
      }
      // console.log(this.posts)
      this.num = this.posts.length
    }
  }
}
</script>


<style scoped>
.my-tag-box {
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start
}

.select-tag {
  color: white;
  background: #46BD87;
  border-color: #46BD87;
}

.el-card {
  margin-bottom: 10px;
  animation: showup .6s forwards;
}

.page-guide-btn {
  text-align: center;
  margin: 30px 0;
  animation: showup 1s forwards;
}

.page-guide-btn div {
  display: inline-block;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.page-guide-btn div:hover {
  background-color: #4abf8a;
  cursor: pointer;
}


@keyframes showup {
  0% {
    transform: translateY(3rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
