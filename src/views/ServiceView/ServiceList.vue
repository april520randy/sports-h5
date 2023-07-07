<template>
  <div class="service-list">
    <img src="./img/normalQuestion.png" alt="error" class="normal-question" />
    <van-tabs
      v-model:active="active"
      swipeable
      line-width="25"
      :ellipsis="false"
      title-active-color="#111"
      title-inactive-color="#999"
    >
      <van-tab title="取款问题">
        <div class="border-list"></div>
        <div class="tab-service-list" v-for="(item, index) in obj.serviceList" :key="item.id">
          <div class="tab-service-content">
            <span class="title-index">{{ index + 1 }}</span>
            <span class="title">{{ item.title }}</span>
          </div>
          <div class="is-link" @click="checkMore">
            <img src="./img/is-link.png" alt="error" />
          </div>
        </div>
      </van-tab>
      <van-tab title="投注结算">内容 2</van-tab>
      <van-tab title="存款问题">内容 3</van-tab>
      <van-tab title="优惠问题">内容 4</van-tab>
      <van-tab title="福利中心">内容 5</van-tab>
      <!-- <van-tab title="优惠问题">内容 6</van-tab> -->
    </van-tabs>
    <div class="more">
      <span class="more-title" @click="checkMore">查看更多</span>
      <img src="./img/is-link.png" alt="error" />
    </div>
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

const checkMore = () => {
  router.push({
    path: '/common',
    query: {
      active: active.value
    }
  })
}
</script>

<style lang="scss" scoped>
.service-list {
  width: 345px;
  // height:481px;
  padding-top: 17px;
  padding-left: 15px;
  background: #fff;
  border-radius: 12px;
  .normal-question {
    width: 68px;
  }
  :deep() .van-tabs__line {
    bottom: 28px;
    left: -10px;
    height: 6px;
    opacity: 0.8;
  }
  :deep() .van-tab--active span {
    font-weight: 600;
    font-size: 14px;
  }
  :deep() .van-cell {
    padding-left: 0;
    height: 54px;
  }
  :deep() .van-cell:after {
    margin-left: -15px;
  }
  :deep() .van-cell__title {
    color: #111;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
  }
  :deep() .van-tab--grow {
    padding-left: 0;
    padding-right: 20px;
  }
  :deep() .van-tabs__nav--line.van-tabs__nav--complete {
    padding-left: 2px;
  }
  .tab-service-list {
    height: 56.5px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    .tab-service-content {
      .title {
        font-size: 15px;
        color: #111;
      }
      .title-index {
        color: #999;
        margin-right: 12px;
        font-size: 20px;
      }
    }
    .is-link img {
      margin-left: 10px;
      width: 12px;
      height: 12px;
    }
  }
  .border-list {
    height: 1px;
    // width:375px;
    margin: 0 -15px;
    background: #f5f5f5;
  }
  // .tab-service-list:nth-child(1){
  //   border-top:1px solid #EEE;
  // }
  .more {
    height: 48.5px;
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .more-title {
      color: #888;
      font-size: 14px;
      margin-right: 4px;
    }
  }
  .more img {
    width: 12px;
    height: 12px;
  }
}
</style>
