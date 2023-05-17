<template>
  <van-tabs title-active-color="#1989fa" v-model:active="active" sticky animated swipeable>
    <van-tab title="赞助伙伴">
      <div class="s-list">
        <div class="item">
          <img src="./img/s1.jpg" alt="" />
        </div>
        <div class="item">
          <img src="./img/s2.jpg" alt="" />
        </div>
      </div>
    </van-tab>
    <van-tab title="美女主播">
      <van-empty description="描述文字" />
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="scss" scoped>
.s-list {
  padding: 15px;
  .item {
    margin-bottom: 10px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
<style lang="scss">
.van-tab__panel {
  min-height: calc(100vh - 44px - 55px);
}
</style>
