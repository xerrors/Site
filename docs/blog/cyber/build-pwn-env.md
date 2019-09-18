---
title: Pwn 环境搭建
permalink: /build-pwn-env
date: 2019-09-14 21:26:35
tag: 
 - blog
 - Pwn
 - 网安
categories:
 - 网安
 - Note
---

 在一个服务器上配置 pwn 环境，来应对一般的比赛场景。

<!-- more -->

## 前提条件

检查现在的 Python 版本

~~~bash
# 查看默认 Python 版本
$ python --version

# 查看 Python3 版本
$ python3 --version
~~~

## Pwntools 安装

### [默认版本](https://github.com/Gallopsled/pwntools/)

默认 pwntools 经尝试已经无法安装，使用[官方教程](https://github.com/Gallopsled/pwntools#readme)安装：

```bash
apt-get update
apt-get install python-dev git libssl-dev libffi-dev build-essential
pip install --upgrade pip
pip install --upgrade pwntools
```

这里安装的时候出现了一个问题

> ERROR: Package 'more-itertools' requires a different Python: 2.7.15 not in '>=3.4'

pwntools 所依赖的一个库在一次更新中选择了弃用 Python2 不再支持 Python2。

### [Python3 开发版本](https://github.com/Gallopsled/pwntools/tree/dev3)

Pwntools 团队同时也在开发适用于 Python2 和 Python3 的版本，目前已经进入开发阶段，虽然有些功能并没有完成，但是平常使用应该不在问题：

```bash
apt-get update
apt-get install python3 python3-pip python3-dev git libssl-dev libffi-dev build-essential
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade git+https://github.com/Gallopsled/pwntools.git@dev3
```

## GDB 安装以及插件

安装 gdb 的方法很简单，直接使用

```bash
$ sudo apt-get install gdb
```

安装 `PEDA` 插件 [其他插件](https://blog.csdn.net/gatieme/article/details/63254211)

```bash
git clone https://github.com/longld/peda.git ~/.peda
echo "source ~/.peda/peda.py" >> ~/.gdbinit
```
