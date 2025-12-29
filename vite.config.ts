import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // PERBAIKAN DI SINI: Gunakan HURUF BESAR sesuai nama repository
    base: '/UNIVERSE-EXPO-2025/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // Build optimization
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate React core libraries
            'vendor-react': ['react', 'react-dom'],
            // Separate animation library (heavy)
            'vendor-motion': ['framer-motion'],
            // Separate utility libraries
            'vendor-utils': ['lucide-react', 'html2canvas'],
          },
        },
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 600,
      // Enable minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
        },
      },
    },
  };
});