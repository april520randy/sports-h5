<template>
  <div class="router-view-wrapper">
    <router-view
      v-slot="{ Component, route }"
      :class="{ 'padding-bottom': isShowTabbar }"
      class="router-view"
    >
      <transition :name="route.meta.transition">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Tabbar v-if="isShowTabbar" />
  </div>
</template>
<script setup>
import { computed ,onMounted} from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Tabbar from '@/components/Tabbar/Tabbar'
import useTouchEvent from '@/hooks/IosTouchEvent'
const currentRoute = useRoute()
const isShowTabbar = computed(() => currentRoute.meta && currentRoute.meta.isShowTabbar)
onMounted(()=>{
  useTouchEvent()
})
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

<style lang="scss" scoped>
.router-view {
  // 页面切换动效辅助属性
  background: var(--color-background);
  min-height: var(--app-height);
  position: absolute;
  width: 100%;
}
.padding-bottom {
  padding-bottom: 90px;
}
</style>
