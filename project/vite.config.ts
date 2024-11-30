import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/better-life-group/', // Add this line for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});