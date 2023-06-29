<template>
  <div class="country-code" @click="open = true">
    <div class="icon">
      <img src="./img/china.png" alt="" />
    </div>
    <span>+{{ 86 }}</span>
  </div>

  <Teleport to="body">
    <van-popup round v-model:show="open" position="bottom" :style="{ height: '60%' }">
      <div class="popup">
        <div class="tit">
          <h2>选择区号</h2>
          <IconClose @click="open = false" class="close" />
        </div>
        <div class="content">
          <Search @onSearch="onSearch" />

          <div class="list-wrapper">
            <div class="list">
              <div class="item" v-for="item in list" :key="item.title">
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
import { resolvePath } from '@/utils'
const open = ref(true)
const onSearch = (query) => {
  console.log(query)
}

const list = [
  {
    title: '中国',
    icon: resolvePath('./img/china.png', import.meta.url),
    code: '86'
  },
  {
    title: '菲律宾',
    icon: resolvePath('./img/php.png', import.meta.url),
    code: '63'
  },
  {
    title: '安道尔',
    icon: resolvePath('./img/other1.png', import.meta.url),
    code: '376'
  },
  {
    title: '阿联酋',
    icon: resolvePath('./img/other2.png', import.meta.url),
    code: '376'
  },
  {
    title: '阿富汗',
    icon: resolvePath('./img/other3.png', import.meta.url),
    code: '376'
  },
  {
    title: '安提瓜和巴布达',
    icon: resolvePath('./img/other4.png', import.meta.url),
    code: '376'
  },
  {
    title: '安圭拉',
    icon: resolvePath('./img/other1.png', import.meta.url),
    code: '376'
  }
]
</script>

<style lang="scss" scoped>
.country-code {
  display: flex;
  align-items: center;
  .icon {
    $size: 24px;
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
        margin-bottom:25px;
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
