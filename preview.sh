#!/usr/bin/env sh

cd ~/Site

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

cp -r ./* /www/wwwroot/www.xerrors.fun

echo " "
echo "  >>> 成功将资源文件复制到网站根目录 /www/wwwroot/www.xerrors.fun/"
echo " "