<template>
  <div class="common-problem">
    <NavBar :border="true" title="常见问题" />
    <div class="content">
      <QuestionList ref="QuestionListRef" />
    </div>
  </div>
</template>

<script setup>
import QuestionList from './components/QuestionList/QuestionList.vue'
</script>

<style lang="scss" scoped>
.common-problem{
  .content{
    @include mobile-padding();
  }
}
</style>
