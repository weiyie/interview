import navbar from './navbar'
import sidebar from './sidebar'

// 主题配置
export const themeConfig = {
  navbar,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '', // 导航栏logo
  repo: 'weiyie', // 导航栏右侧生成Github链接

  sidebar,

  selectLanguageName: '简体中文',
  selectLanguageText: '选择语言',
  selectLanguageAriaLabel: '选择语言',

  // page meta
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdatedText: '上次更新',
  contributorsText: '贡献者',

  // custom containers
  tip: '提示',
  warning: '注意',
  danger: '警告',

  // 404 page
  notFound: [
    '这里什么都没有',
    '我们怎么到这来了？',
    '这是一个 404 页面',
    '看起来我们进入了错误的链接',
  ],
  backToHome: '返回首页',

  // a11y
  openInNewWindow: '在新窗口打开',
  toggleDarkMode: '切换夜间模式',
  toggleSidebar: '切换侧边栏',

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
