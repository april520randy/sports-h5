<template>
  <div class="bottom">
    <div class="item">
      <p>
        <img src="./img/yingchao.png" alt="" />
      </p>
      <p>英超曼联</p>
    </div>
    <div class="item">
      <p>
        <img src="./img/yijia.png" alt="" />
      </p>
      <p>意甲联赛</p>
    </div>
    <div class="item">
      <p>
        <img src="./img/dejia.png" alt="" />
      </p>
      <p>德甲拜仁慕尼黑</p>
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
    img {
      width: 40px;
    }
  }
}
</style>
