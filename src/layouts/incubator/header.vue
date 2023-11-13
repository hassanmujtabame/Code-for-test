<template>
  <TemplateHeader
  prefixRoute='incubator-'
  >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('incubator-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('incubator-incubator-business')" class="nav-link">{{ $t('incubator-stages') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('incubator-your-learning-meetings')" class="nav-link">{{ $t('learning-meetings') }}</router-link>
            </li>
           
           <li class="nav-item px-2">
              <router-link :to="getRouteLocale('incubator-your-courses')" class="nav-link">{{ $t('training-courses') }}</router-link>
            </li> 

            
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('incubator-contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>

            <li class="nav-item px-2 btn-main btn-nav text-center" style="padding:5px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
              <router-link v-if="!token" :to="getRouteLocale('register')" class="text-white" >{{ $t("join-us") }}</router-link>
              <router-link v-else-if="!userIsSubIncubator" :to="getRouteLocale('incubator-subscribe')"
              class="text-white"> {{ $t('join-us') }} </router-link>
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