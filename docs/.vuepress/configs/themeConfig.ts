import navbar from './navbar'
import sidebar from './sidebar'

// 主题配置
export const themeConfig = {
  navbar,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '', // 导航栏logo
  repo: 'weiyie', // 导航栏右侧生成Github链接

  sidebar,

  author: {
    name: 'weiyie', // 必需
    link: 'https://github.com/weiyie', // 可选的
  },
  footer: {
    createYear: 2021,
    copyrightInfo:
      'weiyie | <a href="https://github.com/weiyie/" target="_blank">MIT License</a>',
  },
}
