<template>
    <itemCard
      title="  طلبات علي اماكن العمل "
      code="my-consultation-bookings"
      color="#1FB9B3"
      btnTitle="عرض الكل"
      :url="generatetoUrl('workspaces-requests', { lang: $i18n.locale })"
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