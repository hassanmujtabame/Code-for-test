<template>
  <div id="app position-relative">
    <d-overlays-simple class="top-0" v-if="isPageLoading" >
      <div class="loading-div">
        <svg class="gear" style="width:64px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path id="p" fill="#fdb" d="M94.1 58.8c.6-2.8.9-5.8.9-8.8s-.3-6-.9-8.8l-11.7-.4c-.7-2.6-1.7-5-3-7.3l8-8.5c-3.3-4.9-7.5-9.2-12.5-12.5l-8.5 8c-2.3-1.3-4.7-2.3-7.3-3l-.3-11.6C56 5.3 53 5 50 5s-6 .3-8.8.9l-.4 11.7c-2.6.7-5 1.7-7.3 3l-8.5-8c-4.9 3.3-9.2 7.5-12.5 12.5l8 8.5c-1.3 2.3-2.3 4.7-3 7.3l-11.6.3C5.3 44 5 47 5 50s.3 6 .9 8.8l11.7.4c.7 2.6 1.7 5 3 7.3l-8 8.5c3.3 4.9 7.5 9.2 12.5 12.5l8.5-8c2.3 1.3 4.7 2.3 7.3 3l.4 11.7c2.7.5 5.7.8 8.7.8s6-.3 8.8-.9l.4-11.7c2.6-.7 5-1.7 7.3-3l8.5 8c4.9-3.3 9.2-7.5 12.5-12.5l-8-8.5c1.3-2.3 2.3-4.7 3-7.3l11.6-.3zM50 66.9c-9.3 0-16.9-7.6-16.9-16.9S40.7 33.1 50 33.1 66.9 40.7 66.9 50 59.3 66.9 50 66.9z"></path></svg>
<svg class="gear" style="width:64px;margin:64px 0 0 -12px;animation-direction:reverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><use href="#p"></use></svg>
      </div>
      </d-overlays-simple>
    <component :is="$route.meta.layout || 'div'">
       <router-view/>

      </component>
      <portal-target name="body">
      </portal-target>
      <JoinASPartnerDialog />
  </div>
</template>
<script>

import JoinASPartnerDialog from '@/common/dialogs/join-as-partner.vue'
import { mapGetters } from 'vuex'
export default {
  components:{
    JoinASPartnerDialog
  },
  computed:{
      ...mapGetters({
        isPageLoading:'core/isLoading'
      })
  },
  methods:{
    onResizeBrowser () {
      /*
      Design for desktop displays from 1024×768 through 1920×1080
      Design for mobile displays from 360×640 through 414×896
      Design for tablet displays from 601×962 through 1280×800
      */
      this.$store.dispatch('core/setIsMobile',window.innerWidth <= 600)
      this.$store.dispatch('core/setIsTablet',window.innerWidth > 600 && window.innerWidth<=764)
    },
    tagManager(){
      let noscript = document.createElement('noscript');
      let iframe = document.createElement('iframe');
      iframe.setAttribute('src',"https://www.googletagmanager.com/ns.html?id=GTM-NGQ5C76");
      iframe.style.display='none';
      iframe.style.visibility='hidden';
      /*noscript.innerHTML=`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGQ5C76"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`*/
    noscript.appendChild(iframe)
      document.body.appendChild(noscript)
    },
    loadJS(src,async=true,defer=false){
          const plugin = document.createElement("script");
          plugin.setAttribute(
          "src",
          src
        );
        if(defer)
        plugin.setAttribute("defer",true)
        plugin.async = async;
        document.body.appendChild(plugin);
        }
      },
      beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResizeBrowser, { passive: true })
    }
  },
  mounted () {
    console.mylog('mounted')
    this.onResizeBrowser()
    window.addEventListener('resize', this.onResizeBrowser, { passive: true })
  },
  created() {
    this.tagManager()
   // this.loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",true)
    //this.loadJS("/js/jquery.simple-calendar.min.js",true)
    if(this.$i18n.locale=='ar')
    this.loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.rtl.min.css')
    else
    this.loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
    
    const plugin = document.createElement("script");
    plugin.innerHTML="$(function() {  AOS.init();  });"
  document.body.appendChild(plugin);
  window.AOS.init({  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  anchorPlacement: 'top-bottom', });
  
    
    
  },
}
</script>
<style>
  /*@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.rtl.min.css";*/
  @import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
  /*@import "https://unpkg.com/aos@2.3.1/dist/aos.css";*/
  @import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
  @import "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
  @import "@/assets/css/main.css";
  @import "@/assets/css/font-size.css";
  @import "@/assets/css/responsive.css";
  @import "@/assets/css/calender.css";
  @import "@/assets/css/mobile.css";
</style>
<style scoped>

.loading-div{
  width: 150px;
  height: 150px;
}
@keyframes circle {
  0% { transform: rotate(0deg); } 100% { transform: rotate(45deg); }
}
svg.gear { animation: circle .5s infinite linear; }
</style>
