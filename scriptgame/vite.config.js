import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/scriptgame/',
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
    hmr: {
      clientPort: 3000
    }
  }
})
