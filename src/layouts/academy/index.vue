<template>
  <div>
    <template v-if="user">
      <!-- <localHeader /> -->
      <DefaultHeader />

      <MyDrawerInstructor
        v-if="userAcademyRole == 'instructor'"
        :dashboard="'academy-dashboard'"
      />
      <MyDrawerStudent v-else :dashboard="'academy-dashboard'" />
    </template>
    <DefaultHeader v-else />

    <main>
      <slot></slot>
    </main>
    <SectSubscribe />
    <DefaultFooter category="academy" />

    <RateYourExperience :title="$t('riadiat-academy')" category="academy" />
    <!-- <RateSuccessExperience /> -->
    <RateYourExperienceBtn group="rate-your-experience-network" />

    <d-success-message />
    <d-confirm-message />
    <d-standard-rate-dialog />
    <faqBtn />
  </div>
</template>

<script>
import marketAPI from "@/services/api/market";

import faqBtn from "@/layouts/common/faq-btn/index.vue";
import RateYourExperienceBtn from "@/layouts/common/rate-experience.vue";

import RateYourExperience from "../common/dialogs/rate-experience/index.vue";
import RateSuccessExperience from "../common/dialogs/rate-experience/success-rate.vue";
import MyDrawerInstructor from "./drawer-instructor.vue";
import MyDrawerStudent from "./drawer-student.vue";
import DefaultFooter from "@/layouts/common/footer.vue";
import DefaultHeader from "../default/header.vue";
import localHeader from "./header.vue";
import SectSubscribe from "@/layouts/common/section-subscribe/sect-subscribe.vue";
export default {
  name: "provider-layout",
  components: {
    RateYourExperience,
    DefaultFooter,
    DefaultHeader,
    localHeader,
    SectSubscribe,
    RateYourExperienceBtn,
    RateSuccessExperience,
    MyDrawerInstructor,
    MyDrawerStudent,
    faqBtn,
  },
  async mounted() {
    if (this.$route.query.affiliate_id) {
      localStorage.setItem("ComeFrom", this.$route.query.affiliate_id);
      await marketAPI.recoredVisit(this.$route.query.affiliate_id);
    }
  },
};
</script>

<style></style>
