#!/usr/bin/env sh

if test -z $1
then
  message="commited-by-VSCode"
else
  message=$1
fi

# 确保脚本抛出遇到的错误
set -e

git add -A

{
    git commit -m $message
} || {
    echo "commit tree is clean"
}

git push -f git@e.coding.net:Xerrors/Site.git master

echo " "
echo "  >>> 成功将整体文件上传到 腾讯云 [ git@e.coding.net:Xerrors/Site.git ]"
echo " "

git push -f git@github.com:Xerrors/Site.git master

echo " "
echo "  >>> 成功将资源文件上传到 GitHub [ git@github.com:Xerrors/Site.git ]"
echo " "