---
title: "前端项目中所遇到的一些问题集合"
date: 2020-02-29 21:03:13
permalink: /problems-and-solutions
tag: 
 - blog
 - 前端
categories:
 - 前端
 - Note
---

开发中会遇到的问题集合，有的比较高级，有的超级基础，全部记下来了。。说到底还是基础不扎实。

## Vue 相关

### 配置代理转发

````js
module.exports = {
  devServer: {
    // 这个参数会在每次编译完成之后自动打开浏览器
    open: true,
    host: 'localhost',
    port: 8080,
    https: false, // 是否支持 https
    hotOnly: true, // 热更新（似乎没有用）
    /*
     * 以上的ip和端口是我们本机的;也就是配置之后你在浏览器里面所看到
     * 的目的 IP 地址以及端口是你的主机，也就是跨域转发的结果。
     */
      
    // 下面为需要跨域的
    proxy: { // 配置跨域
      '/api': {
        // 这里后台的地址模拟的;应该填写你们真实的后台接口
        target: 'http://xxx.xxx.xxx.xxx/v2', 
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''// 请求的时候使用这个api就可以
        }
      }
    }
  }
}
````

PS：这里有一个很大的缺点，当你的`api`或者其他的一些配置更改之后需要重新编译，我也不知道为什么，但是事实如此，折腾了很久才知道。

> 这个的参考源我之前保存的被我弄丢了，不过网上一搜一大堆，也就不存在侵不侵权了吧。



### 问题描述

在使用`state`里面的数据的时候，无论是在 `data`里面使用，还是在`mounted`里面使用都会出现无法获取`state`里面数据的情况。

```js
data () {
  return {
    form: {
      avatar: this.avatar,
      account: this.name,
      collection: {
        way: '支付宝',
        account: '17685673489'
      },
      tel: this.tel
    }
  }
},
computed: {
  ...mapGetters(['avatar', 'name', 'tel'])
},
mounted () {
  this.form.avatar = this.$store.state.avatar
  this.form.account = this.$store.state.name
  this.form.tel = this.$store.state.tel
},
```

导致最终渲染结果为空。

### 原因分析

> 参考：[vuex中的state在组件中如何监听@掘金](https://juejin.im/post/5923a3bf2f301e006b272bed)
>
> 原因是因为 `vuex`中的`state`会在某一个组件中使用，而这个状态的初始化是通过异步加载完成的。组件在渲染过程中，获取的`state`状态为空。也就是说组件在异步完成之前就已经完成渲染了，导致组件的数据没有来得及渲染。

简单来说就是当`data`在渲染的时候，`state`还是空的，所以没法获得我们想要的值。

### 解决办法

第一种解决办法，完美解决获取数据的问题。

```js
computed: {
  ...mapGetters(['avatar', 'name', 'tel']),
  form () {
    return {
      avatar: this.avatar,
      account: this.name,
      collection: {
        way: '支付宝',
        account: '17685673489'
      },
      tel: this.tel
    }
  }
}
```

这样虽然能够解决获取数据的问题，但是由于我的使用场景是作用与表单，需要可以修改；如果采用上面所述方法的话会导致表单里面的数据无法被修改，达不到我的目的。当然，对于只需要获取数据的情况这是一个很好的解决办法。

第二种解决办法，我需要的方式是能够在页面加载完成之后获取一次数据，同时我后面还可以修改。

好吧，我没找到好的办法，最后我采用的办法是使用`state`里面的数据显示在`input`上面的`placeholder`上面，完美解决问题。

## 基础问题

### JavaScript 相关

很多时候就是记不住，还是保存一下方便以后来查

#### 1. 如何遍历 JS 对象

我有一个对象，长这样：

```json
{
  "code": 1,
  "info": {
      "手机状态": ["正常进入桌面","无法开机或者进入桌面","全新未拆封"],
      "内存、存储容量": ["256G","128G","64G","32G"],
      "账号可否退出": ["可正常退出","不可退出"],
      "磨损程度": ["外壳无瑕疵","细微划痕无磕碰","磕碰掉漆、边框磨损","外壳裂缝、变形"],
      "屏幕磨损": ["完美使用无划痕","细微划痕","划伤、脱胶、小缺角","碎裂、边角破损"],
      "屏幕显示": ["完美无瑕疵","显示色差，或轻微泛黄/亮坏点","显示烧屏，或有透图/透字","显示漏液，或闪烁/横竖线/花屏"],
      "维修状况": ["无维修情况","屏幕维修","主板维修或功能故障","屏幕和主板皆有维修"]
  }
}
```

我还从来没写过这样的数据，但是既然有了也没办法啊，试着遍历一下呗！

> 摘自MDN
>
> 下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。

```js
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

> 摘自MDN，[查看示例](https://interactive-examples.mdn.mozilla.net/pages/js/object-entries.html)
>
> 还可以使用`Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in`循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```