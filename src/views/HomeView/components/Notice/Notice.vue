<template>
  <van-notice-bar
    @click="router.push('/message')"
    left-icon="volume-o"
    mode="link"
    color="#1989fa"
    background="#ecf9ff"
  >
    <template #left-icon>
      <img src="../../img/banner/volumn.png" alt="">
    </template>
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
  showConfirmDialog({
    title: item.title,
    confirmButtonText: '查看全部',
    cancelButtonText: '关闭',
    message: item.content
  })
    .then(() => {
      // on confirm
      router.push('/message')
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped>
.van-notice-bar{
  height:24px;
  img{
    width:14px;
    height:14px;
    margin-right:4px;
  }
}
.notice-text{
  color: #666;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

:deep() .van-icon-arrow{
  display: none;
}
</style>
