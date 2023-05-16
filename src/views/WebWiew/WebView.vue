<template>
  <van-nav-bar>
    <template v-if="isShowLeft" #left>
      <IconArrowLeft />
    </template>
    <template #title>
      <h3 class="van-ellipsis">{{ title }}</h3>
    </template>
    <template v-if="isShowRight" #right>
      <van-icon @click="router.push('/service')" name="service-o" size="24" />
    </template>
  </van-nav-bar>
</template>

<script setup></script>

<style lang="scss" scoped></style>
