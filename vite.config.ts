import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'submit64-vue',
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'quasar'],
      output: {
        globals: {
          vue: 'Vue',
          quasar: 'Quasar'
        }
      }
    }
  }
})
