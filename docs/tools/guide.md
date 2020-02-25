---
title: "导航"
permalink: "guide"
hideLastUpdated: True
---

<template>
  <div class="my-guide-container">
    <loading v-if='loading'></loading>
    <el-tabs v-else v-model="activeName" type="card">
      <!-- 不同的面板 -->
      <el-tab-pane v-for="(tab, ind1) in tabs" :key="ind1" :label="tab.label" :name="tab.name">
        <div v-for="(myClass, ind2) in tab.classes" :key="ind2">
          <!-- 标题 -->
          <div class="my-class-title" @click="addLink(ind1, ind2)">
            {{ myClass.title }}
          </div>
          <!-- 链接小卡片 -->
          <div class="my-classes-box">
            <a :href="link.link" v-for="(link, ind3) in myClass.links" :key="ind3" target="_blank">
              <div class="my-link-box">
                <div style="margin-bottom: 5px;">{{ link.name }}</div>
                <div style="font-size: smaller; color: #8f8f8f; text-overflow: ellipsis;">{{ link.description }}</div>
              </div>
            </a>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Loading from '@theme/user-components/Loading.vue'
import axios from 'axios'
export default {
  components: { Loading },
  data() {
    return {
      loading: true,
      activeName: 'one',
      tabs: [],
      count: 0
    };
  },

  methods: {
    addLink(ind1, ind2) {
      if (this.count++ < 10) {
        return
      }
      this.count = 0
      var tmplink = {
        ind1: ind1,
        ind2: ind2,
        link: {},
        token: ''
      };
      this.$prompt('输入链接地址', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        tmplink.link.link = value;
        this.$prompt('请输入站点名称', '名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          tmplink.link.name = value;
          this.$prompt('请输入站点描述', '描述', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            tmplink.link.description = value;
            this.$prompt('先告诉我 Token 是啥😇', '提示', {
              confirmButtonText: 'Yaeh',
              cancelButtonText: 'Nope',
              inputPattern: /^[A-Za-z0-9]{5,13}$/,
              inputErrorMessage: 'Token 格式不正确😕'
            }).then(({ value }) => {
              tmplink.token = value;
              this.upload(tmplink);
              console.log(tmplink);
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '🥱不告诉算了。。。'
              });       
            });
          })
        })
      });
    },

    getGuides() {
      axios.get('https://www.xerrors.fun:8001/api/guide/getData')
      .then(res=>{
        // console.log(res);
        this.tabs = res.data.tabs;
        this.loading = false
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    upload(data) {
      axios({
            method: 'post',
            url: 'https://www.xerrors.fun:8001/api/guide/upload',
            data: data
      }).then(res=>{
        // console.log(res)
        // 本地改变数据
        if (res.data.code != 200 ) {
          this.$message.error(res.data.message);
        } else {
          this.getGuides();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
  },

  mounted() {
    this.getGuides();
  }
};
</script>

<style scoped>
.my-classes-box {
  padding: 1rem;
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

.my-class-title {
    width: 4rem;
    padding: .4rem 1rem;
    margin: 1rem 0 0;
    font-weight: 600;
    background: linear-gradient(0deg, rgba(228, 228, 228, 0.5) 40%,#fff 0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.my-link-box {
  width: 8.3rem;
  height: 4rem;
  margin: 0.4rem;
  background-color: #fcfcfc;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition:all 0.2s;
}

.my-link-box:hover {
  transform: scale(1.05);
}
</style>

<style>
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: #fff;
  /* color: red; */
  font-weight: 600;
}
</style>
