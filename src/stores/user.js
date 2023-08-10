import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/cache'
import { login, getUserInfo, phoneLogin, register } from '@/api/user'
import { ERR_OK } from '@/utils/config'
import {showToast} from 'vant'
import router from '@/router'
export const useUserStore = defineStore('user', () => {
  const token = ref(getToken())
  const isLogin = computed(() => (token.value ? true : false))
  let userInfo = ref({})
  // 用户名登录
  const loginAction = async ({ username, password }) => {
    try {
      const res = await login({ username, password })
      if (res.code === ERR_OK) {
        token.value = res.data.token
        setToken(token.value)
        router.push('/')
      }else{
        showToast(res.msg)
      }
    } catch (e) {
      console.log(e)
      showToast(e.msg)
    }
  }
  // 手机号登录
  const phoneLoginAction = async ({ phone, code, countryCode }) => {
    try {
      const res = await phoneLogin({ phone, code, countryCode })
      if (res.code === ERR_OK) {
        token.value = res.data.token
        setToken(token.value)
        router.push('/')
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 用户注册
  const registerAction = async ({ username, password, country }) => {
    try {
      const res = await register({ username, password, country })
      if (res.code === ERR_OK) {
        token.value = res.data.token
        setToken(token.value)
        router.push('/')
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 获取用户信息
  const getUserInfoAction = async () => {
    try {
      const res = await getUserInfo()
      if (res.code === ERR_OK) {
        userInfo.value = res.data
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 退出
  const logOutAction = async () => {
    token.value = ''
    removeToken()
    userInfo.value = {}
  }
  return {
    token,
    isLogin,
    userInfo,
    loginAction,
    phoneLoginAction,
    logOutAction,
    getUserInfoAction,
    registerAction
  }
})
