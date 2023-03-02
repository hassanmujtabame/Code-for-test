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
        itemForm: {date:null,desc:''}
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

<style>

</style>