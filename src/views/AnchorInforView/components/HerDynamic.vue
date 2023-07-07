<template>
  <div class="tab-content" v-for="item in msglist" :key="item.value">
    <div class="lap-date">
      <div class="month-date">{{ item.date }}</div>
      <div class="date-time">{{ item.time }}</div>
    </div>
    <div class="lap-img">
      <div class="copywriting">{{ item.text }}</div>
      <div class="lap-content">
        <div
          :class="{ 'img-box': item.imgList.length > 1, 'img-box-one': item.imgList.length == 1 }"
          v-for="itemr in item.imgList"
          :key="itemr.id"
          @click="ImgClick(item.imgList)"
        >
          <img :src="imgPath(itemr.path)" alt="" />
        </div>
      </div>
      <div class="likes">
        <Iconlikes class="svg-icon" @click="iconClick(item)" v-if="item.status" />
        <IcoRedlikes class="svg-icon" @click="iconClick(item)" v-else />
        <text>{{ item.likesNum }}</text>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msglist = ref([
  {
    date: '12月30',
    time: '08:36',
    text: '我们虚张声势的人，只要被爱就会变成粘人小狗 O(∩_∩)O~~',
    imgList: [
      { path: '../img/img.png', id: 1 },
      { path: '../img/img.png', id: 2 },
      { path: '../img/img.png', id: 3 },
      { path: '../img/img.png', id: 4 },
      { path: '../img/img.png', id: 5 }
    ],
    value: 1,
    likesNum: 1021,
    status: true
  },
  {
    date: '12月30',
    time: '08:34',
    text: '人生是旷野，不是轨道。今天继续冲呀～',
    imgList: [{ path: '../img/two.png', id: 6 }],
    value: 2,
    likesNum: 1021,
    status: true
  },
  {
    date: '12月30',
    time: '08:34',
    text: '人生是旷野，不是轨道。今天继续冲呀～',
    imgList: [{ path: '../img/two.png', id: 7 }],
    value: 3,
    likesNum: 1021,
    status: true
  },
  {
    date: '12月30',
    time: '08:34',
    text: '人生是旷野，不是轨道。今天继续冲呀～',
    imgList: [{ path: '../img/two.png', id: 8 }],
    value: 4,
    likesNum: 1021,
    status: true
  }
])
// 引用静态图片
const imgPath = (fileName) => {
  return new URL(fileName, import.meta.url).href
}
// 点赞时间
const iconClick = (item) => {
  item.status = !item.status
}
// 图片预览点击
const emit = defineEmits(['handImgClick'])
function ImgClick(imgList) {
  emit('handImgClick', imgList)
}
</script>

<style lang="scss" scoped>
.tab-content {
  display: flex;
  margin: 16px 0;
  .lap-date {
    margin-right: 16px;
    .month-date {
      color: var(--color-333);
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      white-space: nowrap;
    }
    .date-time {
      color: var(--color-999);
      font-size: 12px;
      line-height: 12px;
    }
  }
  .lap-img {
    color: #404040;
    font-size: 15px;
    line-height: 24px;
    .copywriting {
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
      .img-box-one {
        width: 150px;
        height: 150px;
        padding-top: 8px;
        border-radius: 16px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .likes {
      margin-top: 16px;
      display: flex;
      align-items: center;
      .svg-icon {
        width: 16px;
        height: 16px;
      }
      text {
        color: var(--color-999);
        font-size: 12px;
      }
    }
  }
}
</style>
