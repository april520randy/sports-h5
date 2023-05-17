<template>
  <div>
    <h2>注册</h2>
    <van-form @submit="submit" @failed="onFailed">
      <van-cell-group inset>
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ pattern: usernameReg, message: '用户名格式有误' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="password"
          type="password"
          name="validator"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ pattern: passwordReg, message: '密码格式有误' }]"
        />
        <van-field
          v-model="repassword"
          type="password"
          name="repassword"
          label="确认密码"
          placeholder="请重复输入密码"
          :rules="[{ validator, message: '两次密码不一致' }]"
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="danger" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>

    <!-- 去登录 -->
    <div @click="login" class="register login">已有账号？<span>立即登录</span></div>

    <div class="bottom">
      <span @click="router.push('/')"><van-icon name="photo-o" />先去逛逛</span>
      <span @click="router.push('/service')"><van-icon name="photo-o" />联系客服</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Reg from '@/utils/reg'
import { useRouter } from 'vue-router'
const { usernameReg, passwordReg } = Reg
const router = useRouter()
const username = ref('')
const password = ref('')
const repassword = ref('')

// 验证确认密码
const validator = (val) => {
  return val === password.value
}

// 验证失败
const onFailed = (errorInfo) => {
  console.log('failed', errorInfo)
}

// 提交注册
const submit = () => {
  const data = {
    username: username.value,
    password: password.value
  }
  console.log(data)
}

// 忘了密码
const forget = () => {
  router.push('/forget')
}

const login = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
h2 {
  padding: 50px 0 25px;
  text-align: center;
}
.assist {
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.register {
  text-align: center;
  color: #999;
  span {
    color: #1989fa;
  }
}
.bottom {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  span:first-child {
    margin-right: 100px;
  }
  .van-icon {
    margin-right: 4px;
  }
}
</style>
