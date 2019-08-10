#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

git add -A
git commit -m 'deploy'

git push -f git@git.dev.tencent.com:Xerrors/Site.git master

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'xerrors.fun' > CNAME

git add -A
git commit -m 'deploy'

git push -f git@git.dev.tencent.com:Xerrors/Site.git master

cd -
