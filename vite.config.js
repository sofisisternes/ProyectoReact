import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src',
    },
  },
  server: {
    cors: true,
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});