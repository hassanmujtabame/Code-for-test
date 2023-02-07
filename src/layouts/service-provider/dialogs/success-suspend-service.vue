<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
            <img src="/assets/img/cuate-2.png" alt="">
          </div>
            <div>
                <h4>
                  تم تعليق خدمتك بنجاح
                </h4>
                <p class="t-c fs-r-16-24">
                  خدمتك الان معلقة ولن تظهر للعملاء لشرائها
عندما ترغب بستعادة الخدمة  قم بتفعلها من جديد 
علماً بأن الخدمات الغير مفعلة تحذف تلقائياً بعد مرور 6 أشهر 
                </p>
              </div>
         
              <div class="mt-3">
            <button @click="closeEvent" style="height: 40px;" class="btn btn-custmer"> {{$t('Home')}}</button>
          </div>
          <div class="mt-3">
          <button @click="notSuspendItem" style="height: 40px;" class="btn btn-custmer-w btn-custmer-danger" >تراجع عن التعليق</button>
          </div>
  </div>
      </template>
     
    </d-dialog-large>
  </template>
  
  <script>
import ServiceProviderAPIs from '@/services/api/service-provider/provider/ready-service'

  export default {
   props:{
      group:{
          type:String,
          default:'success-suspend-service'
      }
   },
   data:()=>({
    itemPage:{id:null},
      showed:false,
   }),
   methods:{
    async notSuspendItem(){
        this.loading = true;
        try {
            let {data} = await ServiceProviderAPIs.notSuspend(this.itemPage.id)
            if(data.success){
                this.is_suspend = 0
                this.$emit('suspend',0)
                this.closeEvent()
            }else{
              window.SwalError(data.message)
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
        }
        this.loading = false;
    },
      openDialog(data){
        this.itemPage=Object.assign({},data);
        this.showed=true
        return true;
      },
      closeDialog(){
        this.showed=false
        return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
   }
  }
  </script>
  
  <style>
  
  </style>