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

                        :title="pack.name"
                        :price="pack.price"
                        :features="pack.options.map(c=>c.name_ar)"
                        :type-subscribe="pack.name"
                        @selected="choose(pack)"
                        :subscribed="userSubNetwork" 

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
    packages:[]
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

        
    }
   
  },
  mounted(){
    this.loadPackages()
    this.checkSubscriptionOptions()

  }
}
</script>

<style>

</style>