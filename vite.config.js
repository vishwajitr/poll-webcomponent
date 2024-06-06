import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        poll: resolve(__dirname, 'main.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js', 
  }
})
