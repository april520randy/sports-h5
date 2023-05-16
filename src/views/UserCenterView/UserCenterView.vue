<template>
  <div class="wrapper">
    <UserHeader/>
    <VIP/>
    <MyAssets/>
    <MyMenu/>
  </div>
</template>

<script setup>
import UserHeader from './components/UserHeader/UserHeader.vue'
import VIP from './components/VIP/VIP.vue'
import MyAssets from './components/MyAssets/MyAssets.vue'
import MyMenu from './components/MyMenu/MyMenu.vue'

</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 15px;
}

</style>
