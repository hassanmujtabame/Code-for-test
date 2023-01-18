<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
                      <img class="img-fluid" src="/assets/img/cuate-2.png" alt="">
                  </div>
                  <div>
                    <h4>
                        لقد تم إرسال رسالتك بنجاح
                    </h4>
                 
                      <p class="w-75 m-auto">
                        سيتواصل معك مقدم الخدمة عندما يتواجد                     </p>
                  </div>
         
          <div class="mt-3">
          <button @click="goItems" style="height: 40px;" class="btn btn-main"> {{$t('Home')}}</button>
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
          default:'success-shared-exhibition'
      }
   },
   data:()=>({
      blog:{id:null},
      showed:false,
   }),
   methods:{
      goItems(){
        this.closeEvent()
        this.$router.push(this.getRouteLocale('network-exhibitions'))
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