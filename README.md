![预览](https://xerrors.oss-cn-shanghai.aliyuncs.com/imgs/20200518221933.png)

[在线预览](https://www.xerrors.fun)

## 个人小破站

> 📢 新版的网站的设计稿已经设计完成，等待 Vue3 以及 VitePress 的正式发布就开始开发；更加舒适的外观，更加丰富的功能，更加方便的操作，希望我能够有时间做成主题发布出去！ [项目地址 @Xerrors/Gourd](https://github.com/Xerrors/Gourd)

可惜，导师给安排了任务~拖到春节去开发新版本


基于 [Vuepress](https://github.com/vuejs/vuepress)

由 [Element UI](https://github.com/ElemeFE/element) 改善界面

服务端 Nginx

后端接口使用的是 [Nodejs](https://github.com/nodejs/node)

评论以及访问统计，基于 [LeanCloud](https://leancloud.cn/)

配色方案参考：[少数派](https://sspai.com)

亮色 / 暗色切换 参考 Vuepress 主题[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)

目前所支持的 frontmatter，当然还有官方支持的用法。

```yaml
---
title: title here
permalink: /permalink-here
date: 2020-05-19 02:37:45
cover: https://xerrors.oss-cn-shanghai.aliyuncs.com/imgs/20200519142253.png
author: 玉川
tag: 
 - blog
categories:
 - Note
zhuanlan: python-base
prev:
  title: "title"
  path: /python-str/
next:
  title: "path"
  path: /python-lib/
hideComment: true || false
---
```
