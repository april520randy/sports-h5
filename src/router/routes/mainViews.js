const HomeView = () => import('@/views/HomeView/HomeView.vue')
const ActivityView = () => import('@/views/ActivityView/ActivityView.vue')
const DiscoverView = () => import('@/views/DiscoverView/DiscoverView.vue')
const UserCenterView = () => import('@/views/UserCenterView/UserCenterView.vue')
const SportsView = () => import('@/views/SportsView/SportsView.vue')

const list = [
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
    path: '/discover',
    name: 'discover',
    component: DiscoverView,
    meta: {
      isShowTabbar: true
    }
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
    path: '/sports',
    name: 'sports',
    component: SportsView,
    meta: {
      isShowTabbar: true
    }
  }
]

list.forEach(item=>{
  item.meta.transition = 'blank'
})

export default list
