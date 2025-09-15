import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    strictPort: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    build: {
      sourcemap: true,
      sourcemapIgnoreList: (source) => source.includes('bootstrap.min.css'),
    },
  },
});
