<template>
  <WidgetItem title="طلباتك لاستثمار مع الاخرين"
   code="request-investment-with-others" color="#FFBC00" 
   :url="getRouteLocale('network-investment-project-investment-with-others-requests')"
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