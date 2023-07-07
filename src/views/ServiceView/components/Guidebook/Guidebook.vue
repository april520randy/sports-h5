<template>
  <div class="new-education">
    <img src="./img/new-edu.png" alt="error" class="img-edu" />
    <div class="new-edu-content">
      <div class="content-item" v-for="item in list" :key="item.id">
        <img :src="item.src" alt="error" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  { id: 11111, title: '存款教程', src: new URL('./img/store-edu.png', import.meta.url).href },
  { id: 22222, title: '提款教程', src: new URL('./img/take-edu.png', import.meta.url).href },
  { id: 33333, title: '投注教程', src: new URL('./img/bet-edu.png', import.meta.url).href },
  { id: 44444, title: '体育规则', src: new URL('./img/sport-rule.png', import.meta.url).href }
]
</script>

<style lang="scss" scoped>
.new-education {
  margin-top: 15px;
  padding-top: 17px;
  padding-left: 15px;
  border-radius: 12px;
  background: #fff;
  .img-edu {
    width: 68px;
  }
  .new-edu-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    // gap:10px;
    margin-top: 23px;
    .content-item {
      display: flex;
      flex-direction: column;
      // flex:1;
      justify-content: center;
      align-items: center;
      img {
        width: 46px;
      }
      p {
        margin-top: 9px;
        margin-bottom: 14px;
        font-size: 12px;
      }
    }
    // .sport-rule {
    //   width: 40px !important;
    // }
    .content-item:nth-child(4) img {
      width: 40px !important;
    }
  }
}
</style>
