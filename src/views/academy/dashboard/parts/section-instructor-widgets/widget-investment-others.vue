<template>
  <MyBlog title="لقائاتك"
   code="my-meetings" color="#F2631C" 
   :url="getRouteLocale('academy-my-meetings')"
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