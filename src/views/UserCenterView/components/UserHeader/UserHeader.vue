<template>
  <div class="header">
    <div class="left" @click="router.push('/personal-center')">
      <div class="avatar">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        <!-- <van-image
          round
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        /> -->
      </div>
      <div class="info">
        <div class="info-box">
          <div class="info-name">Hi {{ user.userInfo.username }}</div>
          <div class="more-btn">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="info-text">加入Z体育第100天</div>
      </div>
    </div>
    <div @click="service" class="right">
      <div class="">
        <van-image :src="headerUrl" width="30" height="22.8"></van-image>
      </div>
      <div class="msg-box">
        <van-image :src="headmsg" width="30" height="22.8"></van-image>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import headerUrl from '@/assets/img/icon-service.png'
import headmsg from '@/assets/img/letter.png'

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
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 50px;
      border: 1px solid #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      .info-box {
        display: flex;
        margin-bottom: 6px;
        .info-name {
          font-size: 18px;
          font-weight: 600;
          font-size: 15px;
          font-family: PingFang SC;
          margin-right: 9px;
        }
        .more-btn {
          display: inline-block;
          // vertical-align: middle;
          width: 14px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          border-radius: 14px;
          background-color: var(--color-yellow);
          color: var(--color-background);
          font-size: 8px;
        }
      }
      .info-text {
        color: #666;
        font-size: 13px;
      }
    }
  }
  .right {
    display: flex;
    .msg-box {
      margin-left: 20px;
    }
  }
}
</style>
