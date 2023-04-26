<template>
  <MyBlog title="تدويناتك" code="my-blogs"  color="#2C98B3"
  :url="getRouteLocale('academy-my-blogs')"
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