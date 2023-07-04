<template>
  <div class="exclusive-customer">
    <div class="exclusive-navbar">
      <img src="./img/arrow-left.png" alt="error" class="arrow-left" />
      <span class="exclusive-title">专属客服</span>
    </div>
    <div class="border-exclusive"></div>
    <div class="exclusive-welfare"></div>
    <div class="download-customer">
      <img src="./img/Ellipse.png" alt="" class="img-ellipse">
      <span class="download-app">下载专属客服APP-68</span>
      <span class="add-manager">
        <span>添加您在C体育专属服务经理</span>
        <van-field
          v-model="sms"
          center
          clearable
          placeholder=""
          class="copy-content"
        >
        </van-field>
        <div class="copy-btn">复制</div>
      </span>
      <span class="unlock-welfare">解锁更多福利</span>
      <van-button class="download-btn">下载安装</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sms = ref('12345678901')

</script>

<style lang="scss" scoped>
@import './styles/service-exclusive.scss'
</style>