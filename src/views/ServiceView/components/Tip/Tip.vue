<template>
  <div>
    <p class="service-online">{{ '在线客服' }}</p>
    <p class="service-all-time">{{ '24小时随时贴心在线服务' }}</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.service-online {
  color: #111;
  // text-align:center;
  font-size: 19px;
  font-family: PingFang SC;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 40px;
}
.service-all-time {
  color: #555;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
