<template>
  <MyBlog title="قائمة الإختبارات" :value="0" color="#1FB9B3" 
  :url="getRouteLocale('academy-intructor-exams')"
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