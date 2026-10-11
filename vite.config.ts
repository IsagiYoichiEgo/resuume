import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Относительные пути позволяют публиковать сайт в любом репозитории.
  base: './',
});
