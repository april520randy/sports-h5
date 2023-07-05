<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <UserHeader />
    </div>
    <div class="scroll-view">
      <VIP v-if="user.isLogin" />
      <MyAssets />
      <div class="invit-box flex">
        <div class="invit-left">
          <div class="invit-img">
            <img src="./img/avavt.png" />
          </div>
          <div class="invit-txt">
            <div class="txt-one">邀请好友</div>
            <div class="txt-two">呼朋唤友 齐赚彩金</div>
          </div>
        </div>
        <div class="invit-right">
          <div class="pick">分享</div>
        </div>
      </div>
      <MyMenu />
      <div class="event-img">
        <img src="./img/Rectangle 430.png" />
      </div>
      <div class="cell-group">
        <van-cell-group>
          <van-cell icon="photo-o" is-link>
            <template #title>
              <span class="custom-title">设置</span>
            </template>
          </van-cell>

          <van-cell title="意见反馈" icon="shop-o" is-link to="/about-us"> </van-cell>
        </van-cell-group>
        <van-button v-if="user.isLogin" @click="confirmLogOut" type="default" block plain
          >退出登录</van-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import UserHeader from './components/UserHeader/UserHeader.vue'
import VIP from './components/VIP/VIP.vue'
import MyAssets from './components/MyAssets/MyAssets.vue'
import MyMenu from './components/MyMenu/MyMenu.vue'
import { showConfirmDialog } from 'vant'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const confirmLogOut = () => {
  showConfirmDialog({
    title: '确定退出当前账号吗?'
  })
    .then(() => {
      // on confirm
      user.logOutAction()
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 15px;
  background: url('./img/bg.png') no-repeat;
  background-size: 100% 100%;
}
.header-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 73px;
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
}
.scroll-view {
  padding-top: 52px;
  .invit-box {
    height: 66px;
    margin-top: 15px;
    padding: 15px 15px 15px 22px;
    border-radius: 8px 8px 0px 0px;
    background: #f5f5f5;
    .invit-left {
      display: flex;
      .invit-img {
        width: 36px;
        height: 36px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .invit-txt {
        margin-left: 10px;
        .txt-one {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .txt-two {
          font-size: 12px;
          color: --color-grey;
        }
      }
    }
    .invit-right {
      .pick {
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
        width: 50px;
        height: 28px;
        border-radius: 6px;
        line-height: 28px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .event-img {
    margin: 15px 0;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cell-group {
    border-radius: 8px;
    background-color: aqua;
  }
}
</style>
