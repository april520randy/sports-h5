<template>
  <div class="bottom">
    <div class="item">
      <p>
        <img src="./img/yingchao.png" alt="" />
      </p>
      <p class="tit1">英超曼联</p>
      <p class="tit2">全球赞助商</p>
    </div>
    <div class="item">
      <p>
        <img src="./img/yijia.png" alt="" />
      </p>
      <p class="tit1">意甲联赛</p>
      <p class="tit2">全球赞助商</p>
    </div>
    <div class="item">
      <p>
        <img src="./img/dejia.png" alt="" />
      </p>
      <p class="tit1">德甲拜仁慕尼黑</p>
      <p class="tit2">全球赞助商</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  justify-content: space-around;
  .item {
    text-align: center;
    line-height: 1.5;
    img {
      width: 50px;
    }
    .tit1 {
      color: #070707;
      font-size: 11px;
    }
    .tit2 {
      color: #A7A7A7;
      font-size: 10px;
    }
  }
}
</style>
