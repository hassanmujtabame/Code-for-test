<template>
    <div style="margin-top: 100px;">
         <div class="container">
             <div class="consulting rounded-top">
                 <div class="row align-items-center p-5 position-relative">
                     <div class="col-md-6">
                         <h1 class="text-white fs-1">
                             ابدأي رحلة نجاحــــك معنا واختري الباقـة المناسـبـة لــــــــــك
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
                         :itemId="pack.id"

                         :title="getTitleSubscribe(pack.type)"
                         :price="pack.price"
                         :features="pack.features.map(c=>c.desc)"
                         :type-subscribe="pack.type"
                         @selected="choose(pack)"
                         :subscribed="userSubProvider"
                         ></SubscribeCard>
                      
                     </div>
 
                 </div>
             </div>
 
         </div>
      <successSubscribeDialog />
      <checkoutPackageDiag/>
     </div>
 </template>
 
 <script>
 import SubscribeCard from '@/components/cards/subscribe-card.vue';
 import providerAPI from '@/services/api/service-provider/index'
 import successSubscribeDialog from './success-subscribe-dialog.vue';
 import checkoutPackageDiag from './check-out/index.vue';
 export default {
 name:'network-subscribe',
 components:{
     SubscribeCard,
     successSubscribeDialog,
     checkoutPackageDiag
 },
   data:()=>({
     show:false,
     packages:[]
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
        this.fireOpenDialog('checkout-subscribe-service-provider',{item:{amount:data.price,title:this.$t('service-providers'),type:this.getTypePackage(data)},data:data})
    },
    openSuccessSubscribed(data){
        this.fireOpenDialog('success-provider-subscribed', data)
    },
    async choose(pack){
        if(!this.userIsSubNetwork){
           this.showMessageForSubscribeNetwork()
            return;
        }
        if(pack.type=='free'){
        try {
            let { data } = await providerAPI.checkoutPackageFree({package_id:pack.id});
            if(data.success){
                this.loadCurrentUser()
                this.openSuccessSubscribed(pack)
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
             let { data } = await providerAPI.getPackages();
             if(data.success){
                 this.packages = data.data
             }
         } catch (error) {
             console.log('error',error)
         }
     }
   },
   mounted(){
     this.loadPackages()
   }
 }
 </script>
 
 <style>
  .p-sub-network{
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 167% */

text-align: center;
text-transform: capitalize;

color: #737373;
  }
 .link-sub-network{
    font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */
text-transform: capitalize;

color: #1FB9B3;
 }
 </style>