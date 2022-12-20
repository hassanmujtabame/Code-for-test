<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section Header-->
          <SectionOne />
          <div class="container mt-5">
         <!-- section we-helpyou-->
         <SectionTwo/>
         <SectionFeatures />
  </div>
          <!-- section 3-->
          <SectionThree />

         <!-- section 4-->
         <SectionFour />

          <!-- section 5-->
          <SectionFive/>

          <!-- section 6-->
          <SectionSix />
          <!-- section 7-->
          <SectionSeven />

           <!-- section 8-->
           <SectionEight />

           <!-- section 9-->
           <SectionNine />
 
          <!-- section 10-->
          <SectionTen />
  
          <!-- section 11-->
          <SectionEleven />

          <!-- section 12-->
          <SectionTwelve/>
          <!--#section 12--> 
  
      
  
      </div>
  </template>
  
  <script>
  import SectionOne from './parts/section-header/index.vue'
  import SectionTwo from './parts/section-we-helpyou/index.vue'
  import SectionFeatures from './parts/section-features/index.vue'
  import SectionThree from './parts/section-how-offer-service/index.vue'
  import SectionFour from './parts/section-best-provider/index.vue'
  import SectionFive from './parts/section-recent-requests/index.vue'
  import SectionSix from './parts/section-need-service/index.vue'
  import SectionSeven from './parts/section-explore-services/index.vue'
  import SectionEight from './parts/section-recent-services/index.vue'
  import SectionNine from './parts/section-continue-learning/index.vue'
  import SectionTen from './parts/section-10/index.vue'
  export default {
  name:"service-provider",
  components:{
    SectionOne,
    SectionTwo,
    SectionFeatures,
    SectionThree,
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