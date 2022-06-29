import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/components/index.ts'),
      name: 'VueNBALogos',
      formats: ['cjs', 'es'],
      fileName: (format) => {
        if (format == 'cjs')
          return 'lib/index.js'
        return `${format}/index.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
