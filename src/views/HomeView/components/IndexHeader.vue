<template>
  <header>
    <div class="left">
      <div @click="openMenu" class="icon-menu">
        <van-icon name="bars" size="24" />
      </div>
    </div>
    <div class="right">
      <van-icon @click="router.push('/service')" name="service-o" size="24" />
    </div>
  </header>
  <Menu @closeMenu="closeMenu" :showMenu="showMenu" />
</template>

<script setup>
import Menu from '@/components/Menu/Menu.vue'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
// 侧边菜单
const showMenu = ref(false)

const openMenu = () => {
  showMenu.value = true
}

const closeMenu = () => {
  showMenu.value = false
}
</script>

<style lang="stylus" scoped>
.icon-sport {
  width: 35px;
  height: @width;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  background #fff
  .left{
    display flex
    align-items center
    .icon-menu{
      width 24px
      height @width
    }
  }
}
</style>
