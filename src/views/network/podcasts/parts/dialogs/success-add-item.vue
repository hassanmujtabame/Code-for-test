<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <div>
                <h4>
                    سيتم مراجعة تدوينتك ثم نشرها على الفور
                </h4>
              </div>
          <div>
            <img src="/assets/img/cuate-2.png" alt="">
          </div>
          <div class="mt-3">
            <button @click="goItem" style="height: 40px;" class="btn btn-main"> {{$t('podcast')}}</button>
          </div>
          <div class="mt-3">
          <button @click="closeEvent" style="height: 40px;" class="btn btn-custmer-w"> {{$t('Home')}}</button>
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
          default:'success-add-item'
      }
   },
   data:()=>({
      itemForm:{id:null},
      showed:false,
   }),
   methods:{
      goItem(){
        this.closeEvent()
        this.$router.push(this.getRouteLocale('network-podcast-show',{id:this.itemForm.id}))
      },
      openDialog(data){
        this.itemForm=Object.assign({},data);
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