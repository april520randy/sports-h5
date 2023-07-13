<template>
  <div class="my-menu">
    <div class="list">
      <div @click="selectMenu(item)" class="menu-item" v-for="item in list" :key="item.title">
        <p>
          <img :src="item.Imgpath" alt="" />
        </p>
        <p>
          <span>{{ item.title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const list = [
  {
    title: '投注记录',
    path: '/bet-record',
    Imgpath: new URL('./img/touzhu.png', import.meta.url).href
  },
  {
    title: '资金明细',
    path: '/transaction-record',
    Imgpath: new URL('./img/zijin.png', import.meta.url).href
  },
  {
    title: '福利中心',
    path: '/welfare',
    Imgpath: new URL('./img/fuli.png', import.meta.url).href
  },
  {
    title: '优惠活动',
    path: '/activity',
    Imgpath: new URL('./img/youhui.png', import.meta.url).href
  },
  {
    title: '商务合作',
    path: '/service-business',
    Imgpath: new URL('./img/shangwu.png', import.meta.url).href
  },
  {
    title: '赞助信息',
    path: '/sponsor',
    Imgpath: new URL('./img/zanzhu.png', import.meta.url).href
  },
  {
    title: '常见教程',
    path: '/help',
    Imgpath: new URL('./img/jiaocheng.png', import.meta.url).href
  },
  {
    title: '安全中心',
    path: '/personal-center',
    Imgpath: new URL('./img/anquan.png', import.meta.url).href
  }
]

const selectMenu = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
// 引用静态图片
</script>

<style lang="scss" scoped>
.my-menu {
  border-radius: 0 0 8px 8px;
  padding: 15px 0 0;
  background: #fff;
  .list {
    overflow: hidden;
    .menu-item {
      float: left;
      width: 25%;
      text-align: center;
      margin-bottom: 15px;
      span {
        font-size: 12px;
        color: #111;
      }
      img {
        width: 42px;
        height: 36px;
        margin-bottom: 6px;
      }
      // .van-icon {
      //   font-size: 24px;
      // }
    }
  }
}
</style>
