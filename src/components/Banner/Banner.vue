<template>
  <div class="swiper-wrapper">
    <van-swipe indicator-color="#d42f21" :autoplay="3000" lazy-render :height="144">
      <van-swipe-item @click="selectBanner(item)" v-for="(item, idx) in images" :key="idx">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { resolvePath } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentPath = import.meta.url
// 轮播图
const images = [
  {
    id: 1,
    img: resolvePath('./img/banner-1.png', currentPath)
  },
  {
    id: 2,
    img: resolvePath('./img/banner-2.png', currentPath)
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
    img {
      width: 100%;
      border-radius: 10px;
      height: 144px;
    }
  }
}
</style>
