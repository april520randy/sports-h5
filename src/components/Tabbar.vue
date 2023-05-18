<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item to="/" icon="photo-o">首页</van-tabbar-item>
    <van-tabbar-item to="/activity" icon="photo-o">优惠</van-tabbar-item>
    <van-tabbar-item @click="play" icon="photo-o">Z体育</van-tabbar-item>
    <van-tabbar-item to="/sponsor" icon="photo-o">赞助</van-tabbar-item>
    <van-tabbar-item to="/user-center" dot>
      <span>我的</span>
      <template #icon="props">
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
        <van-icon name="photo-o" :color="props.active ? '#1989fa' : '#000'" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from 'vue'
import { jumpExternalLink } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const active = ref(0)
// const icon = {
//   active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
//   inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
// }
const play = () => {
  let url = 'https://gci.btyzrgame66.com/403.html'
  jumpExternalLink({
    url,
    type: 1,
    title: 'Z体育',
    router
  })
}
</script>

<style lang="scss" scoped></style>
