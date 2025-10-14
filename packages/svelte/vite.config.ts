import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/**/*.svelte'],
      skipDiagnostics: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DigitalAgencyIconsSvelte',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal'],
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
});
