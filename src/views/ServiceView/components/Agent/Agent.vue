<template>
  <div class="rect-angle">
    <div class="service-img-box">
      <img src="./img/service.png" alt="error" class="servive-img" />
      <span class="servive-title">{{ '在线客服' }}</span>
    </div>
    <div class="middle"></div>
    <div class="group-img-box">
      <img src="./img/Group.png" alt="error" class="group-img" />
      <span class="group-title" @click="goBusiness">{{ '合营招商' }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goBusiness = ()=>{
  router.push('/service-business')
}
</script>

<style lang="scss" scoped>
.rect-angle {
  width: 350px;
  height: 70px;
  background: url('./img/Rectangle.png') no-repeat center;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .service-img-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .servive-img {
      width: 30px;
      height: 30px;
      margin-right: 6px;
    }
    .servive-title {
      color: #e8d8ad;
      font-size: 15px;
      font-weight: 400;
    }
  }
  .middle {
    width: 1px;
    height: 25px;
    background: #5c5c5e;
  }
  .group-img-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .group-img {
      padding-top: 10px;
      width: 30px;
      margin-right: 6px;
    }
    .group-title {
      color: #e8d8ad;
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>
