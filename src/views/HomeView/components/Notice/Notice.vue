<template>
  <van-notice-bar
    @click="router.push('/notice')"
    left-icon="volume-o"
    mode="link"
    color="#1989fa"
    background="#ecf9ff"
  >
    <div class="notice-list">
      <span
        class="notice-text"
        @click.stop="selectNotice(item)"
        v-for="(item, idx) in list"
        :key="idx"
      >
        {{ item.content }}
      </span>
    </div>
  </van-notice-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
const router = useRouter()
const list = [
  {
    title: '尊敬的用户您好',
    content: ' 无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。'
  },
  {
    title: '尊敬的用户您好',
    content: ' 无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。'
  },
  {
    title: '尊敬的用户您好',
    content: ' 无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。'
  },
  {
    title: '尊敬的用户您好',
    content: ' 无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。'
  }
]
// 公告
const selectNotice = (item) => {
  console.log(item)
  showConfirmDialog({
    title: item.title,
    confirmButtonText: '查看全部',
    cancelButtonText: '关闭',
    message: item.content
  })
    .then(() => {
      // on confirm
      router.push('/notice')
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped></style>
