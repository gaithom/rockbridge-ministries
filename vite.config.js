import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    ViteImageOptimizer({
      // Options for image optimization
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      png: {
        quality: 90,
      },
      webp: {
        quality: 85,
        lossless: false,
      },
    }),
  ],
  build: {
    // Enable better build output
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'vuex'],
          'fontawesome': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
        },
      },
    },
  },
  server: {
    // Enable HMR
    hmr: true,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vuex'],
  },
})
