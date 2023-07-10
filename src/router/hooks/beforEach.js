import { useUserStore } from '@/stores/user'
import { useRouterStore } from '@/stores/router'

export default async (to) => {
  // 设置前进后退动效
  const routerStore = useRouterStore()
  // if (routerStore.isIosTouchEventBack || routerStore.isIosTouchEventForward) {
  //   to.meta.transition = 'blank'
  // } else {
  //   if (routerStore.isBack) {
  //     to.meta.transition = 'slide-right'
  //   } else {
  //     // 没有设置任何转场动效则使用默认slide滑入动效
  //     if (!to.meta.transition) {
  //       to.meta.transition = 'slide-left'
  //     }
  //   }
  // }

  // 使用过渡动效后 重置动效标识
  routerStore.setIsBackStatus(false)
  routerStore.setIsIosTouchEventBack(false)
  routerStore.setIsIosTouchEventForward(false)

  const store = useUserStore()

  // 权限控制
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
