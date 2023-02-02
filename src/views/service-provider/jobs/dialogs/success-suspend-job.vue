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
                  تم تعليق الوظيفة بنجاح
                </h4>
                <p class="t-c fs-r-16-24">
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
import jobsProviderAPIs from '@/services/api/service-provider/jobs'

  export default {
   props:{
      group:{
          type:String,
          default:'success-suspend-job'
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
            let {data} = await jobsProviderAPIs.notSuspendItem(this.itemPage.id)
            if(data.success){
                this.is_suspend = 0
                this.$emit('suspend',0)
                this.closeEvent()
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