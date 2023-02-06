<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >

      <template v-slot>
        <div class="">
            <div class="d-flex w-100">
                <h3 class="flex-grow-1">{{ itemDialog.title }}</h3>
                <div class="flex-shrink-0">
                    <timeIcon :size="16" />
                    <span>تاريخ  بداية الطلب : </span>
                    <span>{{ itemDialog.created_at }}</span>
                </div>
            </div>
            <div class="d-flex t-c">
                <div class="mx-1">
                    <userRectIcon :size="16" color="currentColor"/>
                    خالد
                </div>
                <div class="mx-1">
                    <localisationIcon :size="16" color="currentColor"/>
                    دمام
                </div>
                <div class="mx-1">
                    <emptyWalletIcon :size="16" color="currentColor"/>
                    20 ريال 
                </div>
                <div class="mx-1">
                    <timerIcon :size="16" color="currentColor"/>
                مدة التنفيذ : 7 أيام
                </div>
            </div>
        </div>
        <ValidationObserver tag="div" class="mt-3" ref="form">
            <ValidationProvider
                        tag="div"
                        class="mb-3"
                        :name="$t('execution_period')"
                        vid="execution_period"
                        rules="required"
                        v-slot="{errors}"
                        >
                        <label class="form-label"> وقت تنفيذ او استلام الخدمة</label>
                        <div class="">
                        <select v-model="itemForm.execution_period" class="form-select ">
                            <option value="" class="t-c" selected> وقت تنفيذ او استلام الخدمة</option>
                            <option value="specific_date">تحديد موعد التنفيذ</option>
                            <option value="time_available_product">الاستلام  وقت توفر المنتج</option>
                        </select>
                    
                        </div>
                        <d-error-input :errors="errors" v-if="errors.length" />
                    </ValidationProvider>
             
              
                         <!--for specific_date-->
                         <div v-if="itemForm.execution_period=='specific_date'">
                        <ValidationProvider
                        tag="div"
                        class="mb-3"
                        :name="$t('specific_date')"
                        vid="specific_date"
                        rules="required"
                        v-slot="{errors}"
                        >
                        <date-picker-input
                        class="form-control"  
                            v-model="itemForm.specific_date" 
                            mode="date" 
                        />
                        <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
                
            <!--delivery_place-->
          <div class="mb-3">
                        <ValidationProvider
                                :name="$t('delivery_place')"
                                vid="delivery_place"
                                rules="required"
                                v-slot="{errors}">
                        <label class="form-label">{{ $t('delivery_place') }} </label>
                                <input type="text" v-model="itemForm.delivery_place" class="form-control" :placeholder="$t('execution_period')">
                                <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>
                    </div>
                    <div class="mb-3 d-flex">
                        <div class="flex-grow-1">
                            <div>عدد مرات طلب الخدمة</div>
                            <div class="t-c">يمكنك طلب الخدمة لك عدة مرات او لاكثر من شخص </div>
                        </div>
                        <div class="flex-shrink-0">
                            <input disabled type="numeric" class="form-control" style="width:50px"/>
                        </div>
                    </div>
        </ValidationObserver>
      </template>
     <template v-slot:actions>
        <i v-if="loading" class="fa fa-spinner fa-spin" aria-hidden="true"></i>
        <button @click="save" class="btn btn-custmer">قبول الطلب</button>
     </template>
    </d-dialog-large>
  </template>

  <script>
  import readyServiceRequestAPI from '@/services/api/service-provider/provider/my-requests';
  import emptyWalletIcon from '@/components/icon-svg/empty-wallet.vue';
  import localisationIcon from '@/components/icon-svg/localisation.vue';
  import timeIcon from '@/components/icon-svg/time.vue';
  import timerIcon from '@/components/icon-svg/timer.vue';
  import userRectIcon from '@/components/icon-svg/user-rect-icon.vue';
 export default {
    name:'confirm-request-purchase',
   props:{
      group:{
          type:String,
          default:'confirm-request-purchase'
      }
   },
   components:{
    emptyWalletIcon,
    localisationIcon,
    userRectIcon,
    timeIcon,
    timerIcon
   },
   data:()=>({
    loading:false,
    itemDialog:{title:null},
    itemForm:{
        execution_period:null,
        execution_place:null,
        specific_date:null,
    },
      showed:false,
   }),
   methods:{
    openReadyService(){
        this.router_push('service-provider-request-purchase-service-show',{id:this.itemDialog.id})
    },
    async save(){
        this.loading =  true;
        let valid  = this.$refs.form.validate();
        if(!valid){
            this.loading = false;
            return;
        }
      
        
        try {
            let { data } = await readyServiceRequestAPI.acceptRequestPurchase(this.itemDialog.id)
            if(data.success){
                let dataEvent = {
                    title:'تم قبول الخدمة بنجاح',
                    description:'يمكنك التعواصل الان مع طالب الخدمة والبدأ بالتنفيذ',
                    btns:[
                        {title:'صفحة الاتفاق',action:()=>this.openReadyService(),class:"btn btn-custmer"}
                    ]
                }
                this.showSuccessMsg(dataEvent);
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            //
        }
        this.loading =  false;
        
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
   }
  }
  </script>
  
  <style>
  
  </style>