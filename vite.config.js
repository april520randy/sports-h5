import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
// import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/sports-h5/dist/' : '',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    // styleImport({
    //   // 需要全局导入的 SCSS 文件路径
    //   libs: [
    //     {
    //       libraryName: 'scss',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `@import "./src/assets/styles/${name}.scss";`;
    //       },
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
