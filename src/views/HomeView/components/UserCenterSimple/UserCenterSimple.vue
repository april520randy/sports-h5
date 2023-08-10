<template>
  <div class="user-center-simple">
    <div class="info" v-if="user.isLogin">
      <div class="user">
        <span class="username">{{ user.userInfo.username }}</span>
        <van-tag style="margin-left: 5px" type="primary">VIP{{ user.userInfo.level }}</van-tag>
      </div>
      <h3 class="amount">￥{{ user.userInfo.balance }}</h3>
    </div>
    <div v-else class="info logout" @click="login">
      <p class="no-login">您还未登录</p>
      <p class="login-register">登录/注册后查看</p>
    </div>

    <div class="fast-way">
      <div
        @click="router.push(item.path)"
        class="item"
        v-for="item in fastWayList"
        :key="item.title"
      >
        <p>
          <img :src="item.imgSrc" alt="">
        </p>
        <p>
          <span class="title">{{ item.title }}</span>
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
    path: '/deposit',
    imgSrc:new URL('../../img/banner/cunkuan.png', import.meta.url).href
  },
  {
    title: '提款',
    path: '/withdraw',
    imgSrc:new URL('../../img/banner/tikuan.png', import.meta.url).href
  },
  // {
  //   title: '转账',
  //   path: '/transfer'
  // },
  {
    title: 'VIP',
    path: '/vip',
    imgSrc:new URL('../../img/banner/VIP.png', import.meta.url).href
  }
]
const login = ()=>{
  router.push('/login')
}
</script>

<style lang="stylus" scoped>
.user-center-simple{
  margin-top:12px;
  padding:20px;
  display flex
  justify-content space-between
  align-items center
  height 60px
  .logout{
    line-height:1.5;
    .no-login{
      color: #666;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
    .login-register{
      color: #111;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      margin-top:6px;
    }
    }
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
      .title{
        color: #666;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
    }
    img{
      width:36.5px;
      height:31px;
    }
  }
}
</style>
