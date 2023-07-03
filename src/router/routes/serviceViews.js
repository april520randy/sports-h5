const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const CommonProblem = () => import('@/views/ServiceView/CommonProblem.vue')
const ServiceDetail = () => import('@/views/ServiceView/ServiceDetail.vue')

const list = [
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/common',
    name: 'common',
    component: CommonProblem
  },
  {
    path: '/serviceDetail',
    name: 'serviceDetail',
    component: ServiceDetail
  },
]

export default list