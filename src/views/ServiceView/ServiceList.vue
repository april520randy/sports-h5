<template>
  <div class="service-list">
    <img src="./img/normalQuestion.png" alt="error" class="normal-question">
    <van-tabs v-model:active="active"
      line-width="25"
      ellipsis="false"
      title-active-color="#111"
      title-inactive-color="#999">
    <van-tab title="取款问题">
      <!-- <van-cell
       v-for="item in obj.serviceList"
       is-link
       :key="item.id"
       :title="item.title">

      </van-cell> -->
      <div class="tab-service-list" 
        v-for="(item,index) in obj.serviceList"
        :key="item.id">
        <div class="tab-service-content">
          <span class="title-index">{{ index + 1 }}</span>
          <span class="title">{{ item.title }}</span>
        </div>
        <div class="is-link">
          <img src="./img/is-link.png" alt="error">
        </div>
      </div>
    </van-tab>
    <van-tab title="投注结算">内容 2</van-tab>
    <van-tab title="存款问题">内容 3</van-tab>
    <van-tab title="优惠问题">内容 4</van-tab>
    <van-tab title="福利中心">内容 4</van-tab>
    <van-tab title="优惠问题">内容 6</van-tab>
  </van-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const active = ref(0)
const obj = reactive({
  serviceList:[
    {title:'提款失败而且钱变少？',id:111},
    {title:'游戏账户里有钱为什么无法取款？',id:222},
    {title:'可以使用别人的银行卡进行取款吗？',id:333},
    {title:'申请取款需要注意些什么？',id:444},
    {title:'取款为什么还要申请？',id:555},
    {title:'我取款未到账？',id:666},
  ]
})
</script>

<style lang="scss" scoped>
@import './styles/service-list.scss'
</style>