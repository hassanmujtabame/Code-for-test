<template>
  <div
    :style="{ opacity: o }"
    style="margin-top: 85px"
    class="consult max-width-100-hidden"
  >
    <!-- section Header-->
    <SectionAuthHeader />
    <!-- section recent-Proposals-->
    <SectionRecentProposals />
    <!-- section explore-services-->
    <SectionExploreServices />
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
    SectionAuthHeader,
    SectionSeekJob,
    SectionBestProvider,
    SectionRecentProposals,
    //SectionNeedService,
    SectionExploreServices,
    SectionRecentServices,
    SectionContinueLearning,
    SectionHear,
  },
  methods: {
    created() {
      const d = new Date();
      const s = new Date();
      const f = 4 * 24 * 60 * 60 * 1000; // Four days in milliseconds

      if (s - d >= f) {
        this.o = 0;
      }
    },
  },
};
</script>

<style></style>
