import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({ // https://vite-pwa-org.netlify.app/guide/
      includeAssets: ['favicon.ico'],
      manifest: {
        id: "/index-cards/",
        scope: "/index-cards/",
        start_url: "/index-cards/",
        name: 'IndexCards',
        short_name: 'IndexCardsShort',
        description: 'IndexCardsDescription',
        theme_color: '#121745',
        background_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/index-cards/'
})
