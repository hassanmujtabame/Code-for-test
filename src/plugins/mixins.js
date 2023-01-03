
import Vue from 'vue';
import Cookies from 'js-cookie';
import {  mapGetters } from 'vuex';
import { localize } from 'vee-validate';

const mixin = {
    install(Vue) {
        Vue.mixin({
          methods:{
            dateToString(date){
              if(!date) return null;
             return date.toISOString().split("T")[0]
            },
            timeToString(date){
              if(!date || date=='Invalid Date') return null;
             let m=  date.getMinutes()+""
             let h= date.getHours()+""
             m=m.padStart(2, '0')
             h=h.padStart(2, '0')
             console.log('bb',date,`${h}:${m}`)
             //.toString().padStart(2, '0')
              return `${h}:${m}`
            },
            generateQueryUrl(params){
              let s="";
              Object.keys(params).forEach((key)=>{
                  if(s!="") s+=`&`
                  if( Array.isArray(params[key]))
                  params[key].forEach((element,i) => {
                      if(i!==0) s+=`&`
                      s+=`${key}[]=${element}`
                  });
                  else
                   s+=`${key}=${params[key]}`
              })
              return s
            },
            generateRandomString(n){
              return Math.random().toString().substring(2, n+2)
            },
            fireEvent(group,data={}){
              window.EventBus.fire(group,data)
          },
            fireOpenDialog(group,data={}){
                this.fireEvent(group+'-open-dialog',data)
            },
            fireCloseDialog(group,data={}){
              this.fireEvent(group+'-close-dialog',data)
          },
            getRouteLocale(name,params={}){
            return {name,params:{lang:this.$i18n.locale,...params}}
            },
            generatetoUrl(name,params={}){
              let r=   this.$router.resolve({
                         name: name, // put your route information in
                         params:params, // put your route information in
                         query: this.$route.query // put your route information in
                       });
                       return r.route.path;
               },
               refreshPage(){
                
                if(process.env.NODE_ENV=='development')
                return;
                let r=this.$router.resolve({
                  name: this.$route.name, // put your route information in
                  params: this.$route.params, // put your route information in
                  query: this.$route.query // put your route information in
                });
                if(this.$router.mode=='hash'){
                  window.location.assign(r.href)
                  window.location.reload()
                }
                else{
                  window.location = r.href
                }
                
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
              //console.log(r)
              //this.$router.go(r.route)
              if(this.$router.mode=='hash'){
              window.location.assign(r.href)
              window.location.reload()
              }else
              window.location =r.href
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
            },
            loadCSS(src){
              const plugin = document.createElement("link");
              plugin.setAttribute(
              "href",
              src
            );
            plugin.setAttribute('rel',"stylesheet")
            document.head.prepend(plugin);
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