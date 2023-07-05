<template>
  <div class="my-assets">
    <div class="box">
      <div class="asset-top">
        <div>总资产</div>
        <div class="more-btn">更多VIP特权</div>
      </div>
      <div class="asset-mid flex">
        <div class="amount" v-if="user.isLogin">79009</div>
        <div class="amount-more" v-else>登录后查看</div>
        <div class="stor-btn">
          <div class="pick acces">提款</div>
          <div class="save acces">存款</div>
        </div>
      </div>
      <div class="asset-bar">
        <div class="v-left">
          <img src="../../img/v1.png" />
        </div>
        <div class="progress-box">
          <div class="progress-text">晋级还需 <text>￥400000.00</text> 流水</div>
          <div class="bg-line bg">
            <div class="line inner"></div>
          </div>
        </div>
        <div class="v-left">
          <img src="../../img/v2.png" />
        </div>
      </div>
      <div class="asset-bot">
        <div class="bot">
          <div class="bot-icon">
            <img src="../../img/right.png" alt="" />
          </div>
          <div>晋级礼金</div>
        </div>
        <div class="bot">
          <div class="bot-icon">
            <img src="../../img/right.png" alt="" />
          </div>
          <div>每周礼金</div>
        </div>
        <div class="bot">
          <div class="bot-icon">
            <img src="../../img/right.png" alt="" />
          </div>
          <div>生日礼金</div>
        </div>
        <div class="bot">
          <div class="bot-icon">
            <img src="../../img/right.png" alt="" />
          </div>
          <div>高额返水</div>
        </div>
      </div>

      <!-- <div class="block">
        <div class="label">
          <span>中心钱包</span>
          <div class="icon" @click="toggle">
            <van-icon v-if="!isShowAmount" name="closed-eye" />
            <van-icon v-if="isShowAmount" name="eye-o" />
          </div>
        </div>
        <div class="amount">
          <h3>{{ filterAmount }}</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { showLoadingToast } from 'vant'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
// 一键回收
const oneKeyRecevie = () => {
  showLoadingToast({
    forbidClick: true,
    duration: 1500
  })
}
// 切换金额
const toggle = () => {
  isShowAmount.value = !isShowAmount.value
}
const isShowAmount = ref(true)
const filterAmount = computed(() => {
  return isShowAmount.value ? `￥${user.userInfo.balance || 0}` : '******'
})
</script>

<style lang="scss" scoped>
.my-assets {
  margin-top: 13px;
  .box {
    background: url('../../img/Rectangle.png') no-repeat;
    background-size: 100% 100%;
    border-radius: 8px;
    padding: 15px 15px 10px 15px;
    .asset-top {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 10px;
      .more-btn {
        color: var(--color-grey);
        font-size: 12px;
        font-weight: 400;
      }
    }
    .asset-mid {
      margin-bottom: 19px;
      .amount {
        font-size: 22px;
        font-weight: 700;
      }
      .amount-more {
        font-size: 16px;
        font-weight: 600;
      }
      .acces {
        width: 50px;
        height: 28px;
        border-radius: 6px;
        line-height: 28px;
        font-size: 14px;
        text-align: center;
      }
      .stor-btn {
        display: flex;
        .pick {
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }
        .save {
          color: #fff;
          background: linear-gradient(93deg, #ff9000 0%, #ff5000 100%);
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
          margin-left: 14px;
        }
      }
    }
    .asset-bar {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      // width: 100%;
      .v-left {
        width: 11%;
        height: 40px;
        img {
          width: 38px;
          height: 40px;
          // width: 100%;
          // height: 100%;
        }
      }
      .progress-box {
        width: 78%;
        margin: 0 8px 0 11px;
        .progress-text {
          color: #666;
          text-align: center;
          font-size: 12px;
          margin-bottom: 4px;
          text {
            color: #f53f3f;
          }
        }
        .bg {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
        }
        .bg-line {
          background: rgba(0, 0, 0, 0.1);
        }

        .inner {
          height: 100%;
          border-radius: 4px;
          transition: all 0.5s cubic-bezier(0, 0.64, 0.36, 1);
        }

        .line {
          width: 50%;
          background-color: var(--color-orange);
        }
      }
    }
    .asset-bot {
      display: flex;
      justify-content: space-between;
      color: var(--color-grey);
      font-size: 10px;
      margin-bottom: 10px;
      .bot {
        display: flex;
        .bot-icon {
          width: 14px;
          height: 14px;
          line-height: 14px;
          border-radius: 14px;
          background: var(--color-orange);
          margin-right: 4px;
          text-align: center;
          img {
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    .label {
      display: flex;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
    .amount {
      display: flex;
      align-items: center;
      h3 {
        font-weight: 600;
        line-height: 30px;
      }
      .svg-icon {
        width: 22px;
        height: 22px;
        fill: red;
        color: red;
        margin-left: 4px;
        margin-top: -2px;
        transition: all 1s ease-in;
      }
    }
    .van-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
