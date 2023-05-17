<template>
  <div class="my-menu">
    <div class="list">
      <div @click="selectMenu(item)" class="item" v-for="item in list" :key="item.title">
        <p>
          <van-icon name="photo-o" />
        </p>
        <p>
          <span>{{ item.title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const list = [
  {
    title: '存款',
    path: '/deposit'
  },
  {
    title: '取款',
    path: '/withdraw'
  },
  {
    title: '转账',
    path: '/transfer'
  },
  {
    title: '个人中心',
    path: '/personal-center'
  },
  {
    title: '消息中心',
    path: '/message'
  },
  {
    title: '交易记录',
    path: '/transaction-record'
  },
  {
    title: '投注记录',
    path: '/bet-record'
  },
  {
    title: '福利中心',
    path: '/welfare'
  },
  {
    title: '新手帮助',
    path: '/help'
  },
  {
    title: '意见反馈',
    path: '/feedback'
  },
  {
    title: '邀请好友',
    path: '/invite'
  },
  {
    title: '合营计划',
    path: '/agent'
  }
]
const selectMenu = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
</script>

<style lang="scss" scoped>
.my-menu {
  background: #eee;
  border-radius: 8px;
  margin-top: 10px;
  padding: 15px 0 0;
  .list {
    overflow: hidden;
    .item {
      float: left;
      width: 25%;
      text-align: center;
      margin-bottom: 15px;
      span {
        font-size: 14px;
      }
      .van-icon {
        font-size: 24px;
      }
    }
  }
}
</style>
