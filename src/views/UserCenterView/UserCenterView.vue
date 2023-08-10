<!-- 个人中心页面 -->
<template>
  <div class="user-center-view">
    <UserHeader />
    <div class="scroll-view">
      <MyAssets />
      <Share />
      <MyMenu />
      <MyEvent />
      <BottomLink />
    </div>
  </div>
</template>

<script setup>
import UserHeader from './components/UserHeader/UserHeader.vue'
import MyAssets from './components/MyAssets/MyAssets.vue'
import Share from './components/Share/Share.vue'
import MyMenu from './components/MyMenu/MyMenu.vue'
import MyEvent from './components/MyEvent/MyEvent.vue'
import BottomLink from './components/BottomLink/BottomLink.vue'
</script>

<style lang="scss" scoped>
.user-center-view {
  background: url('@/assets/img/bg.png') center top no-repeat;
  background-size: contain;
  @include clearfix();
}
.scroll-view {
  @include mobile-padding();
  padding-top: 60px;
}
</style>
