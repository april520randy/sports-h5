import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import tinify from 'tinify'
import fs from 'fs'
import path from 'path'
tinify.key = 'zDScpf7z3yLMKypDs19qKDCgdC2xCbrR'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/sports-h5/dist/' : '',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    {
      name: 'tinyPNG',
      apply: 'build',
      generateBundle() {
        const projectDirectory = path.resolve(__dirname, './src')
        compressImages(projectDirectory)
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/mixin.scss";`
      }
    }
  }
})

function compressImages(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      const filePath = path.resolve(directory, file)

      fs.stat(filePath, (err, stats) => {
        if (err) throw err

        if (stats.isFile()) {
          // 检查文件扩展名，只压缩 .png 和 .jpg 文件
          const extension = path.extname(filePath).toLowerCase()
          if (extension === '.png' || extension === '.jpg' || extension === '.jpeg') {
            tinify.fromFile(filePath).toFile(filePath, (err) => {
              if (err) throw err

              console.log(`Compressed ${file}`)
            })
          }
        } else if (stats.isDirectory()) {
          // 递归处理子目录
          compressImages(filePath)
        }
      })
    })
  })
}
