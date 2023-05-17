<template>
  <van-tabs title-active-color="#1989fa" v-model:active="active" sticky animated swipeable>
    <van-tab v-for="tab in tabs" :title="tab.name" :key="tab.name">
      <div class="list">
        <div @click="onClickActivity(item)" v-for="item in tab.list" :key="item.actId" class="item">
          <div class="img-box">
            <img :src="activityImg" alt="" />
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import activityList from './data'
import activityImg from './img/activity.png'
import { groupBy } from 'lodash'
import { ref } from 'vue'
// import { jumpExternalLink } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const getName = (num) => {
  switch (num) {
    case 7:
      return '限时'
    case 8:
      return '新人'
    case 9:
      return '日常'
    case 10:
      return 'VIP'
    default:
      return '全部'
  }
}
let tabs = activityList.map((item) => item.actType)
const categoryData = groupBy(activityList, 'actType')
tabs = [...new Set(tabs)]
tabs = tabs.map((tab) => {
  let item = {}
  item.name = getName(tab)
  item.list = categoryData[tab]
  return item
})
tabs.unshift({ name: '全部', list: activityList })

const active = ref(0)

const onClickActivity = (item) => {
  router.push(`/activity/${item.actId}`)
  // jumpExternalLink({
  //   url:`https://m-w9.btyyl1.com/${item.pcUrl}`
  // })
}
</script>
<style lang="scss" scoped>
.list {
  padding: 0 15px;
  .item {
    margin-top: 10px;
  }
}
.img-box {
  img {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
<style lang="scss">
.van-tab__panel {
  min-height: calc(100vh - 44px - 55px);
}
</style>
