import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base ke './' sangat PENTING untuk GitHub Pages
  base: './',
  server: {
    // Ini mengizinkan akses dari Network (IP Address)
    host: true
  }
});