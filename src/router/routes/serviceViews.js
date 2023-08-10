const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const CommonProblem = () => import('@/views/ServiceView/CommonProblem.vue')
const ServiceDetail = () => import('@/views/ServiceView/ServiceDetail.vue')
const ExclusiveCustomer = () => import('@/views/ServiceView/ExclusiveCustomer.vue')
const ExclusiveBusiness = () => import('@/views/ServiceView/ExclusiveBusiness.vue')

const list = [
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/service-question/:idx',
    name: 'service-question',
    component: CommonProblem
  },
  {
    path: '/service-detail/:type/:idx',
    name: 'service-detail',
    component: ServiceDetail
  },
  {
    path: '/service-customer',
    name: 'serviceCustomer',
    component: ExclusiveCustomer
  },
  {
    path: '/service-business',
    name: 'serviceBusiness',
    component: ExclusiveBusiness
  },
]
list.forEach(item=>{
  item.meta = {}
})
export default list