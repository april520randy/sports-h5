<template>
  <div :class="{ 'fixed-wrapper': fixed }">
    <div class="custom-nav-bar" :class="{ border, fixed }">
      <div @click="onClickLeft" class="left">
        <IconArrowLeft />
      </div>
      <h2 class="van-ellipsis">{{ title }}</h2>
      <div v-if="isShowRight" class="right">
        <img @click="service" src="@/assets/img/icon-service.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits(['onClickLeft'])
const props = defineProps({
  title: {
    type: String,
    defualt: '标题'
  },
  isShowLeft: {
    type: Boolean,
    default: true
  },
  isShowRight: {
    type: Boolean,
    default: true
  },
  isBack: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: false
  },
  fixed:{
    type:Boolean,
    default:true
  }
})
const onClickLeft = () => {
  if (props.isBack) {
    router.back()
  } else {
    emit('onClickLeft')
  }
}
const service = () => {
  router.push('/service')
}
</script>

<style lang="scss" scoped>
$navbarHeight: 44px;
.fixed-wrapper {
  padding-bottom: $navbarHeight;
}
.custom-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $navbarHeight;
  background:#fff;
  position: relative;
  &.fixed {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
  }
  &.border {
    border-bottom: 1px solid #f5f5f5;
  }
  .left {
    @include mobile-padding();
    svg {
      font-size: 100px;
      transform: scale(1.2);
    }
  }
  h2 {
    font-size: 16px;
    color: #333;
    position: absolute;
    left:50%;
    width:80%;
    transform: translate3d(-50%,0,0);
    text-align: center
  }
  .right {
    @include mobile-padding();
    img {
      width: 30px;
    }
  }
}
</style>
