<template>
  <div>
    <template v-if="token && user && userIsRoleProvider != ''">
      <!-- <localHeader /> -->    
      <DefaultHeader  />

      <MyDrawer :dashboard="'service-provider-dashboard'" />
    </template>
    <DefaultHeader v-else />


    <main>
      <RateYourExperienceBtn group="rate-your-experience-network" />
      <slot></slot>
    </main>
    <SectSubscribe />
    <AddServiceDialog v-if="token" />
    <AddProposalDialog v-if="token" />
    <DefaultFooter category="service-provider" />

    <faqBtn />
    <RateYourExperience :title="$t('service-providers')" category="service-provider" />
    <RateSuccessExperience />
    <d-success-message />
    <d-confirm-message />
    <d-standard-rate-dialog />
    <sendMsgProvider />
    <graduateRiadiatFirstStep />
    <graduateRiadiatFirstSecond />
  </div>
</template>
  
<script>
import faqBtn from '../common/faq-btn/index.vue'

import RateYourExperienceBtn from '../common/rate-experience.vue'
import RateYourExperience from '../common/dialogs/rate-experience/index.vue'
import RateSuccessExperience from '../common/dialogs/rate-experience/success-rate.vue'
import MyDrawer from './drawer.vue'
import DefaultFooter from '@/layouts/common/footer.vue'
import DefaultHeader from '../default/header.vue'
import localHeader from './header.vue'
import AddServiceDialog from './dialogs/add-service/index.vue'
import AddProposalDialog from './dialogs/add-proposal/index.vue'
import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
// import SectSubscribe from './section-subscribe/index.vue';

import sendMsgProvider from './dialogs/send-message/index'
import graduateRiadiatFirstStep from './dialogs/graduate-riadiat/first'
import graduateRiadiatFirstSecond from './dialogs/graduate-riadiat/second'
export default {
  name: 'provider-layout',
  components: {
    sendMsgProvider,
    RateYourExperienceBtn,
    RateYourExperience,
    DefaultFooter,
    DefaultHeader,
    localHeader,
    SectSubscribe,
    AddServiceDialog,
    AddProposalDialog,
    RateSuccessExperience,
    MyDrawer,
    graduateRiadiatFirstStep,
    graduateRiadiatFirstSecond,
    faqBtn
  },
  computed: {
    userIsRoleProvider() {
      return this.$store.state.clientOrProvider
    }
  },
}
</script>
  
<style></style>