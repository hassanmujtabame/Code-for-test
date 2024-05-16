<template>
  <div style="margin-top: 85px">
    <div v-if="token">
      <!-- <AuthInstructorPage v-if="userAcademyRole == 'instructor'" /> -->
      <!-- <auth-page v-else /> -->
      <auth-page />
    </div>
    <GuestPage v-else />
    <faqBtn />
    <!-- <RateYourExperienceBtn group="rate-your-experience-network" /> -->
  </div>
</template>

<script>
import AuthPage from "./auth.vue";
import AuthInstructorPage from "./auth-instructor.vue";
import GuestPage from "./guest.vue";
import faqBtn from "@/layouts/common/faq-btn/index.vue";
// import RateYourExperienceBtn from '@/layouts/common/rate-experience.vue'
export default {
  name: "academy-home",
  components: {
    AuthPage,
    GuestPage,
    faqBtn,
    AuthInstructorPage,
    // RateYourExperienceBtn
  },
  methods: {},
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

<style></style>
