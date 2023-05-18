export default async (to, from, next) => {
  const isLogin = true
  if (isLogin) {
    // 已登录状态
    if (to.meta.isLoginedBlackList) {
      //  访问登录注册页
      // 跳转首页
      addUrlParams(to, from, next, '/')
    } else {
      // 判断是否拉取了用户信息，没有需要先拉取，再放行进入页面
      const hasUserInfo = true
      if (!hasUserInfo) {
        await dispatch('getUserInfo')
      }
      addUrlParams(to, from, next)
    }
  } else {
    // 未登录
    if (to.meta.isAuth) {
      // 访问需要登录权限的页面 则跳转登录页
      addUrlParams(to, from, next, `/login?redirect=${to.fullPath}`)
    } else {
      // 不需要登录权限页面直接放行
      addUrlParams(to, from, next)
    }
  }
}

function addUrlParams(to, from, next, path) {
  if (to.query.code) {
    if (path) {
      next({ path })
    } else {
      next()
    }
    return
  }
  if (from.query.code) {
    let toQuery = JSON.parse(JSON.stringify(to.query))
    toQuery.code = from.query.code
    if (path) {
      next({
        path,
        query: toQuery
      })
    } else {
      next({
        path: to.path,
        query: toQuery
      })
    }
  } else {
    if (path) {
      next({ path })
    } else {
      next()
    }
  }
}
