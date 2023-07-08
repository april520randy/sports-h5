<template>
  <div class="service-view">
    <Head />
    <Tip />
    <Agent />
    <DownloadService />
    <Question/>
    <Guidebook />
  </div>
</template>

<script setup>
import Head from './components/Head/Head.vue'
import Tip from './components/Tip/Tip.vue'
import Agent from './components/Agent/Agent.vue'
import DownloadService from './components/DownloadService/DownloadService.vue'
import Question from './components/Question/Question.vue'

import Guidebook from './components/Guidebook/Guidebook.vue'


//电话回拨按钮
</script>

<style scoped lang="scss">
.service-view {
  background: #f7f7f7 url('./img/header-bg.png') no-repeat center -30px;
  background-size: 100%;
  @include mobile-padding();
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
