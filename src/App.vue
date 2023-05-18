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
  心跳检测 用于 刷新并记录应用在运行状态下的当前时间戳
  心跳检测一定要延迟执行，这是因为如果应用一运行就开始心跳检测,会立即刷新上次应用在关闭时所保存的时间戳
  为了确保在访问需要登录权限的网络接口时 获取到上次应用关闭时的时间戳(确保不会被心跳检查立即刷新破坏)
  要延迟执行的时长一定要大于 finalValue = finalValue = maxResponseTime + toleranceValue + frictionValue
  大于 finalValue 多少则可随意，我们暂定 15s吧
*/

const logTimeStamp = () => {
  // 页面运行15s之后，开启时间戳记录
  let timer = setTimeout(() => {
    setInterval(() => {
      setPageOpenedCurrentTimestamp(new Date())
    }, 1000)
    clearTimeout(timer)
  }, 15*1000)
}
logTimeStamp()
</script>

<style scoped></style>
