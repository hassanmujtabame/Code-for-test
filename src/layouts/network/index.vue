<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawer />
        </template>
      <DefaultHeader v-else/>
      
      <main>
        <faqBtn />
        <RateYourExperienceBtn group="rate-your-experience-network" />
          <slot></slot>
          </main>
          <SectSubscribe/>
          <DefaultFooter/>
          <portal to="body">
            <RateYourExperience
            :title="$t('network')"
            category="network"
            />
            <RateSuccessExperience />
          </portal>
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
  import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
  export default {
      name:'network-layout',
      components:{
          DefaultFooter,
          DefaultHeader,
          localHeader,
          SectSubscribe,
          RateYourExperienceBtn,
          RateYourExperience,
          faqBtn,
          RateSuccessExperience,
          MyDrawer
      }
  }
  </script>
  
  <style>
  
  </style>