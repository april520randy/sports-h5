<template>
  <div class="send-code">
    <span @click="sendCode" v-if="available">获取验证码</span>
    <p v-else>
      <!-- <van-count-down @finish="onFinish" :time="time" format="sss" /> -->
      <van-count-down @finish="onFinish"  :time="time">
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
const props = defineProps({
  phone: {
    type: String,
    default: ''
  }
})
const available = ref(true)
const time = ref(60 * 1000)
const onFinish = () => {
  available.value = true
}
const sendCode = () => {
  // if (!props.phone) {
  //   showToast('请输入手机号')
  //   return
  // }
  // if (!Reg.phoneReg.test(props.phone)) {
  //   showToast('手机号格式错误')
  //   return
  // }
  // 发送验证码请求
  available.value = false
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
