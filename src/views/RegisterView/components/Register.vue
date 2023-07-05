<template>
  <form class="form" @submit="submit">
    <CustomInput
      clearable
      hasErrorTip
      v-model="username"
      placeholder="请输入6-16个字母及数字组成的账号"
      :rule="{
        reg: Reg.usernameReg,
        errorMessage: '账号由6-16位数字+字母组成!'
      }"
    />
    <div class="split"></div>
    <CustomInput
      isPwd
      hasErrorTip
      v-model="password"
      placeholder="请输入8-20个字母及数字组成的密码"
      :rule="{
        reg: Reg.passwordReg,
        errorMessage: '密码由6-16位数字+字母组成!'
      }"
    />

    <!-- 国家 -->
    <div class="country-wrapper">
      <div class="sub-country-wrapper">
        <Country :type="2" @getCountry="getCountry" />
      </div>
      <IconArrowDown class="icon-arrow-down" />
    </div>
    <p class="tip">选定国家后不能修改，如有问题找客服协助</p>

    <VButton :disabled="!isValided">注册</VButton>
  </form>
</template>

<script setup>
import CustomInput from '@/components/CustomInput/CustomInput'
import { ref, computed } from 'vue'
import Reg from '@/utils/reg'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const username = ref('')
const password = ref('')
const country = ref('')
const isValided = computed(() => {
  return Reg.usernameReg.test(username.value) && Reg.passwordReg.test(password.value)
})
const getCountry = (c) => {
  country.value = c
}
const submit = (event) => {
  event.preventDefault()
  // 验证数据
  if (isValided.value) {
    // 验证通过 发送请求
    console.log('验证通过')
    const data = {
      username: username.value,
      password: password.value,
      country:country.value.title
    }
    console.log(data)
    user.registerAction(data)
  }
}


</script>

<style lang="scss" scoped>
.country-wrapper {
  position: relative;
  border-bottom: 1px solid #eee;
  padding-bottom:14px;
  margin-top:10px;
  .sub-country-wrapper{
    position: relative;
    z-index: 2;
  }
  .icon-arrow-down {
    position: absolute;
    z-index: 0;
    right: 0;
    top: 7px;
    fill:#999;
  }
}
.split{
  padding:5px 0;
}
.tip{
  line-height: 22px;
  margin-top:6px;
  font-size:12px;
  margin-bottom:22px;
}
</style>
