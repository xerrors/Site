<template>
    <div class="my-main-container">
        <div class="my-container">
          <el-card v-show="show==0" class="my-card" :body-style="{ padding: '0px' }">
              <div class="my-bg"></div>
              <div style="height: 50px; margin: 0;"></div>
              <a 
                class="my-avatar-link" 
                @click="clickAvatar"
                :class="{ 'my-rotate': canRotate }"
                >
                  <img class="my-avatar" :src="$withBase('/avatar.jpg')">
              </a>
              <div class="my-title" style="text-align: center">Angor</div>
              <br>
              <p>📚大三本科在读</p>
              <p>💻计算机科学与技术专业</p>
              <br>
              <p>
                <img class="my-svg" :src="$withBase('/svg/quote-left.svg')" type="image/svg+xml"/>
                  不想学深度学习的前端狗
                <img class="my-svg" :src="$withBase('/svg/quote-right.svg')" type="image/svg+xml"/>
              </p>
              <p>
                <img class="my-svg" :src="$withBase('/svg/quote-left.svg')" type="image/svg+xml"/>
                  不是一个好的 CTF 选手
                <img class="my-svg" :src="$withBase('/svg/quote-right.svg')" type="image/svg+xml"/>
              </p>
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
          <div class="my-button-box">
            <el-button 
              class="my-button" 
              v-show="showButton" 
              icon="el-icon-caret-bottom" 
              circle @click="plusOne"
              ></el-button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: 0,
      cardNum: 1,
      showButton: true,
      count: 0,
      canRotate: false
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
            this.canRotate = true;
          }
    }
  }
};
</script>

<style scoped>
.my-main-container {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center;/*指定垂直居中*/
    width: 100%;
    height: 100vh;
    background:url(../public/dark.png) #444
}

h1, h2, h3, p {
    color: #eee;
}
.my-title {
  color: #eee;
  font-size: 2.5rem;
}

.my-button {
  animation: showbtn 1s infinite alternate; 
  display: block;
  margin: 0 auto;
  background: inherit;
  border-width: 0;
}

.my-button:hover{
  border-width: 2px;
}

.my-button-box {
  margin-top: 2rem;
  height: 3rem;
}

.my-container {
  margin: 0 auto;
  text-align: center;
}

.my-card {
    width: 370px;
    height: 600px;
    margin: 0 auto;
    border: 0px;
    border-radius: 1rem;
    opacity: 0;
    animation: showup 1s forwards;
}

.my-card *{
  display: block;
  margin: 5px auto;
}

.my-bg {
    width: 100%;
    height: 100%;
    color: #fff;
    margin: 0;
    background: linear-gradient(-45deg, #833923, #9e2b57, #156683, #157c64);
    background-size: 400% 400%;
    animation: gradientBG 8s ease infinite;
    position: absolute;
    z-index: -1;
}

.my-svg {
  margin: 5px;
  width: 25px; 
  height: 25px;
  display: inline-block;
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

.my-rotate {
  animation: myrotate linear 2s infinite;
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
    transform: translateY(6rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes showbtn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes myrotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>