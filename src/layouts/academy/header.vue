<template>
  <TemplateHeader 
  hideSearch
  >
    <template v-slot="{/*closeNavList*/}" >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('academy-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li :key="i" v-for="(item,i) in items" class="nav-item px-2">
              <router-link :to="getRouteLocale(item.route)"  class="nav-link">{{ item.text }}</router-link>
            </li>
           
          
                  <button v-if="false" @click="switchRole" class="btn m-c">{{userIsProvider?$t('switch-to-buyer') : $t('switch-to-provider') }}</button>
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
        {route:'academy-courses', text:vm.$t('academy-courses'),intructor:true},
        {route:'academy-meetings', text:vm.$t('academy-meetings'),intructor:true},
        {route:'academy-your-courses', text:vm.$t('your-courses'),intructor:true},
        {route:'contact-us',text:vm.$t('contact-us'),intructor:true},
        ]
    }
  },
   methods:{
    switchRole(){
     this.switchRoleAcademy()
    },
   }
}
</script>

<style>

</style>