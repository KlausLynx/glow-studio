import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/main.js')
            },
            output: {
                entryFileNames: 'glow-studio.js',
                assetFileNames: 'glow-studio.css',
                format: 'iife',
                name: 'GlowStudio'
            }
        }
    }
})