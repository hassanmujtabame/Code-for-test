<template>
    <CheckOutDialog
    :group="group"
    title="مول المشروع"
    changeable
    >
    <template v-slot="{otherData}">
        <p class="t-c"><bdi>ادخل المبلغ الذي تريد تمويل المشروع به لا يقل 
عن </bdi> <span style="color:red">{{otherData.minimum_investment}}</span> <bdi>ريال</bdi>
</p>
    </template>
    </CheckOutDialog>
    </template>
    <script>
    import networkAPI from '@/services/api/network.js'
    import CheckOutDialog from '@/common/dialogs/check-out-test/index'
    export default {
      name:"checkout-project",
      props:{
        group:{
            type:String,
            default:'checkout-project'
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
      console.mylog('payment',evt)
      let {item,cardInfo,otherData} = evt;
      let pay_info = {};
      if(item.payment_type == 'new')
       {
        //let  expiryMonth=cardInfo.expiry_date.split('/')[0];
      //let  expiryYear=cardInfo.expiry_date.split('/')[1];
       pay_info = {
        type:0,
        paymentBrand:cardInfo.paymentBrand.toUpperCase(),
        card_number:cardInfo.card_number,
        card_holder:cardInfo.card_holder,
        cvv:cardInfo.card_cvv,
        expiryMonth:cardInfo.expiryMonth,
        expiryYear:cardInfo.expiryYear,
        save:cardInfo.saveCard,
        project_id:otherData.id
       }
       }else{
        pay_info = {
          type:1,
          payment_id:item.payment_type,
         project_id:otherData.id
        }
       }
    
       console.mylog('sending',pay_info)
      try {
        let { data } = await networkAPI.checkoutProjectFinancing(pay_info)
        if(data.success){
          this.checkoutInfo = data.data;
              this.loadJS(`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutInfo.id}`,true,true);
          console.mylog('success',data)
          /*this.closeEvent()
          this.loadCurrentUser()
          this.openSuccessSubscribed(otherData)
          */
        }else{
          window.SwalError(data.message)
        }
      } catch (error) {
      console.log('error',error)
      }
    },
  }
    }
    
    </script>
    
    <style scoped>
    
    </style>
    