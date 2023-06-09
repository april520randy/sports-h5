import { computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken } from '@/utils/cache'
import { login } from '@/api/user'
export const useUserStore = defineStore('user', () => {
  const token = getToken()
  const isLogin = computed(() => token)

  const loginAction = async ({ username, password }) => {
    try {
      const {
        data: { token }
      } = await login({ username, password })
      console.log(token)
    } catch (e) {
      console.log(e)
    }
  }
  return {
    token,
    isLogin,
    loginAction
  }
})
