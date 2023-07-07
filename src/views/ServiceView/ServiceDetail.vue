<template>
  <div class="service-detail">
    <div class="detail-navbar">
      <img src="./img/arrow-left.png" alt="error" class="arrow-left" @click="goBack" />
      <span class="detail-title">{{ title }}</span>
      <img src="./img/service-common.png" alt="error" class="service-common" />
    </div>
    <div class="border-detail"></div>
    <h1 class="detail-second-title">{{ titleSecond }}</h1>
    <img src="./img/money-less.png" alt="error" class="detail-money">
    <p class="detail-describe">
      如违反我可游戏规则,系统检测后会扣除您的盈利金额以及彩金,保留本金,提款后冻结账户。如果有异议可随时联系7*24小时在线客服
    </p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

const titleFirst = ref('')
const titleSecond = ref('')

const goBack = ()=>{
  router.back()
}

onMounted(()=>{
  const route = useRoute()
  titleFirst.value = route.query.active
  titleSecond.value = route.query.title
})

const title = computed(() => {
  switch (titleFirst.value) {
    case '0':
      return '取款问题';
    case '1':
      return '投注结算';
    case '2':
      return '存款问题';
    case '3':
      return '优惠问题';
    case '4':
      return '福利中心';
    default:
      return '福利中心';
  }
});
</script>

<style lang="scss" scoped>
@import './styles/service-detail.scss'
</style>