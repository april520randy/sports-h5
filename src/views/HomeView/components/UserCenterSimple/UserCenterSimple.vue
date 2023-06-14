<template>
  <div class="user-center-simple">
    <div class="info">
      <div class="user">
        <span class="username">{{ user.userInfo.username }}</span>
        <van-tag style="margin-left: 5px" type="primary">VIP{{ user.userInfo.level }}</van-tag>
      </div>
      <h3 class="amount">￥{{ user.userInfo.balance }}</h3>
    </div>
    <div class="fast-way">
      <div
        @click="router.push(item.path)"
        class="item"
        v-for="item in fastWayList"
        :key="item.title"
      >
        <p>
          <van-icon name="photo-o" size="24" />
        </p>
        <p>
          <span>{{ item.title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = useUserStore()
// 快捷通道
const fastWayList = [
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
    title: 'VIP',
    path: '/vip'
  }
]
</script>

<style lang="stylus" scoped>
.user-center-simple{
  // background #ddd
  display flex
  justify-content space-between
  align-items center
  padding 10px 0
  height 80px
  span.username{
    margin-right 5px
    font-size 16px
  }
  .amount{
    font-weight 600
  }
  .fast-way{
    display flex
    .item{
      margin-right 10px
      text-align center
      &:last-child{
        margin-right 0
      }
    }

  }
}
</style>
