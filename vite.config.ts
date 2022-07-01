import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@chia/src': path.resolve(__dirname, './src'),
      '@chia/src/components': path.resolve(__dirname, './src/components'),
      '@chia/api': path.resolve(__dirname, './src/api'),
      '@chia/store': path.resolve(__dirname, './src/store'),
      '@chia/utils': path.resolve(__dirname, './utils'),
      '@chia/lib': path.resolve(__dirname, './lib'),
    },
  },
})
