<template>
  <MyBlog title="شهاداتك" :value="0" color="#1FB9B3" 
  :url="getRouteLocale('academy-your-certificates')"
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