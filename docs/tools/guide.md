---
title: "导航"
permalink: "guide"
hideLastUpdated: True

tabs: 
- label: 计算机
  name: one
  classes:
  - title: 资源网站
    links:
    - name: Google
      description: 最常用的网站
      link: https://www.google.com
    - name: GitHub
      description: 全球最大XX网站
      link: https://www.github.com
    - name: Aliyun
      description: 云服务器
      link: https://cn.aliyun.com
      

- label: 网络安全
  name: two
  classes:
  - title: 比赛平台
    links:
    - name: i春秋
      description: 比赛以及练习平台
      link: https://www.ichunqiu.com

- label: 前端
  name: three
  classes:
  - title: 速查平台
    links: 
    - name: W3CSchool
      description: 词典网站
      link: https://www.w3cschool.cn/dict/
  

- label: 深度学习
  name: four
  classes:
  - title: 课程
    links: 
    - name: 吴恩达
      description: 全面、基础
      link: https://study.163.com/course/courseMain.htm?courseId=1004570029
    - name: 课程笔记
      description: 吴恩达课程的笔记 
      link: https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes

- label: Python
  name: five
  classes:
  - title: 基础
    links:
    - name: 官网
      description: 偶尔会用到的网站
      link: https://www.python.org

---

<template>
  <div class="my-guide-container">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name">
        <div v-for="myClass in tab.classes">
          <h3>{{ myClass.title }}</h3>
          <div class="my-classes-box">
            <a :href="link.link" v-for="link in myClass.links" target="_blank">
              <div class="my-link-box">
                <span style="margin-bottom: 5px;">{{ link.name }}</span>
                <span style="font-size: small; color: #8f8f8f;">{{ link.description }}</span>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'one',
      tabs: []
    };
  },

  mounted() {
    // this.getTabs();
    this.tabs = this.$page.frontmatter.tabs;
    console.log(this.$page);
  }
};
</script>

<style scoped>
.my-classes-box {
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    display: block;
  };
}

.my-classes-box a:hover {
  text-decoration: none;
}

.my-link-box{
  width: 8rem;
  height: 4rem;
  margin: 1.4rem;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.my-link-box:hover {
  background: #a3f78c20
}
</style>