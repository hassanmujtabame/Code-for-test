<template>
  <WidgetItem title="نتائج اختبارتك" code="my-exam-results" color="#2C98B3" :url="getRouteLocale('academy-your-exams')" />
</template>

<script>
import WidgetItem from '@/components/widgets/simple-card.vue';
export default {
  components: {
    WidgetItem
  }

}
</script>

<style></style>