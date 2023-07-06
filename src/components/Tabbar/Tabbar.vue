<template>
  <div>
    <van-tabbar :border="false" class="tabbar-wrapper" route v-model="active">
      <van-tabbar-item v-for="item in list" :key="item.path" :to="item.path" :badge="item.badge">
        <span class="label">{{item.title}}</span>
        <template #icon="props">
          <div :class="{center:item.isCenter,rubberBand:props.active}" class="icon-box">
            <img :src="props.active ? item.activeIcon : item.inactiveIcon" />
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { resolvePath } from '@/utils'
// import { useRouter } from 'vue-router'
// const router = useRouter()
const active = ref(0)
const list = [
  {
    title: '滚球',
    path: '/sports',
    activeIcon: resolvePath('./img/sports-active.png', import.meta.url),
    inactiveIcon: resolvePath('./img/sports-inactive.png', import.meta.url)
  },
  {
    title: '优惠',
    path: '/activity',
    activeIcon: resolvePath('./img/activity-active.png', import.meta.url),
    inactiveIcon: resolvePath('./img/activity-inactive.png', import.meta.url)
  },
  {
    title: '娱乐城',
    path: '/',
    activeIcon: resolvePath('./img/home-active.png', import.meta.url),
    inactiveIcon: resolvePath('./img/home-inactive.png', import.meta.url),
    isCenter:true
  },
  {
    title: '发现',
    path: '/discover',
    activeIcon: resolvePath('./img/discover-active.png', import.meta.url),
    inactiveIcon: resolvePath('./img/discover-inactive.png', import.meta.url)
  },
  {
    badge:2,
    title: '我的',
    path: '/user-center',
    activeIcon: resolvePath('./img/user-active.png', import.meta.url),
    inactiveIcon: resolvePath('./img/user-inactive.png', import.meta.url)
  }
]
</script>

<style lang="scss" scoped>
.tabbar-wrapper {
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.1);
  .label {
    font-size: 12px;
  }
  .icon-box {
    $iconSize: 30px;
    width: $iconSize;
    height: $iconSize;
    // border:1px solid red;
    img{
      width:100%;
      height:100%;
    }
    &.center{
      $iconBigSize:58px;
      width:$iconBigSize;
      height:$iconBigSize;
      // transform: scale(1.8);
      margin-top:-28px;

    }
  }
}
</style>
