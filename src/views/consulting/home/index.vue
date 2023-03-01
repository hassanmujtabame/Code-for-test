<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section header-->
          <SectionHeader />
          <!--#section 1-->
         <!-- section help to start-->
         <SectionHelpToStart/>
          <!--#section 2-->

         <!-- section 4-->
         <SectionConsultingCategories />
          <!--#section 4-->
          <!-- section 5-->
          <SectionFive/>
          <!--#section 5-->
  
  
      </div>
  </template>
  
  <script>
  import SectionHeader from './parts/section-header/index.vue'
  import SectionHelpToStart from './parts/section-help-tostart/index.vue'
  import SectionConsultingCategories from './parts/section-consulting-categories/index.vue'
  import SectionFive from './parts/section-5/index.vue'

  export default {
  name:"consulting-home",
  components:{
    SectionHeader,
    SectionHelpToStart,
    SectionConsultingCategories,
    SectionFive,

  }
  }
  </script>
  
  <style>
  
  </style>