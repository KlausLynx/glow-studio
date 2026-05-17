import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        rollupOptions: {
        input: {
            main: resolve(__dirname, 'src/main.js')
        },
        output: {
            entryFileNames: 'glow-studio.js',
            format: 'iife',
            name: 'GlowStudio'
        }
        }
    }
})