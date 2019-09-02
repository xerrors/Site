---
title: "导航"
permalink: "guide"
hideLastUpdated: True

tabs: 
- label: 计算机
  name: one
  classes:
  - title: 资讯网站
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

    - name: InfoQ
      description: 技术论坛
      link: https://www.infoq.cn/

    - name: iData
      description: 仿知网
      link: https://www.cn-ki.net/

    - name: Creative
      description: 灵感与创意
      link: https://creativemass.cn/#/

  - title: 工具
    links: 

    - name: 语雀
      description: 文档协作平台
      link: https://www.yuque.com/

    - name: Carbon
      description: 代码截图工具
      link: https://carbon.now.sh/

    - name: NICRTOOL+
      description: 常用工具合集
      link: http://www.nicetool.net/

  - title: 电子读物
    links:
    - name: 自我修养
      description: 基础读物
      link: https://legacy.gitbook.com/book/leohxj/a-programmer-prepares/details

    - name: Markdown
      description: Markdown 教程
      link: https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/

    - name: Docker
      description: 从入门到实践
      link: https://legacy.gitbook.com/book/yeasy/docker_practice/details
      

- label: 网络安全
  name: two
  classes:
  - title: 比赛平台
    links:
    - name: i春秋
      description: 比赛以及练习平台
      link: https://www.ichunqiu.com

  - title: 工具
    links: 
    - name: 在线工具
      description: CTF 在线工具集
      link: 

    - name: quipqiup
      description: 词频分析
      link: https://quipqiup.com/

- label: 前端
  name: three
  classes:
  - title: 速查平台
    links: 
    - name: W3CSchool
      description: 词典网站
      link: https://www.w3cschool.cn/dict/
    - name: 印记中文
      description: 前端文档资源
      link: https://docschina.org/

  - title: 资源平台
    links:
    - name: IconFont
      description: 阿里图标库
      link: https://iconfont.cn/

    - name: EasyIcon
      description: 比较全的图标库
      link: https://www.easyicon.net

    - name: Tools
      description: 前端工具推荐
      link: https://illustration.tools/

    - name: ColorHunt
      description: 配色参考网站
      link: https://colorhunt.co

    - name: Khroma
      description: 利用AI训练颜色*
      link: http://khroma.co/

    - name: Grabient
      description: 渐变色调色
      link: https://www.grabient.com/

    - name: Grabient
      description: 渐变色调色
      link: https://www.grabient.com/

    - name: IRA
      description: 插画推荐
      link: https://iradesign.io/

    - name: Whoosh
      description: 有趣的插画
      link: https://www.ls.graphics/whoosh
      

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
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name">
        <div v-for="myClass in tab.classes">
          <div class="my-class-title"><strong>{{ myClass.title }}</strong></div>
          <div class="my-classes-box">
            <a :href="link.link" v-for="link in myClass.links" target="_blank">
              <el-card class="my-link-box">
                <div style="margin-bottom: 5px;">{{ link.name }}</div>
                <div style="font-size: smaller; color: #8f8f8f; text-overflow: ellipsis;">{{ link.description }}</div>
              </el-card>
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
  padding: 1rem;
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

.my-class-title {
  width: 5rem;
  padding: 0.5rem;
  margin: 1rem 0;
  color: white;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  user-select: none;
}

.my-link-box {
  width: 8.3rem;
  height: 4rem;
  margin: 0.4rem;
  /* border: 1px solid #f1f1f1; */
  /* border-radius: 3px; */
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition:all 0.3s;
}

.my-link-box:hover {
  transform: scale(1.05);
}
</style>