<template>
  <div class="service-detail">
    <NavBar :border="true" :title="title" />
    <div class="content">
      <h1 class="detail-second-title">{{ titleSecond }}</h1>
      <img src="./img/money-less.png" alt="error" class="detail-money" />
      <p class="detail-describe">
        如违反我可游戏规则,系统检测后会扣除您的盈利金额以及彩金,保留本金,提款后冻结账户。如果有异议可随时联系7*24小时在线客服
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import listData from './question-list-data'

const router = useRouter()

const goBack = () => {
  router.back()
}

const title = computed(() => {
  const route = useRoute()
  const type = route.params.type
  const o = listData.find((item) => item.type === type)
  if (o) {
    return o.title
  }
  return ''
})

const titleSecond = computed(() => {
  const route = useRoute()
  const type = route.params.type
  const idx = route.params.idx
  const o = listData.find((item) => item.type === type)
  if (o) {
    return o.subList[idx].title
  }
  return ''
})
</script>

<style lang="scss" scoped>
.content{
  @include mobile-padding();
}
.detail-second-title {
  color: #111;
  font-size: 15px;
  line-height: 28px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 13px;
}
.detail-money {
  width: 345px;
}
.detail-describe {
  margin-top: 10px;
  color: #111;
  font-size: 14px;
  line-height: 28px;
}
</style>
