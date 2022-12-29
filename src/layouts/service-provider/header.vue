<template>
  <TemplateHeader>
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('service-provider-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('service-provider-show-services')" class="nav-link">{{ $t('show-your-services') }} </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('service-provider-ready-services')" class="nav-link">{{ $t('your-ready-service') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>
            <button @click="openAddService" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center text-white">
              {{ $t('add-new-service') }}
                    </button>
       
    </TemplateHeader>
</template>

<script>

import TemplateHeader from '../tamplate/header/index.vue'
export default {
    name:'default-header',
    components:{
      TemplateHeader
    },
   methods:{
    openAddService(evt){
        evt.preventDefault();
        this.fireOpenDialog('dialog-add-service')
      },
      closeAddService(evt){
        evt.preventDefault();
        this.fireCloseDialog('dialog-add-service')
      },
   }
}
</script>

<style>

</style>