---
title: "配置服务器常见操作"
date: 2019/8/12 20:46:25
tag: 
 - blog
 - Test
---

#### 安装 zsh 并配置

```sh
# install zsh
$ sudo apt-get install zsh

# install 0h-my-zsh
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# install autosuggestions
$ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

Add the plugin to the list of plugins for Oh My Zsh to load (inside `~/.zshrc`):

```vim
# edit the source file
$ vim ~/.zshrc

plugins=(zsh-autosuggestions)
```

#### 配置 ssh 公钥

```sh
# copy this
cat ~/.ssh/id_rsa.pub

# edit authorized_keys file in server
vim /root/.ssh/authorized_keys
```

#### 防火墙与端口

完整：[JiangYao@cnblog](https://www.cnblogs.com/jiangyao/archive/2010/05/19/1738909.html)

```sh
# install ufw
sudo apt-get install ufw

# enable ufw
sudo ufw enable

# set the roles as default
sudo ufw default deny

# allow or deny
sudo ufw allow|deny [service]

# view the status
sudo ufw status

# reload
sudo ufw reload
```