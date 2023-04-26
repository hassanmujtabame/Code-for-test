<template>
  <MyBlog title="تقييم استشاراتي" code="consulting-rate"  color="#414042"
  btnTitle="عرض تقييمات"
  :url="generatetoUrl('consulting-rates',{lang:$i18n.locale})"
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