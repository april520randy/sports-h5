<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <UserHeader />
    </div>
    <div class="scroll-view">
      <VIP v-if="user.isLogin" />
      <MyAssets />
      <MyMenu />
      <van-cell-group>
        <van-cell icon="photo-o">
          <template #title>
            <span class="custom-title">时区 GMT+08:00</span>
          </template>
        </van-cell>

        <van-cell title="关于Z体育" icon="shop-o" is-link to="/about-us"> </van-cell>
      </van-cell-group>
      <van-button v-if="user.isLogin" @click="confirmLogOut" type="default" block plain
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script setup>
import UserHeader from './components/UserHeader/UserHeader.vue'
import VIP from './components/VIP/VIP.vue'
import MyAssets from './components/MyAssets/MyAssets.vue'
import MyMenu from './components/MyMenu/MyMenu.vue'
import { showConfirmDialog } from 'vant'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const confirmLogOut = () => {
  showConfirmDialog({
    title: '确定退出当前账号吗?'
  })
    .then(() => {
      // on confirm
      user.logOutAction()
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 15px;
  background: url('./img/bg.png') no-repeat;

  background-size: 100% 100%;
}
.header-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 73px;
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
}
.scroll-view {
  padding-top: 52px;
}
</style>
