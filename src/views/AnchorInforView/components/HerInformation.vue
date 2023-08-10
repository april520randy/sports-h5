<template>
  <div class="info-content">
    <div>
      <van-cell-group>
        <van-cell title="身高" size="large" :value="msgObj.height" />
        <van-cell title="体重" size="large" value="48KG" />
        <van-cell title="生日" size="large" value="1992-12-16" />
        <van-cell title="爱好" size="large" value="打球 旅行 看书" />
        <van-cell title="情感状态" size="large" value="未公开" />
        <van-cell title="照片墙" size="large">
          <template #label>
            <div class="lap-content">
              <div class="img-box" v-for="itemr in msgObj.imgList" :key="itemr.id">
                <img :src="imgPath(itemr.path)" alt="" />
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msgObj = ref({
  height: '172Cm',
  weight: '48KG',
  birthday: '1992-12-16',
  hobby: '打球 旅行 看书',
  status: '未公开',
  imgList: [
    { path: '../img/img.png', id: 1 },
    { path: '../img/img.png', id: 2 },
    { path: '../img/img.png', id: 3 },
    { path: '../img/img.png', id: 4 },
    { path: '../img/img.png', id: 5 }
  ]
})
// 引用静态图片
const imgPath = (fileName) => {
  return new URL(fileName, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.info-content {
  margin-top: 2px;
}
.lap-content {
  display: flex;
  flex-wrap: wrap;
  .img-box {
    width: 33.3%;
    padding: 7px 7px 0 0;
    border-radius: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
