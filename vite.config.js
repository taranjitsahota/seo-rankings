import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            valetTls: process.env.APP_ENV === "production",
        }),
        react(),
    ],
    server: {
        hmr: {
            protocol: "wss", // Use secure WebSockets for hot reloading
        },
    },
});
