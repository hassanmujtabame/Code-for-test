<template>
  <div style="overflow-x: hidden">
    <!-- section-1 -->
    <SectHeader />
    <!-- #section-1 -->

    <!-- services -->
    <SectServices />
    <heroRegister />
    <!--# service-->
    <!-- section 3-->

    <!-- <SectCampRiadiat /> -->

    <SectionAds department="network" url="network/home-banners" />

    <!-- #section-3 -->
    <!-- section 4 -->
    <SectConsultingRiadiat />

    <!-- #section 4-->
    <SectionTopCoupons />
    <SectionMembership />
    <!-- section 5 -->
    <SectTrainingCourses />
    <!-- #section 5-->
    <!-- section 6-->
    <SectPartnerRiadiat />
    <!-- #section 6 -->
    <!-- section 7-->
    <!-- <SectAboutUs /> -->
    <!-- #section 7-->
    <!--section hear about us-->
    <SectHearAboutUs />
    <!-- section 8-->
    <SectBlog v-if="true" />

    <RecentWorkspaces />
  </div>
</template>

<script>
import SectHeader from "./parts/section-header/index.vue";
import SectServices from "@/components/pages/home/services/index.vue";
import SectCampRiadiat from "@/components/pages/home/camp-riadiat/index.vue";
import SectConsultingRiadiat from "@/components/pages/home/consulting/index.vue";
import SectTrainingCourses from "@/components/pages/home/training-courses/index.vue";
import SectPartnerRiadiat from "./parts/section-partners/index.vue";
import SectAboutUs from "./parts/section-about-us/index.vue";
import SectHearAboutUs from "./parts/section-hear-about-us/index.vue";
import SectionTopCoupons from "./parts/section-top-coupons/index.vue";
import SectionMembership from "./parts/section-membership/index.vue";
import RecentWorkspaces from "@/components/pages/workspaces/home/recent-workspaces/index.vue";
import SectionAds from "@/common/components/advertisements/index.vue";
import heroRegister from "@/components/cards/heroRegister.vue";

// import SectionBlog from './parts/section-blog/index.vue'
import SectionCoupons from "./parts/section-coupons";

import SectBlog from "./parts/section-blog/index.vue";
export default {
  name: "IndexView",
  metaInfo: {
    title: "ريادات- Riadiat",
    titleTemplate: null,
    meta: [
      { name: "description", content: "ريادات- Riadiat" },
      // Facebook meta tags
      { property: "og:title", content: "ريادات- Riadiat" },
      { property: "og:description", content: "Your Description" },
      { property: "og:image", content: "Your Image URL" },
      { property: "og:url", content: "Your URL" },
    ],
  },
  components: {
    SectionAds,
    SectHeader,
    SectServices,
    SectCampRiadiat,
    SectConsultingRiadiat,
    SectTrainingCourses,
    SectPartnerRiadiat,
    SectAboutUs,
    SectBlog,
    SectHearAboutUs,
    SectionCoupons,
    SectionTopCoupons,
    SectionMembership,
    RecentWorkspaces,
    heroRegister,
  },
  data: () => ({}),
  async mounted() {
    if (this.$route.query.affiliate_id) {
      localStorage.setItem("ComeFrom", this.$route.query.affiliate_id);
      await window.axios.post("affiliates/visitor", {
        affiliate_id: this.$route.query.affiliate_id,
      });
    }
  },
};
</script>
