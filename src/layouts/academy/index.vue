<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawer :dashboard="'academy-dashboard'"/>
        </template>
      <DefaultHeader v-else/>


      <main >
        <RateYourExperienceBtn group="rate-your-experience-network" />
          <slot></slot>
          </main>
          <SectSubscribe/>
          <DefaultFooter/>

          
            <RateYourExperience
            :title="$t('riadiat-academy')"
            category="academy"
            />
          <RateSuccessExperience />
          <d-success-message />
          <d-confirm-message />
          <d-rate-dialog />
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
  import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
 export default {
      name:'provider-layout',
      components:{
        RateYourExperienceBtn,
        RateYourExperience,
          DefaultFooter,
          DefaultHeader,
          localHeader,
          SectSubscribe,

          RateSuccessExperience,
          MyDrawer  }
  }
  </script>
  
  <style>
  
  </style>