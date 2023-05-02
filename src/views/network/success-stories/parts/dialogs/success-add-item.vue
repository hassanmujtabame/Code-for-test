<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
    <div class="text-center">
       
       <div>
         <img :src="`${publicPath}assets/img/cuate-2.png`" alt="">
       </div>
       <div>
         <h4>
             تهانينا تم كتابة قصتك بنجاح
         </h4>
         <p>
             سنقوم بمراجعة خلال ساعات  ومن ثم سيتم  عرضها
         </p>
      </div>
 
     </div>
     <template v-slot:actions>
      <a @click="closeEvent" style="height: 40px;" class="btn btn-main"  > الصفحة الرئيسية</a>
     </template>
    </d-dialog-large>
  </template>
  
  <script>

  export default {
   props:{
      group:{
          type:String,
          default:'success-add-story'
      }
   },
   data:()=>({
      itemDialog:{id:null},
      showed:false,
   }),
   methods:{
      goBlog(){
        this.closeEvent()
        this.$router.push(this.getRouteLocale('network-success-story-show',{id:this.itemDialog.story_id}))
      },
      openDialog(data){
        this.itemDialog=Object.assign({},data);
        this.showed=true
        return true;
      },
      closeDialog(){
        this.showed=false
        return true;
      },
      closeEvent(evt){
        if(!evt) evt.preventDefault();
        
         this.fireEvent(this.group+'-close-dialog')
      }
   }
  }
  </script>
  
  <style>
  
  </style>