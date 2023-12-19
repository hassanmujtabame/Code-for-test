<template>
  <div style="margin-top: 85px">
    <auth-page v-if="token" />
    <GuestPage v-else />
    <faqBtn />
    <!-- <RateYourExperienceBtn group="rate-your-experience-network" /> -->
  </div>
</template>

<script>
import AuthPage from "./auth.vue";
import GuestPage from "./guest.vue";
import faqBtn from '@/layouts/common/faq-btn/index.vue'
// import RateYourExperienceBtn from '@/layouts/common/rate-experience.vue'
import UserApi from '@/services/api/user.js'
export default {
  name: "academy-home",
  components: {
    AuthPage,
    GuestPage,
    faqBtn,
    // RateYourExperienceBtn
  },
  methods: {
    async getUser() {
      let {data} = await UserApi.me()
      console.log('acdata',data)
    }
  },
  mounted() {
    if (this.$route.query.affiliate_id) {
      localStorage.setItem("ComeFrom", this.$route.query.affiliate_id);
    }
    this.getUser()
  },
};
</script>

<style></style>
