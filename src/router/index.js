import { createRouter, createWebHashHistory } from 'vue-router'
import beforEach from './hooks/beforEach'
import afterEach from './hooks/afterEach'
import { listenHistory } from './hooks/handleRouterAnimation'
import routes from './getRoutes'
// 创建路由history实例
const history = createWebHashHistory()
// 监听路由回退事件
listenHistory(history)
// 创建路由实例
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
// 全局路由守卫钩子
router.beforeEach(beforEach)
router.afterEach(afterEach)
export default router
