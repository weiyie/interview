## publicPath  不生效问题

### 版本 
vuepress-next v2.0.0-beta.27

### 问题
设置webpack  publicPath不生效。

### 原因
vuepress官方bug。所有的html文件中js和css会被修改为  `base`+`fileName`的格式

[参考链接](https://github.com/vuepress/vuepress-next/blob/f91651c3c7248fdabfa19cb9bdcdba4c28622eec/packages/%40vuepress/bundler-webpack/src/build/renderPageScripts.ts)

### 解决方案
1. 等待官方解决此bug
2. 修改npm文件内容   [参考链接](https://www.cnblogs.com/baixiaoxiao/p/12964170.html)