<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawer :dashboard="'service-provider-dashboard'"/>
        </template>
      <DefaultHeader v-else/>


      <main >
        <RateYourExperienceBtn group="rate-your-experience-network" />
          <slot></slot>
          </main>
          <SectSubscribe/>
          <AddServiceDialog />
          <DefaultFooter/>

          
            <RateYourExperience
            :title="$t('service-providers')"
            category="service-provider"
            />
            <RateSuccessExperience />
          <d-success-message />
          <sendMsgProvider />
    </div>
  </template>
  
  <script>
  import RateYourExperienceBtn from '../common/rate-experience.vue'
  import RateYourExperience from '../common/dialogs/rate-experience/index.vue'
  import RateSuccessExperience from '../common/dialogs/rate-experience/success-rate.vue'
  import MyDrawer from './drawer.vue'
  import DefaultFooter from '@/layouts/common/footer.vue'
  import DefaultHeader from '../default/header.vue'
  import localHeader from './header.vue'
  import AddServiceDialog from './dialogs/add-service/index.vue'
  import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
  import sendMsgProvider from './dialogs/send-message/index'
  export default {
      name:'network-layout',
      components:{
        sendMsgProvider,
        RateYourExperienceBtn,
        RateYourExperience,
          DefaultFooter,
          DefaultHeader,
          localHeader,
          SectSubscribe,
          AddServiceDialog,
          RateSuccessExperience,
          MyDrawer
      }
  }
  </script>
  
  <style>
  
  </style>