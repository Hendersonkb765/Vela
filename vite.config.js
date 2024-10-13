import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/public/', // Define o prefixo para todas as URLs geradas
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'public/build', // Certifique-se de que o diretório de saída está correto
        manifest: true, // Gera um manifesto para mapeamento de arquivos
        rollupOptions: {
            output: {
                // Ajusta os caminhos dos arquivos de saída
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]',
            },
        },
    },
});