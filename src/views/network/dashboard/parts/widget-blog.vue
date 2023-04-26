<template>
  <WidgetItem title="تدويناتك" code="my-blogs"  color="#2C98B3"
  :url="generatetoUrl('network-blogs-mine',{lang:$i18n.locale})"
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