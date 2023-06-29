// 导入vant弹框样式
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
// 导入全局样式
import './assets/styles/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import registerComponents from '@/utils/registerComponents'
import registerDirectives from '@/utils/registerDirectives'
const pinia = createPinia()
const app = createApp(App)
// 注册全局组件
registerComponents(app)
// 注册全局指令
registerDirectives(app)
// 注册状态管理器pinia
app.use(pinia)
// 注册路由
app.use(router)
app.mount('#app')
