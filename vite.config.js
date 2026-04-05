// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Adjust this to match your GitHub Pages URL
  build: {
    outDir: 'dist',
  },
});