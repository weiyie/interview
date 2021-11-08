import { resolve } from 'path'
import { plugins, themeConfig } from './configs'

const theme = resolve('src/node/index')
const sourceDir = resolve('docs')
const userName="weiyie"
const repoName='interview'
const development = process.env.NODE_ENV === 'development'

export default {
  theme, // 使用本地主题
  title: '前端面试',
  description: '前端面试必备指南',
  base: development ? '/' : `/${repoName}/`,
  plugins,
  themeConfig,
  // 站点默认语言
  lang: 'zh-CN',

  /**
   * 获取所有md文件路径，解析出sidebar
   */
  sourceDir,

  // 目录配置
  dest: `dist`,
  temp: `.vuepress/.temp`,
  cache: `.vuepress/.cache`,
  // public: '/public',

  bundlerConfig: {
    chainWebpack: (config, isServer, isBuild) => {
      // 开发模式不修改默认配置
      if (!isBuild) return;

      // todo  配置是对的  但是vuepress代码bug导致不支持
      // https://github.com/vuepress/vuepress-next/blob/f91651c3c7248fdabfa19cb9bdcdba4c28622eec/packages/%40vuepress/bundler-webpack/src/build/renderPageScripts.ts
      config.output.publicPath = `https://cdn.jsdelivr.net/gh/${userName}/${repoName}/`

      if (!isServer) {
        // 修改客户端打包配置
        config.output.filename = 'assets/js/[name]OOO.[contenthash].js'
      }
    }
  }
}
