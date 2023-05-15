<template>
  <div class="user-center-simple">
    <div class="info">
      <div class="user">
        <span class="username">ryder999</span>
        <van-tag style="margin-left: 5px" type="primary">VIP9</van-tag>
      </div>
      <h3 class="amount">￥999.99</h3>
    </div>
    <div class="fast-way">
      <div
        @click="router.push(item.path)"
        class="item"
        v-for="item in fastWayList"
        :key="item.title"
      >
        <p>
          <van-icon name="photo-o" size="24" />
        </p>
        <p>
          <span>{{ item.title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 快捷通道
const fastWayList = [
  {
    title: '存款',
    path: '/deposit'
  },
  {
    title: '取款',
    path: '/withdraw'
  },
  {
    title: '转账',
    path: '/transfer'
  },
  {
    title: 'VIP',
    path: '/vip-center'
  }
]
</script>

<style lang="stylus" scoped>
.user-center-simple{
  // background #ddd
  display flex
  justify-content space-between
  align-items center
  padding 10px 0
  height 80px
  span.username{
    margin-right 5px
    font-size 16px
  }
  .amount{
    font-weight 600
  }
  .fast-way{
    display flex
    .item{
      margin-right 10px
      text-align center
      &:last-child{
        margin-right 0
      }
    }

  }
}
</style>
