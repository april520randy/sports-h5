<template>
  <div class="header">
    <div @click="back" class="icon-back">
      <IconArrowLeft/>
    </div>
    <span class="cellphone" @click="goCallTel">{{ '电话回拨' }}</span>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const back = ()=>{
  router.back()
}
const goCallTel = ()=>{

}
</script>

<style lang="scss" scoped>
 .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-back{
      padding:10px;
      margin-left:-8px;
      svg{
        fill:#000;
        transform: scale(1.2);
      }
    }
    .cellphone {
      color: #111;
      font-size: 15px;
      font-weight: 400;
      line-height: 28px;
      font-family: PingFang SC;
    }
  }
</style>
