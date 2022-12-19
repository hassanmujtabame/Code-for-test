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
        <!-- section 7-->
        <SectionSeven />
        <!--#section 7-->
         <!-- section 8-->
         <SectionEight />
        <!--#section 8--> 
         <!-- section 9-->
         <SectionNine />
        <!--#section 9-->   
        <!-- section 10-->
        <SectionTen />
        <!--#section 10-->  
        <!-- section 11-->
        <SectionEleven />
        <!--#section 11--> 
        <!-- section 12-->
        <SectionTwelve/>
        <!--#section 12--> 
        <!-- section 13-->
        <SectionThreeteen />
        <!--#section 13-->   
        <!-- section 14-->
      <SectionForteen />
        <!--#section 14--> 
      <!-- section 15-->
      <SectionFifteen />
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
import SectionSeven from './parts/section-7/index.vue'
import SectionEight from './parts/section-8/index.vue'
import SectionNine from './parts/section-9/index.vue'
import SectionTen from './parts/section-10/index.vue'
import SectionEleven from './parts/section-11/index.vue'
import SectionTwelve from './parts/section-12/index.vue'
import SectionThreeteen from './parts/section-13/index.vue'
import SectionForteen from './parts/section-14/index.vue'
import SectionFifteen from './parts/section-15/index.vue'
export default {
name:"academy-home",
components:{
  SectionOne,
  SectionTwo,
  SectionThree,
  sectionTopInstructor,
  SectionTrainingFields,
  SectionExploringEntrepreneurship,
  SectionSeven,
  SectionEight,
  SectionNine,
  SectionTen,
  SectionEleven,
  SectionTwelve,
  SectionThreeteen,
  SectionForteen,
  SectionFifteen
}
}
</script>

<style>

</style>