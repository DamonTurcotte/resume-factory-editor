import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  plugins: [viteSingleFile()],
  server: {
    port: 3000,
  },
});