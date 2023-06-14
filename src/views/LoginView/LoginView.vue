<template>
  <div>
    <h2>登录</h2>
    <van-form @submit="submit" @failed="onFailed">
      <van-cell-group inset>
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="pattern"
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
      </van-cell-group>

      <div class="assist">
        <van-checkbox v-model="remember" icon-size="16px" name="1" shape="square"
          >记住密码</van-checkbox
        >
        <span @click="forget">忘了密码?</span>
      </div>
      <div style="margin: 16px">
        <van-button round block type="danger" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>

    <!-- 去注册 -->
    <div @click="register" class="register">没有账号？<span>立即注册</span></div>

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
import {useUserStore} from '@/stores/user'
const store = useUserStore()
const { usernameReg, passwordReg } = Reg
const router = useRouter()
const username = ref('admin123')
const password = ref('zzz111')
const remember = ref(true)

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
