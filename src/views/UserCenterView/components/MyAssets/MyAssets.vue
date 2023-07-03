<template>
  <div class="my-assets">
    <div class="box">
      <div class="asset-top">
        <div>总资产</div>
        <div class="more-btn">更多VIP特权</div>
      </div>
      <div class="asset-mid flex">
        <div class="amount">79009</div>
        <div class="stor-btn">
          <div class="pick acces">提款</div>
          <div class="save acces">存款</div>
        </div>
      </div>
      <div class="asset-bar">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div class="asset-bot">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
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
}
.box {
  background: url('../../img/Rectangle.png') no-repeat;
  box-shadow: 1px 1px 1px 0px #fffaf3 inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
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
    .amount {
      font-size: 22px;
      font-weight: 700;
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
  }
  .asset-bot {
    display: flex;
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
</style>
