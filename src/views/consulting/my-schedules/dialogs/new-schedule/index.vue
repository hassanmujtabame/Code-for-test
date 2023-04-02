<template>
  <d-dialog-large :xl="false"
  :group="group"
  :open-dialog="openDialog"
  :close-dialog="closeDialog"
  >
  <template v-slot:header>
    جدول مواعيدي
  </template>
  <template v-slot:default>
    <div style="    height: 415px;overflow-y: auto;">
    
    <ValidationObserver v-if="showDialog" ref="form" tag="div">
        <h3 class="consulting-schedule-dialog_title">معلومات عن الاستشارة</h3>
        <!--consulting_type-->
        <ValidationProvider 
        tag="div"
        class="mb-3"
        vid="consulting_type"
        :name="$t('consulting-type')"
        rules="required"
        v-slot="{errors}"
        >
            <d-select-input :errors="errors" v-model="itemForm.consulting_type" :label="$t('consulting-type')">
            <option></option>
            <option v-for="(it,i) in consulting_types" :key="i" :value="it.id">{{ it.name }}</option>
            </d-select-input>
        </ValidationProvider>
        <!--consulting_during-->
        <ValidationProvider 
        tag="div"
        class="mb-3"
        vid="consulting_during"
        :name="$t('consulting-during')"
        rules="required|numeric"
        v-slot="{errors}"
        >
            <d-text-input :errors="errors" v-model="itemForm.consulting_during" :label="$t('consulting-during')">
            <template v-slot:append-icon>
                <span>{{$t('minute')}}</span>
            </template>
            </d-text-input>
        </ValidationProvider>
        <h3 class="consulting-schedule-dialog_title">مواعيد</h3>
  <!--scheduling_duration-->
  <ValidationProvider 
        tag="div"
        class="mb-3"
        vid="scheduling_duration"
        :name="$t('scheduling-duration')"
        rules="required|numeric"
        v-slot="{errors}"
        >
            <d-text-input :errors="errors" v-model="itemForm.scheduling_duration" :label="$t('scheduling-duration')">
            <template v-slot:append-icon>
                <span>{{$t('day')}}</span>
            </template>
            </d-text-input>
        </ValidationProvider>
        <!--consulting_days-->
        <ValidationProvider 
        tag="div"
        class="mb-3"
        :name="$t('days_week')" 
        vid="consulting_days" 
        rules="required" 
        v-slot="{ errors }"
        >
        <d-multiselect-input :errors="errors" label="ايام الاستشارة ( حددي ايام الاسبوع )"
            :opts="daysOfWeek" track-id="id" label-name="name" v-model="itemForm.consulting_days"
            multi-select placeholder="ايام الاستشارة ( حددي ايام الاسبوع )" />
        </ValidationProvider>
        <!-- start date-->
        <ValidationProvider :name="$t('start_date_consulting')" vid="start_date" rules="required"
        v-slot="{ errors }" >
        <d-datepicker-input v-model="itemForm.start_date" label="موعد بداية الجدولة" />
        <d-error-input :errors="errors" v-if="errors && errors.length > 0" />
        </ValidationProvider>
        <h3 class="consulting-schedule-dialog_title2">الوقت المتاح</h3>
        <div class="d-flexd-flex flex-wrap gap-2">
            <div class="consulting-time-available-item" v-for="(it,i) in itemForm.times" :key="i">{{ it }}</div>
        </div>
        <div>
            <button @click="addTime" class="btn-text m-c"><i class="fa fa-plus-circle"></i> إضافة وقت اخر</button>
        </div>
    </ValidationObserver>
</div>
  </template>
  <template v-slot:actions>
    <button @click="save" :disabled="loading" class="btn btn-custmer">{{ $t('save') }}
    </button>
    </template>
  </d-dialog-large>
</template>

<script>
import commonAPI from '@/services/api/common'
export default {
    name: "new-schedule",
    props: {
        group: {
            type: String,
            default: "new-schedule-consulting"
        }
    },
    data: () => {
        let daysOfWeek = commonAPI.getDaysOfWeek()
        let type_consulations = commonAPI.getTypeConsultations()
        return {
            daysOfWeek: daysOfWeek,
            consulting_types:type_consulations,
            loading:false,
        itemDialog: {},
        itemForm:{},
        showDialog: false,
    }},
    methods: {
        addTime(){
            this.itemForm.times.push('10:00')
        },
        async save(){
            this.loading = true;
            let valid = await this.$refs.form.validate();
            if(!valid){
                this.loading = false;
                return;
            }
            this.loading = false;
        },
        openDialog(dataEvt) {
            this.itemDialog = { ...dataEvt };
            this.itemForm={
                consulting_type:'',
                consulting_days:null,
                consulting_during:null,
                scheduling_duration:null,
                start_date:'',
                times:['09:00']
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

<style>
.consulting-schedule-dialog_title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #414042;
margin-bottom:10px ;
}
.consulting-schedule-dialog_title2{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
color: #979797;
margin-bottom:10px ;
}
.consulting-time-available-item{
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
}
</style>