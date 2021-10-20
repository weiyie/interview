import { resolve } from 'path'
import { plugins, themeConfig } from './configs'

const theme = resolve('src/node/index')
const sourceDir = resolve('docs')

export default {
  theme, // 使用本地主题
  title: '前端面试',
  description: '前端面试必备指南',
  base: '/',
  plugins,
  themeConfig,

  /**
   * 获取所有md文件路径，解析出sidebar
   */
  sourceDir,
}
