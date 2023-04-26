<template>
  <WidgetItem title="تقييم استشاراتي" code="consulting-rate"  color="#414042"
  btnTitle="عرض تقييمات"
  :url="generatetoUrl('consulting-rates',{lang:$i18n.locale})"
  />
</template>

<script>
import WidgetItem from '@/components/widgets/simple-card.vue';
export default {
    components:{
        WidgetItem
    }

}
</script>

<style>

</style>