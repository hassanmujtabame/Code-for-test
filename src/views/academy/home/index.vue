<template>
  <div style="margin-top: 85px " class="consult">
    <auth-page v-if="token" />
    <GuestPage v-else />
          <faqBtn/>
        <!-- <RateYourExperienceBtn group="rate-your-experience-network" /> -->
    
    </div>
    
</template>

<script>
import AuthPage from './auth.vue'
import GuestPage from './guest.vue'
// import faqBtn from '@/layouts/common/faq-btn/index.vue'
// import RateYourExperienceBtn from '@/layouts/common/rate-experience.vue'

export default {
name:"academy-home",
components:{
  AuthPage,
  GuestPage,
  // faqBtn,
  // RateYourExperienceBtn

}
}
</script>

<style>
.consult{
  width:100vw;
  overflow-x: hidden;
}
</style>