<template>
  <div class="forget-view">
    <div class="navbar-wrapper">
      <NavBar :is-back="false" @onClickLeft="onClickLeft" />
    </div>
    <div class="content">
      <h1>找回密码</h1>

      <!-- 第一步 验证用户名 -->
      <div v-if="step === 1" class="form">
        <CustomInputBorder
          clearable
          :maxlength="16"
          label="账号"
          placeholder="请输入账号"
          v-model="username"
        />
        <VButton @click="next" :disabled="!isVeriry" class="o-btn">下一步</VButton>
      </div>

      <!-- 第二步 验证手机号 -->
      <div v-if="step === 2">
        <div class="phone-wrapper">
          <div class="country-wrapper">
            <Country disabled />
          </div>
          <CustomInputBorder
            disabled
            :maxlength="16"
            placeholder="请输入手机号"
            label="手机号"
            v-model="phone"
            isPhone
          />
        </div>

        <div class="code-wrapper">
          <CustomInputBorder
            :maxlength="6"
            placeholder="请输入验证码"
            label="验证码"
            v-model="code"
          />
          <SendCode :type="1" :phone="phone" />
        </div>

        <v-button @click="next" :disabled="!isVeriryPhone" class="o-btn">下一步</v-button>
      </div>

      <!-- 第三步 重置密码 -->
      <div v-if="step === 3">
        <CustomInputBorder
          clearable
          isPwd
          :maxlength="20"
          placeholder="请输入新密码"
          label="新密码"
          v-model="password"
        />
        <v-button @click="resetPwd" :disabled="!isVeriryPwd" class="o-btn">重置</v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import { computed, ref } from 'vue'
// import Reg from '@/utils/reg'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const phone = ref('189****1111')
const code = ref('')
const password = ref('')
const step = ref(1)
const isVeriry = computed(() => {
  return username.value
})

const isVeriryPhone = computed(() => {
  return code.value
})

const isVeriryPwd = computed(() => {
  return password.value
})
const onClickLeft = () => {
  if (step.value > 1) {
    prev()
  } else {
    router.back()
  }
}
const prev = () => {
  step.value--
}
const next = () => {
  step.value++
}
const resetPwd = () => {
  showToast('重置密码成功')
  router.back()
}
</script>

<style lang="scss" scoped>
.forget-view {
  padding-top: 10px;
}
.navbar-wrapper {
  padding: 0 10px;
}
.content {
  padding: 0 25px;
  @include clearfix();
  h1 {
    font-size: 25px;
    font-weight: 600;
    color: #000;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .phone-wrapper {
    position: relative;
    .country-wrapper {
      position: absolute;
      z-index: 10;
      left: 1em;
      bottom: 12px;
      width: 78px;
    }
  }
  .code-wrapper {
    position: relative;
    margin-bottom: 40px;
    .send-code {
      position: absolute;
      right: 1em;
      bottom: 20px;
    }
  }
  .o-btn {
    position: absolute;
    top: 250px;
    left: 0;
  }
}
</style>
