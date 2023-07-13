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
// 404路由放置在最后
routes.push({
  path: '/:catchAll(.*)',
  name: '404',
  component: Error404View
})
export default routes
