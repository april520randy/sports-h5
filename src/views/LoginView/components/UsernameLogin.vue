<template>
  <form class="form" @submit="submit">
    <CustomInput
      clearable
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
      v-model="password"
      placeholder="请输入密码"
      :rule="{
        reg: Reg.passwordReg,
        errorMessage: '密码由6-16位数字+字母组成!'
      }"
    />

    <div class="auxfun">
      <p>
        <van-checkbox v-model="remember"><span>记住密码</span></van-checkbox>
      </p>
      <p>忘了密码？</p>
    </div>

    <VButton :disabled="!isValided">登录</VButton>
  </form>
</template>

<script setup>
import CustomInput from '@/components/CustomInput/CustomInput'
import { ref, computed } from 'vue'
import Reg from '@/utils/reg'
const username = ref('')
const password = ref('')
const remember = ref(true)
const isValided = computed(() => {
  return Reg.usernameReg.test(username.value) && Reg.passwordReg.test(password.value)
  // return username.value && password.value
})
const submit = (event) => {
  event.preventDefault()
  // 验证数据
  if (isValided.value) {
    // 验证通过 发送请求
    console.log('验证通过')
  }
}
</script>

<style lang="scss" scoped>
.split {
  padding: 10px 0;
}
.auxfun {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 40px;
  color: #888;
  span {
    color: #888;
  }
}
</style>
