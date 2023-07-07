<template>
  <div class="rect-angle-center" @click="goExclusive"></div>
</template>

<script setup>
//跳转专属客服页面
const goExclusive = () => {
  router.push('/serviceCustomer')
}
</script>

<style lang="scss" scoped>
.rect-angle-center {
  width: 345px;
  height: 80px;
  margin: 15px 0;
  background: url('./img/Rectangle.png') no-repeat center;
  background-size: 100%;
}
</style>
