<template>
  <div class="send-code">
    <span @click="sendCode" v-if="available">获取验证码</span>
    <p v-else>
      <!-- <van-count-down @finish="onFinish" :time="time" format="sss" /> -->
      <van-count-down @finish="onFinish" :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.seconds }}s后重发</span>
        </template>
      </van-count-down>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import Reg from '@/utils/reg'
import { sendCodeApi } from '@/api/sendCode'
import { ERR_OK } from '@/utils/config'
const props = defineProps({
  phone: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: [String, Number],
    default: ''
  }
})
const available = ref(true)
const time = ref(60 * 1000)
const onFinish = () => {
  available.value = true
}
const sendCode = () => {
  const type = props.type
  console.log(type)
  // 找回密码 -- 获取验证码
  if (type === 1) {
    requestSendCodeApi()
    return
  }
  // 需要验证手机
  if (!props.phone) {
    showToast('请输入手机号')
    return
  }
  if (!Reg.i18nPhoneReg.test(props.phone)) {
    showToast('手机号格式错误')
    return
  }
  requestSendCodeApi()
}
// 请求发送验证码api
const requestSendCodeApi = async () => {
  // 请求后台...
  const { phone, code } = props
  const res = await sendCodeApi({ phone, code })
  if (res.code === ERR_OK) {
    // 请求成功后
    available.value = false
  } else {
    showToast(res.msg)
  }
}
</script>

<style lang="scss" scoped>
.send-code {
  color: var(--color-primary);
}
</style>
<style lang="scss">
.send-code {
  .van-count-down {
    // color: var(--color-primary);
  }
}
</style>
