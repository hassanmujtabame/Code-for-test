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
                    لقد تم إرسال طلبك إلى العميل
                </h4>
                <p class="t-c fs-r-16-24">
                    سوف نقوم بإبلاغك فور موافقته حتى تبدأ في تقديم خدمتك...
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
          default:'success-send-offer'
      }
   },
   data:()=>({
      blog:{id:null},
      showed:false,
   }),
   methods:{
      goBlog(){
        this.closeEvent()
      },
      openDialog(data){
        this.blog=Object.assign({},data);
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