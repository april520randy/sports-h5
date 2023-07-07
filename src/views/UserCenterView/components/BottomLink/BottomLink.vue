<template>
  <div>
    <div class="cell-group">
      <van-cell-group>
        <van-cell icon="" is-link>
          <template #title>
            <div class="cell-item">
              <img src="./img/set.png" alt="" />
              <span class="custom-title">设置</span>
            </div>
          </template>
        </van-cell>
        <van-cell icon="" is-link to="/feedback">
          <template #title>
            <div class="cell-item">
              <img src="./img/option.png" alt="" />
              <span class="custom-title">意见反馈</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="btn-wrapper">
      <van-button v-if="user.isLogin" @click="confirmLogOut" type="default" block plain
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script setup>
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
.cell-group {
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  .cell-item {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }
}
.btn-wrapper {
  margin-top: 20px;
}
</style>
