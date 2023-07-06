import { useUserStore } from '@/stores/user'
export default async (to) => {
  if (isBack) {
    to.meta.transition = 'slide-back'
    console.log('后退')
  } else {
    to.meta.transition = 'slide'
    console.log('前进')
  }
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

window.addEventListener('popstate')