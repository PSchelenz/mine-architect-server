import {defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import i18n from "laravel-vue-i18n/vite";
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: '0.0.0.0',
      hmr: {
        host: '0.0.0.0',
      },
      port: 5201,
      https: env.VITE_SCHEMA === 'https',
      watch: {
        usePolling: true
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      laravel({
        input: ['resources/css/app.css', 'resources/js/app.js'],
        refresh: true,
      }),
      i18n()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'resources/js'),
        vue: 'vue/dist/vue.esm-bundler.js',
      }
    },
    build: {
      chunkSizeWarningLimit: 800,
      manifest: "manifest.json",
      emptyOutDir: true,
      outDir: './public/build',
      rollupOptions: {
        input: resolve(__dirname, 'resources/js/app.js'),
      },
    },
  };
});
