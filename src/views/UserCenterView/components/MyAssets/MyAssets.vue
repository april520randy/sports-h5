<template>
  <div class="my-assets">
    <h3>我的资产</h3>
    <div class="box">
      <div class="block">
        <div class="label">
          <span>中心钱包</span>
          <div class="icon" @click="toggle">
            <van-icon v-if="!isShowAmount" name="closed-eye" />
            <van-icon v-if="isShowAmount" name="eye-o" />
          </div>
        </div>
        <div class="amount">
          <h3>{{ filterAmount }}</h3>
        </div>
      </div>
      <van-button @click="oneKeyRecevie" size="small">一键回收</van-button>
    </div>
  </div>
</template>

<script setup>

import { showLoadingToast } from 'vant'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
// 一键回收
const oneKeyRecevie = () => {
  showLoadingToast({
    forbidClick: true,
    duration: 1500
  })
}
// 切换金额
const toggle = () => {
  isShowAmount.value = !isShowAmount.value
}
const isShowAmount = ref(true)
const filterAmount = computed(() => {
  return isShowAmount.value ? `￥${user.userInfo.balance || 0}` : '******'
})

</script>

<style lang="scss" scoped>
.my-assets {
  margin-top: 10px;
}
.box {
  height: 100px;
  background: #eee;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;
  .label {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
    .icon {
      display: flex;
      align-items: center;
      .van-icon {
        font-size: 20px;
      }
    }
  }
  .amount {
    display: flex;
    align-items: center;
    h3 {
      font-weight: 600;
      line-height: 30px;
    }
    .svg-icon {
      width: 22px;
      height: 22px;
      fill: red;
      color: red;
      margin-left: 4px;
      margin-top: -2px;
      transition: all 1s ease-in;
    }
  }
  .van-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
