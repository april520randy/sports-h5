<template>
  <div class="header">
    <div class="left" @click="router.push('/personal-center')">
      <div class="avatar">
        <van-image
          round
          width="60"
          height="60"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <div class="info">
        <h4>Hi {{ user.userInfo.username }}</h4>
        <p>加入Z体育第100天</p>
      </div>
    </div>
    <div @click="service" class="right">
      <van-icon name="service-o" size="24" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()
const service = () => {
  router.push('/service')
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 10px;
    }
    .info {
      h4 {
        font-size: 18px;
      }
      p {
        color: #999;
      }
    }
  }
}
</style>
