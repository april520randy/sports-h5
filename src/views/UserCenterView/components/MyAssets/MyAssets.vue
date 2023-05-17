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
          <IconRefresh @click="refresh" class="svg-icon" />
        </div>
      </div>
      <van-button @click="oneKeyRecevie" size="small">一键回收</van-button>
    </div>
  </div>
</template>

<script setup>
import IconRefresh from '@/components/icons/IconRefresh.vue'
import { showLoadingToast } from 'vant'
import { ref, computed } from 'vue'
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
  return isShowAmount.value ? '￥999.99' : '******'
})

let angle = 0
const refresh = ($event) => {
  $event.target.style.transform = `rotate(${(angle += 360)}deg)`
}
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
      line-height:30px
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
