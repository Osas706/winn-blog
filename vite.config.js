
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [vue(),  svgLoader()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.svg'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

export default config