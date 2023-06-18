<template>
  <TemplateHeader 
  hideSearch
  prefixRoute='service-provider-'
  >
    <template v-slot="{closeNavList}" >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('service-provider-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li :key="i" v-for="(item,i) in items.filter(x=>x.provider === userIsRoleProvider)" class="nav-item px-2">
              <router-link :to="getRouteLocale(item.route)"  class="nav-link">{{ item.text }}</router-link>
            </li>
            <button @click="openAddService($event,closeNavList)" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center text-white">
              {{userIsRoleProvider?$t('add-new-service'):$t('add-new-request') }}
            </button>
          
                  <button @click="switchRole" class="btn m-c">{{userIsRoleProvider?$t('switch-to-buyer') : $t('switch-to-provider') }}</button>
                  </template>
    </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'
export default {
    name:'default-header-provider',
    components:{
      TemplateHeader,
    },
    data:(vm)=>{
      return {
        userIsRoleProvider:false,
      items:[
        /**provider */
        {route:'service-provider-proposals', text:vm.$t('show-your-services'),provider:true},
        {route:'service-provider-my-ready-services', text:vm.$t('my-services'),provider:true},
        {route:'service-provider-contact-us',text:vm.$t('contact-us'),provider:true},
        /** client */
        {route:'service-provider-ready-services', text:vm.$t('service'),provider:false},
        /*{route:'service-provider-my-proposals', text:vm.$t('my-proposals'),provider:false},*/
        {route:'service-provider-providers', text:vm.$t('service-providers'),provider:false},
        //{route:'service-provider-client-my-purchases', text:vm.$t('my-purchases'),provider:false},
        {route:'service-provider-contact-us',text:vm.$t('contact-us'),provider:false}
      ]
    }
  },
  watch:{
    userIsProvider:{
      deep:true,
      immediate:true,
      handler(val){
        this.userIsRoleProvider = val;
      }
    }
  },
    computed:{
      isRequestPage(){
       return this.$route.name.startsWith('service-provider-show-service')
      }
    },
   methods:{
    switchRole(){
     this.switchRoleProvider(!this.userIsRoleProvider)
    },
    openAddService(evt,closeNavList){
        evt.preventDefault();
        closeNavList()
        if(!this.userIsRoleProvider)
        this.fireOpenDialog('add-proposal')
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