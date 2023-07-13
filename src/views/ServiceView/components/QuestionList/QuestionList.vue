<template>
  <div>
    <van-tabs
      v-model:active="active"
      swipeable
      line-width="30"
      :ellipsis="false"
      title-active-color="#111"
      title-inactive-color="#999"
    >
      <van-tab v-for="item in listData" :key="item.title" :title="item.title">
        <List @select="goDetail" :list="getSubList(item.subList)" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import List from '../List/List.vue'
import { computed, onMounted, ref } from 'vue'
import {  useRoute,useRouter } from 'vue-router'
import listData from '../../question-list-data'

const router = useRouter()
const active = ref(0)
const props = defineProps({
  limit: {
    type: Number,
    default: 0
  },
})
const type = computed(() => {
  return listData[active.value].type
})
onMounted(()=>{
  const route = useRoute()
  const idx = route.params.idx
  active.value = Number(idx)
})
const getSubList = (list) => {
  let len = props.limit || list.length
  return list.slice(0, len)
}
const goDetail = (idx) => {
  router.push({
    path: `/service-detail/${type.value}/${idx}`
  })
}
// 导出给父组件调用
defineExpose({
  active
})
</script>

<style lang="scss" scoped>
:deep() .van-tabs__line {
  bottom: 27px;
  left: -10px;
  height: 6px;
  opacity: 0.8;
  z-index: 0;
  @include linear-gradient(90deg, #FF9000 0%, #FF5000 100%);
}
:deep() .van-tab{
  font-size:15px;
  z-index: 1;
}
:deep() .van-tab--active span {
  font-weight: 600;
}
:deep() .van-cell {
  padding-left: 0;
  height: 54px;
}
:deep() .van-cell:after {
  margin-left: -15px;
}
:deep() .van-cell__title {
  color: #111;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
}
:deep() .van-tab--grow {
  padding-left: 0;
  padding-right: 20px;
}
:deep() .van-tabs__nav--line.van-tabs__nav--complete {
  padding-left: 2px;
}
</style>
