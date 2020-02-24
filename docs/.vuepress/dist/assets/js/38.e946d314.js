(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{378:function(t,a,s){"use strict";s.r(a);var r=s(9),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("这一篇简要介绍一下几种引入库的方式")]),t._v(" "),s("p",[t._v("引入外部库的前提是你已经安装了对应的库，有些库是 Python 自带的，比如"),s("code",[t._v("math")]),t._v("库，但是很多库并没有默认安装，所以在使用之前就需要手动安装，比如"),s("code",[t._v("numpy")])]),t._v(" "),s("p",[t._v("安装方法：")]),t._v(" "),s("p",[t._v("pip install <库名>")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" numpy\n")])])]),s("h2",{attrs:{id:"import-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" import 方法")]),t._v(" "),s("p",[t._v("import <库名>")]),t._v(" "),s("p",[t._v("如引入 math 库")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" math\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("因为是全局引入，所以使用的时候需要在前面加上库的名称，即"),s("code",[t._v("math.pi")])]),t._v(" "),s("p",[t._v("有时候库的名字比较长，所以有时候为了使用方便而使用别名：")]),t._v(" "),s("p",[t._v("import <库名> as <别名>")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" math "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" mt\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("from <库名> import <模块名>")]),t._v(" "),s("h2",{attrs:{id:"from-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-import","aria-hidden":"true"}},[t._v("#")]),t._v(" from ... import ...")]),t._v(" "),s("p",[t._v("比如引入 math 库的 pi")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" math "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pi\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这时候可以直接使用库里面的方法或者变量。如果需要引入很多的话，可以使用逗号隔开引入。也可以全部引入：")]),t._v(" "),s("p",[t._v("from <库名> import *")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" math "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);