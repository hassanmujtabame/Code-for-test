import Vue from 'vue'
import Cookies from 'js-cookie'
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

console.mylog = (...args) => {
   if (process.env.NODE_ENV == 'development')
      console.log(...args)
}
import VueQRCodeComponent from "vue-qrcode-component";

Vue.component("qr-code", VueQRCodeComponent);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyA9UeezZ2xyNjrwck8SLdh9NxsJp6HhLQc',
		libraries: "places",
       language: 'AR',
	},
});
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './plugins/v-tooltip'
import './plugins/vee-validate'
import './plugins/ckeditor'
import './plugins/portal-vue';
import './plugins/vue-multi-select';
import './plugins/icons-svg.js';
import './plugins/components';
import './plugins/v-calendar.js';
import './plugins/axios'
//import './plugins/vue-lazy-image'
import i18n from './plugins/i18n'
import TimeAgo from './plugins/timeago'
import './plugins/sweetalert2'
import EventBus from './helper/EventBus';
import Dhelper from './helper/d-helper';
import VueSocialSharing from "vue-social-sharing";
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.use(vueVimeoPlayer)

Vue.use(VueSocialSharing);
window.timeAgo = new TimeAgo();
window.DHelper = Dhelper;
window.Pusher = require('pusher-js');
window.EventBus = new EventBus();
const jquery = require('jquery');
import $ from 'jquery';
window.$ = $;
window.fn = $;
window.jquery = jquery;
Vue.prototype.jQuery = jquery
window.jQuery = jquery;
import 'bootstrap/dist/js/bootstrap.bundle.js'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle')


let owl_carousel = require('./assets/js/owl.carousel.min.js').default;
window.fn = owl_carousel;
require('./assets/js/jquery.simple-calendar.min.js')
import Swiper from 'swiper';
window.Swiper = Swiper
//import './plugins/aos'
import './plugins/mixins'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
window.AOS = AOS
require('./assets/js/rSlider')
//import installI18n from './lang/index'
import router from './router'


import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.filter('truncateWords', function (value, length) {
   const words = value.split(' ');
   return words.slice(0, length).join(' ');
});

new Vue({
   router,
   i18n,
   render: h => h(App),
   store,
   methods: {
      addScriptJs(text) {
         let script = document.createElement('script');
         let scr = document.createTextNode(text);
         script.appendChild(scr)
         document.body.appendChild(script)
      },
   },
   mounted() {
      let lng = Cookies.get('i18n_lang') ?? 'ar';
      if (this.token)
         this.loadCurrentUser()
      document.documentElement.setAttribute('lang', lng)
      document.documentElement.setAttribute('dir', lng == 'ar' ? 'rtl' : 'ltr')

      //this.loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",false);
      //this.loadJS("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",true)
      //this.loadJS("https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",false)
      //this.loadJS("https://unpkg.com/aos@2.3.1/dist/aos.js",false)
      this.loadJS("/js/main.js", true, true);
      this.addScriptJs(`var wpwlOptions = {
      paymentTarget:"_top",
      locale: "${this.$i18n.locale}"}
      `)
   }
}).$mount('#app')
