<template>
  <div>
    <NavBar title="投注记录" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <div>
      <van-empty description="暂无数据" />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar'
import { ref } from 'vue'
const value1 = ref(0)
const value2 = ref('a')
const option1 = [{ text: '全部', value: 0 }]
const option2 = [
  { text: '今日', value: 'a' },
  { text: '昨日', value: 'b' },
  { text: '近7日', value: 'c' },
  { text: '近30日', value: 'd' }
]
</script>

<style lang="scss" scoped></style>
