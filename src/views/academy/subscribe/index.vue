<template>
    <div style="margin-top: 100px;">
         <div class="container">
             <div class="consulting rounded-top">
                 <div class="row align-items-center p-5 position-relative">
                     <div class="col-md-6">
                         <h1 class="text-white fs-1">
                             تعلمي مــع رياديات و أنـطـلـقـي الــــــى   ســــوق الـعـــمـــل
                         </h1>
                     </div>
                     <div class="col-md-6">
                         <img class="img-fluid" :src="`${publicPath}assets/svg/Group 39921.svg`" alt="">
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
                         :title="getTitleSubscribe(pack.name)"
                        :price="pack.price"
                        :features="pack.options.map(c=>c.name_ar)"
                        :type-subscribe="pack.name"
                        @selected="choose(pack)"
                         :subscribed="subscribedType"
                         ></SubscribeCard> 
                        <!-- :title="pack.name" -->

                      <!-- :itemId="pack.id"
                         :title="getTitleSubscribe(pack.type)"
                         :price="pack.price"
                         :features="pack.features.map(c=>c.desc)"
                         :type-subscribe="pack.type"
                         @selected="choose(pack)"
                         :subscribed="userSubAcademy" -->
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
 import academyAPI from '@/services/api/academy/index.js'
 import successSubscribeDialog from './success-subscribe-dialog.vue';
 import checkoutPackageDiag from './check-out/index.vue';
 
 
 export default {
 name:'academy-subscribe',
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
         this.fireOpenDialog('checkout-subscribe-academy',{item:{amount:data.price,title:this.$t('Riadiat-academy'),type:this.getTypePackage(data)},data:data})
     },
     openSuccessSubscribed(data){
         this.fireOpenDialog('success-academy-subscribed', data)
     },
     async choose(pack){
        if(!this.userIsSubNetwork){
           this.showMessageForSubscribeNetwork()
            return;
        }
         if(pack.type=='free'){
            try {
                let { data } = await academyAPI.checkoutPackageFree({package_id:pack.id});
                if(data.success){
                    this.loadCurrentUser()
                    this.openSuccessSubscribed(pack)
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error',error)
            }
         }
         else{
             this.openCheckoutDialog(pack)
         }
     },
    
     async loadPackages(){
         try {
             let { data } = await academyAPI.getPackages();
             if(data.success){
                 this.packages = data.data
             }
         } catch (error) {
             console.log('error',error)
         }
     },
     checkTypePackage(){
         let date = this.dateToString(new Date());

               for (let index = 0; index < this.user.system_subscriptions.length; index++) {
                    const element = this.user.system_subscriptions[index];
                    if (element.system_package.related_to.key=='academy' && element.end_at > date) {
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
 
 </style>