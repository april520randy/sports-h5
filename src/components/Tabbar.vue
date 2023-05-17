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
const active = ref(0)
// const icon = {
//   active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
//   inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
// }
const play = () => {
  let url =
    'https://gci.btyzrgame66.com/403.html?remote=116.50.224.222&params=NQiNCRBO6uUlCT+gL5n6Rb9lgM8Y3vLO6ViYyBaRvNbsy06dm8+XKvu2MzqOPpNfmSO3mzPLPTaLS2FMLnYvAhVq9zWdvO3IbdZ3WNZtRddGtVLODswcVYxy1lPNp7t7rD19MmTqn//XapSxFZrDRd4G0W6gQAHJ8/8DrxR9IJnC1txTzVGpIvwkMSZWir0FJeFeul3KEp3TFjwPmkPCC90BtswdvIiBIyleijvVCGDsy06dm8+XKlUnG4GwJQtaNRyos2l7Yxyj+HdzkrddYRwVdedy+AOlHWD3F5fPFSw=&key=e29d1791521382b10cbe369182ec4ed1'
  jumpExternalLink({
    url
  })
}
</script>

<style lang="scss" scoped></style>
