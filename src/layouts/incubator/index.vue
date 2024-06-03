<template>
  <div>
    <template v-if="user">
      <!-- <localHeader /> -->
      <DefaultHeader />

      <MyDrawer />
    </template>
    <DefaultHeader v-else />

    <main>
      <faqBtn />
      <RateYourExperienceBtn group="rate-your-experience-network" />
      <slot></slot>
    </main>
    <SectSubscribe />
    <DefaultFooter />

    <RateYourExperience :title="$t('incubator')" category="incubator" />
    <RateSuccessExperience />
    <d-standard-rate-dialog />
    <d-success-message />
    <d-confirm-message />
  </div>
</template>

<script>
import marketAPI from "@/services/api/market";

import faqBtn from "../common/faq-btn/index.vue";
import RateYourExperienceBtn from "../common/rate-experience.vue";
import RateYourExperience from "../common/dialogs/rate-experience/index.vue";
import RateSuccessExperience from "../common/dialogs/rate-experience/success-rate.vue";
import MyDrawer from "./drawer.vue";
import DefaultFooter from "@/layouts/common/footer.vue";
import DefaultHeader from "../default/header.vue";
import localHeader from "./header.vue";
import SectSubscribe from "@/layouts/common/section-subscribe/sect-subscribe.vue";
export default {
  name: "incubator-layout",
  components: {
    DefaultFooter,
    DefaultHeader,
    localHeader,
    SectSubscribe,
    RateYourExperienceBtn,
    RateYourExperience,
    faqBtn,
    RateSuccessExperience,
    MyDrawer,
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
