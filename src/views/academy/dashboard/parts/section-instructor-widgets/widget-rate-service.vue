<template>
  <WidgetItem title="قائمة الإختبارات" :value="0" color="#1FB9B3" 
  :url="getRouteLocale('academy-your-exams')"
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