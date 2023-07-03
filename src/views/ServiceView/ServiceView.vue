<template>
  <!-- <NavBar title="客服" /> -->
  <div class="service-view">
    <div class="header">
      <img src="./img/arrow-left.png" alt="error" class="arrow-left">
      <span class="cellphone">电话回拨</span>
    </div>
    <p class="service-online">{{ serviceOnline }}</p>
    <p class="service-all-time">{{ serviceAllTime }}</p>
    <div class="rect-angle">
      <div class="service-img-box">
        <img src="./img/service.png" alt="error" class="servive-img">
        <span class="servive-title">{{ serviceOnline }}</span>
      </div>
      <div class="middle"></div>
      <div class="group-img-box">
        <img src="./img/Group.png" alt="error" class="group-img">
        <span class="group-title">{{ coperation }}</span>
      </div>
    </div>
    <div class="rect-angle-center"></div>
    <ServiceList />
  </div>
</template>

<script setup>
import ServiceList from './ServiceList.vue'
import { ref } from 'vue';

// import { useRouter } from 'vue-router'
// const router = useRouter()
// import { jumpExternalLink } from '@/utils'
// const service = () => {
//   jumpExternalLink({
//     url: 'https://chatx88.bm1sdgic10.com/login?configKey=lRKbXKCds9AnbCCuArj9a2hfbVqkq8GeynQjJWSL5IcArfqjrQoEkW59M-QAYUBeb7bOYTP76KWPCdcVix4l7LIO36oEHz6vqyVxpWUsFhirk1ucGhQ49DDlSNnFrasy_6GKp35_fz3z0hEgPJtck7vV6olB2o2dLtQ9403cZRu7Ff24O1hCbxJ4ff-w8bU4dWsX2wR-rfJT5PK5-dcfKOR_3wgbWahXErLFL1oKF_l30wAuNogGkiIu3ajKUel_1CZEKhGuU-EXsHyNZKt_iYTGpU5C-vie3KBqJ7yqTflYvjmodBcggy5lMYBCa3infXci6kyYrqXuNDBk3pubAQ'
//   })
// }
// const agent = ()=>{
//   router.push('/agent')
// }
const serviceOnline = ref('在线客服')
const serviceAllTime = ref('24小时随时贴心在线服务')
const coperation = ref('合营招商')
</script>

<style scoped lang="scss">
@import './styles/service-view.scss'
</style>
