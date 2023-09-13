<template>
  <div class="container relative">
    <div class="chekout p-4 shadow my-4">
      <h5 class="mb-3">أستكملي عملية الدفع</h5>
      <div class="row justify-content-between">
        <div class="justify-content-end tex-end">
          <div v-if="!otherData.image && packageType == 'academy'" style="display: flex; align-items: center;">
            <img style="width:260px; height:150px" class="img-fluid" :src="`${publicPath}assets/img/Group 1171274931s.png`" alt="">
            <div class="mx-3" style="color: #1FB9B3; display: flex;" >
              <d-user-rect-icon :size="24" color="currentColor"/>
              <h4 class="mx-2"  style="color: #1FB9B3">انضم الى الأكاديمية</h4>
            </div>
          
          </div>

               <div v-else-if="!otherData.image && packageType == 'network'" style="display: flex; align-items: center;">
                  <img class="img-fluid"  style="width:260px; height:150px" :src="`${publicPath}assets/img/pana-network.png`" alt="" >
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00">انضم الي الشبكه</h4>
                 </div>
             </div>
                <div v-else-if="!otherData.image && packageType == 'service-provider'" style="display: flex; align-items: center;">
                  <img  style="width:260px; height:150px"  class="img-fluid" :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00">انضم الي مقدمي الخدمة </h4>
                  </div>
             </div>
               <div v-else-if="!otherData.image && packageType == 'incubator'" style="display: flex; align-items: center;">
                  <img  style="width:260px; height:150px"  class="img-fluid" :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                  <div class="mx-3" style="color: #FFBC00; display: flex;" >
                   <d-user-rect-icon :size="24" color="currentColor"/>
                   <h4 class="mx-2"  style="color: #FFBC00"> انضم الي الحاضنة </h4>
                  </div>
             </div>
             <div v-else-if="otherData.image" style="display: flex;">
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
<div v-if="packageType == 'academy' && openDepartmentsDialog" class="departmentsDialog ">
  <div class="departmentsDialog-departments">
    <span class="px-5 d-flex justify-content-end mt-3" style="cursor: pointer" @click="openDepartmentsDialog=false">X</span>
    <h3 class="text-center my-2">حددي مجال الاشتراك</h3>
     
      <div class="d-flex" style="flex-wrap: wrap;">
      <div v-for="item,i in items" :key="i">
        <div :id="`department${item.id}`"  class="incubator-dept box  mx-3" style="opacity: 40% ;cursor: pointer; width: 108px; text-align: center;" @click="departmentsIdsSelected(item.id)">
 <div class="">
  <img :src="item.image_path" :alt="title" style="width:70px; height: 70px; border-radius:100%">
 </div>
 <p class="incubator-dept__title" >{{item.name}}</p>
   
</div>
      </div>
      </div>
            <button :disabled="departmentsIds.length==0" @click="openDepartmentsDialog=false" type="button" class="btn btn-main d-flex mx-auto mb-3 justify-content-center text-center" style="height: 40px">
               {{$t('continuity')}}
            </button>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import PaymentCardDetail from "./PaymentCardDetail.vue";
import networkAPI from '@/services/api/network.js'
 import coursesAPI from '@/services/api/academy/courses' 
import incubatorAPI from '@/services/api/incubator';

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
      detailsCourse:{},
      openDepartmentsDialog:true,
      departmentsIds:[],
      
      items:[]
      
    };
  },
  methods: {
    departmentsIdsSelected(id){
    if (this.departmentsIds.includes(id)) {
      let indexDepartment= this.departmentsIds.indexOf(id)
       this.departmentsIds.splice(indexDepartment,1)
      const elem = document.getElementById(`department${id}`);
      elem.style.opacity='.4'
    }else{
      this.departmentsIds.push(id)
 const elem = document.getElementById(`department${id}`);
      elem.style.opacity='1'
    }
   
 

    },
       confirmPaymentUrl(){
        let dataEvt={
            title:'استكمال الدفع',
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
      // formData.append('package_type',this.packageType )
      formData.append('user_id',this.user.id )
   if (data.coupon) {
      formData.append('coupon',data.coupon)
      }
      if (this.departmentsIds) {
      formData.append('department_ids',this.departmentsIds)
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
                        // this.confirmPaymentUrl()
                        this.paymentUrl()
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

    },

        async getDepartmentsAcademy(){
    try{
      let { data } = await incubatorAPI.getDepartments(); 
      if(data.success){
        this.items = data.data
      }
    }catch(error){
        console.mylog('error',error)
      //
    }
  },

  },
  mounted(){
    this.getDepartmentsAcademy()
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

<style>
.chekout {
  margin: 0;
}
.departmentsDialog-departments{
  position: absolute;
  top: 15%; 
   left: 30%; 
    width: 430px;
  height: 75%;
  background: white;
overflow-y: scroll;
}
.departmentsDialog{
     position: absolute;
  top: 0%;
   left: 0%; 
    width: 100%;
  height: 100%;
  background-color: rgb(0,0,0,.4)	
  /* overflow-y: scroll; */

}
</style>
