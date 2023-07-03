<template>
  <div class="wrapper register">
    <Head />
    <h3 class="tit">创建账号</h3>
    <!-- 注册 -->
    <Register/>
    <!-- 去注册 -->
    <div @click="goLogin" class="register">已有账号？<span>去登录</span></div>

    <!-- <div class="bottom-wrapper">
      <Bottom />
    </div> -->
  </div>
</template>

<script setup>
import Head from '@/views/LoginView/components/Head'
import Register from './components/Register.vue'
// import Bottom from '@/views/LoginView/Bottom'
import { useRouter } from 'vue-router'
const router = useRouter()

const goLogin = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 25px 0;
  background: #fefdfc;
  .tit {
    font-size: 25px;
    font-weight: 600;
    color: #111;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .register {
    text-align: center;
    margin-top: 17px;
    line-height: 22px;
    span {
      color: var(--color-primary);
    }
  }
}
.bottom-wrapper {
  margin-top: 50px;
  // position: fixed;
  // width:100%;
  // left:0;
  // bottom :20px;
}
</style>
<style lang="scss">
.login {
  .van-tab {
    font-size: 17px;
  }
  .van-tabs__nav--line.van-tabs__nav--shrink,
  .van-tabs__nav--line.van-tabs__nav--complete {
    padding-left: 0;
    padding-right: 0;
  }
  .van-tab--shrink {
    padding: 0;
    margin-right: 25px;
  }
  .van-tabs__content--animated {
    padding-top: 40px;
  }
}
</style>
