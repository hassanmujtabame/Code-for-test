<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section Header-->
          <SectionOne />
          <!-- section recent-requests-->
          <SectionFive/>
          <!-- section explore-services-->
          <SectionSeven />
          <!-- section recent-services-->
          <SectionEight />
          <!-- section seek for job-->
          <SectionSeekJob />
         <!-- section best-provider-->
         <SectionFour />

          

          <!-- section need-service-->
          <SectionSix />
          

           

           <!-- section continue-learning-->
           <SectionNine />
 
          <!-- section hear-->
          <SectionTen />

      </div>
  </template>
  
  <script>
  import SectionOne from './parts/section-auth-header/index.vue'
  import SectionSeekJob from './parts/section-seek-job/index.vue'
  import SectionFour from './parts/section-best-provider/index.vue'
  import SectionFive from './parts/section-recent-requests/index.vue'
  import SectionSix from './parts/section-need-service/index.vue'
  import SectionSeven from './parts/section-explore-services/index.vue'
  import SectionEight from './parts/section-recent-services/index.vue'
  import SectionNine from './parts/section-continue-learning/index.vue'
  import SectionTen from './parts/section-hear/index.vue'
  export default {
  name:"service-provider-guest",
  components:{
    SectionOne,
    SectionSeekJob,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
    SectionNine,
    SectionTen
  }
  }
  </script>
  
  <style>
  
  </style>