<template>
  <div style="margin-top: 85px " class="consult max-width-100-hidden">
    <!-- section Header-->
    <SectionAuthHeader />
    <!-- section recent-Proposals-->
    <SectionExploreServices />

    <SectionRecentProposals />
    <!-- section explore-services-->
    <!-- <SectionExploreServices /> -->
    <FeaturesService style="margin-top: 150px" v-if="userIsProvider"/>
    <!-- section recent-services-->
    <SectionRecentServices />
    <!-- section seek for job-->
    <SectionSeekJob />
    <!-- section best-provider-->
    <SectionBestProvider />

    <!-- section continue-learning-->
    <SectionContinueLearning />

    <!-- section hear-->
    <SectionHear />
  </div>
</template>
  
  <script>
import SectionAuthHeader from "./parts/section-auth-header/index.vue";
import SectionSeekJob from "./parts/section-seek-job/index.vue";
import SectionBestProvider from "./parts/section-best-provider/index.vue";
import SectionRecentProposals from "./parts/section-recent-proposals/index.vue";
//import SectionNeedService from './parts/section-need-service/index.vue'
import SectionExploreServices from "./parts/section-explore-services/index.vue";
import FeaturesService from "./parts/features-service-provider/index.vue";

import SectionRecentServices from "./parts/section-recent-services/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
export default {
  name: "service-provider-guest",
  components: {
    SectionAuthHeader,
    SectionSeekJob,
    SectionBestProvider,
    SectionRecentProposals,
    //SectionNeedService,
    SectionExploreServices,
    SectionRecentServices,
    SectionContinueLearning,
    SectionHear,
    FeaturesService
  }
};
</script>
  
  <style>
</style>