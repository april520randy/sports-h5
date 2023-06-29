<template>
  <div class="search-wrapper">
    <IconSearch class="icon-search" />
    <input v-model="query" placeholder="搜索" type="text" />
    <IconClear v-if="query" @click="clear" class="icon-clear" />
  </div>
</template>

<script setup>
import IconSearch from '@/components/icons/IconSearch'
import IconClear from '@/components/icons/IconClear'
import { ref, watchEffect } from 'vue'
const emit = defineEmits(['onSearch'])
const query = ref('')
// 清空
const clear = () => {
  query.value = ''
}
// 监听query
watchEffect(() => {
  if (query.value) emit('onSearch', query.value)
})
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  .icon-search {
    position: absolute;
    left: 16px;
    top: 13px;
    z-index: 10;
    fill: #999;
  }
  .icon-clear {
    position: absolute;
    right: 16px;
    top: 13px;
  }
  input {
    $height: 40px;
    height: $height;
    line-height: $height;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 6px;
    text-indent: 40px;
    font-size: 14px;
    color: #111;
    @include transition();
    &:focus {
      border-color: var(--color-primary);
    }
  }
}
</style>
