<template>
  <div>
    <NavBar @index="getTab" />
    <!-- <router-view></router-view> -->
    <!-- <div>
      <van-empty description="暂无数据" />
    </div> -->
    <component :is="typeComponentMap[type]"></component>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar';
import SportBet from './components/SportBet.vue';
import GameBet from './components/GameBet.vue'

import { ref  } from 'vue'

const type = ref(0)
const typeComponentMap = {
  0:SportBet,
  1:GameBet
}


const getTab = (val)=>{
  type.value = val
}
</script>

<style lang="scss" scoped></style>
