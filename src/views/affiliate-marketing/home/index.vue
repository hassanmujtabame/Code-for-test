<template>
  <div
    style="margin-top: 85px; overflow-x: hidden; overflow-y: hidden"
    class="consult"
  >
    <!--section-header-->
    <SectionHeader />
    <SectionFeatures />
    <SectionIntro />
    <SectionWhatWeProvide />
    <StepByStepSection />
    <!-- <div>

    <SectionHowWorkProgram />
    </div> -->
    <SectionJoin v-if="token && !user.affiliate" />
    <SectionJoin v-if="!token" />
    <!-- <SectionDoubleWinings /> -->
    <SectionAreYouMember />
    <SectionRecognize />
    <SectionGraduated title="المسوقين الاكثر ربحاً" />
    <!-- <div class="my-5">
      <SectionWinning />
    </div> -->
    <!-- <div>

    <SectionGraduated title=" المسوقين الاكثر ربحا " />
    </div> -->
    <!-- <SectionRecentCourses /> -->
    <SectionCommonQuistions />
    <SectionContinueLearning />
    <!-- <SectionHear :itemPage="itemPage" /> -->
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionWinning from "@/components/Double-your-winnings.vue";
import SectionWhatWeProvide from "./parts/section-what-we-provide/index.vue";
import StepByStepSection from "./parts/section-chose-us/index.vue";
import SectionJoin from "./parts/section-join/index.vue";
import SectionIntro from "./parts/section-intro/index.vue";
import SectionHowWorkProgram from "./parts/section-how-work-program/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
import SectionAreYouMember from "./parts/section-are-you-member/index.vue";
import SectionDoubleWinings from "./parts/section-double-winings/index.vue";
import SectionRecognize from "./parts/section-recognize-our-marketing/index.vue";
import SectionGraduated from "./parts/section-graduated/index.vue";
import SectionRecentCourses from "./parts/section-recent-courses-online/index.vue";
import SectionCommonQuistions from "./parts/section-common-quistions/index.vue";
import SectionContinueLearning from "@/views/incubator/home/parts/section-continue-learning/index.vue";
import SectionHear from "./parts/section-hear/index.vue";
import incubatorAPI from "@/services/api/incubator";

export default {
  name: "affiliate-marketing-home",
  data: () => ({
    loading: true,
    hasError: false,
    itemPage: {},
  }),
  components: {
    SectionWhatWeProvide,
    StepByStepSection,
    SectionJoin,
    SectionHeader,
    SectionIntro,
    SectionHowWorkProgram,
    SectionFeatures,
    SectionAreYouMember,
    SectionRecognize,
    SectionDoubleWinings,
    SectionGraduated,
    SectionRecentCourses,
    SectionContinueLearning,
    SectionHear,
    SectionCommonQuistions,
    SectionWinning,
  },
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await incubatorAPI.getDepartment(this.$route.params.id);
        if (data.success) {
          this.itemPage = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
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
  mounted() {
    this.initializing();
  },
};
</script>

<style></style>
