import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import { Theme } from 'vitepress/dist/client/index.js'
import { Quasar, Dark } from 'quasar'
import { BigBangTheme } from "quasar-app-extension-big-bang";
import './styles/style.scss'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(Quasar, {
      plugins: {Dark}
    })
    if (typeof window !== 'undefined') {
      const syncDarkMode = () => {
        Dark.set(document.documentElement.classList.contains('dark'))
      }
      syncDarkMode()
      const observer = new MutationObserver(syncDarkMode)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    }
    BigBangTheme.setPrimary('Sky')
    BigBangTheme.setSurface('Slate')
    BigBangTheme.setupDefaultProps()
  }
} satisfies Theme
