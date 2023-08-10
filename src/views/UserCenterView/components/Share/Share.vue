<template>
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
</template>

<script setup></script>

<style lang="scss" scoped>
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
</style>
