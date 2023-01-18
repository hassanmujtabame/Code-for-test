<template>
    <d-dialog-large 
    :group="group" 
    :openDialog="openDialog" 
    :close-dialog="closeDialog"
    :xl="false"
    >
   <div class="text-center">
            <div>
                <h4 class="confirm-card-title">
                    تجهيز مشروعك لعرضه للاستثمار
                </h4>
              </div>
          <p class="confirm-card-text">
            مع خدمة تجهيز مشروعك للأستثمار سنساعدك على كذا و كذا وكذا وكذا
 و سنرسل اليك ملفات كذا و كذا عبر رسائلك في رياديات
 سناعددك بشكل كبير في خطوتك الاولى 
          </p>
    <p class="confirm-card-text">
        مع خدمة تجهيز مشروعك للأستثمار سنساعدك على كذا و كذا وكذا وكذا
 و سنرسل اليك ملفات كذا و كذا عبر رسائلك في رياديات
 سناعددك بشكل كبير في خطوتك الاولى 
    </p>
    <div class="d-flex">
        <EmptyWalletIcon /> <div class="confirm-card-price">
            <span >سعر الخدمة : </span><span style="color:red">250 ريال </span>
        </div>
    </div>
        </div>
        <template v-slot:actions>
            <button @click="openCheckOutPage" type="button" class="btn btn-main">
              {{ $t('subscribe-now') }}
            </button>
        </template>
    </d-dialog-large>
</template>

<script>
import EmptyWalletIcon from '@/components/icon-svg/empty-wallet.vue'
export default {
    name:'confirm-subscribe-project',
    props:{
        group:{
            type:String,
            default:'confirm-subscribe-project'
        }
    },
    components:{
        EmptyWalletIcon
    },
    data: () => {
        return{
            routeObje:{},
            showDialog:false,
        }
    },
    methods:{
        closeEvent(){
            this.fireCloseDialog(this.group)
        },
        openCheckOutPage(){
            this.fireOpenDialog('checkout-project-physical',{item:{amount:3000}})
            this.closeEvent()
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        },
        openDialog(data){
                this.routeObje = data;
                this.showDialog = true;
            return true;
        },
    }
}
</script>
<style scoped>
.confirm-card-title{
    font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
/* identical to box height, or 125% */

text-align: center;
text-transform: capitalize;

color: #414042;

}
.confirm-card-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */

text-align: start;
text-transform: capitalize;

color: #737373;
}
.confirm-card-price{
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-align: center;
text-transform: capitalize;

color: #737373;
}
</style>