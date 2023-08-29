<template>
  <TemplateHeader
  prefixRoute='network-'
  >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('network-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('network-investment-project')" class="nav-link">{{ $t('Investment-projects') }}</router-link>
            </li>
            <li class="nav-item px-2" v-if="userIsSubNetwork"> 
              <router-link :to="getRouteLocale('network-exhibitions')" class="nav-link">{{ $t('Exhibitions') }}</router-link>
            </li>
           
            <li class="nav-item px-2" v-if="userIsSubNetwork"> 
              <router-link :to="getRouteLocale('network-offers')" class="nav-link">{{ $t('Offers') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-models')" class="nav-link">{{ $t('Models') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{ $t('Blogs') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>
            <div  v-if="false" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center">
                        <a href="" class="text-white " data-bs-toggle="modal"
                        data-bs-target="#addModal">{{ $t('add-new-service') }}</a>
                    </div>
      
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