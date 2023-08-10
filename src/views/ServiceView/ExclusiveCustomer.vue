<template>
  <div class="exclusive-customer">
    <NavBar :border="true" title="专属客服" :isShowRight="false" />
    <div class="content">
      <div class="exclusive-welfare"></div>
      <div class="download-customer">
        <img src="./img/Ellipse.png" alt="" class="img-ellipse" />
        <span class="download-app">下载专属客服APP-68</span>
        <span class="add-manager">
          <span>添加您在C体育专属服务经理</span>
          <p class="copy-content">{{ sms }}</p>
          <div v-clipboard="sms" class="copy-btn">复制</div>
        </span>
        <span class="unlock-welfare">解锁更多福利</span>
        <van-button @click="download" class="download-btn">下载安装</van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import vClipboard from '@/directives/clipboard.js'
import { ref } from 'vue'
const sms = ref('12345678901')

const download = () => {}
</script>

<style lang="scss" scoped>
@import './styles/service-exclusive.scss';
</style>
