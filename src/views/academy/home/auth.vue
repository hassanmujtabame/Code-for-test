<template>
  <div >
    <!-- section 1-->
    <SectionAuthHeader />
    <!--#section 1-->
    <!-- section 2-->
    <SectionTwo />
    <!--#section 2-->
    <!-- section 3-->
    <div>
      <SectionFeatures />
    </div>
    <!-- <div>

    <SectionFeatures />
    </div> -->

    <!-- <SectionAds department="academy" /> -->

    <SectionTempForAds />

    <SectionHelpsYou />
    <!--#section 3-->
    <!-- section top instructor-->
    <SectionTopInstructor />
    <div>
      <SectionMostPopularCourses />
    </div>
    <div>
      <CardCategory />
    </div>
    <SectionSubscribeNow />
    <SectionOurPartners />

    <!--#section top instructor-->
    <!-- section training-fields-->
    <SectionTrainingFields />
    <!--#section training-fields-->
    <!-- section exploring-entrepreneurship-->
    <section-exploring-entrepreneurship />
    <!--#section exploring-entrepreneurship-->
    <!-- section exploring-specialized-entrepreneurship-->
    <section-exploring-specialized-entrepreneurship />
    <!--#section exploring-specialized-entrepreneurship-->
    <!-- section section-academy-schedule-->

    <!-- <div>

    <section-academy-schedule />
    </div> -->
    <!--#section section-academy-schedule-->
    <!-- section 9-->
    <SectionBestInstructors />
    <!--#section 9-->

    <!-- section 10-->
    <SectionTen />
    <!--#section 10-->
    <!-- section 11-->
    <!-- <div>

    <SectionRecentCourses />
    </div> -->
    <!--#section 11-->
    <!-- section 12-->
    <!--#section 12-->
    <!-- section 13-->
    <div class="d-none">
      <SectionAcademyNumbers />
    </div>
    <!--#section 13-->
    <!-- section 14-->
    <SectionContinueLearning />
    <!--#section 14-->
    <!-- section 15-->
    <SectionHear />
    <!--#section 15-->
  </div>
</template>

<script>
import SectionAuthHeader from "./parts/section-auth-header/index.vue";
import SectionTwo from "./parts/section-2/index.vue";
import SectionThree from "./parts/section-3/index.vue";
import SectionFeatures from "../../../components/academy-features.vue";
// import SectionFeatures from "./parts/section-features/index.vue";
// import sectionAdvertisements from './parts/section-advertisements/index.vue'
import SectionAds from "@/common/components/advertisements/index.vue";
import SectionMostPopularCourses from "./parts/section-most-popular-courses/index.vue";

import SectionHelpsYou from "./parts/section-helps-you/index.vue";
import SectionSubscribeNow from "./parts/section-subscribe-now/index.vue";
import SectionTopInstructor from "./parts/section-top-instructor/index.vue";
import SectionTrainingFields from "./parts/section-training-fields/index.vue";
import SectionExploringEntrepreneurship from "./parts/section-exploring-entrepreneurship/index.vue";
import SectionExploringSpecializedEntrepreneurship from "./parts/section-exploring-specialized-entrepreneurship/index.vue";
import SectionAcademySchedule from "./parts/section-academy-schedule/index.vue";
import SectionBestInstructors from "./parts/section-best-instructors/index.vue";
import SectionTen from "./parts/section-10/index.vue";
import SectionRecentCourses from "./parts/section-recent-courses/index.vue";
import SectionOurPartners from "./parts/section-our-partners/index.vue";
import SectionAcademyNumbers from "./parts/section-academy-numbers/index.vue";
import SectionContinueLearning from "@/components/learn-academy.vue";
import CardCategory from "@/components/academy-category.vue";
import SectionHear from "@/views/academy/common-components/section-hear/index.vue";
import SectionTempForAds from "./parts/section-temp-for-ads/index.vue";

export default {
  name: "academy-home",
  data() {
    return {
      o: 1,
    };
  },
  components: {
    SectionTempForAds,
    SectionAuthHeader,
    SectionTwo,
    SectionThree,
    SectionHelpsYou,
    CardCategory,
    SectionFeatures,
    SectionAds,
    SectionSubscribeNow,
    SectionTopInstructor,
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
    // created() {
    //   const s = new Date();
    //   const d = new Date();
    //   const f = 4 * 24 * 60 * 60 * 1000;

    //   if (d - s >= f) {
    //     this.o = 0;
    //   }
    // },
  },
};
</script>

<style></style>
