<template>
  <WidgetItem title="لقائاتك"
   code="my-meetings" color="#F2631C" 
   :url="getRouteLocale('academy-my-meetings')"
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