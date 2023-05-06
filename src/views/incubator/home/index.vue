  <template>
  <div style="margin-top: 85px " class="consult">
        <!-- section top-->
        <SectionTop />
       <!-- section definition-->
       <SectionDefinition/>

        <!-- section features-->
        <SectionFeatures />

       <!-- section ads-->
       <SectionAds department="incubator"  />
       <sectionJourneyLaunch />
        <SectionIncubationProgram />
        <!-- section 6-->
        <SectionDepartments />

        <!-- section 7-->
        <SectionProgramsProjects />
        <SectionHaveProject />
         <!-- section 8-->
         <SectionOurPartners />
         <!-- section 9-->
         <SectionIncubationProjects /> 
        <!-- section 10-->
        <SectionSchedule />
        <SectionNumbers />
        <!-- section 11-->
        <SectionContinueLearning />
        <!-- section 12-->
        <SectionHear/>
    </div>
</template>

<script>
import SectionTop from './parts/section-top/index.vue'
import SectionDefinition from './parts/section-definition/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionAds from '@/common/components/advertisements/index'
import sectionJourneyLaunch from './parts/section-journey-launch/index.vue'
import SectionIncubationProgram from './parts/section-incubation-program/index.vue'
import SectionDepartments from './parts/section-departments/index.vue'
import SectionProgramsProjects from './parts/section-programs-projects/index.vue'
import SectionOurPartners from './parts/section-our-partners/index.vue'
import SectionIncubationProjects from './parts/section-incubation-projects/index.vue'
import SectionSchedule from './parts/section-schedule/index.vue'
import SectionNumbers from './parts/section-numbers/index.vue'
import SectionContinueLearning from './parts/section-continue-learning/index.vue'
import SectionHear from './parts/section-hear/index.vue'
import SectionHaveProject from './parts/section-have-project/index.vue'
export default {
name:"incubator-home",
components:{
  SectionTop,
  SectionDefinition,
  SectionFeatures,
  SectionAds,
  SectionNumbers,
  sectionJourneyLaunch,
  SectionIncubationProgram,
  SectionDepartments,
  SectionProgramsProjects,
  SectionOurPartners,
  SectionIncubationProjects,
  SectionSchedule,
  SectionContinueLearning,
  SectionHear,
  SectionHaveProject
}
}
</script>

<style>

</style>