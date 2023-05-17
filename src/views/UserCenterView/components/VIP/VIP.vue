<template>
  <div class="vip">
    <van-tag @click="vip" type="primary">进入VIP中心</van-tag>
    <div class="slider-wrapper">
      <span>VIP9</span>
      <van-slider readonly bar-height="6px" v-model="value">
        <template #button>
          <div class="custom-button">{{ value }}</div>
        </template>
      </van-slider>
      <span>VIP10</span>
    </div>
    <div class="upgrade">晋级流水：4000/10000元</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const vip = () => {
  console.log('ddd')
  router.push('/vip')
}
const value = ref(40)
</script>

<style lang="scss" scoped>
.vip {
  height: 120px;
  border-radius: 10px;
  background: #ddd;
  position: relative;
  padding: 0 10px;
  .van-tag {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    padding: 5px;
  }
}
.slider-wrapper {
  display: flex;
  align-items: center;
  padding-top: 45px;
  &>span{
    font-weight:600;
    font-size:18px;
  }
  .van-slider {
    margin: 0 10px;
  }
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: var(--van-primary-color);
  border-radius: 100px;
}
</style>
