import { defineClientAppSetup } from '@vuepress/client'
import { setupDarkMode, setupSidebarItems, setupScrollHash } from './composables'

export default defineClientAppSetup(() => {
  setupDarkMode()
  setupSidebarItems()
  setupScrollHash()
})
