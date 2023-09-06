<template>
  <div class="container">
    <div class="chekout p-4 shadow my-4">
      <h5 class="mb-3">أستكملي عملية الدفع</h5>
      <div class="row justify-content-between">
        <div class="justify-content-end tex-end">
          <div v-if="packageType == 'academy'" style="display: flex; align-items: center;">
            <img style="width:260px; height:150px" class="img-fluid" :src="`${publicPath}assets/img/Group 1171274931s.png`" alt="">
            <div class="mx-3" style="color: #1FB9B3; display: flex;" >
              <d-user-rect-icon :size="24" color="currentColor"/>
              <h4 class="mx-2"  style="color: #1FB9B3">انضم الى الأكاديمية</h4>
            </div>
          </div>

               <div v-else-if="packageType == 'network'" style="display: flex; align-items: center;">
                  <img class="img-fluid"  style="width:260px; height:150px" :src="`${publicPath}assets/img/pana-network.png`" alt="" >
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00">انضم الي الشبكه</h4>
                 </div>
             </div>
                <div v-else-if="packageType == 'service-provider'" style="display: flex; align-items: center;">
                  <img  style="width:260px; height:150px"  class="img-fluid" :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00">انضم الي مقدمي الخدمة </h4>
                  </div>
             </div>
               <div v-else-if="packageType == 'incubator'" style="display: flex; align-items: center;">
                  <img  style="width:260px; height:150px"  class="img-fluid" :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00"> انضم الي الحاضنة </h4>
                  </div>
             </div>
             <div v-else-if="!otherData.type" style="display: flex;">
              <img  style="width:150px; height:125px" :src="otherData.image" alt="">
                <div>
                  <div class="mx-3 mb-3 d-flex" style="color: #1FB9B3" >
                     <d-user-rect-icon :size="24" color="currentColor"/>
                     <span class="mx-2">{{otherData.title}}</span>
                  </div>
                  <div class="mx-3" style="color: #FFBC00" >
                     <d-empty-wallet-icon :size="24" color="currentColor"/>
                     <span class="mx-2">{{otherData.price}}</span>
                    </div>
                </div>
              </div>
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
 import coursesAPI from '@/services/api/academy/courses' 

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
      paymentUrlPth: '',
      idCourse:'',
      detailsCourse:{}

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
      let formData = new FormData();
   
      formData.append('package_id',this.otherData.id)
      formData.append('package_type',this.packageType )
   if (data.coupon) {
      formData.append('coupon',data.coupon)
      }

      if (data.coupon) {
          try {
                    let { data } = await networkAPI.checkoutPackageSelect(formData);
                    if(data.success){ 
                      window.SwalSuccess(data.message)
                    }
                } catch (error) {
                        window.SwalError("The given data was invalid")
                } 
      }else{
                  try {
                    let { data } = await networkAPI.PayPackageSelect(formData);
                    
                    if(data.success){
                        this.paymentUrlPth=	data.data.payment_url
                        this.confirmPaymentUrl()
                    }
                } catch (error) {
                        window.SwalError("The given data was invalid")
                } 
      }

      // handle payment data
    },
    async getCourseDetails(){
      if (this.idCourse) {
        
               try {
                 let { data } = await coursesAPI.getItem(this.idCourse)
                 if (data.success) {
                   this.detailsCourse = data.data
                console.log(data.data);
                console.log(data.data.title);

                  }else{
                   console.log('error');
                 }
             } catch (error) {
                 console.log('error', error)
                 console.log('error response', error.response)
               }
      }

    }

  },
  mounted(){
this.idCourse = this.$route.params.query

this.getCourseDetails()

this.packageType = this.$route.meta.type
    console.log('this.$route.meta.type',this.$route.meta.type);
    console.log('this.packageType',this.packageType);
    console.log(this.$route.params.query);
    // console.log(this.$route.meta.id);
  }
};
</script>

<style scoped>
.chekout {
  margin: 0;
}
</style>
