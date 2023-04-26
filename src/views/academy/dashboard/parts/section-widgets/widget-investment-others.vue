<template>
  <MyBlog title="مشاريع دوراتك التدريبة"
   code="my-course-projects" color="#F2631C" 
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