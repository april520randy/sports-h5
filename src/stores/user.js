import { computed } from 'vue'
import { defineStore } from 'pinia'
import { getToken } from '@/utils/cache'
export const useUserStore = defineStore('user', () => {
  const token = getToken()
  const isLogin = computed(() => token)

  const loginAction = async ({username,password})=>{
  }
  return {
    token,
    isLogin,
    loginAction
  }
})

