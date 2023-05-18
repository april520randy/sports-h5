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

/*
最大网络接口响应时长为10s, timeout设置为10s
*/
const tagAppStarting = () => {
  // 应用运行10s之后，标识应用一直处于运行状态，否则应用处于重启运行状态
  let timer = setTimeout(() => {
    window.isAppLongRunStatus = true
    clearTimeout(timer)
  }, 10*1000)
}
tagAppStarting()
</script>

<style scoped></style>
