<template>
  <div>
        <!-- section 1-->
        <SectionOne />
        <!--#section 1-->
       <!-- section 2-->
       <SectionTwo/>
        <!--#section 2-->
        <!-- section 3-->
        <SectionThree />
        <!--#section 3-->
       <!-- section top instructor-->
       <sectionTopInstructor />
        <!--#section top instructor-->
        <!-- section training-fields-->
        <SectionTrainingFields/>
        <!--#section training-fields-->
        <!-- section exploring-entrepreneurship-->
        <section-exploring-entrepreneurship />
        <!--#section exploring-entrepreneurship-->
        <!-- section exploring-specialized-entrepreneurship-->
        <section-exploring-specialized-entrepreneurship />
        <!--#section exploring-specialized-entrepreneurship-->
         <!-- section section-academy-schedule-->
         <section-academy-schedule />
        <!--#section section-academy-schedule--> 
         <!-- section 9-->
         <SectionBestIntructors />
        <!--#section 9-->   
        <!-- section 10-->
        <SectionTen />
        <!--#section 10-->  
        <!-- section 11-->
        <SectionRecentCourses />
        <!--#section 11--> 
        <!-- section 12-->
        <SectionOurPartners/>
        <!--#section 12--> 
        <!-- section 13-->
        <SectionAcademyNumbers />
        <!--#section 13-->   
        <!-- section 14-->
      <SectionContinueLearning />
        <!--#section 14--> 
      <!-- section 15-->
      <SectionHear />
        <!--#section 15-->
    

    </div>
</template>

<script>
import SectionOne from './parts/section-1/index.vue'
import SectionTwo from './parts/section-2/index.vue'
import SectionThree from './parts/section-3/index.vue'
import sectionTopInstructor from './parts/section-top-instructor/index.vue'
import SectionTrainingFields from './parts/section-training-fields/index.vue'
import SectionExploringEntrepreneurship from './parts/section-exploring-entrepreneurship/index.vue'
import SectionExploringSpecializedEntrepreneurship from './parts/section-exploring-specialized-entrepreneurship/index.vue'
import SectionAcademySchedule from './parts/section-academy-schedule/index.vue'
import SectionBestIntructors from './parts/section-best-intructors/index.vue'
import SectionTen from './parts/section-10/index.vue'
import SectionRecentCourses from './parts/section-recent-courses/index.vue'
import SectionOurPartners from './parts/section-our-partners/index.vue'
import SectionAcademyNumbers from './parts/section-academy-numbers/index.vue'
import SectionContinueLearning from './parts/section-continue-learning/index.vue'
import SectionHear from './parts/section-hear/index.vue'
export default {
name:"academy-home",
components:{
  SectionOne,
  SectionTwo,
  SectionThree,
  sectionTopInstructor,
  SectionTrainingFields,
  SectionExploringEntrepreneurship,
  SectionExploringSpecializedEntrepreneurship,
  SectionAcademySchedule,
  SectionBestIntructors,
  SectionTen,
  SectionRecentCourses,
  SectionOurPartners,
  SectionAcademyNumbers,
  SectionContinueLearning,
  SectionHear
}
}
</script>

<style>

</style>