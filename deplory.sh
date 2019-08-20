#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

cp -r ./* /www/wwwroot/www.xerrors.fun/

echo " "
echo "  >>> 成功将资源文件复制到网站根目录 /www/wwwroot/www.xerrors.fun/"
echo " "

# 如果是发布到自定义域名
# echo 'blog.xerrors.fun' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@git.dev.tencent.com:Xerrors/Xerrors.git master

echo " "
echo "  >>> 成功将资源文件上传到 git@git.dev.tencent.com:Xerrors/Xerrors.git"
echo " "

cd -

git add -A
git commit -m 'deploy'

git push -f git@git.dev.tencent.com:Xerrors/Site.git master
echo " "
echo "  >>> 成功将整体文件上传到 腾讯云"
echo " "
git push -f git@github.com:Xerrors/Xerrors.github.io.git master
echo " "
echo "  >>> 成功将资源文件上传到 Github"
echo " "