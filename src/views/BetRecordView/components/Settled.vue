<template>
  <div class="settled">
    <div class="settled-header">
      <div class="unchecked" @click="getList(0)" :class="{active:currentIndex===0}">
        <span>未结算</span><span>(2)</span>
      </div>
      <div class="line"></div>
      <div class="unchecked" @click="getList(1)" :class="{active:currentIndex===1}">
        <span>已结算</span><span>(10)</span>
      </div>
    </div>
    <div v-show="currentIndex === 0">
      <UnsettledList />
    </div>
  </div>
</template>

<script setup>
import UnsettledList from './UnsettledList.vue';
import { ref } from 'vue';
const currentIndex = ref(0)
const getList = (val)=>{
  console.log(val)
  currentIndex.value = val
}
</script>

<style lang="scss" scoped>
.settled{
  .settled-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:70px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.50) inset, 0px 4px 6px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    margin:15px;
    .line{
      width:1px;
      height:20px;
      background: #EEE;
    }
    .active span{
      color: #FF5000;
      font-family: 'PingFang SC';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }
    .unchecked {
      color: #666;
      font-family: 'PingFang SC';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }
  }
}
</style>