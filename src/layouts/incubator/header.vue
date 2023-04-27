<template>
  <TemplateHeader
  prefixRoute='network-'
  >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('incubator-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('network-investment-project')" class="nav-link">{{ $t('incubator-stages') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-exhibitions')" class="nav-link">{{ $t('learning-meetings') }}</router-link>
            </li>
           
           <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-offers')" class="nav-link">{{ $t('training-courses') }}</router-link>
            </li>

            
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('incubator-contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>
           
      
    </TemplateHeader>
</template>

<script>
import TemplateHeader from '../tamplate/header/index.vue'
export default {
    name:'default-header',
    components:{
      TemplateHeader
    },
   
}
</script>

<style>

</style>