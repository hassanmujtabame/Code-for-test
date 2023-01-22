<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showed">
            <h5 class="p-2 text-center fs-2">
              نشكرك على تسجيلك معنا </h5>
              <div class="m-c fs-4 mt-4">
                        سنتواصل معك خلال الايام القليلة القادمة لتأكيد
                        بيانتك و تأكيد الاشتراك  
                    </div>
                <div class=" mt-4">
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="80" cy="80" r="80" fill="url(#paint0_linear_390_21260)"/>
                        <path d="M65.511 117.599C63.4139 117.599 61.4217 116.76 59.9538 115.291L30.2805 85.5994C27.2398 82.5568 27.2398 77.5207 30.2805 74.4781C33.3213 71.4355 38.3542 71.4355 41.3949 74.4781L65.511 98.6093L119.405 44.6814C122.446 41.6388 127.479 41.6388 130.519 44.6814C133.56 47.724 133.56 52.7601 130.519 55.8027L71.0681 115.291C69.6002 116.76 67.608 117.599 65.511 117.599Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_390_21260" x1="146.227" y1="159.945" x2="-17.0451" y2="144.59" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BBD2C5"/>
                        <stop offset="0.993949" stop-color="#1FB9B3"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        
                      </div>
          <div class="mt-3">
          <button @click="goBlog" style="height: 40px;" class="btn btn-custmer-w"> {{$t('Home')}}</button>
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
          default:'success-register-as-partner'
      }
   },
   data:()=>({
      showed:false,
   }),
   methods:{
      goBlog(){
        this.closeEvent()
        this.$router.push(this.getRouteLocale('network-home'))
      },
      openDialog(){
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