import { defineConfig } from 'vite';

const externals = ['external'];
export default defineConfig({
  build: {
    rollupOptions: {
      input: '/index.js',
      external: externals 
    }
  },
  optimizeDeps: {
    include: [],
    exclude: externals
  }
})
