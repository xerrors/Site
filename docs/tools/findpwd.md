---
permalink: '/tools/findpwd'
hideLastUpdated: True
---
<template>
  <div style='margin-top: 100px;'>
    <el-image class='my-title-img'
      :src="$withBase('/ills/password.svg')"
      draggable="false"></el-image>
    <br>
    <br>
    <el-row :gutter="20">
      <!-- <el-col :span="10"><el-input placeholder="域名 ex: QQ" v-model="domain" clearable></el-input></el-col> -->
      <el-col :span="10">
        <el-autocomplete
          class="my-domain-select"
          v-model="domain"
          :fetch-suggestions="querySearch"
          placeholder="请输入域名"
          @select="handleSelect"
        ></el-autocomplete></el-col>
      <el-col :span="10"><el-input placeholder="密钥" v-model="serial" show-password></el-input></el-col>
      <el-col :span="4"><el-button @click='calc' icon="el-icon-search" ></el-button></el-col>
    </el-row>
    <br>
    <el-divider>
      <el-tooltip content="点击复制" placement="bottom" effect="light">
        <button class="cpbtn" ref="copyButton" :data-clipboard-text="result" type="text">{{ result }}</button>
      </el-tooltip>
    </el-divider>
    <el-collapse>
      <el-collapse-item title="关于">
        <p>密码长度是恒定的 16 位，且包含特殊字符，如果部分平台不支持这个长度，就各取所需。</p>
        <p>密钥请妥善保管，加密算法公开。</p>
        <p>密码根据密钥本地生成，不涉及数据上传，平台不保存密码。</p>
      </el-collapse-item>
    </el-collapse>
  </div>
  <!-- <el-input id="copyInput" readonly v-model="result"></el-input>
  <el-button ref="copyButton" data-clipboard-target="copyInput">复制</el-button> -->
</template>




<style>
.my-title-img {
  width: 20rem; 
  margin: 0 auto;
  display: block;
}
.my-domain-select {
  width: 100%;
}
.cpbtn {
  border: none;
  background: none;
  cursor: pointer;
  color: #46bd87;
}
</style>

<script>

import md5 from 'js-md5'
import Clipboard from 'clipboard';

export default {
  data() {
    return {
      domain: '',
      serial: '',
      result: '密码'
    }
  },

  methods: {
    /*
    Python 脚本
    a = ["QQ", "Google", "weixin", "163", "bilibili", "weibo", "outlook", "github", "tencent", "iCloud "]
    for i in a:
        print('{ "value": "', i,'" },', sep="")
    */

    querySearch(queryString ,cb) {
      cb([
        { "value": "QQ" },
        { "value": "Google" },
        { "value": "weixin" },
        { "value": "163" },
        { "value": "bilibili" },
        { "value": "baidu" },
        { "value": "weibo" },
        { "value": "outlook" },
        { "value": "github" },
        { "value": "tencent" },
        { "value": "iCloud " },
        { "value": "jd" },
        { "value": "aliyun" },
        { "value": "zhihu" }
      ]);
    },
    
    calc() {
      const dict = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789=&+#%-';
      var domain = this.domain.toUpperCase();
      var result = '';

      if (this.serial.length < 6) {
        this.$message.error('密钥长度过短');
        result = '';
      }else {
        var md5Serial = md5(domain + this.serial);
        var frontFixed = []
        frontFixed.push(dict.slice(0, 25)[eval("0x" + md5Serial.slice(0, 2)) % 25])
        frontFixed.push(dict.slice(25, 50)[eval("0x" + md5Serial.slice(2, 4)) % 25])
        frontFixed.push(dict.slice(50, 58)[eval("0x" + md5Serial.slice(4, 6)) % 8])
        frontFixed.push(dict.slice(58, 64)[eval("0x" + md5Serial.slice(6, 8)) % 6])

        for (var i = 0; i < 4; i++) {
          result += frontFixed.splice(eval("0x" + md5Serial[i*2]) % (4 - i), 1)
        }

        for (var i = 4; i < 16; i++) {
          result += dict[eval("0x" + md5Serial.slice(2*i, 2*i + 2)) % 64]
        }

        this.$notify({
          title: '成功',
          message: '密码已经成功生成',
          type: 'success'
        });
      }

      this.result = result;
    },

    // 初始化复制插件    
    initClipboard() {      
      const clipboard = new Clipboard(this.$refs.copyButton);      
      clipboard.on('success', (e) => {        
        this.$notify({
          title: '成功',
          message: '密码复制成功',
          type: 'success'
        });    
      });      
      clipboard.on('error', (e) => {    
        this.$message.error('复制失败，请再次尝试');
      });
    },

    handleSelect() {
      console.log("Yeah");
    }
  },

  mounted() {    
    this.initClipboard();  
  }
}
</script>