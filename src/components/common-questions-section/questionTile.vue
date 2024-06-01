<template>
  <div class="qusetion-tile shadow" @click="isExpanded = !isExpanded">
    <div class="question-box">
      <div class="question-text">{{ question.question }}</div>
      <i v-if="!isExpanded" class="fa-solid fa-chevron-down"></i>
      <i v-else class="fa-solid fa-chevron-up"></i>
    </div>
    <div v-if="isExpanded" class="answer-text">{{ question.answer }}</div>
  </div>
</template>

<script>
export default {
  name: "question-tile",
  props: {
    question: {
      question: "",
      answer: "",
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style scoped>
.qusetion-tile {
  width: 100%;
  padding: 24px 32px 24px 32px;
  border-radius: 10px;
}
.question-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question-text {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 400;
  line-height: 37.48px;
  color: #0f172a;
}
.answer-text {
  margin-top: 20px;
  padding-inline: 10px;
  font-family: Cairo;
  font-size: 18px;
  font-weight: 400;
  line-height: 37.48px;
  color: #717171;
}
.fa-solid {
  color: #c026d3;
}
</style>
