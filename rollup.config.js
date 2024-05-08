// rollup.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    vue(),
    // Agrega el plugin de resolución de nodos
    nodeResolve()
  ]
});