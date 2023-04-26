<template>
  <MyBlog title="دوراتك التدريبية" :value="0" color="#1FB9B3"
  btn-title="عرض الكل"
  :url="generatetoUrl('network-investment-project-requests',{lang:$i18n.locale})"
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