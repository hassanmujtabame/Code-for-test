<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section Header-->
          <SectionHeader />
          <div class="container mt-5">
         <!-- section we-helpyou-->
         <SectionWeHelpYou/>
         <SectionFeatures />
  </div>
          <!-- section 3-->
          <SectionHowOfferService />

         <!-- section 4-->
         <SectionBestProvider />

          <!-- section 5-->
          <SectionRecentRequests/>

          <!-- section 6-->
          <SectionNeedService />
          <!-- section 7-->
          <SectionExploreServices />

           <!-- section 8-->
           <SectionRecentServices />

           <!-- section 9-->
           <SectionContinueLearning />
           
          <!-- section 10-->
          <SectionHear />   

      </div>
  </template>
  
  <script>
  import SectionHeader from './parts/section-header/index.vue'
  import SectionWeHelpYou from './parts/section-we-helpyou/index.vue'
  import SectionFeatures from './parts/section-features/index.vue'
  import SectionHowOfferService from './parts/section-how-offer-service/index.vue'
  import SectionBestProvider from './parts/section-best-provider/index.vue'
  import SectionRecentRequests from './parts/section-recent-requests/index.vue'
  import SectionNeedService from './parts/section-need-service/index.vue'
  import SectionExploreServices from './parts/section-explore-services/index.vue'
  import SectionRecentServices from './parts/section-recent-services/index.vue'
  import SectionContinueLearning from './parts/section-continue-learning/index.vue'
  import SectionHear from './parts/section-hear/index.vue'
  export default {
  name:"service-provider-guest",
  components:{
    SectionHeader,
    SectionWeHelpYou,
    SectionFeatures,
    SectionHowOfferService,
    SectionBestProvider,
    SectionRecentRequests,
    SectionNeedService,
    SectionExploreServices,
    SectionRecentServices,
    SectionContinueLearning,
    SectionHear
  }
  }
  </script>
  
  <style>
  
  </style>