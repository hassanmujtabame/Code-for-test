<template>
  <div
    :style="{ opacity: o }"
    style="margin-top: 85px"
    class="consult max-width-100-hidden"
  >
    <!-- section Header-->
    <SectionHeader />
    <div class="container mt-5">
      <!-- section we-helpyou-->
      <SectionWeHelpYou />
      <SectionFeatures />
    </div>
    <!-- section 3-->
    <SectionHowOfferService />

    <!-- section 4-->
    <SectionBestProvider />

    <!-- section 5-->
    <SectionRecentProposals />

    <!-- section 6-->
    <div class="mt-2">
      <SectionNeedService />
    </div>
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
import SectionHeader from "./parts/section-header/index.vue";
import SectionWeHelpYou from "./parts/section-we-helpyou/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
import SectionHowOfferService from "./parts/section-how-offer-service/index.vue";
import SectionBestProvider from "./parts/section-best-provider/index.vue";
import SectionRecentProposals from "./parts/section-recent-proposals/index.vue";
import SectionNeedService from "./parts/section-need-service/index.vue";
import SectionExploreServices from "./parts/section-explore-services/index.vue";
import SectionRecentServices from "./parts/section-recent-services/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
export default {
  name: "service-provider-guest",
  data() {
    return {
      o: 1,
    };
  },
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
  },
  methods: {
    created() {
      // Check if four days have passed since a certain event (e.g., first visit)
      const s = new Date(/* Date of the event */);
      const a = new Date();
      const f = 4 * 24 * 60 * 60 * 1000; // Four days in milliseconds

      if (a - s >= f) {
        this.o = 0;
      }
    },
  },
};
</script>

<style></style>
