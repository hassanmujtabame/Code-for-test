<template>
  <MyBlog title="لقائات اشتركت بها" code="participated-meetings" color="#FFBC00"
  :url="getRouteLocale('academy-your-learning-meetings')"
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