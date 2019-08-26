---
title: "导航"
permalink: "guide"
hideLastUpdated: True
---

<template>
  <div class="my-guide-container">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name">
        <div v-for="myClass in tab.classes">
          <h3>{{ myClass.title }}</h3>
          <div class="my-classes-box">
            <a :href="link.link" v-for="link in myClass.links" target="_blank">
              <div class="my-link-box">
                <span>{{ link.name }}</span>
                <span style="font-size: small;">{{ link.description }}</span>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'

const fs = require('fs');
export default {
  data() {
    return {
      activeName: 'first',
      tabs: []
    };
  },

  methods: {
    getTabs() {
      axios.get('https://116.62.110.131:8001/api/guide/getData')
      .then(res=>{
        this.tabs = res.data.tabs;
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },

  mounted() {
    this.getTabs();
  }
};
</script>

<style scoped>
.my-classes-box {
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

.my-link-box{
  width: 8rem;
  height: 4rem;
  margin: 1.4rem;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.my-link-box:hover {
  background: #a3f78c20
}
</style>