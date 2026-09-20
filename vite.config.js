import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    minify: false,
    sourcemap: true,
    rolldownOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        nested: path.resolve(import.meta.dirname, 'library.html'),
      },
    },
  },
});
