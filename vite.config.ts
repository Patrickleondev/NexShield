import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Racine du domaine (Netlify). Pour un déploiement en sous-chemin
  // (ex. GitHub Pages projet), définir BASE_PATH=/NexShield/ à la build.
  base: process.env.BASE_PATH ?? '/',
  build: {
    outDir: 'dist',
  },
})
