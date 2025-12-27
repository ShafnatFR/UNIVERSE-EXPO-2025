import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base ke './' sangat PENTING untuk GitHub Pages
  // Ini memastikan aset dimuat secara relatif, bukan dari root domain absolut
  base: './',
});