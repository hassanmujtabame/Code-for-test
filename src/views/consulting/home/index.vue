<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section header-->
          <SectionHeader />
          <!--#section 1-->
         <!-- section help to start-->
         <SectionHelpToStart/>
          <!--#section 2-->

         <!-- section 4-->
         <SectionFour />
          <!--#section 4-->
          <!-- section 5-->
          <SectionFive/>
          <!--#section 5-->
  
  
      </div>
  </template>
  
  <script>
  import SectionHeader from './parts/section-header/index.vue'
  import SectionHelpToStart from './parts/section-help-tostart/index.vue'
  import SectionThree from './parts/section-3/index.vue'
  import SectionFour from './parts/section-4/index.vue'
  import SectionFive from './parts/section-5/index.vue'
  import SectionSix from './parts/section-6/index.vue'
  import SectionSeven from './parts/section-7/index.vue'
  import SectionEight from './parts/section-8/index.vue'
  export default {
  name:"consulting-home",
  components:{
    SectionHeader,
    SectionHelpToStart,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight
  }
  }
  </script>
  
  <style>
  
  </style>