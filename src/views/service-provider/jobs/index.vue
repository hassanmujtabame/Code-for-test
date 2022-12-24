<template>
  <div style="margin-top: 85px " class="consult">
        <!-- section top-->
        <SectionTop />
        <!-- section filter list-->
        <SectionFilterList />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index.vue';
import SectionTop from './parts/section-top'

export default {
 name:'provider-service-jobs',
 components:{
    SectionFilterList,
    SectionTop
 }
}
</script>

<style>

</style>