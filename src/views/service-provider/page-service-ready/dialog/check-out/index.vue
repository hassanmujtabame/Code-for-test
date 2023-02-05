<template>
<CheckOutDialog
:group="group"
title="تفاصيل الدفع"
hideAmount
@payment="payment"
>
<template v-slot:default="{ item,dialog }">
  <div v-if="dialog" class="d-flex flex-wrap gap-2">

                                <div>
                                    <p class="p-0 m-0 t-c fs-r-24">
                                            {{item.title}}
                                    </p>
                                    <p  class="p-0 m-0 m-c" style="font-size:20px">
                                            {{item.amount}} {{ $t('riyals') }}
                                    </p>
                                   
                                </div>
                                </div>
                                <div class="input-group mb-3 mt-2">
                                
                                <input type="text" class="form-control" placeholder="كوبون خصم">
                                <button style="background-color: #CDD7D8;" class="btn  disabled" type="button" id="button-addon1">تفعيل</button>
                            </div>
                      </template>
</CheckOutDialog>
</template>
<script>
import CheckOutDialog from '@/common/dialogs/check-out/index'
import readyserviceAPI from '@/services/api/service-provider/provider/ready-service.js'
export default {
  name:"checkout-ready-service-online",
  props:{
    group:{
        type:String,
        default:'checkout-ready-service-online'
    }
  },
  components:{
    CheckOutDialog
  },
  data:()=>({
    showDialog:false,

  }),
  methods:{
    async payment(evt){
      console.log('payment',evt)
      let {item,cardInfo,otherData} = evt;
      let pay_info = {};
      if(item.payment_type == 'new')
       {
        let  expiryMonth=cardInfo.expiry_date.split('/')[0];
      let  expiryYear=cardInfo.expiry_date.split('/')[1];
       pay_info = {
        type:0,
        paymentBrand:cardInfo.paymentBrand,
        card_number:cardInfo.card_number,
        card_holder:cardInfo.card_holder,
        cvv:cardInfo.card_cvv,
        expiryMonth:expiryMonth,
        expiryYear:expiryYear,
        save:cardInfo.saveCard,
        service_id:otherData.id
       }
       }else{
        pay_info = {
          type:1,
          payment_id:item.payment_type,
          service_id:otherData.id
        }
       }
    
       console.mylog('sending',pay_info)
      try {
        let { data } = await readyserviceAPI.checkoutService(pay_info)
        if(data.success){
          
          console.mylog('success',data)
          this.closeEvent()
          let dataEvent ={
            title:'تهانينا تم شراء  الخدمة بنجاح',
            description:'',
            btns:[
              {title:'تواصل مع مقدم الخدمة',action:()=>{},class:'btn btn-custmer'},
              {title:'الرئيسية',action:()=>{},class:'btn btn-custmer-w'},
            ]
          }
          this.showSuccessMessage(dataEvent)
        }else{
          window.SwalError(data.message)
        }
      } catch (error) {
      console.log('error',error)
      }
    },
    closeEvent(){
      this.fireCloseDialog(this.group)
    },
    openSuccessSubscribed(data){
        this.fireOpenDialog('success-network-subscribed', data)
    },
  }
}

</script>

<style scoped>

</style>
