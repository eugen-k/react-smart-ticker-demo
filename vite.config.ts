import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-smart-ticker-demo/',
  plugins: [react()]
})
