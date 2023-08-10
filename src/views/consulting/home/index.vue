<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section header-->
          <SectionHeader />
          <!--#section 1-->
         <!-- section help to start-->
         <SectionHelpToStart/>
         <SectionGoals />
        <SectionLaunchNow />
        <AreYouConsultor/>
         <!--#section 2-->
          <div class="container mt-5">
         <!-- section 4-->
         <SectionConsultingCategories />
        </div>
          <!--#section 4-->
          <!-- section 5-->
          <div class="container mt-5">
          <SectionBestConsultors/>
        </div>

          <div class="container mt-5">
          <Section6/>
        </div>
           <div class=" mt-5">
          <Section7/>
        </div>
             <div class="container mt-5">
          <whatSay/>
        </div>

          <!--#section 5-->
  
  
      </div>
  </template>
  
  <script>
  import SectionHeader from './parts/section-header/index.vue'

  import SectionGoals from './parts/section-goals/index.vue'
  import SectionLaunchNow from './parts/section-launch-now/index.vue'
  import SectionHelpToStart from './parts/section-help-tostart/index.vue'
  import SectionConsultingCategories from './parts/section-consulting-categories/index.vue'
  import SectionBestConsultors from './parts/section-best-consultors/index.vue'
  import AreYouConsultor from './parts/are-you-consultor/index.vue'

  import Section6 from './parts/section-6/index.vue'
  import whatSay from './parts/section-8/whatSay.vue'
  import Section7 from './parts/section-7/index.vue'

  export default {
  name:"consulting-home",
  components:{
    SectionHeader,
    SectionHelpToStart,
    SectionConsultingCategories,
    SectionBestConsultors,
    SectionGoals,
    SectionLaunchNow,
    Section6,
    whatSay,
    Section7,
    AreYouConsultor

  }
  }
  </script>
  
  <style>
  
  </style>