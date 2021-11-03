import { defineClientAppSetup } from '@vuepress/client'
import { setupDarkMode, setupSidebarItems, setupScrollHash, setActiveHeaderLinks } from './composables'

export default defineClientAppSetup(() => {
  setupDarkMode()
  setupSidebarItems()
  setupScrollHash()
})
