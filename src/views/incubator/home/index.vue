<template>
  <div style="margin-top: 85px " class="consult">
    <!-- section top-->
    <SectionTop />
    <!-- section definition-->
    <SectionDefinition />

    <!-- section members -->
    <SectionMemberIncubation />

    <!-- section features-->
    <SectionFeatures />
    <SectionOurAds />

    <!-- section ads-->
    <SectionAds department="encubator" />
    <sectionJourneyLaunch />
    <SectionIncubationProgram v-if="!token" />
    <!-- section 6-->
    <SectionDepartments />

    <!-- section 7-->
    <SectionProgramsProjects />
    <SectionHaveProject v-if="!token" />
    <!-- section 8-->
    <SectionGraduated />
    <!-- section 9-->
    <SectionOurPartners />

    <SectionIncubationProjects />

    <!-- section 10-->
    <SectionSchedule />
    <!-- <SectionNumbers /> -->
    <!-- section 11-->
    <SectionContinueLearning />
    <!-- section 12-->
    <SectionHear />
  </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionDefinition from './parts/section-definition/index.vue'
import SectionMemberIncubation from './parts/section-member-incubation/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionAds from '@/common/components/advertisements/index'
import sectionJourneyLaunch from './parts/section-journey-launch/index.vue'
import SectionIncubationProgram from './parts/section-incubation-program/index.vue'
import SectionDepartments from './parts/section-departments/index.vue'
import SectionProgramsProjects from './parts/section-programs-projects/index.vue'
import SectionOurPartners from './parts/section-our-partners/index.vue'
import SectionIncubationProjects from './parts/section-incubation-projects/index.vue'
import SectionSchedule from './parts/section-schedule/index.vue'
// import SectionNumbers from './parts/section-numbers/index.vue'
import SectionContinueLearning from './parts/section-continue-learning/index.vue'
import SectionHear from './parts/section-hear/index.vue'
import SectionHaveProject from './parts/section-have-project/index.vue'
import SectionOurAds from './parts/section-our-ads/index.vue'
import SectionGraduated from './parts/section-graduated/index.vue'
export default {
  name: "incubator-home",
  components: {
    SectionTop,
    SectionDefinition,
    SectionFeatures,
    SectionAds,
    // SectionNumbers,
    sectionJourneyLaunch,
    SectionIncubationProgram,
    SectionDepartments,
    SectionProgramsProjects,
    SectionOurPartners,
    SectionIncubationProjects,
    SectionSchedule,
    SectionContinueLearning,
    SectionHear,
    SectionHaveProject,
    SectionOurAds,
    SectionGraduated,
    SectionMemberIncubation
  },
  mounted: function() {
    if(!this.token) {
      this.shouldLoginMsg()
    } 
  }
}
</script>

<style></style>