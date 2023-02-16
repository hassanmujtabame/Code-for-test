<template>
  <div id="app">
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
export default {
  components:{
    JoinASPartnerDialog
  },
  methods:{
    onResizeBrowser () {
      this.$store.dispatch('core/setIsMobile',window.innerWidth < 600)
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
  @import "@/assets/css/responsive.css";
  @import "@/assets/css/calender.css";
  @import "@/assets/css/mobile.css";
</style>
