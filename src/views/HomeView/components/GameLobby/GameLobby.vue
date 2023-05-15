<template>
  <div class="game-lobby">
    <!-- 游戏分类导航 -->
    <div class="tab">
      <div
        :class="{ active: currentGameTypeIdx === idx }"
        class="item"
        v-for="(item, idx) in tabList"
        :key="item.name"
        @click="chooseGameType(idx)"
      >
        <p>
          <van-icon name="photo-o" size="24" />
        </p>
        <p>
          <span>{{ item.name || '体育' }}</span>
        </p>
      </div>
    </div>
    <div class="game-view"  @touchstart="touchstart">
      <div ref="scrollWrapper" class="scroll-wrapper" @scroll.stop="handleScroll">
        <div class="game-list">
          <div
            ref="itemRefs"
            :class="{ active: delayCurrentGameIdx === idx }"
            class="item"
            v-for="(item, idx) in gameList"
            :key="item.name"
          >
            <div class="img-box"></div>
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
      <div class="current-game-view">
        <h3 class="title">{{ currentGame.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import gameData from './gameList'
import { ref, computed, watch } from 'vue'
import { debounce, throttle } from 'lodash'
console.log(gameData)
// 游戏列表
const tabList = [...gameData]
const gameList = gameData.reduce((accumulator, item) => {
  item.gameList.forEach((g) => {
    if (g.gameType === 4) {
      g.gameType = 3
    }
  })
  return [...accumulator, ...item.gameList]
}, [])

const itemRefs = ref([]) // 游戏列表dom
const currentGameTypeIdx = ref(0) // 当前游戏分类索引
const currentGameIdx = ref(0) // 当前游戏索引
const currentGame = computed(() => gameList[currentGameIdx.value]) // 当前游戏
const delayCurrentGameIdx = ref(0) // 延迟选中游戏效果的索引
let isClickSelected = false// 是否为用户点选游戏分类导致的滚动
watch(
  currentGameIdx,
  debounce(async () => {
    delayCurrentGameIdx.value = currentGameIdx.value
  }, 300)
)
// 标识用户触发滚动
const touchstart = ()=>{
  isClickSelected = false
}
// 滚动回调
const handleScroll = throttle(($event) => {
  const scrollTop = $event.target.scrollTop
  // 设置游戏选中项
  itemRefs.value.forEach((item, idx) => {
    const offsetTop = item.offsetTop
    if (scrollTop > offsetTop) {
      setGameItemSelected(idx + 1)
    } else if (scrollTop === offsetTop) {
      setGameItemSelected(idx)
    }
  })
  // 处理最后一个游戏边界
  if (currentGameIdx.value === itemRefs.value.length) {
    setGameItemSelected(itemRefs.value.length - 1)
  }
  // 设置游戏分类
  const typeIdx = gameData.findIndex((item) => item.gameType === currentGame.value.gameType)
  setGameType(typeIdx)

  // 选中第一个游戏或最后一个游戏时，不需要延迟选中
  const firstGame = !currentGameIdx.value
  const lastGame = currentGameIdx.value === itemRefs.value.length - 1
  const noNeedDelay = [firstGame, lastGame, isClickSelected].some((bool) => bool)
  if(noNeedDelay){
    delayCurrentGameIdx.value = currentGameIdx.value
  }
}, 0)
// 设置游戏选中项
const setGameItemSelected = (idx) => {
  currentGameIdx.value = idx
}
// 设置游戏分类
const setGameType = (idx) => {
  currentGameTypeIdx.value = idx
}
// 点选游戏分类
const chooseGameType = (idx) => {
  isClickSelected = true
  setGameType(idx)
  // 滚动到指定位置
  scrollToThere(idx)
}
// 根据游戏分类索引滚动到指定位置
const scrollWrapper = ref(null)
const scrollToThere = (idx) => {
  const firstGameIdx = gameList.findIndex((item) => item.gameType === tabList[idx].gameType)
  const firstGameDom = itemRefs.value[firstGameIdx]
  scrollWrapper.value.scrollTo({
    left: 0,
    top: firstGameDom.offsetTop
    // behavior: 'smooth'
  })
}
</script>

<style lang="stylus" scoped>
.game-lobby{
  .tab{
    display flex
    justify-content space-between
    padding-bottom 10px
    .item{
      text-align center
      width 50px
      height 50px
      border-radius 5px
      &.active{
        background #333
        color #fff
      }
    }
  }
  .game-view{
    position relative
    background #eee
  }
  .scroll-wrapper{
    overflow auto
    height calc(100vh - 50px - 144px - 40px - 80px - 50px - 50px - 10px)
    border-radius 8px
    z-index 2
    .game-list{
      padding-bottom 200px
      .item{
        height 100px
        width @height
        background #ccc
        margin-bottom 10px
        display flex
        align-items center
        justify-content center
        &.active{
          background #333
          color #fff
        }

      }
    }
  }

  .current-game-view{
      position absolute
      top 0
      right 0
      z-index 1
      padding-left 100px
      background #666
      color #fff
      border-radius 8px
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      .title{
        font-size 40px
      }

    }
}
</style>
