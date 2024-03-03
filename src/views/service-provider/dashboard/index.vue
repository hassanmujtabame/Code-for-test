<template>
  <main style="margin-top: 85px">
    <div class="container dashbord">
      <div class="row">
        <div class="col-md-2">
          <SideBar />
        </div>
        <div class="col-md-10">
          <!--section top-->
          <SectionBalance />
          <SectionTop />
          <!-- <SectionFirstVisit v-else /> -->
          <!--section balance-->
          <!--section my ready services-->
          <SectionMyReadyServices />

          <!--section my offers-->
          <SectionMyOffers />
          <SectionMyWorkSpace />
          <AskRiyadiate />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SectionTop from "./parts/section-top/index.vue";
import SectionFirstVisit from "./parts/section-first-visit/index.vue";
import SectionBalance from "./parts/section-balance/index.vue";
import SectionMyOffers from "./parts/section-my-offers/index.vue";
import SectionMyWorkSpace from "./parts/section-my-work-space/index.vue";
import AskRiyadiate from "./parts/ask-riyadiate/index.vue";
import SectionMyReadyServices from "./parts/section-my-ready-services/index.vue";
import SideBar from "@/components/sidebar-dash.vue";

export default {
  name: "service-provider-dashboard",
  components: {
    SectionTop,
    SectionFirstVisit,
    SideBar,
    SectionMyOffers,
    SectionBalance,
    SectionMyReadyServices,
    SectionMyWorkSpace,
    AskRiyadiate,
  },
  data: () => ({
    isFirst: true,
  }),
};
</script>

<style></style>
