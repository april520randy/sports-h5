import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useRouterStore = defineStore('router',()=>{
  const isBack = ref(false)
  const setIsBackStatus = (bool)=>{
    isBack.value = bool
  }
  return {isBack,setIsBackStatus}
})