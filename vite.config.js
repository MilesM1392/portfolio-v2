import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => {
    const isDomain = mode === 'domain'

    return {
        plugins: [react()],
        base: isDomain ? '/' : '/portfolio/',

        build: {
            outDir: isDomain ? 'dist-domain' : 'dist',

            rollupOptions: {
                input: {
                    main: resolve(process.cwd(), 'index.html'),
                    contact: resolve(process.cwd(), 'contact.html'),
                    mentionsLegales: resolve(process.cwd(), 'mentions-legales.html'),
                },
            },
        },
    }
})