<template>
  <TemplateHeader
  prefixRoute='network-'
  >
            <li class="nav-item px-2">
              <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a
              > -->
              <router-link :to="getRouteLocale('network-home')"  class="nav-link">{{ $t('Home-page') }}</router-link>
            </li>
            <li class="nav-item px-2">
           
              <router-link :to="getRouteLocale('network-investment-project')" class="nav-link">{{ $t('Investment-projects') }}</router-link>
            </li> 
         
            <li class="nav-link nav-item px-2" style="cursor: pointer" @click="checkExhibitionsSub()"> 
             {{ $t('Exhibitions') }}
            </li> 
            <li class="nav-link nav-item px-2" style="cursor: pointer" @click="checkSub()"> 
             {{ $t('Offers') }}
            </li>
               <li class="nav-link nav-item px-2" style="cursor: pointer" @click="checkModelsSub()"> 
             {{ $t('Models') }}
            </li>

            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{ $t('Blogs') }}</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link :to="getRouteLocale('network-contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
            </li>
            <div  v-if="false" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center">
                        <a href="" class="text-white " data-bs-toggle="modal"
                        data-bs-target="#addModal">{{ $t('add-new-service') }}</a>
                    </div>
      
    </TemplateHeader>
</template>

<script>
import TemplateHeader from '../tamplate/header/index.vue'
export default {
    name:'default-header',
    components:{
      TemplateHeader
    },
       data: () => {
        return {
     
            showExhibition: false,
            showModels: false,
            addOffers:false


        }
    },
    methods: {
  
         checkSubscriptionOptions(){
                for (let index = 0; index < this.user.subscription_options.length; index++) {
                    const element = this.user.subscription_options[index];
                   if (element.key == "show_exhibitions") {
                        this.showExhibition = true
                    } else if (element.key == "models") {
                        this.showModels = true

                    }else if (element.key == "add_offers") {
                        this.addOffers = true
                    } 
                }
    },
    checkExhibitionsSub(){
   if(!this.showExhibition){
        let dataEvt ={
                        title:'للأسف لايمكنك  رؤية المعارض  ',
                        description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على المعارض    - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من المعارض و المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
    }else{
this.router_push('network-exhibitions')
    }
    },
    checkModelsSub(){
  if(!this.addOffers){
        let dataEvt ={
                        title:'للأسف لايمكنك  رؤية النماذج  ',
                        description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على النماذج  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من النماذج و المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
    }else{
                  this.router_push('network-models')
    }
    },
    checkSub(){
    if(!this.addOffers){
        let dataEvt ={
                        title:'للأسف لايمكنك  رؤية العروض  ',
                        description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على العروض والخصومات   - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من العروض و المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
    }else{
                  this.router_push('network-offers')
    }
    }

    },
    mounted() {
    this.checkSubscriptionOptions()
        this.loadList()
    }
}
</script>

<style>

</style>