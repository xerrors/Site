---
title: 动物识别专家系统
permalink: /Animal-Identification-Expert-System
date: 2020-05-11 10:20:17
tag: 
 - blog
 - 算法
 - 交互
categories:
 - 算法
 - 交互
---

<template>
  <h2>条件</h2>
  <div class="item-box">
    <div v-for="(item, ind) in features.slice(0, 20)" :key="ind" 
         :class="computeClass(ind)"
         @click="activate(ind)"> {{ item }}<br>( {{ ind }} )
    </div>
  </div>
  <h2>推论</h2>
  <div class="item-box">
    <div v-for="(item, ind) in features.slice(20)" :key="item" 
         class="active"
         v-if="conclusion[ind]"> {{ item }}<br>( {{ ind+20 }} )
    </div>
  </div>  
  <h2>过程</h2>
  <p v-for="line in process" class="line">{{ line }} </p>
</template>

<script>
export default {
  data() {
    return {
      features: ["有毛","产奶","有羽毛","会飞","会下蛋","吃肉","有犬齿","有爪","眼睛盯前方","有蹄","反刍","黄褐色","有斑点","有黑色条纹","长脖","长腿","不会飞","会游泳","黑白两色","善飞","哺乳类","鸟类","肉食类","蹄类","企鹅","海燕","鸵鸟","斑马","长颈鹿","虎","金钱豹"],
      result: Array(31).fill(false),
      rules: [
      {
        conditions: [0],
        conclusion: 20
      }, {
        conditions: [1],
        conclusion: 20
      }, {
        conditions: [2],
        conclusion: 21
      }, {
        conditions: [3, 4],
        conclusion: 21
      }, {
        conditions: [20, 5],
        conclusion: 22
      }, {
        conditions: [6, 7, 8],
        conclusion: 22
      }, {
        conditions: [20, 8],
        conclusion: 23
      }, {
        conditions: [20, 9],
        conclusion: 23
      }, {
        conditions: [21, 17, 18, 16],
        conclusion: 24
      }, {
        conditions: [21, 19],
        conclusion: 25
      }, {
        conditions: [21, 14, 15, 16],
        conclusion: 26
      }, {
        conditions: [23, 13],
        conclusion: 27
      }, {
        conditions: [23, 14, 15, 12],
        conclusion: 28
      }, {
        conditions: [22, 11, 13],
        conclusion: 29
      }, {
        conditions: [22, 11, 12],
        conclusion: 30
      }],
      process: []
    }
  },
  computed: {
    conclusion () {
      // 条件数组
      return this.result.slice(20)
    },
    condition () {
      // 推论数组
      return this.result.slice(0, 20)
    }
  },
  methods: {
    activate (ind) {
      this.result[ind] = !this.result[ind]
      // 对非用户选择的数据清零
      this.result = this.result.map((value, index) => index >= 20 ? false : value )
      const reducer = (accumulator, currentValue) => accumulator && this.result[currentValue];
      const reduce_word =  (accumulator, currentValue) => accumulator + this.features[currentValue] + '且';
      this.process = []
      for (var item of this.rules) {
        if (item.conditions.reduce(reducer, true)) {
          const word = item.conditions.reduce(reduce_word, '因为').slice(0, -1)
          this.process.push(word + ', 所以可得' + this.features[item.conclusion])
          this.result[item.conclusion] = item.conditions.reduce(reducer, true)
        }
      }
      console.log(this.result)
    },
    computeClass (ind) {
      return this.result[ind] ? 'active': 'inactive'
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-box
  user-select none
  display flex
  flex-wrap wrap
  .active, .inactive
    width 80px
    height 40px
    margin 10px
    font-size 14px
    font-weight 600
    padding 5px
    text-align center
    cursor pointer
    border-radius 2px
    transition all .3s
	  animation: scale-up-tl .4s cubic-bezier(.39,.575,.565,1.000) both
  .active
    background #292525
    color white
  .inactive
    background #f1f2f3
    color black
.line
  font-size 14px
  font-weight 600
  background #f3f4f5
  padding 5px 1rem
  border-radius 3px
  transition all .2s
  &:hover
    padding-left 1.5rem

@keyframes scale-up-tl {
  0% {
    transform: scale(0.5);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 0%;
  }
}
</style>

## 1. 简单介绍

演示程序见 [个人博客](https://www.xerrors.fun/Animal-Identification-Expert-System/)

在线编辑此程序  [Codepen](https://codepen.io/xerrors/pen/abvGeqy) 

在这个系统中，用户可以输入动物的特征，然后系统根据这些特征回答是什么动物。实际上系统内部，有若干个规则，系统根据用户的输入以及系统中已经存在的规则进行判断，给出最终结果。维基百科对 [专家系统](https://zh.wikipedia.org/wiki/%E4%B8%93%E5%AE%B6%E7%B3%BB%E7%BB%9F) 的解释。专家系统= [知识库](https://zh.wikipedia.org/wiki/知识库) + [推理机](https://zh.wikipedia.org/wiki/推理机) ，因此专家系统也被称为基于知识的系统。这里所介绍的动物识别专家系统实际上就是一个**基于规则的前向链专家系统**（Forward-Chain Rule-Based Expert System）

我不像在非专业的文章里面出现很多的专有词汇，所以整篇文章会偏向于口语化，适合课后用来理解。

R1：如果**有毛**且**有蹄**，可推出**食草动物**；

R2：如果**长脖子**且是**食草动物**，可推出**长颈鹿**；

![](http://src.xerrors.fun/img20200511154255.png)

## 2. 知识库

### 保存规则

由于在线演示需要使用 JavaScript 作为编程语言，所以这里就是用 JavaScript 来创建知识库；这里的知识库主要需要保存规则；对于 C，C++ 等变成语言，可以使用结构体的形式来保存规则。

```c
char *feature[]={"有毛","产奶","有羽毛","会飞","会下蛋","吃肉","有犬齿","有爪","眼睛盯前方","有蹄","反刍","黄褐色","有斑点","有黑色条纹","长脖","长腿","不会飞","会游泳","黑白两色","善飞","哺乳类","鸟类","肉食类","蹄类","企鹅","海燕","鸵鸟","斑马","长颈鹿","虎","金钱豹"};

// 创建一个结构体
typedef struct  
{
	int conditions[5]; // 条件
    int conclusion;    // 结论
}Rule;

// 规则
Rule rule[15]={
	{{0,-1},20}, // 若有毛，则是哺乳类
	{{1,-1},20},
	{{2,-1},21},
	{{3,4,-1},21},
	{{20,5,-1},22},
	{{6,7,8,-1},22},
	{{20,8,-1},23},
	{{20,9,-1},23},
	{{21,17,18,16,-1},24},
	{{21,19,-1},25},
	{{21,14,15,16,-1},26},
	{{23,13,-1},27},
	{{23,14,15,12,-1},28},
	{{22,11,13,-1},29},
	{{22,11,12,-1},30}
};
```

对于 JavaScript 而言，可以使用对象来保存这些：

```javascript
features: ["有毛","产奶","有羽毛","会飞","会下蛋","吃肉","有犬齿","有爪","眼睛盯前方","有蹄","反刍","黄褐色","有斑点","有黑色条纹","长脖","长腿","不会飞","会游泳","黑白两色","善飞","哺乳类","鸟类","肉食类","蹄类","企鹅","海燕","鸵鸟","斑马","长颈鹿","虎","金钱豹"],
result: Array(31).fill(false), // 表示推理的结果
rules: [
    {
        conditions: [0],
        conclusion: 20
    }, {
        conditions: [1],
        conclusion: 20
    }, 
    ……
    {
    conditions: [22, 11, 12],
    conclusion: 30
}],
```

注意这里的 Features 其实是 31 个概念，有毛、产奶等；从上面的规则中也可以看出，其中**前二十个**（一直到善飞）都是用户的输入，而 "哺乳类","鸟类","肉食类","蹄类" 这**四个是中间推导结果**，**最后七个**动物则是最终的结论。

## 2. 推理机

### 规则的序列

推理机其实就是一个用来判断的函数，可行的一个办法就是对所有规则进行遍历，同时更新现在已知的结果。但是这里存在的一个问题，比如有下面两条个规则：

1. 如果 长脖子 且 是食草动物，可推出长颈鹿
2. 如果 有毛 且 有蹄，可推出食草动物

在遍历规则的时候，第一条规则的条件中，食草动物并没有满足条件，所以不能推出是长颈鹿；当遍历到第二条规则的时候虽然已经推导出是食草动物，但是由于已经遍历完成，所以无法得到最终结论。所以对于所有的规则，应当满足**拓扑序列**。这里所有的规则正好是满足拓扑序列的。

![图示](http://src.xerrors.fun/img20200511115652.png)

### 实现逻辑

先看一下预期的效果：

**HTML 代码：**（vue中的）不适用 Vue 做可视化的同学可以忽略代码，直接看后面的图片；

```vue
<template>
  <h2>条件</h2>
  <div class="item-box">
    <div v-for="(item, ind) in features.slice(0, 20)" :key="ind" 
         :class="computeClass(ind)"
         @click="activate(ind)"> {{ item }}<br>( {{ ind }} )
    </div>
  </div>
  <h2>推论</h2>
  <div class="item-box">
    <div v-for="(item, ind) in features.slice(20)" :key="item" 
         class="active"
         v-if="conclusion[ind]"> {{ item }}<br>( {{ ind+20 }} )
    </div>
  </div>  
  <h2>过程</h2>
  <p v-for="line in process" class="line">{{ line }} </p>
</template>
```

![](http://src.xerrors.fun/img20200511162235.png)

由于前二十个事实（如：有毛、产奶）是用户的输入，所有我放在第一块条件里面，供用户点击输入，第二块的推论则是由上面的事实所得到的结果。最后一栏则是模拟专家的分析过程。

### 推理机的实现

当用户点击上面的事实的时候我会调用判断程序，判断程序的逻辑很简单，当用点击某个事实的时候，给那个事实**置 1** 或者**置 0** ，然后将之前的推论全部清空，因为当用户将某个事实置为0之后，由这个事实推导出的结论也应该置0，所以需要删除之前所有的推论，重新推导。

然后是借用 JavaScript 数组的 reduce 特性**遍历所有规则中的条件**以及**保存推导过程**。

```javascript
activate (ind) {
  this.result[ind] = !this.result[ind]
  // 对非用户选择的数据清零
  this.result = this.result.map((value, index) => index >= 20 ? false : value )
  const reducer = (accumulator, currentValue) => accumulator && this.result[currentValue];
  const reduce_word =  (accumulator, currentValue) => accumulator + this.features[currentValue] + '且';
  this.process = []
  for (var item of this.rules) {
    if (item.conditions.reduce(reducer, true)) {
      const word = item.conditions.reduce(reduce_word, '因为').slice(0, -1)
      this.process.push(word + ', 所以可得' + this.features[item.conclusion])
      this.result[item.conclusion] = item.conditions.reduce(reducer, true)
    }
  }
  console.log(this.result)
},
```

## 总结及参考链接

下面是个人的看法，从某种角度上感觉这个专家系统很落后，很没有用处，不就是各种判断吗，没什么了不起的。但是仔细想一想，人的大脑再怎么厉害，不也就是根据以往的经验来对当前的情况进行判断的吗。之所以感觉上面的专家系统太笨，是因为这里的知识库以及规则太少了，历史上还有很多成功的专家系统的案例的。

[1] [专家系统 - 维基百科]([https://zh.wikipedia.org/wiki/%E4%B8%93%E5%AE%B6%E7%B3%BB%E7%BB%9F](https://zh.wikipedia.org/wiki/专家系统))