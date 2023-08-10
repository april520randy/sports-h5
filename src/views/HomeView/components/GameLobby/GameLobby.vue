<template>
  <div class="game-lobby">
    <!-- 游戏分类导航 -->
    <div class="tab">
      <div
        :class="{ activeTab: currentGameTypeIdx === idx }"
        class="item"
        v-for="(item, idx) in tabList"
        :key="item.name"
        @click="chooseGameType(idx)"
      >
        <p>
          <span class="tab-name" v-if="currentGameTypeIdx !== idx">{{ item.name }}</span>
          <span v-else class="active-name">
            <!-- 图片暂时静态引入 -->
            <img src="../../img/banner/VIP.png" alt="" style="width:20px;height:20px">
            <!-- <img :src="item.icon" alt=""> -->
            <span>{{ item.name }}</span>
          </span>
        </p>
      </div>
    </div>
    <div class="game-view" @touchstart="touchstart">
      <div ref="scrollWrapper" class="scroll-wrapper" @scroll.stop="handleScroll">
        <div class="game-list">
          <div
            ref="itemRefs"
            :class="{ active: delayCurrentGameIdx === idx }"
            class="item"
            v-for="(item, idx) in gameList"
            :key="item.name"
            @click="play(item)"
          >
            <div class="img-box"></div>
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
      <div class="current-game-view">
        <h3 class="title">{{ currentGame.name }}</h3>
      </div>
      <van-button size="small" @click="play(currentGame)" type="default">进入游戏</van-button>
    </div>
  </div>
</template>

<script setup>
import gameData from './gameList'
import { ref, computed, watch } from 'vue'
import { debounce, throttle } from 'lodash'
import { useRouter } from 'vue-router'
import { jumpExternalLink } from '@/utils'
const router = useRouter()
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
let isClickSelected = false // 是否为用户点选游戏分类导致的滚动
watch(
  currentGameIdx,
  debounce(async () => {
    delayCurrentGameIdx.value = currentGameIdx.value
  }, 300)
)
// 标识用户触发滚动
const touchstart = () => {
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
  if (noNeedDelay) {
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

// 进入游戏
const play = (item) => {
  console.log(item)
  jumpExternalLink({
    url: 'https://gci.btyzrgame66.com/403.html',
    title: item.name,
    type: 1,
    router
  })
}
</script>

<style lang="scss" scoped>
.game-lobby {
  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url('../../img/banner/tab.png') no-repeat center center;
    background-size: 100% 100%;
    height: 45px;
    padding:0 20px;
    // border:1px solid green;
    .item {
      text-align: center;
      // width: 50px;
      border-radius: 5px;
      transition: all 0.2s ease-in;
      // border:1px solid red;
      padding: 5px 0;
      .icon-box {
        // border:1px solid blue;
        width: 24px;
        height: 24px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &.active {
        background: #333;
        color: #fff;
      }
      .active-name{
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        width:69px;
        height:30px;
        margin-bottom: 8px;;
        background: url(../../img/banner/tab-bg.png) no-repeat center center;
        background-size: 100% 100%;
        border-radius: 5px;
        span{
          color: #FFF;
          font-family: 'TencentSans';
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
    .tab-name{
      color: #111;
      font-family: 'TencentSans';
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: inline-block;
      margin-bottom: 8px;;
    }
  }
  .game-view {
    position: relative;
    background: #eee;
  }
  .scroll-wrapper {
    $viewportHeight:var(--app-height);
    $bannerHeight: 144px;
    $noticeHeight: 40px;
    $userCenterHeight: 60px;
    $tabHeight: 60px;
    $paddingBottomHeight: 90px;
    $scrollHeight: calc(
      $viewportHeight - $bannerHeight - $noticeHeight - $userCenterHeight - $tabHeight - $paddingBottomHeight
    );
    overflow: auto;
    height: $scrollHeight;
    border-radius: 8px;
    z-index: 2;
    .game-list {
      padding-bottom: calc($scrollHeight - 200px);
      .item {
        $height: 100px;
        height: $height;
        width: $height;
        background: #ccc;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
          background: #333;
          color: #fff;
        }
      }
    }
  }

  .current-game-view {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding-left: 100px;
    background: #666;
    color: #fff;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 40px;
    }
  }
  .van-button {
    position: absolute;
    z-index: 999;
    bottom: 30px;
    left: 50%;
  }
}
</style>
