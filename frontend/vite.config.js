import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: true
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sukacagi: resolve(__dirname, 'su-kacagi-tespiti.html'),
        tikaniklik: resolve(__dirname, 'tikaniklik-acma.html'),
        gider: resolve(__dirname, 'gider-acma.html'),
        petek: resolve(__dirname, 'petek-temizligi.html'),
        notfound: resolve(__dirname, '404.html'),
      }
    }
  }
})
