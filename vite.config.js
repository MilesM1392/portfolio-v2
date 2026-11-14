import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite produit trois pages distinctes ; `base` doit correspondre au chemin
// public sous lequel le portfolio est déployé.
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/'
})
