<template>
  <WidgetItem title="قائمة المشاريع" :value="0" color="#FFBC00"
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