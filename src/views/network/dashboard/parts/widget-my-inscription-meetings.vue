<template>
  <itemCard title="لقاءات اشتراكت بها" :value="0"  color="#FFBC00"
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