<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawer :dashboard="'service-provider-dashboard'"/>
        </template>
      <DefaultHeader v-else/>


      <main >
        <faqBtn />
        <RateYourExperienceBtn group="rate-your-experience-network" />
          <slot></slot>
          </main>
          <SectSubscribe/>
          <AddServiceDialog />
          <AddProposalDialog />
          <DefaultFooter/>

          
            <RateYourExperience
            :title="$t('service-providers')"
            category="service-provider"
            />
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
  import sendMsgProvider from './dialogs/send-message/index'
  import graduateRiadiatFirstStep from './dialogs/graduate-riadiat/first'
  import graduateRiadiatFirstSecond from './dialogs/graduate-riadiat/second'
  export default {
      name:'provider-layout',
      components:{
        faqBtn,
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
          graduateRiadiatFirstSecond
      }
  }
  </script>
  
  <style>
  
  </style>