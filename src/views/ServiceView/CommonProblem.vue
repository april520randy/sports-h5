<template>
  <div class="common-problem">
    <div class="common-navbar">
      <img src="./img/arrow-left.png" alt="error" class="arrow-left" />
      <span class="common-title">常见问题</span>
      <img src="./img/service-common.png" alt="error" class="service-common" />
    </div>
    <van-tabs
      v-model:active="activeTab"
      line-width="25"
      :ellipsis="false"
      title-active-color="#111"
      title-inactive-color="#999"
      @click-tab="onClickTab"
    >
      <van-tab title="取款问题">
        <div class="border-common"></div>
        <div class="tab-service-list" v-for="(item, index) in obj.serviceList" :key="item.id">
          <div class="tab-service-content">
            <span class="title-index">{{ index + 1 }}</span>
            <span class="title">{{ item.title }}</span>
          </div>
          <div class="is-link" @click="goDetail(item.title)">
            <img src="./img/is-link.png" alt="error" />
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
import { reactive, ref,onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'

const router = useRouter()

const activeTab = ref(0)
const obj = reactive({
  serviceList:[
    {title:'提款失败而且钱变少？',id:111},
    {title:'游戏账户里有钱为什么无法取款？',id:222},
    {title:'可以使用别人的银行卡进行取款吗？',id:333},
    {title:'申请取款需要注意些什么？',id:444},
    {title:'取款为什么还要申请？',id:555},
    {title:'我取款未到账？',id:666},
    {title:'提款失败而且钱变少？',id:777},
    {title:'游戏账户里有钱为什么无法取款？',id:888},
    {title:'可以使用别人的银行卡进行取款吗？',id:999},
  ]
})

const onClickTab = ()=>{
  console.log(activeTab.value)
}
const goDetail = (title)=>{
  router.push({
    path:'/serviceDetail',
    query:{
      active:activeTab.value,
      title:title
    }
  })
}
onMounted(() => {
  const route = useRoute()
  activeTab.value = Number(route.query.active)
  console.log('active.value',typeof activeTab.value,typeof route.query.active)
})
</script>

<style lang="scss" scoped>
@import './styles/service-common.scss';
</style>
