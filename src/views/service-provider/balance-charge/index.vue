<template>
   <div>
      <BodyFormCheckout :title="title" changeable 
      @payment="payment"
      >
        <p class="t-c">يمكنك شحن رصيدك  لاستفادة من الشراء</p>
        </BodyFormCheckout>
   </div>
  </template>
  
  <script>
import providerAPI from '@/services/api/service-provider.js'
  
  import BodyFormCheckout from '@/common/dialogs/check-out/body-check-out.vue'
  export default {
   name:'balance-charge',
   components:{
      BodyFormCheckout
   },
   data:()=>{
      return {
          title:'إشحن رصيدك',
      }
   },
   methods:{
    dataSuccessMessage(){
      return{
                    title:'تهانينا تم شحن  حسابك بنجاح',
                    description:'',
                    btns:[
                      {title:'معاملاتك المالية',action:()=>this.router_push('service-provider-my-financial-transactions'),class:'btn btn-custmer'},
                      {title:'الرئيسية',action:()=>this.router_push('service-provider-home'),class:'btn btn-custmer-w'},
  
                    ]
            }
    },
     async payment(evt){
        console.mylog('payment',evt)
     let {item,cardInfo/*,otherData*/} = evt;
        let pay_info = {};
        if(item.payment_type == 'new')
         {
          //let  expiryMonth=cardInfo.expiry_date.split('/')[0];
        //let  expiryYear=cardInfo.expiry_date.split('/')[1];
         pay_info = {
          type:0,
          paymentBrand:cardInfo.paymentBrand,
          card_number:cardInfo.card_number,
          card_holder:cardInfo.card_holder,
          cvv:cardInfo.card_cvv,
          expiryMonth:cardInfo.expiryMonth,
        expiryYear:cardInfo.expiryYear,
          save:cardInfo.saveCard,
          price:item.amount
         }
         }else{
          pay_info = {
            type:1,
            payment_id:item.payment_type,
            price:item.amount
          }
         }
      
         console.mylog('sending',pay_info)
        try {
          let { data } = await providerAPI.rechargeBalance(pay_info)
          if(data.success){
            
            console.mylog('success',data)
            let dataEvent= this.dataSuccessMessage()
            this.showSuccessMsg(dataEvent)
          }else{
            let dataEvent=this.dataSuccessMessage()
            this.showSuccessMsg(dataEvent)
            //window.SwalError(data.message)
          }
        } catch (error) {
        console.log('error',error)
        }
      },
   }
  }
  </script>
  
  <style>
  
  </style>