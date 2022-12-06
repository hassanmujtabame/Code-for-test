import Vue from 'vue'

const jquery = require('jquery');
import $ from 'jquery';
window.$=$;
window.fn=$;
window.jquery=jquery;
import 'bootstrap/dist/js/bootstrap.bundle.js'
//require('bootstrap/dist/js/bootstrap.bundle');
//import './assets/js/owl.carousel.min.js'
let owl_carousel = require('./assets/js/owl.carousel.min.js').default;
window.fn = owl_carousel;
import Swiper from 'swiper';
window.Swiper=Swiper

//import './plugins/aos'
import mixin from './plugins/mixins'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
window.AOS=AOS
//import installI18n from './lang/index'
import router from './router'

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  mixins: [mixin],
  router,
  i18n,
  render: h => h(App),
  mounted() {
    //this.loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",false);
    // this.loadJS("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",false);
     //this.loadJS("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",true)
     //this.loadJS("https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",false)
    //this.loadJS("https://unpkg.com/aos@2.3.1/dist/aos.js",false)
     this.loadJS("/js/main.js",true,true);
  }
}).$mount('#app')
