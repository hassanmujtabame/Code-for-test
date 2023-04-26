<template>
  <WidgetItem title="مرفقات" code="incubuator-attachments" color="#F2631C" 
  :url="generatetoUrl('network-models/mine',{lang:$i18n.locale})"
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