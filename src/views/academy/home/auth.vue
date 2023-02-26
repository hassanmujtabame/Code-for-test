<template>
  <div>
        <!-- section 1-->
        <SectionAuthHeader />
        <div class="container">
        <!-- section best instructors-->
        <SectionBestInstructors />
        <!-- section section-academy-schedule-->
        <section-academy-schedule />
        <!-- section recent courses online-->
        <SectionRecentCoursesOnline />
        <!-- section recent courses offline-->
        <SectionRecentCoursesOffline />
        <!-- educational meetings-->
      <SectionEducationalMeeting />
        <!-- section our partner-->
        <SectionOurPartners/>
        <!-- section blog-->
        <SectionBlog/>
      </div>
        <!-- section Continue learning-->
      <SectionContinueLearning />

      <!-- section hear about us-->
      <SectionHear />

    

    </div>
</template>

<script>
import SectionBlog from './parts/section-blog/index.vue'
import SectionEducationalMeeting from './parts/section-educational-meeting/index.vue'
import SectionAuthHeader from './parts/section-auth-header/index.vue'
import SectionAcademySchedule from './parts/section-academy-schedule/index.vue'
import SectionBestInstructors from './parts/section-best-instructors/index.vue'
import SectionRecentCoursesOnline from './parts/section-recent-courses-online/index.vue'
import SectionRecentCoursesOffline from './parts/section-recent-courses-offline/index.vue'
import SectionOurPartners from './parts/section-our-partners/index.vue'
import SectionContinueLearning from '@/views/academy/common-components/section-continue-learning/index.vue'
import SectionHear from '@/views/academy/common-components/section-hear/index.vue'

export default {
name:"academy-home",
components:{
  SectionAuthHeader,
  SectionEducationalMeeting,
  SectionBlog,
  SectionAcademySchedule,
  SectionBestInstructors,
  SectionRecentCoursesOnline,
  SectionRecentCoursesOffline,
  SectionOurPartners,
  SectionContinueLearning,
  SectionHear
}
}
</script>

<style>

</style>