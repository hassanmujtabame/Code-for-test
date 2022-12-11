
import Vue from 'vue';

import {  mapGetters } from 'vuex';
const mixin = {
    install(Vue) {
        Vue.mixin({
          methods:{
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