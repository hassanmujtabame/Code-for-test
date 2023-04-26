<template>
  <MyBlog title="إستشارات" :value="0"  color="#2C98B3"
  :url="generatetoUrl('network-blogs-mine',{lang:$i18n.locale})"
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