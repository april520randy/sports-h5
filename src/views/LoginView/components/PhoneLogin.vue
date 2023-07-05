<template>
  <form class="form" @submit="submit">
    <div class="phone-wrapper">
      <div class="country-wrapper">
        <Country @getCountry="getCountry" />
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
          reg: Reg.i18nPhoneReg,
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
import SendCode from '@/components/SendCode/SendCode.vue'
import { useUserStore } from '@/stores/user'
import Reg from '@/utils/reg'
import { ref, computed } from 'vue'
const user = useUserStore()
const phone = ref('')
const code = ref('')
const country = ref('')
const isValided = computed(() => {
  return Reg.i18nPhoneReg.test(phone.value) && Reg.codeReg.test(code.value)
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
      phone: phone.value,
      code: code.value,
      cuntryCode: country.value.code
    }
    console.log(data)
    user.phoneLoginAction(data)
  }
}
</script>

<style lang="scss" scoped>
.phone-wrapper {
  position: relative;
  .country-wrapper {
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0px;
    width:78px;
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
    top: 4px;
  }
}
</style>
