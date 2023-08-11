<template>
  <div class="nav-bar">
    <div class="custom-nav-bar">
      <div @click="onClickLeft" class="left">
        <IconArrowLeft />
      </div>
      <div class="tab">
        <div class="basic" 
          v-for="(item,idx) in tabList"
          :key="item.id"
          @click="tabChange(idx)"
          :class="{active:currentIndex === idx}"
          >
          <span>{{ item.title }}</span>
          <div class="active-line" v-if="currentIndex === idx"></div>
        </div>
      </div>
      <div class="right">
        <img @click="service" src="@/assets/img/icon-service.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const emit = defineEmits(['index'])
const currentIndex = ref(0)
const tabList = ref([
  {id:111,title:'体育'},
  {id:222,title:'游戏'}
])

const tabChange = (idx)=>{
  currentIndex.value = idx
  emit('index',idx)
}
const router = useRouter()
const onClickLeft = ()=>{
  router.back()
}
const service = () => {
  router.push('/service')
}
</script>

<style lang="scss" scoped>
.nav-bar{
  .custom-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background:#fff;
  position: relative;
  }
  .left {
    @include mobile-padding();
    svg {
      font-size: 100px;
      transform: scale(1.2);
    }
  }
  .right {
    @include mobile-padding();
    img {
      width: 30px;
    }
  }
  .tab{
    display: flex;
    width:156px;
    justify-content: space-between;
    .basic{
      color: #666;
      font-family: 'PingFang SC';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      .active-line{
        width:16px;
        height:3px;
        background: #FF5000;
        margin-left:6px;
      }
    }
    .active{
      color:#FF5000;
    }
  }
}
</style>