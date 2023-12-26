<template>
   <div style="margin-top: 86px;">
        <!-- section header-->
        <SectionHeader />
        <!--features-->
        <SectionFeatures />

        <!--section-training-types-->
        <SectionTrainingTypes />
       
        <SectionOurInstructorPublic />
        <SectionOurInstructorSpecific />
         <SectionCreateCourse />
         <!-- <sectionRequireGuide /> -->
        <!-- register form-->
        <SectionForm  v-if="!userIsInstructor" />
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionFeatures from './parts/section-features/index.vue'
import SectionCreateCourse from './parts/section-create-course/index.vue'
// import sectionRequireGuide from './parts/section-requirement-guide/index.vue'
import SectionTrainingTypes from './parts/section-training-types/index.vue'
import SectionOurInstructorPublic from './parts/section-our-instructor-public/index.vue'
import SectionOurInstructorSpecific from './parts/section-our-instructor-specific/index.vue'
// import SectionOurInstructorPublic from './parts/section-our-partners/index.vue'
// import SectionOurInstructorSpecific from './parts/section-our-partners-specific/index.vue'
import SectionForm from './parts/section-form/index.vue'
import { mapState } from 'vuex';


export default {
 name:'register-instructor',
 components:{
    SectionHeader,
    SectionFeatures,
    SectionCreateCourse,
   //  sectionRequireGuide,
    SectionTrainingTypes,
    SectionOurInstructorPublic,
    SectionOurInstructorSpecific,
    SectionForm
 },
 mounted(){
   if(store.state.auth.isInstructor){
      this.$router.push({name: 'academy-home'})
   }
 }
}
</script>