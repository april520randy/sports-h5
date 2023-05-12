<template>
  <div class="home-wrapper">
    <!-- 头 -->
    <header>
      <div class="left">
        <div @click="toggleMenu" class="icon-menu">
          <van-icon name="bars" size="24" />
        </div>
        <IconSport @click.stop class="icon-sport" />
      </div>
      <div class="right">
        <van-icon @click="serivce" name="service-o" size="24" />
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="swiper-wrapper">
      <van-swipe indicator-color="#d42f21" :autoplay="3000" lazy-render :height="144">
        <van-swipe-item @click="selectBanner(item)" v-for="(item, idx) in images" :key="idx">
          <img :src="item.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 滚动公告栏 -->
    <van-notice-bar
      @click="router.push('/notice')"
      left-icon="volume-o"
      mode="link"
      color="#1989fa"
      background="#ecf9ff"
    >
      <div class="notice-list">
        <span class="notice-text" @click.stop="selectNotice(item)" v-for="item in 10" :key="item">
          无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。
        </span>
      </div>
    </van-notice-bar>
    <!-- 用户中心精简版 -->
    <div class="user-center-simple">
      <div class="info">
        <div class="user">
          <span class="username">ryder999</span>
          <van-tag style="margin-left: 5px" type="primary">VIP9</van-tag>
        </div>
        <h3 class="amount">￥999.99</h3>
      </div>
      <div class="fast-way">
        <div
          @click="router.push(item.path)"
          class="item"
          v-for="item in fastWayList"
          :key="item.title"
        >
          <p>
            <van-icon name="photo-o" size="24" />
          </p>
          <p>
            <span>{{ item.title }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 游戏大厅 -->
    <div class="game-lobby">
      <div class="tab">
        <div class="item" v-for="item in tabList" :key="item.name">
          <p>
            <van-icon name="photo-o" size="24" />
          </p>
          <p>
            <span>{{ item || '体育' }}</span>
          </p>
        </div>
      </div>
      <div class="scroll-wrapper">
        <div class="game-list">
          <div class="item" v-for="item in gameList" :key="item.name">
            <div class="img-box"></div>
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 侧边设置菜单 -->
  <van-popup v-model:show="showMenu" position="left" :style="{ width: '70%', height: '100%' }">
    <div class="menu-content">
      <h2>快速设置</h2>
      <van-icon @click="showMenu = false" name="close" size="24" />
      <!-- 我的消息 -->
      <div class="item message">
        <van-cell is-link>
          <template #title>
            <div class="left-cell">
              <van-icon @click="serive" name="chat-o" size="24" />
              <span class="custom-title">我的消息</span>
            </div>
          </template>
        </van-cell>
      </div>
      <div class="item">
        <h4>盘口设置</h4>
        <van-radio-group v-model="gateChecked">
          <van-radio name="1">欧洲盘</van-radio>
          <van-radio name="2">香港盘</van-radio>
        </van-radio-group>
      </div>
      <div class="item">
        <h4>投注设置</h4>
        <van-radio-group v-model="betChecked">
          <van-radio name="1">自动接收更好的赔率</van-radio>
          <van-radio name="2">自动接收任何赔率</van-radio>
          <van-radio name="3">不接收任何赔率变动</van-radio>
        </van-radio-group>
      </div>
      <div class="item">
        <h4>语言模式</h4>
        <van-radio-group v-model="langChecked">
          <van-radio name="1">中文</van-radio>
          <van-radio name="2">English</van-radio>
        </van-radio-group>
      </div>
    </div>
  </van-popup>
</template>
<script setup>
import IconSport from '@/components/icons/IconSport.vue'
import gameData from './gameList'
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { resolvePath } from '@/utils'
const router = useRouter()
const currentPath = import.meta.url
// 侧边菜单
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// 设置页
const formData = reactive({
  gateChecked: '1',
  betChecked: '3',
  langChecked: '1'
})
const { gateChecked, betChecked, langChecked } = toRefs(formData)

// 跳转客服
const serivce = () => {
  router.push('/service')
}
// 轮播图
const images = [
  {
    id: 1,
    img: resolvePath('./img/banner/banner-1.png', currentPath)
  },
  {
    id: 2,
    img: resolvePath('./img/banner/banner-2.png', currentPath)
  }
]
const selectBanner = (item) => {
  console.log(item)
  router.push(`/activity/${item.id}`)
}
// 公告
const selectNotice = (item) => {
  console.log(item)
}

// 快捷通道
const fastWayList = [
  {
    title: '存款',
    path: '/deposit'
  },
  {
    title: '取款',
    path: '/withdraw'
  },
  {
    title: '转账',
    path: '/transfer'
  },
  {
    title: 'VIP',
    path: '/vip-center'
  }
]
// 游戏列表
const tabList = gameData.map((item) => item.name)
const gameList = gameData.reduce((accumulator, item) => {
  return [...accumulator, ...item.gameList]
}, [])
</script>

<style lang="stylus" scoped>
.home-wrapper{
  padding 0 15px
}
.icon-sport {
  width: 35px;
  height: @width;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  background #fff
  .left{
    display flex
    align-items center
    .icon-menu{
      width 24px
      height @width
    }
  }
}
.swiper-wrapper{
  .van-swipe{
  img{
    width 100%
    border-radius 10px
    height 144px
  }
}
}
.notice-list{
  display flex
}
.notice-text{
  height 40px
  line-height @height
  margin-right 20px
  &:last-child{
    margin-right 0
  }
}

.user-center-simple{
  // background #ddd
  display flex
  justify-content space-between
  align-items center
  padding 10px 0
  height 80px
  span.username{
    margin-right 5px
    font-size 16px
  }
  .amount{
    font-weight 600
  }
  .fast-way{
    display flex
    .item{
      margin-right 10px
      text-align center
      &:last-child{
        margin-right 0
      }
    }

  }
}
.game-lobby{
  .tab{
    display flex
    justify-content space-between
    .item{
      text-align center
      width 50px
      height 50px
    }
  }
  .scroll-wrapper{
    overflow auto
    height calc(100vh - 50px - 144px - 40px - 80px - 50px - 50px)
    background #eee
    .game-list{
      // overflow-y scroll
      // overscroll-behavior: none;
      .item{
        height 100px
        width @height
        border 1px solid red
        margin-bottom 10px
        display flex
        align-items center
        justify-content center
      }
  }
  }
}
.menu-content{
  padding 15px
  .van-icon-close{
    position absolute
    right 20px
    top 20px
  }
  h2{
    margin-bottom 20px
  }
  .item{
    padding-bottom 10px
    border-bottom 1px solid #eee
    margin-bottom 15px
    h4{
      font-weight 600
      margin-bottom 10px
    }
    &.message{
      .van-cell{
        padding 0
      }
      .left-cell{
        display flex
        align-items center
        span{
          margin-left 5px
        }
      }
    }

    .van-radio{
      margin-bottom 5px
    }
  }


}
</style>
