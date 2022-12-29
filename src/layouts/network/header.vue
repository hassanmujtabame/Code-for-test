<template>
  <TemplateHeader>
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('network-home')"  class="nav-link">الرئيسية</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('network-investment-project')" class="nav-link">مشاريع للإستثمار</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-exhibitions')" class="nav-link">المعارض</router-link>
            </li>
           
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-offers')" class="nav-link">العروض</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-models')" class="nav-link">النماذج</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-blogs')" class="nav-link">المدونة</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('contact-us')" class="nav-link">تواصل معنا</router-link>
            </li>
            <div  v-if="false" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center">
                        <a href="" class="text-white " data-bs-toggle="modal"
                        data-bs-target="#addModal">أضف خدمة جديدة</a>
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