<template>
  <TemplateHeader>
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="{name:'index',params:{lang:$i18n.locale}}" class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link  :to="{name:'network-home',params:{lang:$i18n.locale}}" class="nav-link">{{$t('network')}}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name:'academy-home',params:{lang:$i18n.locale}}"  class="nav-link">{{ $t('academy') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name:'incubator-home',params:{lang:$i18n.locale}}" class="nav-link">{{ $t('Babysitter') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name:'service-provider-home',params:{lang:$i18n.locale}}"  class="nav-link">{{ $t('services-provider') }}</router-link>
              
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name:'consulting-home',params:{lang:$i18n.locale}}" class="nav-link">{{ $t('consulting') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="{name:'contact-us',params:{lang:$i18n.locale}}" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>
          </TemplateHeader>
</template>

<script>
import TemplateHeader from '../tamplate/header/index.vue'
export default {
    name:'default-header',
   components:{
    TemplateHeader
   }
}
</script>

<style>

</style>