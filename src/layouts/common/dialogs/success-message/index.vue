<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
            <img :src="`${publicPath}assets/img/cuate-2.png`" alt="">
          </div>
            <div>
                <h4 >
                 {{itemDialog.title}}
                </h4>
                <p class="t-c fs-r-16-24">
                    {{ itemDialog.description }}
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
    name:'standard-success-message',
   props:{
      group:{
          type:String,
          default:'standard-success-message'
      }
   },
   data:()=>({
    itemDialog:{title:null,description:null},
      showed:false,
   }),
   methods:{
      openDialog(data){
        this.itemDialog=Object.assign({},data);
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