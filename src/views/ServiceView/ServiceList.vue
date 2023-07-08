<template>
  <div class="service-list">
   
    
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)
const obj = reactive({
  serviceList: [
    { title: '提款失败而且钱变少？', id: 111 },
    { title: '游戏账户里有钱为什么无法取款？', id: 222 },
    { title: '可以使用别人的银行卡进行取款吗？', id: 333 },
    { title: '申请取款需要注意些什么？', id: 444 },
    { title: '取款为什么还要申请？', id: 555 },
    { title: '我取款未到账？', id: 666 }
  ]
})


</script>

<style lang="scss" scoped>
.service-list {
  width: 345px;
  padding-top: 17px;
  padding-left: 15px;
  background: #fff;
  border-radius: 12px;
  
  
  
  
 
}
</style>
