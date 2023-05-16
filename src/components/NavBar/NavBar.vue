<template>
  <van-nav-bar @click-left="onClickLeft">
    <template v-if="isShowLeft" #left>
      <IconArrowLeft />
    </template>
    <template #title>
      <h3 class="van-ellipsis">{{ title }}</h3>
    </template>
    <template v-if="isShowRight" #right>
      <van-icon @click="router.push('/service')" name="service-o" size="24" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  title: {
    type: String,
    defualt: '标题'
  },
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: false
  }
})
const onClickLeft = ()=>{
  router.back()
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 600;
  font-size: 17px;
}
.van-icon {
  color: #666;
}
</style>
