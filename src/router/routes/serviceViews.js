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
    path: '/common',
    name: 'common',
    component: CommonProblem
  },
  {
    path: '/serviceDetail',
    name: 'serviceDetail',
    component: ServiceDetail
  },
  {
    path: '/serviceCustomer',
    name: 'serviceCustomer',
    component: ExclusiveCustomer
  },
  {
    path: '/serviceBusiness',
    name: 'serviceBusiness',
    component: ExclusiveBusiness
  },
]
list.forEach(item=>{
  item.meta = {}
})
export default list