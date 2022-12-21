<template>
    <div>
      <DefaultHeader/>
      <MyDrawer :dashboard="'service-provider-dashboard'" v-if="user"/>
      <main style="margin-top: 96px">
          <slot></slot>
          </main>
          <SectSubscribe/>
          <AddServiceDialog />
          <DefaultFooter/>
    </div>
  </template>
  
  <script>
  import MyDrawer from '@/layouts/common/drawer.vue'
  import DefaultFooter from '@/layouts/common/footer.vue'
  import DefaultHeader from './header.vue'
  import AddServiceDialog from './dialogs/add-service/index.vue'
  import SectSubscribe from '@/layouts/common/section-subscribe/sect-subscribe.vue';
  export default {
      name:'network-layout',
      components:{
          DefaultFooter,
          DefaultHeader,
          SectSubscribe,
          AddServiceDialog,
          MyDrawer
      }
  }
  </script>
  
  <style>
  
  </style>