
import Vue from 'vue';
import Cookies from 'js-cookie';
import {  mapGetters } from 'vuex';
import { localize } from 'vee-validate';


const mixin = {
    install(Vue) {
        Vue.mixin({
          methods:{
            timeAgoToHuman(date)
            {
              // Calculate the difference in milliseconds
              let date1 = new Date(date)
              let date2 = new Date()
              var millisec = date2.getTime() - date1.getTime();
              var s = (millisec / 1000).toFixed(1);

              var m = (millisec / (1000 * 60)).toFixed(1);
      
              var h = (millisec / (1000 * 60 * 60)).toFixed(1);
      
              var d = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
              var mth = (millisec / (1000 * 60 * 60 * 24*30)).toFixed(1);
              var y = (millisec / (1000 * 60 * 60 * 24*30*12)).toFixed(1);
              let ago=this.$t('time_ago');
              let result = "";
              let label = ""
              if (s < 60) {
                label = this.$t('second_s')
                if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "ثوني";
                if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"ثانتين";
                if(mth==1 && this.$i18n.locale=='ar') return ago+" "+label;
                if(mth==1 && this.$i18n.locale=='en') return "a second"+" "+ago;
                result = Math.floor(m) +" "+ label;
    
              } else if (m < 60) {
                label = this.$t('minute_s')
                if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "دقائق";
                if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"دقيقتين";
                if(mth==1 && this.$i18n.locale=='ar') return ago+" "+label;
                if(mth==1 && this.$i18n.locale=='en') return "a second"+" "+ago;
                result = Math.floor(m) +" "+ label;
              } else if (h < 24) {
                label = this.$t('hour_s')
                if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "ساعات";
                if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"ساعتين";
                if(mth==1 && this.$i18n.locale=='ar') return ago+" "+label;
                if(mth==1 && this.$i18n.locale=='en') return "an Hour"+" "+ago;
                result = Math.floor(h) +" "+ label;
              } else if (d < 30) {
                label = this.$t('day_s')
                if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "أيام";
                if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"يومين";
                if(mth==1 && this.$i18n.locale=='ar') return ago+" "+label;
                if(mth==1 && this.$i18n.locale=='en') return "a day"+" "+ago;
                result = Math.floor(d) +" "+ label;
              }else if (mth < 12) {
                 label = this.$t('month_s')
                if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "أشهر";
                if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"شهرين";
                if(mth==1 && this.$i18n.locale=='ar') return ago+" "+"شهر";
                if(mth==1 && this.$i18n.locale=='en') return "a month"+" "+ago;
                 result = Math.floor(mth) +" "+ label;
               
            }else {
              label = this.$t('year_s')
              if(mth>2 && mth<=10 && this.$i18n.locale=='ar') label= "سنوات";
              if(mth==2 && this.$i18n.locale=='ar') return ago+" "+"سنتين";
              if(mth==1 && this.$i18n.locale=='ar') return ago+" "+label;
              if(mth==1 && this.$i18n.locale=='en') return "a year"+" "+ago;
              result = Math.floor(y) +" "+ label;
          }
        
          if(this.$i18n.locale=="ar")
          return ago+" "+result;
          else
           return result+" "+ago;
            },
            router_push(link,data={}){
              this.$router.push(this.getRouteLocale(link,data))
            },
            getTitleSubscribe(type){
              switch (type) {
                  case 'free': return this.$t('free_subscibe');
                  case 'month': return this.$t('monthly_subscribe');
                  case 'year': return this.$t('annually_subscribe');
                  default: return 'N/A'
      
              }
          },
          showSuccessMsgProvider(dataEvent){
           
         this.fireOpenDialog('standard-success-message',dataEvent)
          
          },
            setErrorsForm(form,response){
              form.setErrors(response.data.errors)
            },
            dateTextMonth(dateT){
              if(!dateT) return 'N/A';
  
              let parts = dateT.trim().split('-');
                 
                 let date = new Date(parts[0],parts[1],parts[2]);
                  let d = date.getDate()
                  let y = date.getFullYear()
                  let m = this.getTranslateMonth(date.getMonth());
              return `${d} ${m} ${y}`
          },
             timeFormatAMPM(time,abrev=false){
              if(!time) return '';
              let _time = time.split(':')
              let date = new Date();
              date.setHours(_time[0])
              date.setMinutes(_time[1])
                let hours = date.getHours();
              let minutes = date.getMinutes();  
                
              let ampm = hours >= 12 ? this.$t('pm') : this.$t('am');
              if(abrev && this.$i18n.locale=='ar')
              ampm = hours >= 12 ? 'م' : 'ص';
              hours %= 12;
              hours = hours || 12;    
              minutes = minutes < 10 ? `0${minutes}` : minutes;
            
              const strTime = `${hours}:${minutes} ${ampm}`;
            
              return strTime;
            },
            getTranslateMonth(month){
              /* month :0-11 */
              let months = [this.$t('January'), this.$t('February'), this.$t('March'), this.$t('April'), this.$t('May'), this.$t('June'), this.$t('July'), this.$t('August'), this.$t('September'), this.$t('October'), this.$t('November') , this.$t('December')];
                return months[month]
            },
            logout(evt) {
              if(evt)
              evt.preventDefault();
  
              window.store.commit('auth/CLEAR_TOKEN');
              window.store.commit('auth/CLEAR_USER');
              if(this.$router.mode=='history')
              this.$router.push({ name: 'login', params: { lang: this.$i18n.locale } })
                  if(this.$router.mode=='hash')
             window.location.reload()
          },
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
             //console.log('bb',date,`${h}:${m}`)
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
               routeToUrl(name,params={},query ={}){
                let r= this.$router.resolve(this.getRouteLocale(name,params,query));
                return r?r.href:'#'
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
                    isMobile: 'core/isMobile',
                    user: 'auth/user',
                    userPartner: 'auth/partner',
                    userSubNetwork: 'auth/subscribeNetwork',
                    userSubProvider: 'auth/subscribeProvider',
                    token: 'auth/token',
                    authenticated: 'auth/authenticated',
                   
                })

            },

        })
    }
}

Vue.use(mixin);