import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'ui/andor-grid.js',
      name: 'AndorGrid',
      fileName: () => 'ui-andor-grid.umd.js',
      formats: ['umd']
    },
    outDir: 'resources',
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' } }
    }
  }
})
