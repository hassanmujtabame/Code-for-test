<template>
  <div style="margin-top: 85px; background: #fafafa">
    <div class="container title">{{ $t("add-an-exam") }}</div>
    <div class="container sub-title">{{ $t("add-exam-details") }}</div>
    <AddExamBody @update="questions = $event" :courseId="$route.params.id" />
    <pre v-if="isDevelopment">
            {{ questions }}
        </pre
    >
  </div>
</template>

<script>
import AddExamBody from "./body-exam.vue";
export default {
  name: "add-exam-page",
  components: {
    AddExamBody,
  },
  data: () => {
    return {
      questions: [],
    };
  },
};
</script>

<style scoped>
.title {
  padding-top: 20px;
  font-size: 40px;
  font-weight: 600;
  color: #414042;
}
.sub-title {
  padding-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #737373;
}
</style>
