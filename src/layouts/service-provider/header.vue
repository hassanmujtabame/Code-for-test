<template>
  <TemplateHeader 
  hideSearch
  >
    <template v-slot="{closeNavList}" >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('service-provider-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li :key="i" v-for="(item,i) in items.filter(x=>x.provider === userIsProvider)" class="nav-item px-2">
              <router-link :to="getRouteLocale(item.route)"  class="nav-link">{{ item.text }}</router-link>
            </li>
            <button @click="openAddService($event,closeNavList)" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center text-white">
              {{userIsProvider?$t('add-new-service'):$t('add-new-request') }}
            </button>
          
                  <button @click="switchRole" class="btn m-c">{{userIsProvider?$t('switch-to-buyer') : $t('switch-to-provider') }}</button>
                  </template>
    </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'

export default {
    name:'default-header',
    components:{
      TemplateHeader,
    },
    data:(vm)=>{
      return {

      items:[
        /**provider */
        {route:'service-provider-show-services', text:vm.$t('show-your-services'),provider:true},
        {route:'service-provider-ready-services', text:vm.$t('your-ready-services'),provider:true},
        {route:'contact-us',text:vm.$t('contact-us'),provider:true},
        /** client */
        {route:'service-provider-show-services', text:vm.$t('service'),provider:false},
        {route:'service-provider-client-my-requests', text:vm.$t('requests'),provider:false},
        {route:'service-provider-client-my-purchases', text:vm.$t('my-purchases'),provider:false},
        {route:'contact-us',text:vm.$t('contact-us'),provider:false}
      ]
    }
  },
    computed:{
      isRequestPage(){
       return this.$route.name.startsWith('service-provider-show-service')
      }
    },
   methods:{
    switchRole(){
      this.$store.commit('auth/SET_IS_PROVIDER',!this.userIsProvider)
      this.refreshPage()
    },
    openAddService(evt,closeNavList){
        evt.preventDefault();
        closeNavList()
        if(!this.userIsProvider)
        this.fireOpenDialog('add-request-sp')
        else
        this.fireOpenDialog('add-ready-service-dialog')
      },
      closeAddService(evt){
        evt.preventDefault();
        this.fireCloseDialog('add-ready-service-dialog')
      },
   }
}
</script>

<style>

</style>