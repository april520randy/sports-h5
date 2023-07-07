import { createRouter, createWebHashHistory } from 'vue-router'
import beforEach from './hooks/beforEach'
import afterEach from './hooks/afterEach'
import { useRouterStore } from '@/stores/router'
const Error404View = () => import('@/views/Error404View/Error404View.vue')

// 获取routes配置
const getRoutes = () => {
  const routes = []
  // import.meta.globEager 是 Vite 提供的一种立即导入多个模块的方式
  const context = import.meta.globEager('./routes/**/*.js')
  for (const path in context) {
    routes.push(...context[path].default)
  }
  return routes
}
const routes = getRoutes()

// 监听路由回退事件
const history = createWebHashHistory()
history.listen((path) => {
  if (path) {
    const routerStore = useRouterStore()
    routerStore.setIsBackStatus(true)
  }
})
// 创建路由实例
const router = createRouter({
  history,
  routes: [
    ...routes,
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Error404View
    }
  ]
})
// 全局路由守卫钩子
router.beforeEach(beforEach)
router.afterEach(afterEach)
export default router
