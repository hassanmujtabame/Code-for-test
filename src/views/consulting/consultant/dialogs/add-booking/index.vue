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
    vid="date"
    v-slot="{errors}"
    >
        <label>حددي يوم الحجز</label>
        <d-datepicker-input v-model="itemForm.date"  />
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
            <span class="time-card" 
            :class="{'selected':itemForm.time == it}"
                v-for="(it,i) in times" 
                :key="i" 
                @click="itemForm.time = it"
            >{{ it }}</span>
        </div>
        <d-error-input :errors="errors" v-if="errors.length>1"/>
    </ValidationProvider>
    </div>
     <!-- desc -->
     <div class="form-group mt-3">
    <ValidationProvider
    :name="$t('booking-desc')"
    vid="desc"
    v-slot="{errors}"
    >
        <d-textarea-input :errors="errors" v-model="itemForm.desc" label="اكتبي ملخص ما تريدين التحدث عنه"  />
        
    </ValidationProvider>
    </div>
    </ValidationObserver>
    </div>
    <template v-slot:actions>
        <button class="btn btn-custmer">أحجز الاستشارة</button>
    </template>
  </d-dialog-large>
</template>

<script>
export default {
    name: "add-booking-consultant",
    props: {
        group: {
            default: "add-booking-consultant"
        }
    },
    data: () => ({
        showDialog: false,
        itemDailog: {},
        itemForm: {date:null,desc:'',time:''},
        times:['17:30','18:00','18:30','19:00']
    }),
    methods: {
        openDialog(dataEvt) {
            this.itemDailog = dataEvt;
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
.time-card{
    cursor: pointer;
    border: 1px solid #c1c1c1;
    padding: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #737373;
    border-radius: 4px;
    min-width: 60px;
    text-align: center;
    margin: 0 5px;
}
.time-card.selected{
    background: #1FB9B3;
    color:white;
}
</style>