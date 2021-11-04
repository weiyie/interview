import type { Theme, ThemeConfig } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePluginsOptions,
} from '../shared'
import {
  assignDefaultLocaleOptions,
  resolveActiveHeaderLinksPluginOptions,
  resolveContainerPluginOptions,
  resolveContainerPluginOptionsForDetails,
  resolveContainerPluginOptionsForCodeGroup,
  resolveContainerPluginOptionsForCodeGroupItem,
  resolveGitPluginOptions,
  resolveMediumZoomPluginOptions,
} from './utils'
import chalk from 'chalk'
import getSidebarData from './utils/getSidebarData'

export interface DefaultThemeOptions
  extends ThemeConfig,
    DefaultThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: DefaultThemePluginsOptions
}

const log = console.log

export const defaultTheme: Theme<DefaultThemeOptions> = (
  { themePlugins = {}, ...localeOptions },
  ctx,
) => {
  assignDefaultLocaleOptions(localeOptions)

  const {
    options: { source: sourceDir },
  } = ctx

  const { sidebar }: any = localeOptions

  if (sidebar === 'structuring') {
    const sidebarData = getSidebarData(sourceDir)
    if (sidebarData) {
      localeOptions.sidebar = sidebarData as any
      log(
        chalk.blue('tip ') +
          chalk.green('add sidebar data. 侧边栏数据成功生成。'),
      )
    } else {
      localeOptions.sidebar = 'auto'
      log(
        chalk.yellow(
          'warning: fail to add sidebar data, switch to "auto". 未能添加侧边栏数据，将切换为“auto”。',
        ),
      )
    }
  }

  return {
    name: '@vuepress/theme-default',

    layouts: path.resolve(__dirname, '../client/layouts'),

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.ts',
    ),

    clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetup.ts'),

    // use the relative file path to generate edit link
    extendsPageData: ({ filePathRelative }) => ({ filePathRelative }),

    plugins: [
      [
        '@vuepress/active-header-links',
        resolveActiveHeaderLinksPluginOptions(themePlugins),
      ],    
      // [
      //   '@vuepress/plugin-docsearch',
      //   {
      //     apiKey: '3a539aab83105f01761a137c61004d85',
      //     indexName: 'vuepress',
      //     searchParameters: {
      //       facetFilters: ['tags:v2'],
      //     },
      //     locales: {
      //       '/zh/': {
      //         placeholder: '搜索文档',
      //       },
      //     },
      //   },
      // ],
      ['@vuepress/back-to-top', themePlugins.backToTop !== false],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'tip'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'warning'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'danger'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForDetails(themePlugins),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForCodeGroup(themePlugins),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForCodeGroupItem(themePlugins),
      ],
      ['@vuepress/git', resolveGitPluginOptions(themePlugins, localeOptions)],
      ['@vuepress/medium-zoom', resolveMediumZoomPluginOptions(themePlugins)],
      ['@vuepress/nprogress', themePlugins.nprogress !== false],
      ['@vuepress/palette', { preset: 'sass' }],
      ['@vuepress/prismjs', themePlugins.prismjs !== false],
      ['@vuepress/theme-data', { themeData: localeOptions }],
    ],
  }
}
