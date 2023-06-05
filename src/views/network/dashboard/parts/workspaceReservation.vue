<template>
  <itemCard
    title=" حجوزات لاماكن العمل "
    code="my-consultation-bookings"
    color="#F2631C"
    btnTitle="عرض الكل"
    :url="generatetoUrl('workspaces-reservations', { lang: $i18n.locale })"
  />
</template>
  
  <script>
import itemCard from "@/components/widgets/simple-card.vue";
export default {
  components: {
    itemCard,
  },
};
</script>
  
  <style>
</style>