<template>
  <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="../index.html"
          ><img src="/assets/img/logo (1) (image).png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start justify-content-between" id="offcanvasExample">
          <div class="offcanvas-header">
            <button
              type="button "
              class="btn-close me-3 m-c"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <ul class="navbar-nav me-4 mb-2 mb-lg-0" >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('service-provider-home')"  class="nav-link">الرئيسية</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('service-provider-show-services')" class="nav-link">أعرض خدماتك </router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('service-provider-ready-services')" class="nav-link">خدماتك الجاهزة</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('contact-us')" class="nav-link">تواصل معنا</router-link>
            </li>
            <div  v-if="false" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center">
                        <a href="" class="text-white " data-bs-toggle="modal"
                        data-bs-target="#addModal">أضف خدمة جديدة</a>
                    </div>
          </ul>
          <div>
  
            <div class="d-flex res-search">
              <form class="d-flex position-relative form-nav" role="search">
                <input
                  class="form-control me-2 serach-navbar"
                  type="search"
                  placeholder="عن ماذا تبحثين ؟"
                  aria-label="Search"
                  height="56"
                />
                <div class="position-absolute icon-search px-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#A6A6A6"
                    />
                    <path
                      d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z"
                      fill="#A6A6A6"
                    />
                  </svg>
                </div>
              </form>
              <template v-if="token">
                <UserMsg />
                <UserNotif />
                <UserNav />
               </template>
              <div v-else style="    line-height: 3.5;"  class="btn-main btn-nav text-center">
               
                <router-link  :to="getRouteLocale('register')" class="text-white ">انضمي الينا</router-link>
              </div>
              <li class="nav-item dropdown ms-3 lang">
                <a
                  class="nav-link m-c"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ArrowDownSVG />
                  {{$root.$i18n.locale}}
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click="changeLang('en',$event)">English</a></li>
                  <li><a class="dropdown-item" href="#" @click="changeLang('ar',$event)">العربية</a></li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import ArrowDownSVG from '@/components/icon-svg/arrow-down.vue'

import UserNav from '@/layouts/common/user-nav.vue'
import UserMsg from '@/layouts/common/user-msg.vue'
import UserNotif from '@/layouts/common/user-notif.vue'
export default {
    name:'default-header',
    components:{
      ArrowDownSVG,
      UserNav,
      UserMsg,
      UserNotif
    },
    data:()=>{
    return {
      lang:'AR',
          
      }
    },
    methods:{
      logout(){
        window.store.commit('auth/CLEAR_TOKEN') ;
        window.store.commit('auth/CLEAR_USER');
        this.$router.push('/login')

      }
      
    },
    mounted(){
      //console.log('lang',this.$route,this.$router)
    }
}
</script>

<style>

</style>