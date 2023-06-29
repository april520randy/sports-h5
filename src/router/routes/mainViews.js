const HomeView = () => import('@/views/HomeView/HomeView.vue')
const ActivityView = () => import('@/views/ActivityView/ActivityView.vue')
const DiscoverView = () => import('@/views/DiscoverView/DiscoverView.vue')
const UserCenterView = () => import('@/views/UserCenterView/UserCenterView.vue')
const CSportView = () => import('@/views/CSportView/CSportView.vue')

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
    path: '/c-sport',
    name: 'c-sport',
    component: CSportView,
    meta: {
      isShowTabbar: true
    }
  }
]

export default list
