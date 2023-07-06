<template>
  <div>
    <NavBar title="客服" />
    <div class="user mobile-padding">
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
        <p>欢迎来到客服中心</p>
      </div>
    </div>

    <div class="btn-group">
      <van-button @click="service" type="primary">在线客服</van-button>
      <van-button @click="service" type="primary">专属客服</van-button>
    </div>
    <div class="wrapper">
      <van-button @click="agent" block type="danger">合营计划</van-button>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar'
import { useRouter } from 'vue-router'
const router = useRouter()
import { jumpExternalLink } from '@/utils'
const service = () => {
  jumpExternalLink({
    url: 'https://chatx88.bm1sdgic10.com/login?configKey=lRKbXKCds9AnbCCuArj9a2hfbVqkq8GeynQjJWSL5IcArfqjrQoEkW59M-QAYUBeb7bOYTP76KWPCdcVix4l7LIO36oEHz6vqyVxpWUsFhirk1ucGhQ49DDlSNnFrasy_6GKp35_fz3z0hEgPJtck7vV6olB2o2dLtQ9403cZRu7Ff24O1hCbxJ4ff-w8bU4dWsX2wR-rfJT5PK5-dcfKOR_3wgbWahXErLFL1oKF_l30wAuNogGkiIu3ajKUel_1CZEKhGuU-EXsHyNZKt_iYTGpU5C-vie3KBqJ7yqTflYvjmodBcggy5lMYBCa3infXci6kyYrqXuNDBk3pubAQ'
  })
}
const agent = () => {
  router.push('/agent')
}
</script>

<style scoped lang="scss">
.user {
  display: flex;
  padding: 0 15px;
  padding-top: 20px;
  .avatar {
    margin-right: 10px;
  }
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
}
.btn-group {
  padding: 0 15px;
  text-align: center;
  display: flex;
  .van-button {
    width: 50%;
    &:last-child {
      margin-left: 15px;
    }
  }
}
.wrapper {
  padding: 0 15px;
  margin-top: 20px;
}
</style>
