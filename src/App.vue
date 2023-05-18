<template>
  <div class="router-view-wrapper" :style="styles">
    <RouterView />
  </div>
  <Tabbar v-if="isShowTabbar" />
</template>
<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { setPageOpenedCurrentTimestamp } from '@/utils/cache'
const currentRoute = useRoute()
const isShowTabbar = computed(() => currentRoute.meta && currentRoute.meta.isShowTabbar)
const styles = computed(() => ({
  'padding-bottom': isShowTabbar.value ? '55px' : 0
}))

// 心跳检测 用于 记录页面开启状态下的当前时间戳
// 心跳检测一定要延迟执行，这是因为如果应用开启就开始心跳检测
// 会立即刷新上次保存的时间戳

const logTimeStamp = () => {
  // 页面运行15s之后，开启时间戳记录
  let timer = setTimeout(() => {
    setInterval(() => {
      setPageOpenedCurrentTimestamp(new Date())
    }, 1000)
    clearTimeout(timer)
  }, 10000)
}
logTimeStamp()
</script>

<style scoped></style>
