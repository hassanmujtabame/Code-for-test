<template>
    <div style="margin-top: 85px " class="consult max-width-100-hidden">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else>
        <SectionTop :itemPage="itemPage" />
    
        <div class="container">
        <SectionUnderTop :itemPage="itemPage" />
        <sectionBestInstructors :itemPage="itemPage" />
        <sectionOurCourses :itemPage="itemPage"/>
        <sectionSchedule :itemPage="itemPage"/>
        <sectionOurPartners :itemPage="itemPage"/>
        
        </div>
        <sectionOtherDeparts :itemPage="itemPage"/>
        <SectionLearning :itemPage="itemPage" />
       <SectionHear :itemPage="itemPage" />
    </div>
</div>
</template>

<script>
import SectionUnderTop from './parts/section-under-header/index.vue'
import sectionBestInstructors from './parts/section-best-instructors/index'
import sectionOurCourses from './parts/section-our-courses/index'
import sectionSchedule from './parts/section-schedule/index'
import sectionOurPartners from './parts/section-our-partners/index'
import sectionOtherDeparts from './parts/section-other-departs/index'
import SectionHear from './parts/section-hear/index.vue'
import SectionTop from './parts/section-top/index.vue'
import SectionLearning from'./parts/section-continue-learning/index.vue'
export default {
 name:'academy-departments',
 components:{
    SectionHear,
    SectionTop,
    SectionUnderTop,
    SectionLearning,
    sectionBestInstructors,
    sectionOurCourses,
    sectionSchedule,
    sectionOurPartners,
    sectionOtherDeparts
 },
 data:(vm)=>{
   return {
    loading:true,
    hasError:false,
    itemPage:{
        id:vm.$route.params.id,
        title:'الازياء'
    }
 }},
 methods:{
    initializing(){
        this.loading = true;
        
        this.loading = false;
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>