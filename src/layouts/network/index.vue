<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawer />
        </template>
      <DefaultHeader v-else/>
      
      <main>
        <RateYourExperienceBtn group="rate-your-experience-network" />
          <slot></slot>
          </main>
          <SectSubscribe/>
          <DefaultFooter/>
          <portal to="body">
            <RateYourExperience
            title="قيم تجربتك في شبكة"
            />
          </portal>
    </div>
  </template>
  
  <script>
  import RateYourExperienceBtn from '../common/rate-experience.vue'
  import RateYourExperience from '../common/dialogs/rate-experience/index.vue'
  import MyDrawer from '@/layouts/common/drawer.vue'
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
          MyDrawer
      }
  }
  </script>
  
  <style>
  
  </style>