import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/cache'
import { login, getUserInfo } from '@/api/user'
import { ERR_OK } from '@/utils/config'
import router from '@/router'
export const useUserStore = defineStore('user', () => {
  const token = ref(getToken())
  const isLogin = computed(() => (token.value ? true : false))
  let userInfo = ref({})
  const loginAction = async ({ username, password }) => {
    try {
      const res = await login({ username, password })
      if (res.code === ERR_OK) {
        token.value = res.data.token
        setToken(token.value)
        router.push('/')
      }
    } catch (e) {
      console.log(e)
    }
  }
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
    logOutAction,
    getUserInfoAction
  }
})
