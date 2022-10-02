#!/usr/bin/env sh
###
 # @Description:bash脚本 
 # @Author: xiongxinwei 3293172751nss@gmail.com
 # @Date: 2022-09-15 08:07:14
 # @LastEditTime: 2022-09-16 10:59:56
 # @FilePath: \undefinedd:\文档\最近的\it235-vuepress\deploy_gitee.sh
 # @blog: https://nsddd.top
### 
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 , yarn docs:build
npm run docs:build

# git初始化，每次初始化不影响推送
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -u origin "master"