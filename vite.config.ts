// import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  build: {
    outDir: 'docs/theme',
  },
  plugins: [
    react(),
    // VitePWA({
    //   strategies: 'injectManifest',
    //   srcDir: 'src',
    //   filename: 'sw.ts',
    //   registerType: 'prompt',
    //   injectRegister: false,

    //   pwaAssets: {
    //     disabled: false,
    //     config: true,
    //   },

    //   manifest: {
    //     name: 'glassine-paper',
    //     short_name: 'Glassine Paper',
    //     description: 'glassine-paper',
    //     theme_color: '#898dc9',
    //   },

    //   injectManifest: {
    //     globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    //   },

    //   devOptions: {
    //     enabled: false,
    //     navigateFallback: 'index.html',
    //     suppressWarnings: true,
    //     type: 'module',
    //   },
    // }),
  ],
});
