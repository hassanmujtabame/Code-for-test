<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot:header>
        إعادة جدولة موعد الجلسة
      </template>
      <template v-slot>
          <div class="text-center" v-if="showDialog">
           
      
            <ValidationObserver ref="form">
             <!-- start date-->
        <ValidationProvider :name="$t('session-date')" vid="session_date" rules="required"
        v-slot="{ errors }" >
        <d-datepicker-input v-model="itemForm.session_date" label="تاريخ الجلسة" />
        <d-error-input :errors="errors" v-if="errors && errors.length > 0" />
        </ValidationProvider>
        <label class="label-text">الوقت المتاح</label>
        <div class="d-flexd-flex flex-wrap gap-2">
            <div class="time-available-item" v-for="(it,i) in itemForm.times" :key="i">{{ timeFormatAMPM(it,true) }}</div>
        </div>
            </ValidationObserver>
             
              <div  class="mt-3">
            <button :disabled="loading" @click="confirmAccept"  style="height: 40px;" class="btn btn-custmer"> 
              {{$t('schedule-confirmation')}}</button>
          </div>
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>

  <script>
import consultingAPI from '@/services/api/consulting/index'
 export default {
    name: "reschedule-session",
    props: {
        group: {
            type: String,
            default: "reschedule-session"
        }
    },
    data: () => ({
        itemDialog: { title: null, description: null, btns: null, image: "/assets/img/cuate-2.png" },
        itemForm:{url:null},
        loading: false,
        showDialog: false,
    }),
    methods: {
        async confirmAccept() {
          this.loading = true;
          let valid = await this.$refs.form.validate();
          if(!valid){
            this.loading = false;
            return;
          }
          try {
            let {data} = await consultingAPI.requests.approveIt(this.itemDialog.id,this.itemForm)
            if(data.success){
              this.closeEvent()
            }else{
              window.SwalError(data.message)
            }
          } catch (error) {
            //
            window.DHelp.catchException.call(this,error,this.$refs.form)
          }
            this.closeEvent();
            this.loading = false;
        },
        openDialog(data) {
            this.itemDialog = Object.assign({}, data);
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireEvent(this.group + "-close-dialog");
        }
    }
}
  </script>
  
  <style scoped>
  .time-available-item{
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 0.5px solid #CDD7D8;
    border-radius: 4px;
/** text */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 100% */
    text-align: center;
    color: #CDD7D8;
    width: fit-content;
}
.label-text{
  margin-bottom: 0;
    flex-shrink: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #979797;
}
  </style>