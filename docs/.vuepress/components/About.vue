<template>
    <div id="app" class="my-main-container">
        <el-button icon="el-icon-caret-left" circle></el-button>
        <el-card v-if="show==0" class="my-card" :body-style="{ padding: '0px' }">
            <el-image class="my-bg" :src="$withBase('/avatar.jpg')"></el-image>
            <img class="my-avatar" :src="$withBase('/avatar.jpg')">
            <p style="text-align: center"><strong>Angor 0</strong></p>
        </el-card>
        <el-card v-if="show==1" class="my-card" :body-style="{ padding: '0px' }">
            <el-image class="my-bg" :src="$withBase('/avatar.jpg')"></el-image>
            <img class="my-avatar" :src="$withBase('/avatar.jpg')">
            <p style="text-align: center"><strong>Angor 1</strong></p>
        </el-card>
        <el-card v-if="show==2" class="my-card" :body-style="{ padding: '0px' }">
            <el-image class="my-bg" :src="$withBase('/avatar.jpg')"></el-image>
            <img class="my-avatar" :src="$withBase('/avatar.jpg')">
            <p style="text-align: center"><strong>Angor 2</strong></p>
        </el-card>
        <el-button icon="el-icon-caret-right" circle></el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: 1
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
    height: 100%;
}

/* el-button {
  display: block;
} */

.my-main-container {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
    width: 100%;
    height: 100%;
}

.my-card {
    width: 350px;
    height: 450px;
    margin: 0 auto;
    animation: showup 1s forwards;
}

.my-bg {
  height: 150px;
}

.my-avatar {
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  margin: -50px auto 0 auto;
  border-radius:50%;
  border: 3px solid #ffffff
}
@keyframes showup {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>