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
  base: '/',
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
    configureWebpack: (config, isServer, isBuild) => {
      // 开发模式不修改默认配置
      if (!isBuild) return {};
  
      const publicPath = `https://cdn.jsdelivr.net/gh/${userName}/${repoName}/`
      let filename = config.output.filename
      if (!isServer) {
        // 修改客户端打包配置
        filename = 'assets/js/[name].[contenthash].js'
      }

      return {
        output: {
          publicPath,
          filename
        }
      }
    }
  }
}
