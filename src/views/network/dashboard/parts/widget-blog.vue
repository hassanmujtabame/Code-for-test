<template>
  <MyBlog title="تدويناتك" :value="0"  color="#1FB9B3"
  url="/network/blog"
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