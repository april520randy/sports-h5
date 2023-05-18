import axios from 'axios'
import { ERR_EXPIRED, ERR_OK } from '@utils/config'
import { getPageOpenedCurrentTimestamp } from '@/utils/cache'
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
    }
    if (code !== ERR_OK) {
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
  // 杜绝重复执行一下代码块
  if (!window.hasExpiredExecuteFlag) {
    window.hasExpiredExecuteFlag = true
    /*
      后台验证token状态过期的两种情况：
      1.长时间停留在页面未动，当用户再次回来操作时，此时要弹框提示过期
      2.在使用应用的过程中被其他设备登录挤掉了，此时要弹框提示过期
      3.关闭应用后，过了段时间回来重新打开应用，并使用了上次存的token，此时就不该提示过期弹框

      在代码上如何界定这3中情况呢? 
      你会发现 情景1/2都是应用处于运行或者在后台运行状态，即没有关闭应用，它们需要弹框提示过期.
      情景3是应用关闭了，再重新打开则需要弹框
      于是问题迎刃而解，只要判断当前应用是处于一个长期运行状态还是刚打开状态即可

      在App.vue里启动一个定时器定时存储当前时间戳 模拟 心跳检测
      假设当前应用状态属于情景1/2，则 当前时间戳 - 最近一次应用心跳时间戳 ≈ 网络接口响应时长
      假设当前应用状态属于情景3，则 当前时间戳 -  最近一次应用心跳时间戳 > 网络接口响应时长
    */
    // 获取最近一次应用心跳的时间戳
    let lastPageOpenedTimeStamp = getPageOpenedCurrentTimestamp()
    // 当前时间
    let thisTime = new Date()
    // 最大网络接口响应时长
    let maxResponseTime = 10000
    // 容差值 考虑到心跳检测的1秒延时
    const toleranceValue = 1000
    // 摩擦值 考虑到代码执行时长，也定个1秒吧
    const frictionValue = 1000
    // 获得最终值
    const finalValue = maxResponseTime + toleranceValue + frictionValue
    // 判断为情景3，即应用在关闭后重新启动，可以亲切称之为longTimeNoSee
    let longTimeNoSee = thisTime - lastPageOpenedTimeStamp > finalValue
    if (longTimeNoSee) {
      // 执行退出
      dispatch('logOut')
      // 刷新页面
      // location.reload()
    } else {
      // 弹框提示登录失效
      loginStatusExpired(Dialog, store, Router)
    }
  }
}
