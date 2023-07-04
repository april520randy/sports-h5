<template>
  <div class="custom-nav-bar">
    <div @click="onClickLeft" class="left">
      <IconArrowLeft />
    </div>
    <h2 class="van-ellipsis">{{ title }}</h2>
    <div class="right">
      <img @click="service" src="@/assets/img/icon-service.png" alt="" />
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
.custom-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $navbarHeight;
  // @include mobile-padding();
  &.fixed {
    padding-bottom: $navbarHeight;
  }
  .left {
    @include mobile-padding();
    svg {
      font-size:100px;
      transform: scale(1.3);
    }
  }
  h2 {
    font-size: 16px;
    color: #333;
    // padding:0 15px;
  }
  .right {
    @include mobile-padding();
    img {
      width: 30px;
    }
  }
}
</style>
