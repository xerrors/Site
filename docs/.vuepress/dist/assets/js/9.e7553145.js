(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(235),n(276),n(218),n(202),n(225),n(201),n(236),n(238),n(228);var i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,r=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+n}function p(t,e){var n=t.hash,a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:h(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},214:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){"use strict";var i=n(214);n.n(i).a},248:function(t,e,n){},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},274:function(t,e,n){"use strict";var i={name:"Valine",mounted:function(){var t=n(280);"undefined"!=typeof window&&(this.window=window,window.AV=n(281)),this.valine=new t,this.initValine()},watch:{$route:function(t,e){e.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"lBKeuOkAPgfaieov6tJObJyA-gzGzoHsz",appKey:"g73DyYQYwPKg3hOwwf9lRY9i",notify:!1,verify:!1,path:t,visitor:!0,avatar:"mm",placeholder:"在这写吧~"})}}},a=(n(247),n(9)),s=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{background:"white"}},[e("section",{staticClass:"page-edit"},[e("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[e("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"3px"}}),this._v(" "),e("span",{staticClass:"leancloud-visitors-count"}),this._v(" "),e("span",[this._v("次浏览")])]),this._v(" "),e("div",{attrs:{id:"vcomments"}})])])}],!1,null,"a9debdf8",null);e.a=s.exports},292:function(t,e,n){"use strict";n.r(e);n(234);var i=n(210),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(293).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(292).default},methods:{isActive:i.e}},s=(n(322),n(9)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(201),n(323);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,a,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(i.e)(s,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)})):d,v="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),m=[a.frontmatter.sidebarDepth,p,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[v,l(t,h.children,h.basePath,s,m)]:(f||g)&&h.headers&&!i.d.test(h.path)?[v,l(t,Object(i.c)(h.headers),h.path,s,m)]:v}};n(324);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if("group"===a.type&&a.children.some((function(e){return"page"===e.type&&Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},293:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(317),n(9)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},294:function(t,e,n){"use strict";var i=n(239);n.n(i).a},295:function(t,e,n){"use strict";var i=n(240);n.n(i).a},300:function(t,e,n){"use strict";var i=n(242);n.n(i).a},317:function(t,e,n){"use strict";var i=n(243);n.n(i).a},318:function(t,e,n){"use strict";var i=n(244);n.n(i).a},319:function(t,e,n){"use strict";var i=n(245);n.n(i).a},320:function(t,e,n){"use strict";var i=n(246);n.n(i).a},321:function(t,e,n){"use strict";var i=n(248);n.n(i).a},322:function(t,e,n){"use strict";var i=n(249);n.n(i).a},324:function(t,e,n){"use strict";var i=n(250);n.n(i).a},325:function(t,e,n){"use strict";var i=n(251);n.n(i).a},326:function(t,e,n){"use strict";var i=n(252);n.n(i).a},377:function(t,e,n){"use strict";n.r(e);n(202),n(217),n(234),n(208);var i=n(210),a={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(9),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(294),n(295),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")])]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[e.image?n("img",{attrs:{src:t.$withBase(e.image),draggable:"false"}}):t._e(),t._v(" "),n("div",{staticClass:"my-text-box"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"})],1)])}),[],!1,null,"04471117",null).exports),c=n(374),u=(n(300),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),h=(n(301),n(238),n(376)),p=(n(228),n(201),{components:{NavLink:r,DropdownTransition:n(293).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),d=(n(318),{components:{NavLink:r,DropdownLink:Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===r}))||(r=s)),{text:l,link:r}}))};return[].concat(Object(h.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),f=(n(319),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function v(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:u,NavLinks:f,SearchBox:c.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(v(this.$el,"paddingLeft"))+parseInt(v(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},githubLink:function(){return this.$themeConfig.github||{}}}},g=(n(320),Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("a",{staticClass:"can-hide",staticStyle:{display:"flex","align-items":"center","margin-left":"10px"},attrs:{href:t.githubLink}},[n("img",{staticClass:"my-svg",staticStyle:{width:"1.4rem",height:"1.4rem"},attrs:{src:t.$withBase("/svg/github.svg"),type:"image/svg+xml"}})])],1)],1)}),[],!1,null,null,null).exports);n(277),n(278);var b={props:["sidebarItems"],components:{Valine:n(274).a},computed:{mainClass:function(){return{"my-main-left":!0,notBlog:!this.isBlog,"theme-paper":this.$page.frontmatter.tag&&this.$page.frontmatter.tag.includes("碎碎念")}},hideContent:function(){return!!this.$page.frontmatter.tag&&this.$page.frontmatter.tag.includes("碎碎念")},renderMenus:function(){return this.$page.headers},isBlog:function(){return!!this.$page.frontmatter.tag&&this.$page.frontmatter.tag.includes("blog")},showFooter:function(){return!this.$page.frontmatter.hideFooter},lastUpdated:function(){return!this.$page.frontmatter.hideLastUpdated&&this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;if(!1!==t)return t||void 0},next:function(){var t=this.$page.frontmatter.next;if(!1!==t)return t||void 0},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,a,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,a,s){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s},formatDate:function(t){return t=new Date(t),"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}}},_=(n(321),Object(s.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page",class:{"need-zoom":t.isBlog}},[t._t("top"),t._v(" "),n("div",{staticClass:"my-main"},[n("div",{class:t.mainClass},[t.isBlog?n("div",{ref:"title",staticClass:"my-title-box"},[n("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(this.$page.title))]),t._v(" "),n("div",{staticStyle:{"text-align":"center",color:"#A0A0A0","font-size":"14px"}},[n("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[n("span",[t._v(t._s(t.formatDate(this.$page.frontmatter.date))+"  ")]),t._v(" "),n("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"3px"}}),t._v(" "),n("span",{staticClass:"leancloud-visitors-count"}),t._v(" "),n("span",[t._v("次浏览")])])])]):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),t.showFooter?n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e(),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n            ←\n            "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n          ")],1):t._e()])]):t._e(),t._v(" "),n("valine")],1),t._v(" "),t.isBlog&&!t.hideContent?n("div",{staticClass:"my-menu"},[n("div",{staticClass:"my-menu__item"},[n("h4",{staticStyle:{"margin-top":"0",color:"#121314"}},[t._v("目录")]),t._v(" "),t._l(t.renderMenus,(function(e){return n("a",{class:{"my-menu__lv2":2===e.level,"my-menu__lv3":3===e.level},attrs:{href:t.$page.path+"#"+e.slug}},[t._v(t._s(e.title))])}))],2)]):t._e()]),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),k={name:"Sidebar",components:{SidebarLinks:n(292).default,NavLinks:f},props:["items"]},$=(n(325),{components:{Home:l,Page:_,Sidebar:Object(s.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:g},data:function(){return{isSidebarOpen:!1,scrollFlag:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.k)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"my-layout-container":this.$page.frontmatter.home},t]},navClasses:function(){return[{"my-nav-home":this.$page.frontmatter.home&&!this.scrollFlag,"my-nav":!this.$page.frontmatter.home||this.scrollFlag}]}},mounted:function(){var t=this;window.addEventListener("scroll",this.myScroll),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},destroyed:function(){window.removeEventListener("scroll",this.myScroll)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},myScroll:function(){var t=document.getElementById("my-bg").offsetHeight,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=e,this.scrollTop>t/5?this.scrollFlag=!0:this.scrollFlag=!1}}}),C=(n(326),Object(s.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[n("el-backtop"),t._v(" "),n("div",{class:{"my-bg-home":t.$page.frontmatter.home},attrs:{id:"my-bg"}}),t._v(" "),t.shouldShowNavbar?n("Navbar",{class:{"my-nav-home":t.$page.frontmatter.home&&!t.scrollFlag,"my-nav":!t.$page.frontmatter.home||t.scrollFlag},on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("div",[n("div",{staticStyle:{height:"4.5rem",width:"100%",background:"#f0f2f5"}}),t._v(" "),n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v("\n    Copyright © 2019-2020 ❤️ Xerrors"),n("br"),t._v(" "),n("a",{attrs:{href:"http://www.beian.miit.gov.cn",target:"_blank"}},[t._v("皖 ICP 备 19016269 号")]),n("br"),t._v(" "),n("a",{attrs:{href:"https://me.csdn.net/jaykm",target:"_blank"}},[t._v("CSND")]),t._v("    \n    "),n("a",{attrs:{href:"https://github.com/Xerrors",target:"_blank"}},[t._v("GitHub")]),t._v("   \n    "),n("a",{attrs:{href:"https://juejin.im/user/5c17f022f265da616c65862f",target:"_blank"}},[t._v("掘金")])])}],!1,null,null,null));e.default=C.exports}}]);