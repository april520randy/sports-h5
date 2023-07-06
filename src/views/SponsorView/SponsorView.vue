<template>
  <van-tabs title-active-color="#1989fa" v-model:active="active" sticky animated swipeable>
    <van-tab title="赞助伙伴">
      <div class="s-list">
        <div @click="selectSponsor(item)" v-for="item in sList" :key="item.id" class="item">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </van-tab>
    <van-tab title="美女主播">
      <van-empty description="暂无主播" />
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { resolvePath } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const active = ref(0)
const sList = [
  {
    id: 1,
    img: resolvePath('./img/s1.jpg', import.meta.url)
  },
  {
    id: 2,
    img: resolvePath('./img/s2.jpg', import.meta.url)
  }
]
const selectSponsor = (item) => {
  router.push(`/sponsor/${item.id}`)
  console.log(item, '999')
}
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
