<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
    <!-- section Header-->
    <SectionHeader />

    <!-- section recent-services-->
    <SectionRecentServices />

    <!-- <SectionHeader /> -->
    <!-- section defition-->
    <SectionDefinition />
    <div class="container my-5">
      <SectionProvideService />
    </div>
    <!-- section for the filter data -->
    <div class="my-5">
      <SectionAbout />
    </div>
    <div>
      <SectionFliterData />
    </div>
    <!-- end section for the filter data -->

    <!-- section features -->
    <!-- <SectionFeatures /> -->

    <!-- how to offer service  -->
    <!-- <SectionHowOfferService /> -->

    <!-- section best-provider-->
    <SectionBestProvider />

    <!-- SectionCommonQuistions -->
    <SectionCommonQuistions class="my-3" />

    <!-- browsing according field -->

    <!-- <SectoinBrowsing/> -->

    <!-- Section for still have quistions  -->
    <!-- <SectionQuistion /> -->
    <!-- section recent-Proposals-->
    <!-- <SectionRecentProposals /> -->
    <!-- section need service -->
    <!-- <SectionNeedService /> -->

    <!-- <SectionExploreServices v-if="userIsProvider" /> -->
    <!-- section explore-services-->
    <!-- <SectionExploreServices v-if="!userIsProvider" /> -->

    <!-- <FeaturesService style="margin-top: 150px" /> -->
    <!-- section seek for job-->
    <!-- <SectionSeekJob /> -->

    <!-- section continue-learning-->
    <SectionContinueLearning />
    <!-- section hear -->
    <SectionHear />
    <!-- section hear-->
    <!-- <SectionHear /> -->
  </div>
</template>

<script>
// import SectionAuthHeader from "./parts/section-auth-header/index.vue";

import SectoinBrowsing from "./parts/section-browsing/index.vue";
import SectionQuistion from "./parts/section-quistion/index.vue";
import SectionHeader from "./parts/section-header/index.vue";
import SectionCommonQuistions from "./parts/section-common-quistions/index.vue";
import SectionSeekJob from "./parts/section-seek-job/index.vue";
import SectionBestProvider from "./parts/section-best-provider/index.vue";
import SectionRecentProposals from "./parts/section-recent-proposals/index.vue";
import SectionDefinition from "./parts/section-definition/index.vue";
// import SectionFeatures from "./parts/section-features/index.vue";
import SectionFeatures from "./parts/section-features-new/index.vue";

import SectionNeedService from "./parts/section-need-service/index.vue";
import SectionExploreServices from "./parts/section-explore-services/index.vue";
import FeaturesService from "./parts/features-service-provider/index.vue";

import SectionRecentServices from "./parts/section-recent-services/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionProvideService from "@/components/serviceProvider.vue";
import SectionAbout from "@/components/section-service-provider-about.vue";
// import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
// import SectionHowOfferService from "./parts/section-how-offer-service/index.vue";
import SectionHowOfferService from "./parts/section-how-offer-service-new/index.vue";
import SectionFliterData from "@/views/service-provider/ready-services/index.vue";
import SectionHear from "./parts/section-hear/index.vue";
export default {
  name: "service-provider-guest",
  components: {
    SectionHeader,
    SectionAbout,
    // SectionAuthHeader,
    SectionSeekJob,
    SectionQuistion,
    SectionProvideService,
    SectionFliterData,
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
    SectoinBrowsing,
    SectionCommonQuistions,
  },
  mounted() {},
};
</script>

<style></style>
