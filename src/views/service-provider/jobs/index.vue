<template>
  <div style="margin-top: 85px " class="consult">
        <!-- section top-->
        <SectionTop />
        <!-- section filter list-->
        <SectionFilterList />
        <SectionGraduateRiadiat />
        <SectionContinueLearning />
        <AddJobDialog />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index.vue';
import SectionTop from './parts/section-top'
import AddJobDialog from './dialogs/add-job.vue'
import SectionGraduateRiadiat from './parts/section-graduate-riadiat/index'
import SectionContinueLearning from '@/views/service-provider/common-components/section-continue-learning/index'
import SectionHear from '@/views/service-provider/common-components/section-hear/index'
export default {
 name:'provider-service-jobs',
 components:{
    SectionFilterList,
    SectionContinueLearning,
    SectionGraduateRiadiat,
    SectionTop,
    AddJobDialog
 }
}
</script>

<style>

</style>