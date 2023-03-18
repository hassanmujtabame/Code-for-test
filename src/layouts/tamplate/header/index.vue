<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid " :class="{'px-5':!isMobile}">
          <router-link class="navbar-brand" :to="getRouteLocale('index')"
            ><img src="/assets/svg/logo-header.svg" alt=""
          /></router-link>
          <div v-if="false" class="d-block d-sm-none">
            <SearchInput />
          </div>
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
                id="btn-close-header"
                class="btn-close me-3 m-c"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul  class="navbar-nav me-4 mb-2 mb-lg-0" >
              <slot :closeNavList="closeNavList" :clickLink="clickLink"></slot>
            </ul>
            <div>
    
              <div class="d-flex res-search">
                <!-- search input -->
                <SearchInput v-if="!hideSearch"/>
                <template v-if="token">
                  <UserMsg :prefixRoute="prefixRoute" />
                  <UserNotif :prefixRoute="prefixRoute" />
                  <UserNav :prefixRoute="prefixRoute" />
                 </template>
                <div v-else style="    line-height: 3.5;"  class="btn-main btn-nav text-center">
                 
                  <router-link  :to="getRouteLocale('register')" class="text-white ">{{ $t('join-us') }}</router-link>
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
                    <li><a class="dropdown-item" href="#" v-if="$i18n.locale!='en'" @click="changeLang('en',$event)">English</a></li>
                    <li><a class="dropdown-item" href="#" v-if="$i18n.locale!='ar'" @click="changeLang('ar',$event)">العربية</a></li>
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
  import SearchInput from './search.vue'
  export default {
      name:'default-header',
      props:{
        prefixRoute:{
          type:String,
          default:''
        },
        hideSearch:{
          type:Boolean,
          default:false
        }
      },
      components:{
        SearchInput,
        ArrowDownSVG,
        UserNav,
        UserMsg,
        UserNotif
      },
      data:()=>{
      return {
        lang:'AR',
        showMobileNav:false,
            
        }
      },
      methods:{
        closeNavList(){
          window.$(`#btn-close-header`).click()
        },
        clickLink(navigate,evnt){
            //this.myModal.hide();
            this.closeNavList()
            navigate(evnt)
        },
        logout(){
          window.store.commit('auth/CLEAR_TOKEN') ;
          window.store.commit('auth/CLEAR_USER');
          
                window.location.reload()
        }
        
      },
      mounted(){

       window.$(`#offcanvasExample .nav-link`).click(()=>{
        if(this.isMobile)
        this.closeNavList()
       })
      }
  }
  </script>
  
  <style scoped>
  a.nav-link {
    text-align: start;
    white-space: nowrap;
}
  </style>