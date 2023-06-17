<template>
  <form class="form">
    <div class="phone-wrapper">
      <CustomInput
        v-float
        clearable
        v-model="phone"
        :maxlength="11"
        placeholder="请输入手机号"
        :rule="{
          reg: Reg.phoneReg,
          errorMessage: '手机号格式错误!'
        }"
      />
    </div>
  </form>
</template>

<script setup>
import CustomInput from '@/components/CustomInput/CustomInput.vue'
import Reg from '@/utils/reg'
import { ref } from 'vue'
const phone = ref('')
const code = ref('')
</script>

<style lang="scss" scoped></style>
