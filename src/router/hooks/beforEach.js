import { useUserStore } from '@/stores/user'
export default async (to) => {
  const store = useUserStore()
  const isLogin = store.isLogin
  if (isLogin) {
    // 已登录状态 访问登录注册页 则跳转首页
    if (to.meta.isLoginedBlackList) {
      return '/'
    }
    // 判断是否拉取了用户信息，没有需要先拉取，再放行进入页面
    const hasUserInfo = store.userInfo.username
    if (!hasUserInfo) {
      await store.getUserInfoAction()
    }
  } else {
    // 未登录 访问需要登录权限的页面 则跳转登录页
    if (to.meta.isAuth) {
      return `/login?redirect=${to.fullPath}`
    }
  }
}

// function addUrlParams(to, from, next, path) {
//   if (to.query.code) {
//     if (path) {
//       next({ path })
//     } else {
//       next()
//     }
//     return
//   }
//   if (from.query.code) {
//     let toQuery = JSON.parse(JSON.stringify(to.query))
//     toQuery.code = from.query.code
//     if (path) {
//       next({
//         path,
//         query: toQuery
//       })
//     } else {
//       next({
//         path: to.path,
//         query: toQuery
//       })
//     }
//   } else {
//     if (path) {
//       next({ path })
//     } else {
//       next()
//     }
//   }
// }
