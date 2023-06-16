<template>
  <div class="wrapper login">
    <Head />

    <h3 class="tit">欢迎来到C体育</h3>

    <!-- 登录方式 -->
    <van-tabs
      title-inactive-color="#BBB"
      :title-active-color="primaryColor"
      v-model:active="activeName"
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

    <Bottom/>
  </div>
</template>

<script setup>
import Head from './components/head.vue'
import { ref } from 'vue'
import Reg from '@/utils/reg'
import { getCssVariableValue } from '@/utils'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import UsernameLogin from './components/UsernameLogin.vue'
import PhoneLogin from './components/PhoneLogin.vue'
import Bottom from './components/Bottom'
const primaryColor = getCssVariableValue('--van-primary-color')
const store = useUserStore()
const { usernameReg, passwordReg } = Reg
const router = useRouter()
let username = ref('')
let password = ref('')
let remember = ref(true)
const activeName = ref('username')
const clear = () => {
  console.log('test')
}
// 验证失败
const onFailed = (errorInfo) => {
  console.log('failed', errorInfo)
}

// 登录提交
const submit = () => {
  const data = {
    username: username.value,
    password: password.value
  }
  store.loginAction(data)
  console.log(data)
}

// 忘了密码
const forget = () => {
  router.push('/forget')
}

const register = () => {
  router.push('/register')
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 25px;
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
</style>
<style lang="scss">
.login {
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
