<template>
  <WidgetItem title="طلبات الاستشارة" code="request-consutling"  color="#414042"
  :url="generatetoUrl('consulting-requests',{lang:$i18n.locale})"
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