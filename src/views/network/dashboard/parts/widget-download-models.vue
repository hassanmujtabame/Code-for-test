<template>
  <MyBlog title="تحميلاتك لنماذج رياديات" :value="0" color="#F2631C" 
  :url="generatetoUrl('network-models/mine',{lang:$i18n.locale})"
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