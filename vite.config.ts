import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Served at raila.io/blogredesign/ — a subpath, not the domain root — so
  // built asset URLs need this prefix. HashRouter (see main.tsx) means no
  // server rewrite rules are needed for client-side routes either way.
  base: '/blogredesign/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
