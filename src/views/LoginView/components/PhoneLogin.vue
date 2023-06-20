<template>
  <form class="form" @submit="submit">
    <div class="phone-wrapper">
      <div class="country-code-wrapper">
        <CountryCode />
      </div>

      <CustomInput
        isPhone
        v-number
        clearable
        hasErrorTip
        v-model="phone"
        :maxlength="11"
        placeholder="请输入手机号"
        :rule="{
          reg: Reg.phoneReg,
          errorMessage: '手机号格式错误!'
        }"
      />
    </div>
    <div class="split"></div>
    <div class="code-wrapper">
      <CustomInput
        v-number
        hasErrorTip
        v-model="code"
        :maxlength="6"
        placeholder="请输入验证码"
        :rule="{
          reg: Reg.codeReg,
          errorMessage: '验证码格式错误!'
        }"
      />
      <SendCode :phone="phone" />
    </div>

    <VButton :disabled="!isValided">登录</VButton>
  </form>
</template>

<script setup>
import CustomInput from '@/components/CustomInput/CustomInput.vue'
import CountryCode from '@/components/CountryCode/CountryCode.vue'
import SendCode from '@/components/SendCode/SendCode.vue'

import Reg from '@/utils/reg'
import { ref, computed } from 'vue'
const phone = ref('')
const code = ref('')

const isValided = computed(() => {
  return Reg.phoneReg.test(phone.value) && Reg.codeReg.test(code.value)
})

const submit = (event) => {
  event.preventDefault()
  // 验证数据
  if (isValided.value) {
    // 验证通过 发送请求
    console.log('验证通过')
    const data = {
      phone: phone.value,
      code: code.value,
      // cuntryCode
    }
    user.loginAction(data)
  }
}
</script>

<style lang="scss" scoped>
.phone-wrapper {
  position: relative;
  .country-code-wrapper {
    position: absolute;
    z-index: 100;
    left: 0;
    top: 2px;
    &::after {
      content: '';
      position: absolute;
      right: -20px;
      top: 5px;
      height: 20px;
      width: 1px;
      background: #eee;
    }
  }
}
.split {
  padding: 6px 0;
}
.code-wrapper {
  position: relative;
  margin-bottom: 40px;
  .send-code {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
