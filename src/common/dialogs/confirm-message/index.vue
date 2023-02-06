<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
            <img :src="itemDialog.image" alt="">
          </div>
            <div>
                <h4 >
                 {{itemDialog.title}}
                </h4>
                <p class="t-c fs-r-16-24">
                    {{ itemDialog.description }}
                </p>
              </div>
              <template v-if="itemDialog.btns" >
              <div  v-for="(btn,i) in itemDialog.btns"
                :key="i" class="mt-3">
                <button
                @click="callAction(btn)" :disabled="btn.loading" style="height: 40px;" :class="[btn.class??'btn btn-custmer']">
                <i v-if="btn.loading"  class="fa fa-spinner fa-spin"  aria-hidden="true"></i>
                {{btn.title}}
              </button>

              </div>
            </template>
              <div v-else class="mt-3">
            <button @click="closeEvent" style="height: 40px;" class="btn btn-custmer"> {{$t('Home')}}</button>
          </div>
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>

  <script>
 export default {
    name:'standard-confirm-message',
   props:{
      group:{
          type:String,
          default:'standard-confirm-message'
      }
   },
   data:()=>({
    itemDialog:{title:null,description:null,btns:null,image:'/assets/img/tick-square-2.png'},
      showed:false,
   }),

   methods:{
   async callAction(btn){
      if(btn.action){
        btn.loading = true;
       await btn.action()
       btn.loading = false;
      }
      this.closeEvent()
    },
      openDialog(data){
      if(data.btns){
        data.btns.forEach(btn=> btn.loading=false)
      }
        this.itemDialog=Object.assign({},data);
        if(!data.btns)  this.itemDialog.btns= null
        
        if(!data.image) this.itemDialog.image = '/assets/img/tick-square-2.png'
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