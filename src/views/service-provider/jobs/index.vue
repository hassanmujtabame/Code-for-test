<template>
  <div style="margin-top: 85px " class="consult max-width-100-hidden">
        <!-- section top-->
        <SectionTop />
        <!-- section filter list-->
        <SectionFilterList />
        <SectionGraduateRiadiat />
        <SectionContinueLearning />
        <SectionHear />
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
    AddJobDialog,
    SectionHear
 }
}
</script>

<style>

</style>