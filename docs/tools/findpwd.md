---
search: false
permalink: 'findpwd'
---
<templete>
<div style='margin-top: 100px;'>
  <el-image class='my-title-img'
    :src="$withBase('/bank.png')"></el-image>
  <br>
  <br>
  <el-row :gutter="20">
    <el-col :span="10"><el-input placeholder="域名" v-model="domain" clearable></el-input></el-col>
    <el-col :span="10"><el-input placeholder="密钥" v-model="serial" show-password></el-input></el-col>
    <el-col :span="4"><el-button @click='calc' icon="el-icon-search" ></el-button></el-col>
  </el-row>
  <br>
  <el-divider>{{ result }}</el-divider>
</div>
</templete>

<style>
.my-title-img {
  width: 100px; 
  height: 100px; 
  margin: 0 auto;
  display: block;
}
</style>

<script>
export default {
  data() {
    return {
      domain: '',
      serial: '',
      result: ''
    }
  },
  methods: {
    calc() {
      const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.';
      var domain = this.domain.toUpperCase();
      var result = '';

      if (this.serial.length < 6) {
        this.$message.error('密钥长度过短');
        result = 'error';
      }else {
        result = domain + this.serial;
      }

      this.result = result;
    }
  }
}
</script>