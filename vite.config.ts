import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fabulous-sheriffs-grupprojekt-react/',
  plugins: [react()],
  build: {
    assetsDir: 'assets',  // Ensures assets are placed in the dist/assets folder
  },
})
