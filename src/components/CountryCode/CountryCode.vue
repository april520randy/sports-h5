<template>
  <div class="country-code">
    <div class="icon">
      <img src="./img/china.png" alt="" />
    </div>
    <span>+{{ 86 }}</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.country-code {
  display: flex;
  align-items: center;
  .icon {
    $size: 24px;
    width: $size;
    height: $size;
    margin-right:5px;
    img {
      width: 100%;
    }
  }
  span {
    font-size: 15px;
    color: #000;
  }
}
</style>
