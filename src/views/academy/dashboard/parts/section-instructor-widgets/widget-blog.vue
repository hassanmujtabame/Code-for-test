<template>
  <WidgetItem title="تدويناتك" code="my-blogs" color="#2C98B3" :url="getRouteLocale('academy-my-blogs')" />
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