<template>
  <div>
    <!-- section 2-->
    <div class="my-5">
      <StepTowardsLeadershipSection />
    </div>
    <!--#section 2-->

    <!-- section 1-->
    <div class="my-5">
      <SectionGuestHeader />
    </div>
    <!--#section 1-->

    <!-- section 3-->
    <SectionFeatures />
    <!-- <SectionAds department="academy" /> -->
    <div class="my-5">
      <SectionTempForAds />
    </div>
    <div class="my-5">
      <SectionHelpsYou />
    </div>
    <div class="my-5">
      <sectionTopInstructor />
    </div>
    <div class="my-5">
      <SectionSubscribeNow />
    </div>
    <!--#section 3-->
    <!-- section top instructor-->
    <!--#section top instructor-->
    <!-- section training-fields-->
    <div class="my-5">
      <SectionTrainingFields />
    </div>
    <!--#section training-fields-->

    <!-- section exploring-entrepreneurship-->
    <div class="my-5">
      <section-exploring-entrepreneurship />
    </div>
    <!--#section exploring-entrepreneurship-->
    <!-- section exploring-specialized-entrepreneurship-->
    <div class="my-5">
      <section-exploring-specialized-entrepreneurship />
    </div>
    <!--#section exploring-specialized-entrepreneurship-->
    <!-- section section-academy-schedule-->
    <div class="my-5">
      <section-academy-schedule />
    </div>
    <!--#section section-academy-schedule-->
    <!-- section 9-->
    <div class="my-5">
      <SectionBestInstructors />
    </div>
    <div class="my-5">
      <SectionMostPopularCourses />
    </div>
    <!--#section 9-->
    <!-- section 10-->
    <div class="my-5">
      <SectionTen />
    </div>
    <!--#section 10-->
    <!-- section 11-->
    <div class="my-5">
      <SectionRecentCourses />
    </div>
    <!--#section 11-->
    <!-- section 12-->
    <div class="my-5">
      <SectionOurPartners />
    </div>
    <!--#section 12-->
    <!-- section 13-->
    <div class="my-5">
      <SectionAcademyNumbers />
    </div>
    <!--#section 13-->
    <!-- section 14-->
    <div class="my-5">
      <SectionContinueLearning />
    </div>
    <!--#section 14-->
    <!-- section 15-->
    <div class="my-5">
      <SectionHear />
    </div>
    <!--#section 15-->
  </div>
</template>

<script>
import SectionGuestHeader from "./parts/section-guest-header/index.vue";
import StepTowardsLeadershipSection from "./parts/section-2/index.vue";
import SectionThree from "./parts/section-3/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
// import sectionAdvertisements from './parts/section-advertisements/index.vue'
import SectionAds from "@/common/components/advertisements/index.vue";
import SectionMostPopularCourses from "./parts/section-most-popular-courses/index.vue";

import SectionTempForAds from "./parts/section-temp-for-ads/index.vue";
import SectionHelpsYou from "./parts/section-helps-you/index.vue";
import SectionSubscribeNow from "./parts/section-subscribe-now/index.vue";
import sectionTopInstructor from "./parts/section-top-instructor/index.vue";
import SectionTrainingFields from "./parts/section-training-fields/index.vue";
import SectionExploringEntrepreneurship from "./parts/section-exploring-entrepreneurship/index.vue";
import SectionExploringSpecializedEntrepreneurship from "./parts/section-exploring-specialized-entrepreneurship/index.vue";
import SectionAcademySchedule from "./parts/section-academy-schedule/index.vue";
import SectionBestInstructors from "./parts/section-best-instructors/index.vue";
import SectionTen from "./parts/section-10/index.vue";
import SectionRecentCourses from "./parts/section-recent-courses/index.vue";
import SectionOurPartners from "./parts/section-our-partners/index.vue";
import SectionAcademyNumbers from "./parts/section-academy-numbers/index.vue";
import SectionContinueLearning from "@/views/academy/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/academy/common-components/section-hear/index.vue";
export default {
  name: "academy-home",
  components: {
    SectionTempForAds,
    SectionGuestHeader,
    StepTowardsLeadershipSection,
    SectionThree,
    SectionHelpsYou,
    SectionFeatures,
    SectionAds,
    SectionSubscribeNow,
    sectionTopInstructor,
    SectionTrainingFields,
    SectionExploringEntrepreneurship,
    SectionExploringSpecializedEntrepreneurship,
    SectionAcademySchedule,
    SectionBestInstructors,
    SectionTen,
    SectionRecentCourses,
    SectionOurPartners,
    SectionAcademyNumbers,
    SectionContinueLearning,
    SectionHear,
    SectionMostPopularCourses,
  },
  methods: {
    getData(dc) {
      const d = new Date(dc);
      const c = new Date();
      const dd = 2;
      const cd = Math.floor(
        (d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24)
      );

      let o = cd > 0 ? 1 : 1 - Math.abs(cd) / dd;

      return o;
    },
  },
};
</script>

<style></style>
