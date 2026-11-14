import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Vite produit trois pages distinctes ; `base` doit correspondre au chemin
// public sous lequel le portfolio est déployé.
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                contact: resolve(process.cwd(), 'contact.html'),
                mentionsLegales: resolve(process.cwd(), 'mentions-legales.html'),
            },
        },
    },
})
