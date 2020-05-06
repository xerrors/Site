---
title: A* 算法解决八数码问题交互演示
permalink: /A-star-demo
date: 2020-05-06 11:27:45
tag: 
 - blog
 - 算法
 - 交互
categories:
 - 算法
 - 交互
---

<template>
  <div class="main">
    <el-button @click="start" v-loading="loading" :disabled='needreset'>开始计算</el-button>
    <el-button @click="demoAnimate" :disabled='!needreset'>动画演示</el-button>
    <el-button @click="reset">重置</el-button><br/>
    <p>{{ count }}次检索 - {{ node ? node.chain.length : '0' }} 步</p>
    <el-input v-model='from' class='map-input'></el-input>
    <el-input v-model='to' class='map-input'></el-input>
    <el-button @click="confirm">确定</el-button>
    <div class='map'>
      <div :class="{ item: true, end: i == 9 }" v-for="i in map"> {{ i }}</div>
    </div>
  </div>
</template>

<script>
class Node {
    constructor(path, pre_chain, to) {
        this.path = path;
        this.index = path.indexOf(9);
        this.chain = Array.from(pre_chain)
        this.chain.push(this.calcId(path))
        this.to = to
    }

    calcValue() {
        let sum = new Number();
        this.path.map((i, j) => {
            sum += Math.abs(Math.floor((i - 1) / 3) - Math.floor((this.to[j] - 1) / 3)) + 
                   Math.abs((i - 1) % 3 - (this.to[j] - 1) % 3);
        });
        return sum;
    }

    calcId(path) {
        let id = '';
        path.map(item => {
            id += item
        });
        return id;
    }

    exchange(ch) {
        let new_path = Array.from(this.path)
        var temp = new_path[this.index];
        new_path[this.index] = new_path[ch];
        new_path[ch] = temp;
        if (!cantor(new_path)) {
            return false
        }
        // console.log(new_path)
        return new_path;
    }

    moveUp() {
        if (this.index < 3) {
            return false
        }
        return this.exchange(this.index - 3)
    }

    moveDown() {
        if (this.index > 5) {
            return false
        }
        return this.exchange(this.index + 3)
    }

    moveLeft() {
        if (this.index % 3 == 0) {
            return false
        }
        return this.exchange(this.index - 1)
    }

    moveRight() {
        if (this.index % 3 == 2) {
            return false
        }
        return this.exchange(this.index + 1)
    }
}
var state = Array(362880).fill(false)
function cantor(path) {
    const fac = [1, 1, 2, 6, 24, 120, 720, 5040, 40320]
    let sum = 0;
    for (var i = 0; i < 9; i++) {
        let t = 0;
        for (var j = i + 1; j < 9; j++) {
            if (path[j] < path[i]) {
                t++;
            }
        }
        sum += t * fac[8 - i];
    }
    if (state[sum] == true) {
        return false;
    }
    else {
        state[sum] = true;
        return true;
    }
}

export default {
  data() {
    return {
      node: '',
      loading: false,
      count: 0,
      from : '234159768',
      to : '123456789',
      map: '',
      needreset: false
    }
  },
  methods: {
    start () {
      this.loading = true
      let temp_path
      
      var H = [new Node(this.from.split('').map(item => eval(item)), [], this.to)]
      this.node = H.shift()
      this.count = 0
      while (this.node.calcValue() != 0) {
          if (temp_path = this.node.moveUp()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveDown()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveLeft()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveRight()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          H.sort((i, j) => {
              return i.calcValue() - j.calcValue()
          })
          this.node = H.shift()
          this.count += 1
          if (this.count > 10000 || !this.node) {
              console.log('Can not found!')
              break
          }
      }
      this.needreset = true
      this.loading = false
    },
    demoAnimate () {
      if (!this.node) {
        this.$message('请先计算')
        return
      }
      var i = 0
      this.intervalID = setInterval(() => {
        if (i >= this.node.chain.length) {
          window.clearInterval(this.intervalID)
        } else {
          this.map = this.node.chain[i]
        }
        i++
      },200)
    },
    reset () {
      this.needreset = false
      this.node = ''
      this.count = 0
      window.clearInterval(this.intervalID)
      this.map = this.from.split('').map(item => eval(item))
      state = Array(362880).fill(false)
    },
    confirm () {
      // 判断格式是否正确
      if(this.from.length !== 9 || this.to.length !== 9) {
        this.$message('请检查输入')
      } else {
        this.reset()
      }
    }
  },
  mounted () {
    this.map = this.from
  }
}
</script>

<style lang="stylus" scoped>
.main
  width 500px
  text-align center
  margin 0 auto
  padding-top 50px

.map-input
  display inline-block
  width 110px
 
.map
  width 312px
  height 312px
  border 2px solid black
  display flex
  flex-wrap wrap
  margin 30px auto
  .item
    height 100px
    width 100px
    font-size 30px
    text-align center
    line-height 100px
    background #80fff5
    border 2px solid black
  .end
    background #80d4ff
</style>

## 1. 此页面源码

### HTML

```html
<template>
  <div class="main">
    <el-button @click="start" v-loading="loading" :disabled='needreset'>开始计算</el-button>
    <el-button @click="demoAnimate" :disabled='!needreset'>动画演示</el-button>
    <el-button @click="reset">重置</el-button><br/>
    <p>{{ count }}次检索 - {{ node ? node.chain.length : '0' }} 步</p>
    <el-input v-model='from' class='map-input'></el-input>
    <el-input v-model='to' class='map-input'></el-input>
    <el-button @click="confirm">确定</el-button>
    <div class='map'>
      <div :class="{ item: true, end: i == 9 }" v-for="i in map"> {{ i }}</div>
    </div>
  </div>
</template>
```

### JavaScript

```js
class Node {
    constructor(path, pre_chain, to) {
        this.path = path;
        this.index = path.indexOf(9);
        this.chain = Array.from(pre_chain)
        this.chain.push(this.calcId(path))
        this.to = to
    }

    calcValue() {
        let sum = new Number();
        this.path.map((i, j) => {
            sum += Math.abs(Math.floor((i - 1) / 3) - Math.floor((this.to[j] - 1) / 3)) + 
                   Math.abs((i - 1) % 3 - (this.to[j] - 1) % 3);
        });
        return sum;
    }

    calcId(path) {
        let id = '';
        path.map(item => {
            id += item
        });
        return id;
    }

    exchange(ch) {
        let new_path = Array.from(this.path)
        var temp = new_path[this.index];
        new_path[this.index] = new_path[ch];
        new_path[ch] = temp;
        if (!cantor(new_path)) {
            return false
        }
        // console.log(new_path)
        return new_path;
    }

    moveUp() {
        if (this.index < 3) {
            return false
        }
        return this.exchange(this.index - 3)
    }

    moveDown() {
        if (this.index > 5) {
            return false
        }
        return this.exchange(this.index + 3)
    }

    moveLeft() {
        if (this.index % 3 == 0) {
            return false
        }
        return this.exchange(this.index - 1)
    }

    moveRight() {
        if (this.index % 3 == 2) {
            return false
        }
        return this.exchange(this.index + 1)
    }
}
var state = Array(362880).fill(false)
function cantor(path) {
    const fac = [1, 1, 2, 6, 24, 120, 720, 5040, 40320]
    let sum = 0;
    for (var i = 0; i < 9; i++) {
        let t = 0;
        for (var j = i + 1; j < 9; j++) {
            if (path[j] < path[i]) {
                t++;
            }
        }
        sum += t * fac[8 - i];
    }
    if (state[sum] == true) {
        return false;
    }
    else {
        state[sum] = true;
        return true;
    }
}

export default {
  data() {
    return {
      node: '',
      loading: false,
      count: 0,
      from : '234159768',
      to : '123456789',
      map: '',
      needreset: false
    }
  },
  methods: {
    start () {
      this.loading = true
      let temp_path
      
      var H = [new Node(this.from.split('').map(item => eval(item)), [], this.to)]
      this.node = H.shift()
      this.count = 0
      while (this.node.calcValue() != 0) {
          if (temp_path = this.node.moveUp()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveDown()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveLeft()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          if (temp_path = this.node.moveRight()) { H.push(new Node(temp_path, this.node.chain, this.to)) }
          H.sort((i, j) => {
              return i.calcValue() - j.calcValue()
          })
          this.node = H.shift()
          this.count += 1
          if (this.count > 10000 || !this.node) {
              console.log('Can not found!')
              break
          }
      }
      this.needreset = true
      this.loading = false
    },
    demoAnimate () {
      if (!this.node) {
        this.$message('请先计算')
        return
      }
      var i = 0
      this.intervalID = setInterval(() => {
        if (i >= this.node.chain.length) {
          window.clearInterval(this.intervalID)
        } else {
          this.map = this.node.chain[i]
        }
        i++
      },200)
    },
    reset () {
      this.needreset = false
      this.node = ''
      this.count = 0
      window.clearInterval(this.intervalID)
      this.map = this.from.split('').map(item => eval(item))
      state = Array(362880).fill(false)
    },
    confirm () {
      // 判断格式是否正确
      if(this.from.length !== 9 || this.to.length !== 9) {
        this.$message('请检查输入')
      } else {
        this.reset()
      }
    }
  },
  mounted () {
    this.map = this.from
  }
}
```

### CSS

```stylus
.main
  width 500px
  text-align center
  margin 0 auto
  padding-top 50px

.map-input
  display inline-block
  width 110px
 
.map
  width 312px
  height 312px
  border 2px solid black
  display flex
  flex-wrap wrap
  margin 30px auto
  .item
    height 100px
    width 100px
    font-size 30px
    text-align center
    line-height 100px
    background #80fff5
    border 2px solid black
  .end
    background #80d4ff
```

## 参考资料

1. [人工智能中A＊算法及对重排九宫问题实现](http://d.oldg.wanfangdata.com.cn/Periodical_kjqbkfyjj200735089.aspx)
2. [JavaSript 类 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
3. [康托展开判重](https://blog.csdn.net/qq_40679299/article/details/81078114)