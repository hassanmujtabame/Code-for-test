<template>
  <div class="container py-5">
    <div class="title-text">{{ $t("common-questions") }}</div>
    <div>
      <QuestionTile
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
        class="mt-3"
      />
    </div>
  </div>
</template>

<script>
import QuestionTile from "./questionTile.vue";
export default {
  name: "common-questions-section",
  components: {
    QuestionTile,
  },
  props: {
    questions: [],
  },
};
</script>

<style scoped>
.title-text {
  font-family: Cairo;
  font-size: 56px;
  font-weight: 600;
  line-height: 61.6px;
  text-align: center;
  color: #2cb7b3;
}
</style>
