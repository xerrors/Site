---
title: "博客"
permalink: "blog"
hideLastUpdated: True
---
<!--参考大佬的界面 https://xin-tan.com/guide/-->  
> 最近更新 👇


<template>
    <div>
      <div class="my-blog-head">
        <h1 v-for="tag in tags">{{ tag }}</h1>
      </div>
      <el-card :body-style="{ padding: '5px' }" v-for="(post, index) in topPublishPosts">
        <div style="padding: 14px;">
          <span><el-link :underline="false" :href="post.path" type="primary">{{ post.title }}</el-link></span>
          <div v-if="post.frontmatter.tag" style="display: inline-block; float: right;">
            <el-tag 
              size="mini" 
              v-for="tag in post.frontmatter.tag"
              style="margin-left: 10px;"
              type="info"
              >{{ tag }}</el-tag>
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
      <div @click="loadMore" class="page-guide-btn" v-if="showBtn">
        <div ref="btn">{{ btnInfo }}</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      step: 5,
      posts: [],
      tags: [],
      page: 1,
      num: 0,
      btnInfo: '加载更多',
      showBtn: true,
      timeout: null,
    }
  },

  mounted() {
    this.posts = []
    var temp = this.$site.pages
    // 筛选标签中带有 blog 标志的文章
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].frontmatter.tag) {
        for (var tag = 0; tag < temp[i].frontmatter.tag.length; tag++){
          if (!tag in this.tags){
            this.tags.push(tag)
          }
        }
        if (temp[i].frontmatter.tag == 'blog' || 'blog' == temp[i].frontmatter.tag[0]){
          this.posts.push(temp[i])
        }
      }
    }

    this.num = this.posts.length
  },

  computed: {
    topPublishPosts() {
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
      if (this.timeout) {
        return
      }

      if (this.page * this.step >= this.num) {
        this.btnInfo = '加载完成'
        this.$refs.btn.style.opacity = 0
        this.timeout = setTimeout(() => this.showBtn = false, 300)
      } else {
        this.page += 1
      }
    }
  }
}
</script>


<style scoped>
.el-link {
  text-decoration: none;
}

.el-card {
  margin-bottom: 10px;
  animation: showup 1s forwards;
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
