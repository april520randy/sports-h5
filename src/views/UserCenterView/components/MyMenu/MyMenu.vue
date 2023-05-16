<template>
  <div class="my-menu">
    <div class="list">
      <div class="item" v-for="item in 10" :key="item">
        <p>
          <van-icon name="photo-o" />
        </p>
        <p>
          <span>存款</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.my-menu {
  background: #eee;
  border-radius: 8px;
  margin-top: 10px;
  padding:15px 0 0;
  .list {
    overflow: hidden;
    .item {
      float: left;
      width: 25%;
      text-align: center;
      margin-bottom:15px;
      .van-icon {
        font-size: 24px;
      }
    }
  }
}
</style>
