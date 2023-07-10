import { useRouter } from 'vue-router'
import { useRouterStore } from '@/stores/router'
export default function useTouchEvent() {
  const router = useRouter()
  const routerStore = useRouterStore()
  let touchStartX = 0
  let touchEndX = 0
  let touchStartY = 0
  let touchEndY = 0
  const threshold = 50

  function handleGesture() {
    let diffX = touchEndX - touchStartX
    let diffY = touchEndY - touchStartY

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // 检查是否是水平滑动
      if (diffX > 0 && touchStartX < threshold) {
        console.log('Swiped right')
        routerStore.setIsIosTouchEventBack(true)
        router.back()
      }
      if (diffX < 0 && touchStartX > window.innerWidth - threshold) {
        console.log('Swiped left')
        routerStore.setIsIosTouchEventForward(true)
        router.go(1)
      }
    }
  }

  window.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].pageX
      touchStartY = event.changedTouches[0].pageY
    },
    false
  )

  window.addEventListener(
    'touchend',
    (event) => {
      touchEndX = event.changedTouches[0].pageX
      touchEndY = event.changedTouches[0].pageY
      handleGesture()
    },
    false
  )
}
