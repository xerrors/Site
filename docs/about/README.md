---
title: "关于"
permalink: "about"
search: false
navbar: false
hideLastUpdated: True
hideFooter: True
# layout: About
---

<template>
    <div id="app" class="my-main-container">
        <div class="my-container">
            <el-card v-show="show==0" class="my-card" :body-style="{ padding: '0px' }">
              <div class="my-bg"></div>
              <div style="height: 50px; margin: 0;"></div>
              <a class="my-avatar-link" @click="clickAvatar">
                  <img class="my-avatar" :src="$withBase('/avatar.jpg')">
              </a>
              <h3 style="text-align: center">Angor</h3>
              <br>
              <p>不想学深度学习的前端狗</p>
              <p>不是一个好的 CTF 选手</p>
              <br>
              <div class="my-something">
                  <a href="https://github.com/Xerrors">
                    <img class="my-svg" :src="$withBase('/svg/github.svg')" type="image/svg+xml"/>
                  </a>
                  <a href="mailto:xerrors@163.com">
                    <img class="my-svg" :src="$withBase('/svg/mail.svg')" type="image/svg+xml"/>
                  </a>
                  <a href="https://dev.tencent.com/u/Xerrors">
                    <img class="my-svg" :src="$withBase('/svg/tencent.svg')" type="image/svg+xml"/>
                  </a>
              </div>
          </el-card>
          <el-card v-show="show==1" class="my-card" :body-style="{ padding: '0px' }">
              <div class="my-bg"></div>
              <div style="height: 50px; margin: 0;"></div>
              <a class="my-avatar-link" @click="clickAvatar">
                  <img class="my-avatar" :src="$withBase('/avatar.jpg')">
              </a>
              <h3 style="text-align: center">友链占位 1</h3>
          </el-card>
          <el-card v-show="show==2" class="my-card" :body-style="{ padding: '0px' }">
              <div class="my-bg"></div>
              <div style="height: 50px; margin: 0;"></div>
              <a class="my-avatar-link" @click="clickAvatar">
                  <img class="my-avatar" :src="$withBase('/avatar.jpg')">
              </a>
              <h3 style="text-align: center">友链占位 2</h3>
          </el-card>
          <el-card v-show="show==3" class="my-card" :body-style="{ padding: '0px' }">
              <div class="my-bg"></div>
              <div style="height: 50px; margin: 0;"></div>
              <a class="my-avatar-link" @click="clickAvatar">
                  <img class="my-avatar" :src="$withBase('/avatar.jpg')">
              </a>
              <h3 style="text-align: center">友链占位 3</h3>
          </el-card>
          <div class="my-button-box">
            <el-button class="my-button" v-show="showButton" icon="el-icon-caret-bottom" circle @click="plusOne"></el-button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: 0,
      cardNum: 4,
      showButton: true,
      count: 0
    }
  },
  methods: {
    plusOne() {
        this.show = (this.show + 1) % this.cardNum;
        this.showButton = false;
        setTimeout(() => {
            this.showButton = true;
        }, 1000);
    },
    clickAvatar() {
        this.count += 1;
          if (this.count > 10) {
            this.count = 0;
            this.$confirm('当当当当，恭喜你触发彩蛋，是否查看', 'Eggs', {
            confirmButtonText: '当然看了',
            cancelButtonText: '真无聊~',
            type: 'success',
            center: true
          }).then(() => {
            this.$message({
              type: 'success',
              message: '假装看完了!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
    }
  }
};
</script>

<style scoped>
#app{
    height: 100%
}

html, body{
    width: 100%;
    background-color: #cccccc;
}

h1, h2, h3, p {
    color: #2c3e50;
}

.el-button {
  display: block;
  margin: 0 auto;
}

.my-main-container {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
    width: 100%;
    height: 100%;
}

.my-container {
  margin: 0 auto;
  text-align: center;
}

.my-button-box {
  margin-top: 20px;
}

.my-button {
    animation: showButton 1s forwards;
}

.my-card {
    width: 350px;
    height: 450px;
    margin: 0 auto;
    border: 0px;
    opacity: 0;
    animation: showup 1s forwards;
}

.my-card *{
  display: block;
  margin: 5px auto;
}

.my-bg {
    width: 100%;
    height: 100vh;
    color: #fff;
    margin: 0;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    position: absolute;
    z-index: -1;
}

.my-svg {
  margin: 5px;
  width: 25px; 
  height: 25px;
}

.my-avatar {
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius:50%;
  border: 3px solid #ffffff
}

.my-something {
  margin: 0 auto;
}

.my-something a {
  display: inline-block;
}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@keyframes showup {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes showButton {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>