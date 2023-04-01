<template>
  <MyBlog title="طلبات استثمار مشاريعك" :value="0" color="#F2631C"
  btn-title="عرض الطلبات"
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