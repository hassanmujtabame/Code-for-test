<template>
    <div>
        <template v-if="user">
            <localHeader />
            <MyDrawerInstructor v-if="userAcademyRole=='instructor'" :dashboard="'academy-dashboard'"/>
            <MyDrawerStudent v-else :dashboard="'academy-dashboard'"/>
        </template>
      <DefaultHeader v-else/>


      <main >
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
          <d-standard-rate-dialog />
    </div>
  </template>
  
  <script>
 
  import RateYourExperience from '../common/dialogs/rate-experience/index.vue'
  import RateSuccessExperience from '../common/dialogs/rate-experience/success-rate.vue'
  import MyDrawerInstructor from './drawer-instructor.vue'
  import MyDrawerStudent from './drawer-student.vue'
  import DefaultFooter from '@/layouts/common/footer.vue'
  import DefaultHeader from '../default/header.vue'
  import localHeader from './header.vue'
  import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
 export default {
      name:'provider-layout',
      components:{
        RateYourExperience,
          DefaultFooter,
          DefaultHeader,
          localHeader,
          SectSubscribe,

          RateSuccessExperience,
          MyDrawerInstructor,
          MyDrawerStudent,
        
        }
  }
  </script>
  
  <style>
  
  </style>