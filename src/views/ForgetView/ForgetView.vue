<template>
  <div class="forget-view">
    <div class="navbar-wrapper">
      <NavBar :is-back="false" @onClickLeft="onClickLeft" />
    </div>
    <div class="content">
      <h1>找回密码</h1>

      <!-- 第一步 验证用户名 -->
      <div v-if="step === 1" class="form">
        <div class="input-group-item">
          <p class="label">账号</p>
          <div class="input-wrapper">
            <input maxlength="16" v-model="username" type="text" placeholder="请输入账号" />
          </div>
        </div>
        <VButton @click="next" :disabled="!isVeriry" class="o-btn">下一步</VButton>
      </div>

      <!-- 第二步 验证手机号 -->
      <div v-if="step === 2">
        <div class="input-group-item">
          <p class="label">手机号</p>
          <div class="input-wrapper">
            <input disabled v-model="phone" type="text" />
          </div>
        </div>
        <div class="input-group-item">
          <p class="label">验证码</p>
          <div class="input-wrapper">
            <input maxlength="6" v-model="code" type="text" />
          </div>
        </div>
        <v-button @click="next" :disabled="!isVeriryPhone" class="o-btn">下一步</v-button>
      </div>

      <!-- 第三步 重置密码 -->
      <div v-if="step === 3">
        <div class="input-group-item">
          <p class="label">新密码</p>
          <div class="input-wrapper">
            <input v-model="password" type="text" />
          </div>
        </div>

        <v-button @click="resetPwd" :disabled="!isVeriryPwd" class="o-btn">重置</v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import { computed, ref } from 'vue'
import Reg from '@/utils/reg'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const phone = ref('189****1111')
const code = ref('')
const password = ref('')
const step = ref(1)
const isVeriry = computed(() => {
  return Reg.usernameReg.test(username.value)
})

const isVeriryPhone = computed(() => {
  return Reg.codeReg.test(code.value)
})

const isVeriryPwd = computed(() => {
  return Reg.passwordReg.test(password.value)
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
.navbar-wrapper{
  padding:0 10px;
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
  .input-group-item {
    margin-bottom: 20px;
    .label {
      font-size: 15px;
      color: #000;
      margin-bottom: 10px;
    }
    input {
      border-radius: 6px;
      border: 1px solid #f2f5f9;
      background: rgba(217, 217, 217, 0);
      line-height: 50px;
      font-size: 15px;
      text-indent: 1em;
      width: 100%;
      &[disabled] {
        background: #f7f7f7;
      }
    }
  }

  .o-btn {
    position: absolute;
    top: 250px;
    left: 0;
  }
}
</style>
