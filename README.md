# sports

项目帮助文档

## 推荐安装工具链

VSCode、Volar、ESLint、prettier、Vue VSCode Snippets

## 自定义配置文件

参考 [Vite 配置](https://vitejs.dev/config/).

## 安装

```sh
npm install
```

### 启动开发模式

```sh
npm run dev
```

### 打包

```sh
npm run build
```

<!-- ### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
``` -->

## 目录说明(待完善)
```sh
|--public # 公共静态目录
|--src # 主目录
   |--api # 接口文件
   |--assets # 全局资源文件
      |--img # 图片
      |--styles # 样式
         |--base.css # 初始样式
         |--custom-vant.scss # vant自定义样式
         |--index.css # 应用全局样式
         |--mixin.scss # 应用全局mixin
         |--var.css # 应用全局变量
   |--components # 公共组件
   |--router # 路由
      |--hooks # 全局守卫
      |--routes # 路由页面配置
      |--index.js # 路由主文件

   |--stores # 状态管理
   |--utils # 工具类
      |--cache.js # 本地缓存
      |--config.js # 全局公共配置
      |--index.js # 工具方法集
      |--reg.js # 正则
      |--registerComponents.js # 全局组件 
      |--registerDirectives.js # 全局指令
      |--request.js # 网络请求配置 axios实例
   |--views # 页面
   |--App.vue # 应用根组件
   |--main # 主入口
|--.eslinttrc.cjs # ESLint 配置文件
|--.prettierrc.json # Prettier 配置文件
|--.gitignore # git标识忽略的配置文件
|--index.html # 应用首页入口
|--package-lock.json # npm自动生成的文件，用来记录依赖包的精准版本号，确保在不同环境与时间点安装的依赖包的版本一致.
|--package.json # 应用依赖包管理文件
|--postcss.config.js #  PostCSS 配置文件
|--README.md # 项目说明文档
|--vite.config.js # vite配置文件
```

