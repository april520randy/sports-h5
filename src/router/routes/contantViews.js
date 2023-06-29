const LoginView = () => import('@/views/LoginView/LoginView.vue')
const RegisterView = () => import('@/views/RegisterView/RegisterView.vue')
const list = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      isLoginedBlackList: true // 已登录黑名单
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      isLoginedBlackList: true // 已登录黑名单
    }
  },
]

export default list