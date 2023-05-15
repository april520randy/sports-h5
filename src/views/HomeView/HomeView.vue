<template>
  <div class="home-wrapper">
    <!-- 头 -->
    <IndexHeader />
    <!-- 轮播图 -->
    <Banner />
    <!-- 滚动公告栏 -->
    <Notice />
    <!-- 用户中心精简版 -->
    <UserCenterSimple />
    <!-- 游戏大厅 -->
    <GameLobby />
  </div>
</template>
<script setup>
import IndexHeader from './components/IndexHeader.vue'
import Banner from '@/components/Banner/Banner.vue'
import Notice from './components/Notice/Notice.vue'
import UserCenterSimple from './components/UserCenterSimple/UserCenterSimple.vue'
import GameLobby from './components/GameLobby/GameLobby.vue'

</script>

<style lang="stylus" scoped>
.home-wrapper{
  padding 0 15px
}


.notice-list{
  display flex
}
.notice-text{
  height 40px
  line-height @height
  margin-right 20px
  &:last-child{
    margin-right 0
  }
}


</style>
