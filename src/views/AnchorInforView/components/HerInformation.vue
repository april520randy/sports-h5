<template>
  <div class="info-content">
    <div>
      <van-cell-group>
        <van-cell title="身高" size="large" value="172CM" />
        <van-cell title="体重" size="large" value="48KG" />
        <van-cell title="生日" size="large" value="1992-12-16" />
        <van-cell title="爱好" size="large" value="打球 旅行 看书" />
        <van-cell title="情感状态" size="large" value="未公开" />
        <van-cell
          title="照片墙"
          size="large"
          label="描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.info-content {
  margin-top: 2px;
}
::v-deep .van-cell__title {
  color: var(--color-grey);
  font-size: 14px;
}
::v-deep .van-cell__value {
  color: var(--color-333);
  font-size: 14px;
  font-weight: 500;
}
</style>
