import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  return {
    base: '/Jonathan-Zelada-Portfolio/',
    plugins: [
      tailwindcss(),
      vue(),
      // Only load vue devtools in dev mode
      command === 'serve' ? require('vite-plugin-vue-devtools').default() : null,
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
