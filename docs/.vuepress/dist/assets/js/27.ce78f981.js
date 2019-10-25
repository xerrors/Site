(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{352:function(t,s,n){"use strict";n.r(s);var a=n(9),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"安装-zsh-并配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-zsh-并配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 zsh 并配置")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install git")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sudo apt-get install git")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install zsh")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("zsh")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install 0h-my-zsh")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install autosuggestions")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZSH_CUSTOM"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("~"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".oh-my-zsh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("custom}")]),t._v("/plugins/zsh-autosuggestions\n")])])]),n("p",[t._v("Add the plugin to the list of plugins for Oh My Zsh to load (inside "),n("code",[t._v("~/.zshrc")]),t._v("):")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# edit the source file")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.zshrc\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zsh-autosuggestions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h4",{attrs:{id:"配置-ssh-公钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-公钥","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 ssh 公钥")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# copy this")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# edit authorized_keys file in server")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /root/.ssh/authorized_keys\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有就使用 (一路Enter)")]),t._v("\n$ ssh-keygen -t rsa\n")])])]),n("h4",{attrs:{id:"防火墙与端口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防火墙与端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 防火墙与端口")]),t._v(" "),n("p",[t._v("完整："),n("a",{attrs:{href:"https://www.cnblogs.com/jiangyao/archive/2010/05/19/1738909.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JiangYao@cnblog"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://timelate.com/archives/config-ubuntu-firewall-via-ufw.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TIMELATE"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install ufw")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ufw\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable ufw")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set the roles as default")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw default deny\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# allow or deny")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("deny "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# view the status")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reload")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw reload\n")])])]),n("p",[t._v("tips：如果是腾讯云或者阿里云要记得去控制台的安全组中配置一下端口。")]),t._v(" "),n("h4",{attrs:{id:"宝塔面板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板","aria-hidden":"true"}},[t._v("#")]),t._v(" 宝塔面板")]),t._v(" "),n("p",[t._v("还没学后端知识以及网络协议，用宝塔挺方便的。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("宝塔面板"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实验性")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSO http://download.bt.cn/install/new_install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" new_install.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu / debain")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" install.sh\n")])])]),n("h4",{attrs:{id:"更换镜像源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更换镜像源","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换镜像源")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华镜像源"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://opsx.alibaba.com/guide?lang=zh-CN&document=69a2341e-801e-11e8-8b5a-00163e04cdbb",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里镜像源Ubuntu18.04"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("这里选择了  清华镜像源的 "),n("code",[t._v("Ubuntu 18.04 LTS")]),t._v(" 版本的：")]),t._v(" "),n("div",{staticClass:"language-raw extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n\n# 预发布软件源，不建议启用\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n")])])]),n("p",[t._v("接下来的操作就是先备份自己的镜像源，之后重新创建一个文件")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备份")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /etc/apt/sources.list /etc/apt/sources.list.backup\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/apt/sources.list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新一下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),n("h4",{attrs:{id:"安装-node-以及-yarn-等"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-以及-yarn-等","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Node 以及 Yarn 等")]),t._v(" "),n("p",[t._v("参考：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tecadmin.net"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nodesource/distributions#installation-instructions",target:"_blank",rel:"noopener noreferrer"}},[t._v("PPA site"),n("OutboundLink")],1),t._v(" 可以查看最新版本")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/docs/install#debian-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn 官网安装"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("安装 node 和 npm")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 1 – Add Node.js PPA")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_13.x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 2 – Install Node.js on Ubuntu")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nodejs -y\n")])])]),n("p",[t._v("安装 yarn")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://dl.yarnpkg.com/debian/pubkey.gpg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://dl.yarnpkg.com/debian/ stable main"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/yarn.list\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),n("p",[t._v("C 基础编译工具")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc g++ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);