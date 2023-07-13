<template>
  <form class="form" @submit="submit">
    <CustomInput
      clearable
      hasErrorTip
      v-model="username"
      placeholder="请输入账号"
      :rule="{
        reg: Reg.usernameReg,
        errorMessage: '账号由6-16位数字+字母组成!'
      }"
    />
    <div class="split"></div>
    <CustomInput
      clearable
      isPwd
      hasErrorTip
      v-model="password"
      placeholder="请输入密码"
      :rule="{
        reg: Reg.passwordReg,
        errorMessage: '密码由6-16位数字+字母组成!'
      }"
    />

    <div class="auxfun">
      <p>
        <van-checkbox v-model="remember"><span class="forget">记住密码</span></van-checkbox>
      </p>
      <p @click="forgetPwd">忘了密码？</p>
    </div>

    <VButton :disabled="!isValided">登录</VButton>
  </form>
</template>

<script setup>
import CustomInput from '@/components/CustomInput/CustomInput'
import { ref, computed } from 'vue'
import Reg from '@/utils/reg'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = useUserStore()
const username = ref('admin123')
const password = ref('zzzz1111')
const remember = ref(true)
const isValided = computed(() => {
  return Reg.usernameReg.test(username.value) && Reg.passwordReg.test(password.value)
})
const submit = (event) => {
  event.preventDefault()
  // 验证数据
  if (isValided.value) {
    // 验证通过 发送请求
    console.log('验证通过')
    const data = {
      username: username.value,
      password: password.value
    }
    user.loginAction(data)
  }
}
const forgetPwd = () => {
  router.push('/forget')
}
</script>

<style lang="scss" scoped>
.split {
  padding: 6px 0;
}
.auxfun {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 17px;
  color: #888;
  span {
    color: #888;
  }
  .forget {
    position: relative;
    top: -1px;
  }
}
</style>
