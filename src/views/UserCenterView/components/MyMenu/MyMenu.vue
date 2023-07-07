<template>
  <div class="my-menu">
    <div class="list">
      <div @click="selectMenu(item)" class="menu-item" v-for="item in list" :key="item.title">
        <p>
          <!-- <van-icon name="photo-o" /> -->
          <img :src="imgPath(item.Imgpath)" alt="" />
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
import { ref } from 'vue'
const router = useRouter()
const list = ref([
  {
    title: '投注记录',
    path: '/deposit',
    Imgpath: `../../img/touzhu.png`
  },
  {
    title: '资金明细',
    path: '/withdraw',
    Imgpath: `../../img/zijin.png`
  },
  {
    title: '福利中心',
    path: '/transfer',
    Imgpath: `../../img/fuli.png`
  },
  {
    title: '优惠活动',
    path: '/personal-center',
    Imgpath: `../../img/youhui.png`
  },
  {
    title: '商务合作',
    path: '/message',
    Imgpath: `../../img/shangwu.png`
  },
  {
    title: '赞助信息',
    path: '/transaction-record',
    Imgpath: `../../img/zanzhu.png`
  },
  {
    title: '常见教程',
    path: '/bet-record',
    Imgpath: `../../img/jiaocheng.png`
  },
  {
    title: '安全中心',
    path: '/welfare',
    Imgpath: `../../img/anquan.png`
  }
])

const selectMenu = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
// 引用静态图片
const imgPath = (fileName) => {
  return new URL(fileName, import.meta.url).href
}
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
