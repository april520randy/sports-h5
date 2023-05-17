<template>
  <div class="wrapper">
    <UserHeader />
    <VIP />
    <MyAssets />
    <MyMenu />

    <!-- <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group> -->

    <van-cell-group>
      <van-cell icon="photo-o">
        <template #title>
          <span class="custom-title">时区 GMT+08:00</span>
        </template>
      </van-cell>

      <van-cell title="关于Z体育" icon="shop-o" is-link to="/about-us"> </van-cell>
    </van-cell-group>

    <van-button @click="confirmLogOut" type="default" block plain>退出登录</van-button>
  </div>
</template>

<script setup>
import UserHeader from './components/UserHeader/UserHeader.vue'
import VIP from './components/VIP/VIP.vue'
import MyAssets from './components/MyAssets/MyAssets.vue'
import MyMenu from './components/MyMenu/MyMenu.vue'
import { showConfirmDialog } from 'vant'
const confirmLogOut = () => {
  showConfirmDialog({
    title: '确定退出当前账号吗?'
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 15px;
}
</style>
