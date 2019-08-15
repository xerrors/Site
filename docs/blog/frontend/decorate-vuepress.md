---
title: "Vuepress 主题改造指南"
date: "2019-08-15"
permalink: /decorate-vuepress
tag: 
 - blog
 - 前端
categories:
 - 前端
 - Note
---

## Vuepress 主题改造

Vuepress  原有的主题虽然好看，但是，感觉有点单调了，所以就利用之前学过的 Vue 相关的知识来改造一下这一个主题，由于是在默认主题的基础上修改的，所以需要用到主题的继承的功能。[官方说明文档](https://v1.vuepress.vuejs.org/zh/theme/inheritance.html#动机) 写的不够清楚，所以踩了很多的坑，怕自己以后忘记了，所以还是记录一下，也方便交流。

#### 复制主题文件并设置继承

首先，把默认主题复制到 `.vuepress/` 当然了，不需要自己复制，直接在 `docs` 目录下执行

```sh
vuepress eject
```

然后就可以在 `.vuepress/` 文件夹下面看到 `theme` 文件夹，在里面存放的就是主题配置文件，在开始修改之前需要修改一下这个文件 `docs/.vuepress/theme/index.js` ，在文件的首部添加下面代码，直接粘贴进去就行。

```js
// docs/.vuepress/theme/index.js
module.exports = {
  extend: '@vuepress/theme-default'
}
```

因为这个文章是在改了一半的时候开始写的，所以一开始修改的内容就不放在一一介绍了，不过互相不打扰。

#### 修改导航栏为渐变色

我有这个想法是因为我想要把网站的主题设置成渐变色主题，色调绿色为主。所以首先修改的就是导航栏。可以在这个网站 [WebGredients](https://webgradients.com/) 找自己喜欢的渐变色。

##### 修改 Layout.vue

首先找到这个文件 `docs/.vuepress/theme/layouts/Layout.vue` 然后在第八九行左右的位置找到 `Navbar` 标签，在后面添加 `class="my-nav-gre"` 

```html {2}
// docs/.vuepress/theme/layouts/Layout.vue
<Navbar class="my-nav-gre"
  v-if="shouldShowNavbar"
  @toggle-sidebar="toggleSidebar"
/>
```

然后在文件的最后面添加渐变样式

```html {4}
// docs/.vuepress/theme/layouts/Layout.vue
<style scoped>
.my-nav-gre {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
```

其中第四行是我选择的渐变颜色，修改之后可以看到导航栏已经变色，但是后面的文字链接的背景却依然是白色。

![预览](C:\Users\jayzh\Desktop\asset\nav-bar-2.png)

##### 修改 Navlink.vue

从 Chrome 调试工具中可以看到，在类名为 `links` 的 div 标签中把背景声明成了白色，所以我们去相应的文件中修改。找到

```stylus {7}
// docs/.vuepress/theme/components/Navbar.vue
.navbar
  ... 
  .links
    padding-left 1.5rem
    box-sizing border-box
    // background-color white
    white-space nowrap
    ...
```

然后就搞定了。。。（在此之前我修改了最后面的 GitHub 标志以及前面头像的圆角）

![预览](C:\Users\jayzh\Desktop\asset\nav-bar.png)

