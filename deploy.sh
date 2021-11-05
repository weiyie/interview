#!/usr/bin/env sh
#当前项目配置
userName="weiyie"
email="912881342@qq.com"
repoName='interview'
# 确保脚本抛出遇到的错误
set -e

tags=$(git tag)
nextTag=$(node utils/getNextTag.js $tags)
echo '~~~~~~~~~~'
echo nextTag: $nextTag
echo '~~~~~~~~~~'

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# deploy to github pages
# echo 'b.weiyie.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:${userName}/${repoName}.git
else
  msg='来自github actions的自动部署'
  githubUrl="https://${userName}:${GITHUB_TOKEN}@github.com/${userName}/${repoName}}.git"
fi

git init
git config --global user.name ${userName}
git config --global user.email ${email}
git add -A
git commit -m "${msg}"

git tag $nextTag

git push --tags -f ${githubUrl} master:gh-pages   # 推送到github gh-pages分支
#
# latestInfo=$(curl -s https://api.github.com/repos/weiyie/$repoName/releases/latest)

echo ::set-output name=VERSION::$nextTag

cd -
rm -rf dist
