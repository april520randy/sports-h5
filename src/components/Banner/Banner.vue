<template>
  <div class="swiper-wrapper">
    <van-swipe indicator-color="#d42f21" :autoplay="3000" lazy-render height="auto">
      <van-swipe-item @click="selectBanner(item)" v-for="(item, idx) in images" :key="idx">
        <div class="img-bg" :style="{ backgroundImage: `url(${item.img})` }"></div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 轮播图
const images = [
  {
    id: 1,
    img: new URL('./img/banner-1.png', import.meta.url).href
  },
  {
    id: 2,
    img: new URL('./img/banner-2.png', import.meta.url).href
  }
]
const selectBanner = (item) => {
  console.log(item)
  router.push(`/activity/${item.id}`)
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  .van-swipe {
    .img-bg {
      height: 144px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>
