<template>
  <div style="margin-top: 85px " class="consult">
        <!-- section top-->
        <SectionTop />
        <!-- section filter list-->
        <SectionFilterList />
        <AddJobDialog />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index.vue';
import SectionTop from './parts/section-top'
import AddJobDialog from './dialogs/add-job.vue'
export default {
 name:'provider-service-jobs',
 components:{
    SectionFilterList,
    SectionTop,
    AddJobDialog
 }
}
</script>

<style>

</style>