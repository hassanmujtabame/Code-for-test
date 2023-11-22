<template>
  <div>
        <!-- section 1-->
        <SectionAuthHeader />
        <SectionBestInstructors />

        <div class="container">
        <!-- section best instructors-->
        <!-- section section-academy-schedule-->
        <section-academy-schedule />
        <!-- section recent courses online-->
        <SectionRecentCoursesOnline />
        <!-- section recent courses Recored-->
        <SectionRecentCoursesRecored />

        <SectionRecentCoursesOnSite />
        <!-- educational meetings-->
        <SectionEducationalMeeting />
          <SectionCoupons />
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
import SectionRecentCoursesRecored from './parts/section-recent-courses-recorded/index.vue'
import SectionRecentCoursesOnSite from './parts/section-recent-courses-onsite/index.vue'
import SectionOurPartners from './parts/section-our-partners/index.vue'
import SectionCoupons from './parts/section-coupons'
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
  SectionRecentCoursesRecored,
  SectionRecentCoursesOnSite,
  SectionCoupons,
  SectionOurPartners,
  SectionContinueLearning,
  SectionHear
}
}
</script>

<style>

</style>