
import Vue from 'vue';
import Cookies from 'js-cookie';
import {  mapGetters } from 'vuex';
import { localize } from 'vee-validate';
const mixin = {
    install(Vue) {
        Vue.mixin({
          methods:{
            generatetoUrl(name,params={}){
              let r=   this.$router.resolve({
                         name: name, // put your route information in
                         params:params, // put your route information in
                         query: this.$route.query // put your route information in
                       });
                       return r.route.path;
               },
            changeLang(lng,evt){
                if(evt) evt.preventDefault();
                
              Cookies.set('i18n_lang',lng)
              this.$i18n.locale=lng
              localize(lng)
              let params = {...this.$route.params,lang:lng}
             
              let r=this.$router.resolve({
                name: this.$route.name, // put your route information in
                params: params, // put your route information in
                query: this.$route.query // put your route information in
              });
              window.location = r.href
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
            computed: {
                ...mapGetters({
                    user: 'auth/user',
                    token: 'auth/token',
                    authenticated: 'auth/authenticated',
                   
                })

            },

        })
    }
}

Vue.use(mixin);