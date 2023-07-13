<template>
  <div>
    <NavBar :title="title" />
    <div class="iframe-wrapper" id="iframeWrapper">
      <iframe
        v-if="url"
        :src="url"
        id="iframe"
        width="100%"
        height="100%"
        frameborder="0"
        name="iframe"
      ></iframe>
    </div>
    <van-loading v-if="loading" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
const route = useRoute()
let { title, url } = route.query
url = atob(url)
defineProps({
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: false
  }
})
onMounted(() => {
  handleLoad()
  // setIframeHeight()
})
const handleLoad = () => {
  let iframeDom = document.getElementById('iframe')
  showLoadingToast({
    duration: 0,
    forbidClick: true
  })
  let iframeLoad = () => {
    closeToast()
    //移除监听器
    iframeDom.removeEventListener('load', iframeLoad, true)
  }
  iframeDom.addEventListener('load', iframeLoad, true)
}
// const setIframeHeight = () => {
//   const headerHeight = 44
//   document.getElementById('iframeWrapper').style.height = window.innerHeight - headerHeight + 'px'
// }
</script>

<style lang="scss" scoped>
#iframeWrapper {
  overflow: hidden;
  height: calc(var(--app-height) - 44px);
}
</style>
