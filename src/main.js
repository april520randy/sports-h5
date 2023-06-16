import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import './assets/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import registerComponents from '@/utils/registerComponents'
const pinia = createPinia()
const app = createApp(App)
registerComponents(app)
app.use(pinia)
app.use(router)

app.mount('#app')
