<template>
  <WidgetItem title="طلبات استثمار مشاريعك" code="request-investment-projects" color="#1FB9B3"
  btn-title="عرض الطلبات"
  :url="generatetoUrl('network-investment-project-requests',{lang:$i18n.locale})"
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