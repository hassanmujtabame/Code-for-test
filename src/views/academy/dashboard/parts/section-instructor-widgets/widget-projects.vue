<template>
  <WidgetItem title="قائمة المشاريع" code="my-projects" color="#FFBC00" :url="getRouteLocale('academy-my-projects')" />
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