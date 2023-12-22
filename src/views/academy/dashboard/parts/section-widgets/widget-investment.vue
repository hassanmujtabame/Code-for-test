<template>
  <WidgetItem title="لقائات اشتركت بها" code="participated-meetings" color="#FFBC00"
    :url="getRouteLocale('academy-your-learning-meetings')" />
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