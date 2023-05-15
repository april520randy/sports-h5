<template>
  <!-- 侧边设置菜单 -->
  <div>
    <van-popup
      v-model:show="isShow"
      position="left"
      :style="{ width: '70%', height: '100%' }"
      @close="closeMenu"
    >
      <div class="menu-content">
        <h2>快速设置</h2>
        <van-icon @click="closeMenu" name="close" size="24" />
        <!-- 我的消息 -->
        <div class="item message">
          <van-cell is-link>
            <template #title>
              <div class="left-cell">
                <van-icon @click="router.push('/notice')" name="chat-o" size="24" />
                <span class="custom-title">我的消息</span>
              </div>
            </template>
          </van-cell>
        </div>
        <div class="item">
          <h4>盘口设置</h4>
          <van-radio-group v-model="gateChecked">
            <van-radio name="1">欧洲盘</van-radio>
            <van-radio name="2">香港盘</van-radio>
          </van-radio-group>
        </div>
        <div class="item">
          <h4>投注设置</h4>
          <van-radio-group v-model="betChecked">
            <van-radio name="1">自动接收更好的赔率</van-radio>
            <van-radio name="2">自动接收任何赔率</van-radio>
            <van-radio name="3">不接收任何赔率变动</van-radio>
          </van-radio-group>
        </div>
        <div class="item">
          <h4>语言模式</h4>
          <van-radio-group v-model="langChecked">
            <van-radio name="1">中文</van-radio>
            <van-radio name="2">English</van-radio>
          </van-radio-group>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, watchEffect } from 'vue'
const props = defineProps(['showMenu'])
const emit = defineEmits(['closeMenu'])
const isShow = ref(false)
// 关闭
const closeMenu = () => {
  emit('closeMenu', false)
}
watchEffect(() => {
  isShow.value = props.showMenu
})
// 设置页
const formData = reactive({
  gateChecked: '1',
  betChecked: '3',
  langChecked: '1'
})
const { gateChecked, betChecked, langChecked } = toRefs(formData)

</script>

<style lang="stylus" scoped>
.menu-content{
  padding 15px
  .van-icon-close{
    position absolute
    right 20px
    top 20px
  }
  h2{
    margin-bottom 20px
  }
  .item{
    padding-bottom 10px
    border-bottom 1px solid #eee
    margin-bottom 15px
    h4{
      font-weight 600
      margin-bottom 10px
    }
    &.message{
      .van-cell{
        padding 0
      }
      .left-cell{
        display flex
        align-items center
        span{
          margin-left 5px
        }
      }
    }

    .van-radio{
      margin-bottom 5px
    }
  }


}
</style>
