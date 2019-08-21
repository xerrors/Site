---
permalink: '/findpwd'
hideLastUpdated: True
---
<template>
  <div style='margin-top: 100px;'>
    <el-image class='my-title-img'
      :src="$withBase('/bank.png')"></el-image>
    <br>
    <br>
    <el-row :gutter="20">
      <!-- <el-col :span="10"><el-input placeholder="域名 ex: QQ" v-model="domain" clearable></el-input></el-col> -->
      <el-col :span="10">
        <el-autocomplete
          class="inline-input"
          v-model="domain"
          :fetch-suggestions="querySearch"
          placeholder="请输入域名"
          @select="handleSelect"
        ></el-autocomplete></el-col>
      <el-col :span="10"><el-input placeholder="密钥" v-model="serial" show-password></el-input></el-col>
      <el-col :span="4"><el-button @click='calc' icon="el-icon-search" ></el-button></el-col>
    </el-row>
    <br>
    <el-divider>{{ result }}</el-divider>
    <p>密码长度时恒定的 16 位，如果部分平台不支持这个长度，就各取所需。</p>
    <p>密钥请妥善保管，加密算法公开。</p>
    <p>密码根据密钥本地生成，不涉及数据上传，平台也不保存密码。</p>
  </div>
</template>



<style>
.my-title-img {
  width: 100px; 
  height: 100px; 
  margin: 0 auto;
  display: block;
}
</style>

<script>

import md5 from 'js-md5'

export default {
  data() {
    return {
      domain: '',
      serial: '',
      result: ''
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

    handleSelect(item) {
      console.log(item.value);
    }
  }
}
</script>