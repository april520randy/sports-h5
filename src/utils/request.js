import axios from 'axios'
import { ERR_EXPIRED, ERR_OK } from '@utils/config'
const service = axios.create()
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Toast(error.message)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    let { data } = response
    const { code, msg } = data
    // 登录状态已失效
    if (code === ERR_EXPIRED) {
      executeExpiredLogic()
    } else if (code !== ERR_OK) {
      Toast(msg)
    }
    return data
  },
  (error) => {
    Toast(error.message)
    return Promise.reject(error)
  }
)
export default service

// 登录状态过期逻辑
const executeExpiredLogic = () => {
  // 杜绝重复执行以下代码块
  if (!window.hasExpiredExecuteFlag) {
    window.hasExpiredExecuteFlag = true
    /*
      后台验证token状态过期的情景：
      1.长时间停留在页面未动，当用户再次回来操作时，此时要弹框提示过期
      2.在使用应用的过程中被其他设备登录挤掉了，此时要弹框提示过期
      3.关闭应用后，过了很长时间回来重新打开应用，并使用了上次存的token，此时就不该提示过期弹框，要直接执行退出逻辑

      在代码上如何界定这3种情况呢? 
      你会发现 情景1/2都是应用处于运行或者在后台运行状态，即没有关闭应用，它们需要弹框提示过期.
      情景3是应用关闭了，过了很长时间下次重新打开时则不应该弹框提示登录过期
      于是问题迎刃而解，只要判断当前应用是处于一个长期在运行状态还是重新开启运行状态即可

    */
    // 如果当前应用处于长期运行状态
    if (window.isAppLongRunStatus) {
      // 弹框提示登录失效
      loginStatusExpired(Dialog, store, Router)
    } else {
      // 执行退出
      dispatch('logOut')
      // 刷新页面
      // location.reload()
    }
  }
}
