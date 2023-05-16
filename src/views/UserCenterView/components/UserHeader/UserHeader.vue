<template>
  <div class="header">
      <div class="left">
        <div class="avatar">
          <van-image
            round
            width="60"
            height="60"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="info">
          <h4>Hi ryder999</h4>
          <p>加入Z体育第100天</p>
        </div>
      </div>
      <div class="right">
        <van-icon name="service-o" size="24" />
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 10px;
    }
    .info{
      h4{
        font-size :18px;
      }
      p{
        color:#999;
      }
    }
  }
}
</style>