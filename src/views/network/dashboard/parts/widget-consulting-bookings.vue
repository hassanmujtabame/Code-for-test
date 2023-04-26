<template>
  <itemCard title="حجوزات استشاراتي" code="my-consultation-bookings"  color="#1FB9B3"
  btnTitle="عرض الكل"
  :url="generatetoUrl('consulting-bookings',{lang:$i18n.locale})"
  />
</template>

<script>
import itemCard from '@/components/widgets/simple-card.vue';
export default {
    components:{
      itemCard
    }

}
</script>

<style>

</style>