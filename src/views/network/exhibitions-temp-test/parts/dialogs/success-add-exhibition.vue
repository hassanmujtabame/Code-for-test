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
                  سنقوم بمراجعه المعرض الخاص بك  خلال ساعات قليلة  و من ثم سيتم نشره في صفحة المعارض
                </h4>
              </div>
          <div>
            <img :src="`${publicPath}assets/img/cuate-2.png`" alt="">
          </div>
         
          <div class="mt-3">
          <button @click="closeEvent" style="height: 40px;" class="btn btn-main"> {{$t('Home')}}</button>
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
          default:'success-add-exhibition'
      }
   },
   data:()=>({
      blog:{id:null},
      showed:false,
   }),
   methods:{
      goBlog(){
        this.closeEvent()
        this.$router.push(this.getRouteLocale('network-blog-show',{id:this.blog.id}))
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