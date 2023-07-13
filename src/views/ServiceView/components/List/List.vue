<template>
  <div @click="select(idx)" class="item" v-for="(item, idx) in list" :key="item.id">
    <div class="tab-service-content">
      <span class="title-index">{{ idx + 1 }}</span>
      <span class="title">{{ item.title }}</span>
    </div>
    <div class="is-link">
      <IcoArrowRight />
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['select'])
const select = (idx) => {
  emit('select', idx)
}
</script>

<style lang="scss" scoped>
.item {
  height: 56.5px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F5F5F5;
  .tab-service-content {
    .title {
      font-size: 15px;
      color: #111;
    }
    .title-index {
      color: #999;
      margin-right: 12px;
      font-size: 20px;
    }
  }
  .is-link {
    margin-left: 10px;

    svg {
      transform: scale(1.2);
      fill: #999;
    }
  }
}
</style>
