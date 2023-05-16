<template>
  <div class="my-assets">
    <h3>我的资产</h3>
    <div class="box">
      <div class="block">
        <div class="label">
          <span>中心钱包</span>
          <van-icon name="closed-eye" />
        </div>
        <div class="amount">
          <h3>￥999.00</h3>
          <IconRefresh class="svg-icon" />
        </div>
      </div>
      <van-button>一键回收</van-button>
    </div>
  </div>
</template>

<script setup>
import IconRefresh from '@/components/icons/IconRefresh.vue'
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
  .amount {
    display: flex;
    align-items: center;
    .svg-icon {
      width: 22px;
      height: 22px;
      font-weight: 600px;
    }
  }
  .van-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
