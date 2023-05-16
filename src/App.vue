<template>
  <div class="router-view-wrapper" :style="styles">
    <RouterView />
  </div>
  <Tabbar v-if="isShowTabbar" />
</template>
<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
const currentRoute = useRoute()
const isShowTabbar = computed(() => currentRoute.meta && currentRoute.meta.isShowTabbar)
const styles = computed(() => ({
  'padding-bottom': isShowTabbar.value ? '55px' : 0
}))


</script>

<style scoped></style>
