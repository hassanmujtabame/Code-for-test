<template>
  <WidgetItem title="شهاداتك" code="certificates" color="#1FB9B3" :url="getRouteLocale('academy-your-certificates')" />
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