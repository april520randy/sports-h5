<template>
  <div class="router-view-wrapper" :class="{ 'padding-bottom': isShowTabbar }">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <Tabbar v-if="isShowTabbar" />
</template>
<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Tabbar from '@/components/Tabbar/Tabbar'
const currentRoute = useRoute()
const isShowTabbar = computed(() => currentRoute.meta && currentRoute.meta.isShowTabbar)
/*
最大网络接口响应时长为10s, timeout设置为10s
*/
const tagAppStarting = () => {
  // 应用运行10s之后，标识应用一直处于运行状态，否则应用处于重启运行状态
  let timer = setTimeout(() => {
    window.isAppLongRunStatus = true
    clearTimeout(timer)
  }, 10 * 1000)
}
tagAppStarting()
</script>

<style scoped>
.padding-bottom {
  padding-bottom: 90px;
}
</style>
