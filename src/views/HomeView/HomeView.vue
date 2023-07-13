<template>
  <div class="home-wrapper">
    <!-- 轮播图 -->
    <Banner />
    <!-- 滚动公告栏 -->
    <Notice />
    <!-- 用户中心精简版 -->
    <div class="mobile-wrapper">
      <UserCenterSimple />
      <!-- 游戏大厅 -->
      <GameLobby />
    </div>
  </div>
</template>
<script setup>
import Banner from '@/components/Banner/Banner.vue'
import Notice from './components/Notice/Notice.vue'
import UserCenterSimple from './components/UserCenterSimple/UserCenterSimple.vue'
import GameLobby from './components/GameLobby/GameLobby.vue'
</script>

<style lang="scss" scoped>
.mobile-wrapper {
  @include mobile-padding();
}
.notice-list {
  display: flex;
}
.notice-text {
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
