<template>
  <div class="country-code" @click="openDialog">
    <div class="icon">
      <img :src="currentCountry.icon" alt="" />
    </div>
    <span>+{{ currentCountry.code }}</span>
  </div>

  <Teleport to="body">
    <van-popup round v-model:show="open" position="bottom" :style="{ height: '60%' }">
      <div class="popup">
        <div class="tit">
          <h2>选择区号</h2>
          <IconClose @click="open = false" class="close" />
        </div>
        <div class="content">
          <Search ref="searchRef" @onSearch="onSearch" />

          <div class="list-wrapper">
            <div class="list">
              <div
                @click="selectCountry(item)"
                class="item"
                v-for="item in filterList"
                :key="item.title"
              >
                <div class="left">
                  <p><img :src="item.icon" alt="" /></p>
                  <span>{{ item.title }}</span>
                </div>
                <p class="code">+{{ item.code }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import IconClose from '@/components/icons/IconClose'
import Search from '@/components/Search/Search'
import list from './list'
const open = ref(false)
const currentCountry = ref({})
const filterList = ref(JSON.parse(JSON.stringify(list)))
const searchRef = ref(null) // 搜索组件
const emit = defineEmits(['getCountryCode'])
// 触发搜索
const onSearch = (query) => {
  filterList.value = list.filter((item) => item.title.includes(query))
}

// 选择国家
const selectCountry = (item) => {
  setCurrentCountry(item)
  closeDialog()
}
// 设置当前国家
const setCurrentCountry = (item) => {
  currentCountry.value = item
  emit('getCountryCode', item.code)
}
const closeDialog = () => {
  open.value = false
  clearSearch()
}
const openDialog = () => {
  open.value = true
}
// 清空搜索框
const clearSearch = () => {
  searchRef.value.clear()
}
// 初始化当前国家
setCurrentCountry(list[0])
</script>

<style lang="scss" scoped>
.country-code {
  display: flex;
  align-items: center;
  position: relative;
  width: 78px;
  .icon {
    $size: 26px;
    width: $size;
    height: $size;
    margin-right: 5px;
    img {
      width: 100%;
    }
  }
  span {
    font-size: 15px;
    color: #000;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0px;
    top: 4px;
    height: 20px;
    width: 1px;
    background: #eee;
  }
}
.popup {
  padding: 25px;
  .tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 19px;
      color: #111;
    }
    .close {
      fill: #555;
    }
  }
  .content {
    margin-top: 25px;
    .list-wrapper {
      height: 250px;
      margin-top: 15px;
      overflow-y: auto;
    }
    .list {
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 25px;
        .left {
          display: flex;
          align-items: center;
          img {
            width: 33px;
            height: 33px;
            display: block;
            margin-right: 10px;
          }
        }
        .code {
          font-weight: 600;
          color: #111;
        }
      }
    }
  }
}
</style>
