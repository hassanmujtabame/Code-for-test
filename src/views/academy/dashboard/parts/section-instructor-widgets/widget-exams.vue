<template>
  <WidgetItem title="قائمة الإختبارات" code="instructor-exams" color="#1FB9B3"
    :url="getRouteLocale('academy-your-exams')" />
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