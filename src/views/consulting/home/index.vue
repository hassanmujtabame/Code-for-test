<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section 1-->
          <SectionOne />
          <!--#section 1-->
         <!-- section 2-->
         <SectionTwo/>
          <!--#section 2-->
          <!-- section 3-->
          <SectionThree />
          <!--#section 3-->
         <!-- section 4-->
         <SectionFour />
          <!--#section 4-->
          <!-- section 5-->
          <SectionFive/>
          <!--#section 5-->
          <!-- section 6-->
          <SectionSix />
          <!--#section 6-->
          <!-- section 7-->
          <SectionSeven />
          <!--#section 7-->
           <!-- section 8-->
           <SectionEight />
          <!--#section 8--> 
  
      </div>
  </template>
  
  <script>
  import SectionOne from './parts/section-1/index.vue'
  import SectionTwo from './parts/section-2/index.vue'
  import SectionThree from './parts/section-3/index.vue'
  import SectionFour from './parts/section-4/index.vue'
  import SectionFive from './parts/section-5/index.vue'
  import SectionSix from './parts/section-6/index.vue'
  import SectionSeven from './parts/section-7/index.vue'
  import SectionEight from './parts/section-8/index.vue'
  export default {
  name:"consulting-home",
  components:{
    SectionOne,
    SectionTwo,
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