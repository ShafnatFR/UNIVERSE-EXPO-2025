import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // TAMBAHKAN BARIS INI:
      // Ganti 'nama-repo-github-anda' dengan nama repository asli Anda di GitHub.
      // Contoh: jika URL repo Anda github.com/shafnatfr/universe-expo-2025, maka isinya '/universe-expo-2025/'
      base: '/universe-expo-2025/', 

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
      }
    };
});
