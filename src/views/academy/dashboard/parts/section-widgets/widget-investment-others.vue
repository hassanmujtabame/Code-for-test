<template>
  <WidgetItem title="مشاريع دوراتك التدريبة"
   code="my-course-projects" color="#F2631C" 
   :url="getRouteLocale('academy-my-projects')"
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