<template>
  <div class="service-view">
    <div class="header">
      <img src="./img/arrow-left.png" alt="error" class="arrow-left" @click="goBack">
      <span class="cellphone" @click="goCallTel">{{ callTel }}</span>
    </div>
    <p class="service-online">{{ serviceOnline }}</p>
    <p class="service-all-time">{{ serviceAllTime }}</p>
    <div class="rect-angle">
      <div class="service-img-box">
        <img src="./img/service.png" alt="error" class="servive-img" />
        <span class="servive-title">{{ serviceOnline }}</span>
      </div>
      <div class="middle"></div>
      <div class="group-img-box">
        <img src="./img/Group.png" alt="error" class="group-img">
        <span class="group-title" @click="goBusiness">{{ coperation }}</span>
      </div>
    </div>
    <div class="rect-angle-center" @click="goExclusive"></div>
    <ServiceList />
    <div class="new-education">
      <img src="./img/new-edu.png" alt="error" class="img-edu" />
      <div class="new-edu-content">
        <div class="content-item" v-for="item in list" :key="item.id">
          <img :src="imgPath(item.src)" alt="error" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceList from './ServiceList.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const serviceOnline = ref('在线客服')
const serviceAllTime = ref('24小时随时贴心在线服务')
const coperation = ref('合营招商')
const callTel = ref('电话回拨')
const list = ref([
  { id: 11111, title: '存款教程', src: './img/store-edu.png' },
  { id: 22222, title: '提款教程', src: './img/take-edu.png' },
  { id: 33333, title: '投注教程', src: './img/bet-edu.png' },
  { id: 44444, title: '体育规则', src: './img/sport-rule.png' }
])

const goBack = ()=>{
  router.back()
}
//图片循环之后的路径转换
const imgPath = (fileName) => {
  return new URL(fileName, import.meta.url).href
}
const back = () => {
  router.back()
}

//跳转专属商务服务
const goBusiness = ()=>{
  router.push('./serviceBusiness')
}

//跳转专属客服页面
const goExclusive = () => {
  router.push('/serviceCustomer')
}

//电话回拨按钮
const goCallTel = () => {}
</script>

<style scoped lang="scss">
@import './styles/service-view.scss';
</style>
