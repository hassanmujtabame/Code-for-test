<template>
  <div style="margin-top: 85px " class="consult max-width-100-hidden">
    <!-- section Header-->
    <SectionHeader />
    <div class="container mt-5">
      <!-- section we-helpyou-->
      <SectionWeHelpYou />
      <SectionFeatures />
        <!-- <SectionAds department="service-provider" /> -->

    </div>
    <!-- section 3-->
    <SectionHowOfferService />

    <!-- section 4-->
    <SectionBestProvider />

    <!-- section 5-->
    <SectionRecentProposals />

    <!-- section 6-->
    <SectionExploreServices />

    <div class="mt-2">
      <SectionNeedService />
    </div>
    <!-- section 7-->
    <!-- <SectionExploreServices /> -->
    
    <!-- <FeaturesService style="margin-top: 150px"/> -->

    <!-- section 8-->
    <SectionRecentServices />

    <!-- section 9-->
    <SectionContinueLearning />

    <!-- section 10-->
    <SectionHear />
  </div>
</template>
  
  <script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionWeHelpYou from "./parts/section-we-helpyou/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
import SectionHowOfferService from "./parts/section-how-offer-service/index.vue";
import SectionBestProvider from "./parts/section-best-provider/index.vue";
import SectionRecentProposals from "./parts/section-recent-proposals/index.vue";
import SectionNeedService from "./parts/section-need-service/index.vue";
import SectionExploreServices from "./parts/section-explore-services/index.vue";
// import SectionAds from '@/common/components/advertisements/index'

// import FeaturesService from "./parts/features-service-provider/index.vue";

import SectionRecentServices from "./parts/section-recent-services/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
export default {
  name: "service-provider-guest",
  components: {
    SectionHeader,
    SectionWeHelpYou,
    SectionFeatures,
    SectionHowOfferService,
    SectionBestProvider,
    SectionRecentProposals,
    SectionNeedService,
    SectionExploreServices,
    SectionRecentServices,
    SectionContinueLearning,
    SectionHear,
    // SectionAds
    // FeaturesService
  }
};
</script>
  
  <style>
</style>