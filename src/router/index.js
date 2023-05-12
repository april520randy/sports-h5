import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView/HomeView.vue')
const ActivityView = () => import('@/views/ActivityView/ActivityView.vue')
const GameView = () => import('@/views/GameView/GameView.vue')
const UserCenterView = () => import('@/views/UserCenterView/UserCenterView.vue')
const BetView = () => import('@/views/BetView/BetView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/user-center',
      name: 'user-center',
      component: UserCenterView
    },
    {
      path: '/bet',
      name: 'bet',
      component: BetView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
  ]
})

export default router
