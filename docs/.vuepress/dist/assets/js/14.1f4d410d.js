(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{259:function(module,__webpack_exports__,__webpack_require__){"use strict";var js_md5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(328),js_md5__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_0__),clipboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(330),clipboard__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.a={data:function(){return{domain:"",serial:"",result:"密码"}},methods:{querySearch:function(e,t){t([{value:"QQ"},{value:"Google"},{value:"weixin"},{value:"163"},{value:"bilibili"},{value:"baidu"},{value:"weibo"},{value:"outlook"},{value:"github"},{value:"tencent"},{value:"iCloud "},{value:"jd"},{value:"aliyun"},{value:"zhihu"}])},calc:function calc(){var dict="ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789=&+#%-",domain=this.domain.toUpperCase(),result="";if(this.serial.length<6)this.$message.error("密钥长度过短"),result="";else{var md5Serial=js_md5__WEBPACK_IMPORTED_MODULE_0___default()(domain+this.serial),frontFixed=[];frontFixed.push(dict.slice(0,25)[eval("0x"+md5Serial.slice(0,2))%25]),frontFixed.push(dict.slice(25,50)[eval("0x"+md5Serial.slice(2,4))%25]),frontFixed.push(dict.slice(50,58)[eval("0x"+md5Serial.slice(4,6))%8]),frontFixed.push(dict.slice(58,64)[eval("0x"+md5Serial.slice(6,8))%6]);for(var i=0;i<4;i++)result+=frontFixed.splice(eval("0x"+md5Serial[2*i])%(4-i),1);for(var i=4;i<16;i++)result+=dict[eval("0x"+md5Serial.slice(2*i,2*i+2))%64];this.$notify({title:"成功",message:"密码已经成功生成",type:"success"})}this.result=result},initClipboard:function(){var e=this,t=new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(this.$refs.copyButton);t.on("success",(function(t){e.$notify({title:"成功",message:"密码复制成功",type:"success"})})),t.on("error",(function(t){e.$message.error("复制失败，请再次尝试")}))},handleSelect:function(){console.log("Yeah")}},mounted:function(){this.initClipboard()}}},260:function(e,t,l){},331:function(e,t,l){"use strict";var i=l(260);l.n(i).a},387:function(e,t,l){"use strict";l.r(t);var i=l(259).a,a=(l(331),l(9)),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[[l("div",{staticStyle:{"margin-top":"100px"}},[l("el-image",{staticClass:"my-title-img",attrs:{src:e.$withBase("/ills/password.svg"),draggable:"false"}}),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:10}},[l("el-autocomplete",{staticClass:"my-domain-select",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入域名"},on:{select:e.handleSelect},model:{value:e.domain,callback:function(t){e.domain=t},expression:"domain"}})],1),e._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:"密钥","show-password":""},model:{value:e.serial,callback:function(t){e.serial=t},expression:"serial"}})],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.calc}})],1)],1),e._v(" "),l("br"),e._v(" "),l("el-divider",[l("el-tooltip",{attrs:{content:"点击复制",placement:"bottom",effect:"light"}},[l("button",{ref:"copyButton",staticClass:"cpbtn",attrs:{"data-clipboard-text":e.result,type:"text"}},[e._v(e._s(e.result))])])],1),e._v(" "),l("el-collapse",[l("el-collapse-item",{attrs:{title:"关于"}},[l("p",[e._v("密码长度是恒定的 16 位，且包含特殊字符，如果部分平台不支持这个长度，就各取所需。")]),e._v(" "),l("p",[e._v("密钥请妥善保管，加密算法公开。")]),e._v(" "),l("p",[e._v("密码根据密钥本地生成，不涉及数据上传，平台不保存密码。")])])],1)],1)]],2)}),[],!1,null,null,null);t.default=s.exports}}]);