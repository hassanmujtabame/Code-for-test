<template>
  <div class="container">
    <div class="chekout p-4 shadow my-4">
      <h5 class="mb-3">أستكملي عملية الدفع</h5>
      <div class="row justify-content-between">
        <div class="justify-content-end tex-end">
          <PaymentCardDetail 
            :title="title"
            :changeable="changeable"
            :hideAmount="hideAmount"
            :defaultForm="defaultForm"
            :otherData="otherData"
            @payment="handlePayment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentCardDetail from "./PaymentCardDetail.vue";
import networkAPI from '@/services/api/network.js'

export default {
  components: {
    PaymentCardDetail
  },
  props: {
    title: {
      type: String,
      default: "تفاصيل الدفع"
    },
    changeable: {
      type: Boolean,
      default: false
    },
    hideAmount: {
      type: Boolean,
      default: false
    },
    otherData: {
      type: [Array, Object],
      default: () => ({})
    },
    defaultForm: {
      type: [Array, Object],
      default: () => ({
        payment_type: "new",
        amount: null ,
      })
    }
  },
   data() {
    return {
      packageType: '',
      paymentUrlPth: ''

    };
  },
  methods: {
       confirmPaymentUrl(){
        let dataEvt={
            title:'تم الاشتراك بنجاح',
            btns:[
                {title:'استكمال الدفع',action:this.paymentUrl,class:'btn btn-main'}
                ],
        };
        this.showSuccessMsg(dataEvt)
    },
    paymentUrl(){
      window.open(this.paymentUrlPth, '_blank')
    },
    async handlePayment(data) {
      console.log('otherData',this.otherData);
      console.log('data...',data.coupon);  
   if (data.coupon) {
console.log('yes');
   }else{
console.log('no');

   }
      let formData = new FormData();
   
      formData.append('package_id',this.otherData.id)
      formData.append('package_type',this.packageType )
   if (data.coupon) {
      formData.append('coupon',data.coupon)
      }

      if (data.coupon) {
          try {
                    let { data } = await networkAPI.checkoutPackageSelect(formData);
                    console.log('data',data);
                    if(data.success){
                      console.log('s',data);
                      window.SwalSuccess(data.message)
                    }
                } catch (error) {
                    console.log('error',error)
                        window.SwalError("The given data was invalid")

                } 
      }else{
                  try {
                    let { data } = await networkAPI.PayPackageSelect(formData);
                    console.log('data',data);
                               console.log('s',data.data.payment_url);
                      console.log('s',data.data);
                    if(data.success){
                        this.paymentUrlPth=	data.data.payment_url
                        this.confirmPaymentUrl()
                    }
                } catch (error) {
                    console.log('error',error)
                        window.SwalError("The given data was invalid")
                } 
      }

      // handle payment data
    },

  },
  mounted(){
    this.packageType = this.$route.meta.type
    console.log(this.$route.meta.type);
  }
};
</script>

<style scoped>
.chekout {
  margin: 0;
}
</style>
