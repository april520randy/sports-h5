<template>
  <div class="header">
    <p @click="back">
      <IconClose class="icon" />
      <span>先去逛逛</span>
    </p>
    <img @click="service" src="./img/service.png" alt="" />
  </div>
</template>

<script setup>
import IconClose from '@/components/icons/IconClose'
import { useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
  router.back()
}
const service = () => {
  router.push('/service')
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 15px;
    display: flex;
    align-items: center;
  }
  .icon {
    fill: #555;
    margin-right: 5px;
  }
  img {
    height: 34px;
  }
}
</style>
