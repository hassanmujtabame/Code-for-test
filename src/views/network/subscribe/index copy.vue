<template>
    <div style="margin-top: 100px;">
         <div class="container">
             <div class="consulting rounded-top">
                 <div class="row align-items-center p-5 position-relative">
                     <div class="col-md-6">
                         <h1 class="text-white fs-1">
                             ابدأي رحلة نجاحــــك معنا واختري الباقـة المناسـبـة لـــــــــك
                             <!-- {{subscribedType}} -->
                         </h1>
                     </div>
                     <div class="col-md-6">
                         <img class="img-fluid" :src="`${publicPath}assets/img/_x36__1_.png`" alt="">
                     </div>
                     <div style="left: 2px; bottom: 14px;width: fit-content;transform: rotate(127deg)" class="position-absolute">
                         <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
                     </div>
 
                 </div>
 
             </div>
             <div class="shadow bg-white rounded-bottom">
                 <div class="row p-3">
                     <div v-for="(pack,p) in packages" :key="p" class="col-md-4  mt-2">
                         <SubscribeCard
                         :itemId="pack.name"
                         :packId="pack"
                          :title="pack.name"
                         :price="pack.price"
                         :features="pack.options.map(c=>c.name_ar)"
                         :type-subscribe="pack.name"
                         @selected="choose(pack)"
                         :subscribed="subscribedType" 
                          :typeSectionSub='"network"'
                         ></SubscribeCard>
                         <!-- :title="getTitleSubscribe(pack.name)" -->
                      
                     </div>
 
                 </div>
             </div>
 
         </div>
      <successSubscribeDialog />
      <checkoutPackageDiag />
     </div>
 </template>
 
 <script>
 import SubscribeCard from '@/components/cards/subscribe-card.vue';
 import networkAPI from '@/services/api/network.js'
 import successSubscribeDialog from './success-subscribe-dialog.vue';
 import checkoutPackageDiag from './check-out/index.vue';
 
 
 export default {
 name:'network-subscribe',
 components:{
     SubscribeCard,
     checkoutPackageDiag,
     successSubscribeDialog
 },
   data:()=>({
     show:false,
     packages:[],
     subscribedType:'1258888888888888'
   }),
   props:{
         packageData: {
       type: Object,
       default: () => ({})
     }
   },
   methods:{
     getTypePackage(data){
         switch (data.type) {
             case 'free': return this.$t('free');
             case 'month': return this.$t('monthly');
             case 'year': return this.$t('annually');
             default:
                 return 'N/A';
         }
     },
     openCheckoutDialog(data){ 
         console.log('data',data);
         this.fireOpenDialog('checkout-subscribe-network',{item:{amount:data.price,title:this.$t('Riadiat-network'),type:this.getTypePackage(data)},data:data})
     },
     openSuccessSubscribed(data){
         this.fireOpenDialog('success-network-subscribed', data)
     },
     async choose(pack){
         console.log('pack',pack);
         if(pack.type=='free'){
                 try {
                     let { data } = await networkAPI.checkoutPackageFree({package_id:pack.id});
                     if(data.success){
                         this.loadCurrentUser() 
                         // this.openSuccessSubscribed(pack)
             this.openCheckoutDialog(pack)
 
                     }else{
                         window.SwalError(data.message)
                     }
                 } catch (error) {
                     console.log('error',error)
                 }
             
         }else{
             this.openCheckoutDialog(pack)
         }
     },
    
     async loadPackages(){
         try {
             let { data } = await networkAPI.getPackages();
             if(data.success){
                 console.log('Packages',data);
                 this.packages = data.data
             }
         } catch (error) {
             console.log('error',error)
         }
     },
     checkSubscriptionOptions(){
                 for (let index = 0; index < this.user.subscription_options.length; index++) {
                     const element = this.user.subscription_options[index];
                     if (element.key=='show_exhibitions') {
                         console.log('444',element);
                         
                     }
                 }
 
         
     },
 
      checkTypePackage(){
          let date = this.dateToString(new Date());
                for (let index = 0; index < this.user.system_subscriptions.length; index++) {
                     const element = this.user.system_subscriptions[index];
                     if (element.system_package.related_to.key=='network' && element.end_at > date) {
                         
                         console.log('444',element,'true');
                         this.subscribedType = element.system_package.id
                         
                     }
                 }
      }
    
   },
   mounted(){
       this.checkTypePackage()
     this.loadPackages()
 
   }
 }
 </script>
 
 <style>
 .vue-form-wizard .wizard-card-footer {
    display: flex;
    justify-content: start !important;
  }
  
  .vue-form-wizard .wizard-card-footer .wizard-footer-right {
    float: unset !important;
    margin: 0 10px;
  }
  
  .vue-form-wizard .wizard-card-footer .wizard-footer-left {
    float: unset !important;
  }
  
  .wizard-btn {
    background: rgba(31, 185, 179, 1) !important;
    border-color: rgba(31, 185, 179, 1) !important;
  }
  
  .wizard-icon-container {
    background: rgba(31, 185, 179, 1) !important;
    border-color: rgba(31, 185, 179, 1) !important;
  
  }
  
  .vue-form-wizard.md .wizard-icon-circle {
    width: 30px;
    height: 30px;
    border-color: rgba(31, 185, 179, 1) !important;
  }
  
  .vue-form-wizard span {
    color: rgba(31, 185, 179, 1) !important;
    margin-top: 10px;
  }
  
  .wizard-header {
    display: none !important;
  }
  
  .vue-form-wizard .wizard-progress-bar {
    float: right !important;
    background-color: rgba(31, 185, 179, 1) !important;
  }
  
  .marketing-step .wizard-progress-bar {
    float: left !important;
  }
  
  /* .vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar */
  .vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
    top: 20px !important;
  }
  
  .marketing-step .wizard-progress-with-circle {
    display: none !important;
  }
  
  .wizard-navigation .wizard-tab-content {
    padding-top: 0 !important;
  }
  
  .vue-form-wizard .marketing-step .wizard-navigation ul {
    display: none !important;
  }
 </style>