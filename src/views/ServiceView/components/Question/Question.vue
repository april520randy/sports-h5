<template>
  <div class="question">
    <img src="./img/normalQuestion.png" alt="error" class="normal-question" />
    <QuestionList :limit="6" ref="QuestionListRef" />

    <div class="more">
      <span class="more-title" @click="goQuestionView">查看更多</span>
      <IcoArrowRight />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import QuestionList from '../QuestionList/QuestionList.vue'
const QuestionListRef = ref(null)
const goQuestionView = () => {
  const active = QuestionListRef.value.active
  router.push({
    path: `/service-question/${active}`
  })
}
</script>

<style lang="scss" scoped>
.question {
  padding-top: 17px;
  padding-left: 15px;
  background: #fff;
  border-radius: 12px;
}
.normal-question {
  width: 68px;
}

.more {
  height: 48.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  .more-title {
    color: #888;
    font-size: 14px;
    margin-right: 4px;
  }
  svg {
    margin-top: 3px;
    transform: scale(1.3);
    fill: #999;
  }
}
</style>
