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
                @click="callAction(btn)" style="height: 40px;" :class="[btn.class??'btn btn-custmer']"> {{btn.title}}</button>

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
    name:'standard-success-message',
   props:{
      group:{
          type:String,
          default:'standard-success-message'
      }
   },
   data:()=>({
    itemDialog:{title:null,description:null,btns:null},
      showed:false,
   }),
   methods:{
    callAction(btn){
      if(btn.action){
        btn.action()
      }
      this.closeEvent()
    },
      openDialog(data){
        this.itemDialog=Object.assign({},data);
        if(!data.btns)  this.itemDialog.btns= null
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