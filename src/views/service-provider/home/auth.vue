<template>
    <div style="margin-top: 85px " class="consult">
          <!-- section Header-->
          <SectionAuthHeader />
          <!-- section recent-requests-->
          <SectionRecentRequests/>
          <!-- section explore-services-->
          <SectionExploreServices />
          <!-- section recent-services-->
          <SectionRecentServices />
          <!-- section seek for job-->
          <SectionSeekJob />
         <!-- section best-provider-->
         <SectionBestProvider />

          

          <!-- section need-service-->
          <SectionNeedService />
          

           

           <!-- section continue-learning-->
           <SectionContinueLearning />
 
          <!-- section hear-->
          <SectionHear />

      </div>
  </template>
  
  <script>
  import SectionAuthHeader from './parts/section-auth-header/index.vue'
  import SectionSeekJob from './parts/section-seek-job/index.vue'
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
    SectionAuthHeader,
    SectionSeekJob,
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