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
        <ValidationProvider :name="$t('session-date')" vid="start_date" rules="required"
        v-slot="{ errors }" >
        <d-datepicker-input v-model="itemForm.start_date" label="تاريخ الجلسة" />
        <d-error-input :errors="errors" v-if="errors && errors.length > 0" />
        </ValidationProvider>
        <label class="label-text">الوقت المتاح</label>
        <div class="d-flex flex-wrap gap-2">
            <availableTimeVue v-for="(it,i) in available_times" :key="i" 
            :time="it" @click="available_time=$event"
            :isSelected="available_time==it"
            />
        </div>
            </ValidationObserver>
             
              <div  class="mt-3">
            <button :disabled="loading" @click="save"  style="height: 40px;" class="btn btn-custmer"> 
              {{$t('schedule-confirmation')}}</button>
          </div>
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>

  <script>
import consultingAPI from '@/services/api/consulting/index'
import availableTimeVue from '@/components/available-time/index'
 export default {
    name: "reschedule-session",
    props: {
        group: {
            type: String,
            default: "reschedule-session"
        }
    },
    components:{
      availableTimeVue
    },
    data: (vm) => {
      return{
        itemDialog: { title: null, description: null, btns: null, image: `${vm.publicPath}assets/img/cuate-2.png` },
        itemForm:{url:null,time:null,available_time:null,start_date:null},
        loading: false,
        showDialog: false,
        myAvailability:{},
        available_time:null,
        available_times:[]
    }},
    watch:{
      available_time(){
        this.itemForm.available_time = this.available_time
      }
    },
    methods: {
      async initializing(){
            try{
                let { data } = await consultingAPI.consultants.getMyAvailability();
                if(data.success){
                    console.mylog('success',data.data[0])
                    this.myAvailability = data.data[0]
                    this.available_times = this.myAvailability.available_times
                    if(this.available_time.length==5 && !this.available_times.includes(this.available_time))
                    this.available_times.push(this.available_time)
                    this.available_times= this.available_times.sort((a,b)=>a>b?1:-1);
                }
            }catch(error){
                //
            }
            this.showDialog = true;

            return null;
        },
        async save() {
          this.loading = true;
          let valid = await this.$refs.form.validate();
          if(!valid){
            this.loading = false;
            return;
          }
          const formData = this.loadObjectToForm(this.itemForm);
          try {
            let {data} = await consultingAPI.requests.rescheduleIt(this.itemDialog.id,formData)
            if(data.success){
              this.$emit('update-list')
              this.closeEvent()
            }else{
              window.SwalError(data.message)
            }
          } catch (error) {
            //
            window.DHelper.catchException.call(this,error,this.$refs.form)
          }
            this.closeEvent();
            this.loading = false;
        },
        openDialog(data) {
            this.itemDialog = Object.assign({}, data);
            this.initializing()
            this.available_time=this.itemDialog.session_time;
            this.itemForm.start_date=this.itemDialog.session_date;

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