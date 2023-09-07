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
                        :itemId="pack.name"
                         :title="getTitleSubscribe(pack.name)"
                         :price="pack.price"
                        :features="pack.options.map(c=>c.name_ar)"
                         :type-subscribe="pack.name"
                         @selected="choose(pack)"
                         :subscribed="userSubIncubators[0]"
                         ></SubscribeCard>  
                         <!-- :features="pack.options.map(c=>c.desc)" -->
                    
                     </div>
                 </div>
             </div>
 
         </div>
      <successSubscribeDialog />
      <checkoutPackageDiag/>
      <departmentChooseDialog />
     </div>
 </template>
 
 <script>
 import SubscribeCard from '@/components/cards/subscribe-card.vue';
 import incubatorAPI from '@/services/api/incubator'
 import successSubscribeDialog from './success-subscribe-dialog.vue';
 import checkoutPackageDiag from './check-out/index.vue';
 import departmentChooseDialog from './department-choose.vue';
 export default {
 name:'network-subscribe',
 components:{
     SubscribeCard,
     successSubscribeDialog,
     checkoutPackageDiag,
     departmentChooseDialog
 },
   data:()=>({
     show:false,
     packages:[],
     package:null,
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
        this.fireOpenDialog('checkout-subscribe-incubator',{item:{amount:data.price,title:this.$t('Riadiat-incubator'),type:this.getTypePackage(data)},data:data})
    },
    openSuccessSubscribed(data){
        this.fireOpenDialog('success-incubator-subscribed', data)
    },
    async checkOutFreeRequest(sendForm){
        try {
                let { data } = await incubatorAPI.checkoutPackageFree(sendForm);
                if(data.success){
                    this.loadCurrentUser();
                    this.openSuccessSubscribed(this.package)
                    return true;
                }else{
                    window.SwalError(data.message)

                    return false; 
                }
            } catch (error) {
                console.mylog('error',error)
            }
            return false;
    },
    async choose(pack){
        this.package = pack;
        if(!this.userIsSubNetwork){
           this.showMessageForSubscribeNetwork()
            return;
        }
        if(pack.type=='free'){
            this.fireOpenDialog('department-choose',{
          payInfo:{package_id:pack.id},
          payment:this.checkOutFreeRequest
         })
          
        
        }
        else{
            this.openCheckoutDialog(pack)
        }
    },
    
     async loadPackages(){
         try {
             let { data } = await incubatorAPI.getPackages();
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
 
 </style>