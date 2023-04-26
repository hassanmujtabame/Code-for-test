<template>
  <itemCard title="لقاءات اشتراكت بها" code="participated-meetings"  color="#FFBC00"
  btnTitle="عرض الكل"
  :url="generatetoUrl('academy-my-meetings',{lang:$i18n.locale})"
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