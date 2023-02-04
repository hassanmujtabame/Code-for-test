<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
    <template v-slot:header>
        <span class="m-c">وظف خريج رياديات</span>
    </template>
      <template v-slot>
         <div class="d-flex">
            <div>
                <h3>معلومات الخريج</h3>
                <p class="t-c">نبذه تعريفية يكتبها الخريج عن نفسه للحصول على وظيفة بدوام شهري او تدريب يستعرض فيها مهارته و امكانتيه مما يجذب اصحاب العمل اليه</p>
          
            </div>
            <div class="flex-shrink-0">
                <academyIcon /> حاضنة رياديات
            </div>
         </div>
         <div class="d-flex flex-wrap">
                    <div class="info-item">
                        <localisationIcon :size="24" />
                            <span>العنوان :</span>
                            <span class="info-item-value">دمام</span>
                    </div>
                    <div class="info-item">
                        <routingIcon :size="24" />
                            <span>التنقل :</span>
                            <span class="info-item-value">متاح</span>
                    </div>
                    <div class="info-item">
                        <emptyWalletIcon :size="24" />
                            <span>{{ $t('expected_salary') }} :</span>
                            <span class="info-item-value">1500 ريال</span>
                    </div>
                    <div class="info-item">
                        <downloadIcon :size="24" />
                            <span class="m-c">{{ $t('download_cv') }}</span>
                  
                    </div>
                
            </div>
         <hr/>
         <div>
            <h3 style="color:#FF1616">ملاحظة مهمة</h3>
            <p class="t-c">قبل استكمال الخطوة القادمة تأكد اولا من انك قرأت السيرة الذاتيه لمقدم الخدمة جيدا وانك تريد بالفعل تحديد موعد لمقابلة عمل معه </p>
         </div>
      </template>
      <template v-slot:actions>
          <button @click="nextStep" style="height: 40px;" class="btn btn-main"> {{$t('continuity')}}</button>
      </template>
    </d-dialog-large>
  </template>
  
  <script>
  import academyIcon from '@/components/icon-svg/academy'
  import localisationIcon from '@/components/icon-svg/localisation'
  import routingIcon from '@/components/icon-svg/routing'
  import emptyWalletIcon from '@/components/icon-svg/empty-wallet'
  import downloadIcon from '@/components/icon-svg/download'
  export default {
    name:'graduate-riadiat-first-step',
   props:{
      group:{
          type:String,
          default:'graduate-riadiat-recruitment-1'
      }
   },
   components:{
    academyIcon,
    localisationIcon,
    routingIcon,
    emptyWalletIcon,
    downloadIcon
   },
   data:()=>({
      itemDialog:{id:null},
      showed:false,
   }),
   methods:{
    nextStep(){
        this.closeEvent()
        this.fireOpenDialog('graduate-riadiat-recruitment-2')
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
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
   },
   mounted(){
    console.mylog(process.env)
    if(process.env.DIALOG_SEND_RECRUITMENT)
    this.fireOpenDialog(this.group)
   }
  }
  </script>
  
  <style scoped>
  .info-item{
    font-size: 16px;
    padding:5px;
  }
  .info-item-value{
    color: #2C98B3;
  }
  </style>