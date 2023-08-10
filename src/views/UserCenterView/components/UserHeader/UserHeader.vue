<template>
  <div class="header" :class="{ 'has-bg': !isTop }">
    <div class="left" @click="router.push('/personal-center')">
      <div class="avatar">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </div>
      <!--  -->
      <div class="info" v-if="user.isLogin">
        <div class="info-box">
          <div class="info-name">Hi {{ user.userInfo.username }}</div>
          <div class="more-btn">
            <IcoArrowRight class="svg-icon" />
          </div>
        </div>
        <div class="info-text">加入Z体育第100天</div>
      </div>
      <div class="login" v-else>点击登录/注册</div>
    </div>
    <div class="right">
      <div @click="service">
        <van-image :src="headerUrl" width="30" height="22.8"></van-image>
      </div>
      <div @click="router.push('/message')" class="msg-box">
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
import { ref, onMounted } from 'vue'
const user = useUserStore()
const router = useRouter()
const service = () => {
  router.push('/service')
}
const isTop = ref(getIsTop())
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (getIsTop()) {
      isTop.value = true
    } else {
      isTop.value = false
    }
  })
})

function getIsTop() {
  return window.scrollY === 0 || document.documentElement.scrollTop === 0
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 10px 15px;
  &.has-bg {
    background: rgba(255, 255, 255, 0.8);
  }
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
          font-weight: 600;
          font-size: 15px;
          font-family: PingFang SC;
          margin-right: 9px;
        }
        .more-btn {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          background-color: var(--color-yellow);
          color: var(--color-background);
          font-size: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          .svg-icon {
            fill: #fff;
            width: 8px;
            height: 8px;
          }
        }
      }
      .info-text {
        color: #666;
        font-size: 13px;
      }
    }
    .login {
      font-weight: 600;
      font-size: 15px;
    }
  }
  .right {
    display: flex;
    .msg-box {
      margin-left: 15px;
    }
  }
}
</style>
