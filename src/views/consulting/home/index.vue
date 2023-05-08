<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section header-->
          <SectionHeader />
          <!--#section 1-->
         <!-- section help to start-->
         <SectionHelpToStart/>
         <SectionGoals v-if="false" />
        <SectionLaunchNow v-if="false" />
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

  export default {
  name:"consulting-home",
  components:{
    SectionHeader,
    SectionHelpToStart,
    SectionConsultingCategories,
    SectionBestConsultors,
    SectionGoals,
    SectionLaunchNow

  }
  }
  </script>
  
  <style>
  
  </style>