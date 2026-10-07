import { defineConfig } from 'vitepress'
import { sidebar } from './generated/sidebar'
import { version } from './generated/version'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Submit64",
  description: "Submit64",
  base: '/Submit64-vue/',
  themeConfig: {
    nav: [
      { text: version, link: 'changelog' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CHUReimsDSN/Submit64-Vue' },
    ],
    docFooter: {
      prev: false,
      next: false
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Recherche'
          },
          modal: {
            footer: {
              navigateText: 'Naviguer',
              selectText: 'Sélectionner',
              closeText: 'Fermer',
            },
            noResultsText: 'Aucun résultat pour '
          },
          
        }
      }
    },
    outline: {
      label: 'Sur cette page',
    },
    returnToTopLabel: 'Retour en haut',
    darkModeSwitchLabel: 'Apparence',
  },
  markdown: {
    theme: {
      dark: 'dark-plus',
      light: 'light-plus'
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPSidebarGroup\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/SidebarGroup.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
