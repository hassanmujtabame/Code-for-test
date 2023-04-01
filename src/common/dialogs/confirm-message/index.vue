<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showDialog">
            <div v-if="!hideImage">
            <img :src="itemDialog.image" class="confirm-msg__image" alt="">
          </div>
            <div class="mt-2">
                <h4 >
                 {{itemDialog.title}}
                </h4>
                <p v-if="itemDialog.description" class="t-c fs-r-16-24" v-html="itemDialog.description">
                  
                </p>
              </div>
              <div v-if="itemDialog.btns" :class="[itemDialog.groupBtns??'']" >
              <div  v-for="(btn,i) in itemDialog.btns"
                :key="i" class="mt-3">
                <button
                @click="callAction(btn)" :disabled="btn.loading" style="height: 40px;min-width:165px" :class="[btn.class??'btn btn-custmer']">
                <i v-if="btn.loading"  class="fa fa-spinner fa-spin"  aria-hidden="true"></i>
                {{btn.title}}
              </button>

              </div>
            </div>
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
    hideImage:false,
    itemDialog:{title:null
      ,description:null
      ,btns:null
      ,type:'error'
      ,image:'/assets/img/tick-square-2.png'},
      showDialog:false,
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
        
        if(!data.image) //this.itemDialog.image = '/assets/img/tick-square-2.png'
        //else
        switch (this.itemDialog.type) {
          case 'warning':
          this.itemDialog.image = '/assets/svg/warning-dialog.svg'
            break;
          default:
          this.itemDialog.image = '/assets/img/tick-square-2.png'
            break;
        }
        this.hideImage = data.hideImage===true
        this.showDialog=true
        return true;
      },
      closeDialog(){
        this.showDialog=false
        return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
   }
  }
  </script>
  
  <style>
  .confirm-msg__image{
  max-width:90%;
  max-height:377px;
  }
  </style>