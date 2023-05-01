<template>
  <d-dialog-large :xl="false"
  :open-dialog="openDialog"
  :close-dialog="closeDialog"
  :group="group"
  >
  <template v-slot:header>
    إحجزي جلستك الان
  </template>
  <div>
    
  <ValidationObserver ref="form" tag="div" v-if="showDialog">
    <!-- date -->
    <div >
    <ValidationProvider
    :name="$t('booking-date')"
    tag="div"
    vid="start_date"
    v-slot="{errors}"
    >
        <label>حددي يوم الحجز</label>
        <d-datepicker-input v-model="itemForm.start_date" 
        :minDate="minDate" 
        :maxDate="maxDate" 
        />
        <d-error-input :errors="errors" v-if="errors.length>1"/>
    </ValidationProvider>
    </div>
    <div class="mt-3">
    <ValidationProvider
    :name="$t('booking-time')"
    tag="div"
    vid="time"
    v-slot="{errors}"
    >
        <label>الوقت المتاح</label>
        <div class="d-flex">
            <availableTimeCard
            :isSelected="itemForm.available_time == it"
                v-for="(it,i) in times" 
                :key="i" 
                @click="itemForm.available_time = $event"
                :value="it"
                />
        </div>
        <d-error-input :errors="errors" v-if="errors.length>1"/>
    </ValidationProvider>
    </div>
     <!-- desc -->
     <div class="form-group mt-3">
    <ValidationProvider
    :name="$t('booking-desc')"
    vid="description"
    v-slot="{errors}"
    >
        <d-textarea-input :errors="errors" v-model="itemForm.description" label="اكتبي ملخص ما تريدين التحدث عنه"  />
        
    </ValidationProvider>
    </div>
    </ValidationObserver>
    </div>
    <template v-slot:actions>
        <button :disabled="loading" @click="save" class="btn btn-custmer">
            <i v-if="loading" class="fa fa-spinner fa-spin"></i>
            أحجز الاستشارة</button>
    </template>
  </d-dialog-large>
</template>

<script>
import consultingAPI from '@/services/api/consulting';
import availableTimeCard from './available-time.vue'
export default {
    name: "add-booking-consultant",
    props: {
        group: {
            default: "add-booking-consultant"
        }
    },
    components:{
        availableTimeCard
    },
    data: () => ({
        loading:false,
        showDialog: false,
        itemDailog: {},
        itemForm: {start_date:null,description:'',available_time:''},
        times:[],
        availability:{},
        attributes_date:[

          {
            key: 'today',
            highlight: true,  
            dates: {
        start: new Date(), 
        //end:null  
      }
          }
        
        ],
        minDate:new Date(),
        maxDate:null,
        availableDates:[],
    }),
    methods: {
        async save(){
            this.loading = true;
            let valid = this.$refs.form.validate();
            if(!valid){
                this.loading = false;
                console.mylog('invalid')
                return;
            }
            const formData = this.loadObjectToForm(this.itemForm);
            try {
                let { data } = await consultingAPI.bookingConsultant(formData)
                if(data.data){
                    let dataEvt={
                        title:'لقت تم ارسال طلب حجز موعد بنجاح',
                        description:'سيتم التواصل معك عند اقتراب موعد الاستشارة'
                        ,btns:[
                            {title:this.$t('Home'),action:()=>this.router_push('network-home')}
                        ]
                    }
                    this.showSuccessMsg(dataEvt);

                    this.closeEvent();
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                window.DHelper.catchException.call(this,error,this.$refs.form)
            }
            this.loading = false;
        },
        async loadAvailableDates(){
            try {
                let {data} = await consultingAPI.consultants.getAvailability(this.itemDailog.id)
                if(data.success){
                    this.availability = Object.assign(this.availability,{...data.data[0]})
                    let days = [new Date(this.availability.start_date)]
                    for(let i=1;i<=parseInt(this.availability.duration_days);i++)
                    days.push(this.addDays(this.availability.start_date,i))

                    this.minDate=days[0];
                    this.maxDate=days[days.length-1];
                    this.times = this.availability.available_times;
                    this.availableDates = days
                    
                }
            } catch (error) {
                console.mylog('error',error)
                //
            }
        },
        openDialog(dataEvt) {
            this.itemDailog = dataEvt.item;
            this.loadAvailableDates()
            this.itemForm ={
                start_date:null,
                consultant_id:this.itemDailog.id,
                description:'',
                available_time:null
            }
            if(dataEvt.opts){
                this.itemForm = Object.assign(this.itemForm,{...dataEvt.opts})
            }
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireCloseDialog(this.group);
        }
    }
}
</script>

<style scoped>
.label-dialog{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height, or 106% */
    color: #979797;
}

</style>