<template>
  <div>
    
    
      <!-- section-1 -->
      <SectMainSlider />
      <!-- #section-1 -->
      <div class="container">
        <!-- services -->
        <SectServices/>
        <!--# service-->
        <!-- section 3-->
        <SectCampRiadiat/>
        <!-- #section-3 -->
        <!-- section 4 -->
        <SectConsultingRiadiat/>
        <!-- #section 4-->
      </div>
    <!-- section 5 -->
    <SectTrainingCourses />
    <!-- #section 5-->
    <!-- section 6-->
      <SectPartnerRiadiat/>
    <!-- #section 6 -->
    <!-- section 7-->
     <SectAboutUs/>
    <!-- #section 7-->
      <!--section hear about us-->
      <SectHearAboutUs />
     <!-- section 8-->
     <SectBlog/>
     <!-- #section 8-->
  </div>
</template>

<script>
import SectMainSlider from './parts/section-1/main-slider.vue'
import SectServices from './parts/section-2/services.vue'
import SectCampRiadiat from './parts/section-camp-riadiat/index.vue'
import SectConsultingRiadiat from './parts/section-consulting/index.vue'
import SectTrainingCourses from './parts/section-training-courses/index.vue'
import SectPartnerRiadiat from './parts/section-partners/index.vue'
import SectAboutUs from './parts/section-about-us/index.vue'
import SectHearAboutUs from './parts/section-hear-about-us/index.vue'
import SectBlog from './parts/section-section-blog/index.vue'
export default {
  name: 'IndexView',
  components: {
    SectMainSlider,
    SectServices,
    SectCampRiadiat,
    SectConsultingRiadiat,
    SectTrainingCourses,
    SectPartnerRiadiat,
    SectAboutUs,
    SectBlog,
    SectHearAboutUs
  },
  data:()=>({
    
  })
}
</script>
