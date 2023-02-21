<template>
  <MyBlog title="مشاريع دوراتك التدريبة"
   :value="0" color="#F2631C" 
   :url="getRouteLocale('academy-my-projects')"
   />
</template>

<script>
import MyBlog from '@/components/widgets/simple-card.vue';
export default {
    components:{
        MyBlog
    }

}
</script>

<style>

</style>