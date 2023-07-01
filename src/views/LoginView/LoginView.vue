<template>
  <div class="wrapper login">
    <Head />

    <h3 class="tit">欢迎来到C体育</h3>

    <!-- 登录方式 -->
    <van-tabs
      title-inactive-color="#BBB"
      :title-active-color="primaryColor"
      v-model:active="activeName"
      background="transparent"
      line-width="28px"
      swipeable
      shrink
    >
      <van-tab title="账号登录" name="username">
        <UsernameLogin />
      </van-tab>
      <van-tab title="手机验证码登录" name="phone">
        <PhoneLogin />
      </van-tab>
    </van-tabs>
    <!-- 去注册 -->
    <div @click="register" class="register">还没有账号？<span>立即注册</span></div>

    <div class="bottom-wrapper">
      <Bottom />
    </div>
  </div>
</template>

<script setup>
import Head from './components/head.vue'
import { ref } from 'vue'
import { getCssVariableValue } from '@/utils'
import UsernameLogin from './components/UsernameLogin.vue'
import PhoneLogin from './components/PhoneLogin.vue'
import Bottom from './components/Bottom'
import { useRouter } from 'vue-router'
const router = useRouter()
const primaryColor = getCssVariableValue('--van-primary-color')
const activeName = ref('phone')

const register = () => {
  router.push('/register')
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
    margin-top: 40px;
    margin-bottom: 10px;
  }
  .register {
    text-align: center;
    margin-top: 15px;
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
