<template>
  <div class="box-provider-offer">
    <div class="box-provider-offer__wrapper">
    <div class="d-flex flex-column box-provider-offer_start px-5">
        <!-- provider info -->
        <div class="d-flex align-items-center">
            <div class="box-provider-offer__image">
               <imgAvatar :img="item_.user_info.image" :size="58" />
            </div>
            <div class="box-provider-offer__info mx-3 ">
                <h2 class="box-provider-offer__info-name">{{ item_.user_info.name}}</h2>
                <h4 class="box-provider-offer__info-job">{{ item_.user_info.job }}</h4>
            </div>
        </div>
        <!-- provider text-->
        <div class="t-c" v-html="item_.note">
        </div>
        <div class="mt-2">
            <button :disabled="loading || item.status !== 'waiting'" v-if="item.status ==='waiting'" class="btn btn-custmer" @click="acceptConfirm">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                اقبل العرض
            </button>
            <button :disabled="loading || item.status !=='waiting'" v-if="item.status ==='waiting'" class="btn btn-custmer btn-danger" @click="refuseConfirm">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              رفض العرض
            </button>
        </div>
    </div>
    <div class="box-provider-offer_end">
        <div class="t-c box-provider-offer__date">
            <timeIcon :size="24" color="currentColor" />
            <span class="mx-2">تاريخ تقديمك العرض :</span>
        <span>{{dateText}}</span>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import timeIcon from '@/components/icon-svg/time.vue';
import imgAvatar from '@/components/avatars/img-avatar.vue';
import myRequestsClientAPI from '@/services/api/service-provider/user/my-requests-client.js'

export default {
 name:'card-info',
 components:{
    timeIcon,
    imgAvatar
 },
 props:{
    item:{
        type:[Array,Object]
    }
 },
 computed:{
    dateText(){
        return this.item_.created_at?this.item_.created_at.split('T')[0]:''
    }
 },
 data:(vm)=>{
    return {
        item_:vm.item,
        loading:false,
    }
 },
 methods:{
    refuseConfirm(){
        let dataEvent ={
            title:'هل أنت متأكد  من رفضك العرض',
            description:'',
            type:'warning',
            btns:[
                {title:'تأكيد الرفض',action:()=> this.sendRefusion(),class:'btn btn-custmer'}
            ]
        }
        this.showConfirmMsg(dataEvent);
    },
    async sendRefusion(){
        try {
                this.loading =  true;
                let { data } = await myRequestsClientAPI.RefuseOffer(this.item_.id) 
                if(data.success){
                    this.item_.status = 'underway'
                }else{
                    window.SwalError(data.message)
                }

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
            this.loading =  false;
    },
        async sendAcception(){
            try {
                this.loading =  true;
                let { data } = await myRequestsClientAPI.acceptOffer(this.item_.id) 
                if(data.success){
                    window.successMsg(data.message);
                }else{
                    window.SwalError(data.message)
                }

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
            this.loading =  false;
        },
    acceptConfirm(){
        let dataEvent ={
            title:'هل أنت متأكد  من قبولك العرض',
            description:'عند تأكيد قبول الطلب ستخصم منك قيمة العرض و ستضاف الى حساب رياديات لحين انتهاء المشروع و تسليم المستحقات لمقدم الخدمة',
            type:'warning',
            btns:[
                {title:'تأكيد الطلب',action:()=> this.sendAcception(),class:'btn btn-custmer'}
            ]
        }
        this.showConfirmMsg(dataEvent);
    }
 }
}
</script>

<style scoped>
.box-provider-offer{
    background: white;
    border-bottom:1px solid #cfcfcf;
    padding: 10px 0;
}
.box-provider-offer__wrapper{
    display: flex;
    flex-direction: row;
}
.box-provider-offer_end{
    flex-grow: 0;
    flex-shrink: 0;
}
.box-provider-offer_start{
   flex:1
}
.box-provider-offer__info-job{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
color: #414042;

}
.box-provider-offer__info-name{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
color: #414042;
}
.box-provider-offer__date{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #737373 !important;
}
</style>