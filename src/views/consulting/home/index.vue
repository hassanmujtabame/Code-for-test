<template>
  <div
    
    style="margin-top: 85px"
    class="consult"
  >
    <!-- section header-->
    <SectionHeader />
    <!-- <SectionHeader2 v-if="!token"/> -->
    <!--#section 1-->
    <!-- section help to start-->
    <SectionHelpToStart />

    <SectionGoals />

    <SectionLaunchNow />

    <AreYouConsultor />
    <!--#section 2-->
    <div class="container mt-5">
      <!-- section 4-->
      <SectionConsultingCategories />
    </div>
    <!--#section 4-->
    <!-- section 5-->
    <div class="container mt-5">
      <SectionBestConsultors />
    </div>

    <!-- <div class="container mt-5">
          <Section6/>
        </div> -->
    <div>
      <SectionSign />
    </div>
    <div class="mt-5">
      <SectionConsultingNumbers />
    </div>
    <div class="mt-5">
      <Section7 />
    </div>
    <div class="container mt-5">
      <whatSay />
    </div>

    <!--#section 5-->
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionHeader2 from "./parts/section-header-old/index.vue";
import SectionConsultingNumbers from "../../../components/Section-consulting-numbers.vue";
import SectionBest from "../../../components/best-consult.vue";
import SectionSign from "../../../components/sign-up-consult.vue";

import SectionGoals from "./parts/section-goals/index.vue";
import SectionAcademyNumbers from "../../../views/academy/home/parts/section-academy-numbers/index.vue";
import SectionLaunchNow from "./parts/section-launch-now/index.vue";
import SectionHelpToStart from "./parts/section-help-tostart/index.vue";
import SectionConsultingCategories from "./parts/section-consulting-categories/index.vue";
import SectionBestConsultors from "./parts/section-best-consultors/index.vue";
import AreYouConsultor from "./parts/are-you-consultor/index.vue";

import Section6 from "./parts/section-6/index.vue";
import whatSay from "./parts/section-8/whatSay.vue";
import Section7 from "./parts/section-7/index.vue";

export default {
  name: "consulting-home",
  components: {
    SectionHeader,
    SectionSign,
    SectionBest,
    SectionHelpToStart,
    SectionConsultingCategories,
    SectionBestConsultors,
    SectionGoals,
    SectionLaunchNow,
    Section6,
    whatSay,
    Section7,
    SectionHeader2,
    SectionConsultingNumbers,
    AreYouConsultor,
    SectionAcademyNumbers,
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
