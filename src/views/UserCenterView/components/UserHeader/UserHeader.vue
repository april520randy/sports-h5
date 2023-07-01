<template>
  <div class="header">
    <div class="left" @click="router.push('/personal-center')">
      <div class="avatar">
        <van-image
          round
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <div class="info">
        <div class="info-name">
          <div></div>
          Hi {{ user.userInfo.username }}
        </div>
        <div class="info-text">加入Z体育第100天</div>
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
      width: 51px;
      height: 51px;
      flex-shrink: 0;
      border-radius: 50px;
      border: 1px solid #fff;
    }
    .info {
      .info-name {
        font-size: 18px;
        font-weight: 600;
        font-size: 15px;
        font-family: PingFang SC;
      }
      .info-text {
        color: #666;
        font-size: 13px;
      }
    }
  }
}
</style>
