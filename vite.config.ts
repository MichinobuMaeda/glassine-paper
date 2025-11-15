import path from 'path';
import { defineConfig } from 'vite';
import { apiDocsPlugin } from './tools/generate-api-docs.ts';
import react from '@vitejs/plugin-react';
import { name, version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  build: {
    outDir: 'docs/theme',
  },
  plugins: [
    apiDocsPlugin({
      name,
      version,
      inputs: ['lib/*.{js,jsx}'],
      output: path.join('docs', 'api.md'),
      options: {},
    }),
    react(),
  ],
});
