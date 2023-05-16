import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView/HomeView.vue')
const ActivityView = () => import('@/views/ActivityView/ActivityView.vue')
const GameView = () => import('@/views/GameView/GameView.vue')
const UserCenterView = () => import('@/views/UserCenterView/UserCenterView.vue')
const BetView = () => import('@/views/BetView/BetView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')

const DepositView = () => import('@/views/DepositView/DepositView.vue')
const WithdrawView = () => import('@/views/WithdrawView/WithdrawView.vue')
const TransferView = () => import('@/views/TransferView/TransferView.vue')
const VIPView = () => import('@/views/VIPView/VIPView.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isShowTabbar: true
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView,
      meta: {
        isShowTabbar: true
      }
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/user-center',
      name: 'user-center',
      component: UserCenterView,
      meta: {
        isShowTabbar: true
      }
    },
    {
      path: '/bet',
      name: 'bet',
      component: BetView,
      meta: {
        isShowTabbar: true
      }
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: DepositView
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: WithdrawView
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferView
    },
    {
      path: '/vip',
      name: 'vip',
      component: VIPView
    },
  ]
})

export default router
