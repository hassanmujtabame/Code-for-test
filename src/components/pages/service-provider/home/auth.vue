<template>
  <div style="margin-top: 85px " class="consult max-width-100-hidden">
    <!-- section Header-->
    <SectionAuthHeader />
    <!-- <SectionHeader /> -->
    <!-- section defition-->
    <SectionDefinition />
    <!-- section features -->
    <SectionFeatures />
    <!-- how to offer service  -->
    <SectionHowOfferService />
    <!-- section best-provider-->
    <SectionBestProvider />
    <!-- section recent-Proposals-->
    <SectionRecentProposals />
    <!-- section need service -->
    <SectionNeedService />
    
    <SectionExploreServices v-if="userIsProvider" />
    <!-- section explore-services-->
    <SectionExploreServices v-if="!userIsProvider" />
    <!-- section recent-services-->
    <SectionRecentServices />

    <!-- <FeaturesService style="margin-top: 150px" /> -->
    <!-- section seek for job-->
    <!-- <SectionSeekJob /> -->


    <!-- section continue-learning-->
    <SectionContinueLearning />

    <!-- section hear-->
    <SectionHear />
  </div>
</template>
  
<script>
import SectionAuthHeader from "./parts/section-auth-header/index.vue";
import SectionHeader from "./parts/section-header/index.vue";
import SectionSeekJob from "./parts/section-seek-job/index.vue";
import SectionBestProvider from "./parts/section-best-provider/index.vue";
import SectionRecentProposals from "./parts/section-recent-proposals/index.vue";
import SectionDefinition from "./parts/section-definition/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
import SectionNeedService from './parts/section-need-service/index.vue'
import SectionExploreServices from "./parts/section-explore-services/index.vue";
import FeaturesService from "./parts/features-service-provider/index.vue";

import SectionRecentServices from "./parts/section-recent-services/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
import SectionHowOfferService from "./parts/section-how-offer-service/index.vue";
export default {
  name: "service-provider-guest",
  components: {
    SectionHeader,
    SectionAuthHeader,
    SectionSeekJob,
    SectionBestProvider,
    SectionRecentProposals,
    SectionNeedService,
    SectionExploreServices,
    SectionRecentServices,
    SectionContinueLearning,
    SectionHear,
    FeaturesService,
    SectionDefinition,
    SectionFeatures,
    SectionHowOfferService,

  }
};
</script>
  
<style></style>