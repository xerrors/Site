---
title: 零流量
permalink: /ejiangnan
hideLastUpdated: True
---
<template>
  <div>
    <el-input v-model="id"></el-input>
    <el-button @click="getNow">领取</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    getNow() {
      for(var i=0; i<1000; i++) {
        axios.get('https://e.jiangnan.edu.cn/jnapp/action/invokeMobile/invoke?callback=jQuery22005484830849770088_1588550339143&inStrParams={%27e_account%27:%27'+ this.id + '%27,%27serviceId%27:%271100015%27}&_=1588550339144')
        .then(res => {
          console.log(res);
        })
      }
    }
  }
}
</script>

