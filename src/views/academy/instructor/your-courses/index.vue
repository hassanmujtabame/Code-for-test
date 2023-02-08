<template>
  <div style="margin-top: 85px " class="consult">
    <!--header -->
    <SectionHeader />

    <SectionFilterList />




  <SectionContinueLearning/>
   
<SectionHear />

<AddCourseFirstDialog />
<AddCourseLiveDialog />
<AddCourseRecordedDialog />
<AddCourseOnSiteDialog />
  </div>
</template>

<script>
import SectionHear from '@/views/academy/common-components/section-hear/index.vue'
import SectionContinueLearning from '@/views/academy/common-components/section-continue-learning/index.vue'
import SectionHeader from './parts/section-header/index';
import SectionFilterList from './parts/section-filter-list/index';
import AddCourseFirstDialog from './dialogs/add-course/first-dialog.vue'
import AddCourseLiveDialog from './dialogs/add-course/live-course.vue'
import AddCourseRecordedDialog from './dialogs/add-course/recorded-course.vue'
import AddCourseOnSiteDialog from './dialogs/add-course/on-site-course.vue'
export default {
  name: 'your-courses-page',
  components:{
    SectionHeader,
    SectionHear,
    SectionFilterList,
    SectionContinueLearning,
    AddCourseFirstDialog,
    AddCourseLiveDialog,
    AddCourseRecordedDialog,
    AddCourseOnSiteDialog
  }
}
</script>

<style>

</style>