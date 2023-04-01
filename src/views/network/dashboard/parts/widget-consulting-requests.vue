<template>
  <MyBlog title="طلبات الاستشارة" :value="0"  color="#414042"
  :url="generatetoUrl('consulting-requests',{lang:$i18n.locale})"
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