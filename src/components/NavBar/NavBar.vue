<template>
  <div class="custom-nav-bar">
    <van-nav-bar @click-left="onClickLeft" :border="false" :fixed="true">
      <template v-if="isShowLeft" #left>
        <IconArrowLeft />
      </template>
      <template #title>
        <h3 class="van-ellipsis">{{ title }}</h3>
      </template>
      <template v-if="isShowRight" #right>
        <div class="right">
          <img @click="service" src="@/assets/img/icon-service.png" alt="">
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  title: {
    type: String,
    defualt: '标题'
  },
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: true
  }
})
const onClickLeft = () => {
  router.back()
}
const service = ()=>{
  router.push('/service')
}
</script>

<style lang="scss" scoped>

.custom-nav-bar{
  padding-bottom:44px;
}
h3 {
  font-weight: 600;
  font-size: 17px;
}
svg {
  fill: #333;
  width: 20px;
}
.right{
  img{
    width:30px;
    margin-top:5px
  }
}
</style>
<style>
.custom-nav-bar {
  .van-nav-bar__left {
    padding: 0 12px;
  }
}
</style>
