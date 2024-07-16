import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns';

dns.setDefaultResultOrder('verbatim');
console.log('DNS default result order set to verbatim.');
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.football-data.org/v4/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
