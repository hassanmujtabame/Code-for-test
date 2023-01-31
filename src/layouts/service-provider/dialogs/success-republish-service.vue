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
                  تم اعادة النشر بنجاح
                </h4>
                <p class="t-c fs-r-16-24">
                  خدمتك الان اصبحت مرئية من قبل العملاء و يمكنهم تقديم طلبات الشراء لك من جديد
                </p>
              </div>
         
              <div class="mt-3">
            <button @click="closeEvent" style="height: 40px;" class="btn btn-custmer"> {{$t('Home')}}</button>
          </div>
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>
  
  <script>
 export default {
   props:{
      group:{
          type:String,
          default:'success-republish-service'
      }
   },
   data:()=>({
    itemPage:{id:null},
      showed:false,
   }),
   methods:{
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