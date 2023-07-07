<!-- 主播信息页面 -->
<template>
  <div class="content-box">
    <div class="head-card">
      <div class="avatar">
        <img src="./img/avator.png" alt="" />
      </div>
      <div class="avaname">画画的babe</div>
      <div class="avatext">
        万物皆有裂痕，那是光照进来的地方。万物皆有裂痕，那是光照进来的地方。
      </div>
    </div>
    <div class="ava-tab">
      <van-tabs v-model:active="active" swipeable>
        <van-tab v-for="item in list" :key="item.value" :title="item.title">
          <template v-if="item.value == '1'">
            <div class="tab-item">
              <HerDynamic />
            </div>
          </template>
          <template v-if="item.value == '2'">
            <div class="tab-item">
              <HerInformation />
            </div>
          </template>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HerDynamic from './components/HerDynamic.vue'
import HerInformation from './components/HerInformation.vue'
const active = ref(0)
const list = ref([
  {
    title: 'Ta的动态',
    value: 1
  },
  {
    title: 'Ta的资料',
    value: 2
  }
])
</script>

<style lang="scss" scoped>
.content-box {
  box-sizing: border-box;
  background: url(./img/bg.png) no-repeat center -44px;
  background-size: 100% 230px;
  min-height: 100vh;
  padding-top: 116px;
  .head-card {
    height: 144px;
    border-radius: 20px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    background: var(--color-background);
    margin: 0 12px 12px 12px;
    // 解决上边距重叠的塌陷问题
    padding: 0.5px;
    .avatar {
      position: absolute;
      top: -25px;
      right: 50%;
      width: 64px;
      height: 64px;
      border-radius: 64px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 64px;
        margin-left: 32px;
      }
    }
    .avaname {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      margin: 50px 0 12px 0;
      padding: 0 25px;
    }
    .avatext {
      color: var(--color-888);
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      padding: 0 25px;
    }
  }
  .ava-tab {
    .tab-item {
      padding: 0 12px;
    }
  }
}
::v-deep .van-tabs__wrap {
  height: 44px;
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
::v-deep .van-tab__text--ellipsis {
  font-weight: 600;
}
::v-deep .van-tabs__line {
  width: 16px;
}
</style>
