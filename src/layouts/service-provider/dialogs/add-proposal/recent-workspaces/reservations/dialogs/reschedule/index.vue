<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    class="work-space-reschedule-header"
  >
    <template v-slot:header>{{
      mode == "create" ? "" : "إعادة جدولة الحجز"
    }}</template>
    <template v-slot>
      <div>
        <ValidationObserver ref="form" class="work-space-reschedule">
          <!-- start date-->
            <vc-date-picker class="mb-3" v-model="form.date" :min-date="new Date()" style="width:100%; border-top: 0 ; border-left: 0; border-right: 0; border-radius:0 "/>
 
          <!-- <ValidationProvider
            name="تاريخ الحجز"
            vid="start_date"
            rules="required"
            v-slot="{ errors }"
          >
            <d-datepicker-input
              v-model="form.date"
              label="تاريخ الحجز"
              class="my-2"
            />
            <d-error-input
              :errors="errors"
              v-if="errors && errors.length > 0"
            />
          </ValidationProvider> -->

          <!-- start time -->
          <!-- <ValidationProvider
            name="وقت البدء"
            vid="start_time"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group my-2">
              <label class="label-text">وقت البدء</label>
              <div class="input-group">
                <input
                  type="time"
                  class="form-control"
                  v-model="form.start_time"
                  placeholder="اختر الوقت"
                />
              </div>
              <d-error-input
                :errors="errors"
                v-if="errors && errors.length > 0"
              />
            </div>
          </ValidationProvider> -->
            <div class="mb-2">ميعاد الدخول</div>
          <div class="d-flex justify-content-between" >
          
            <div v-for="(item,i) in startTime" :key="i">
              <div  @click="getStartTime(item)"  class="px-3 py-1 t-g-c border rounded-2" style="width:fit-content"  :class="{'bg-main text-white':item.active}">
                        {{item.value}}
               </div>

             </div>
          </div>

          <!-- end time -->
          <!-- <ValidationProvider
            name="وقت الانتهاء"
            vid="end_time"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group my-2">
              <label class="label-text">وقت الانتهاء</label>
              <div class="input-group">
                <input
                  type="time"
                  class="form-control"
                  v-model="form.end_time"
                  placeholder="اختر الوقت"
                />
              </div>
              <d-error-input
                :errors="errors"
                v-if="errors && errors.length > 0"
              />
            </div>
          </ValidationProvider> -->
        <div class="my-3">ميعاد الخروج</div>
          <div class="d-flex justify-content-between" >
          
            <div v-for="(item,i) in endTime" :key="i">
              <div @click="getEndTime(item)" class="px-3 py-1 t-g-c border rounded-2" style="width:fit-content"  :class="{'bg-main text-white':item.active}">
                        {{item.value}}
               </div>

             </div>
          </div>
        </ValidationObserver>

        <div class="mt-3 text-center">
          <button :disabled="loading" class="btn btn-customer" @click="save">
            <!-- {{ $t("schedule-confirmation") }} -->
            حجز
          </button>
        </div>
      </div>
    </template>
  </d-dialog-large>
</template>


<script>
import WorkspaceAPI from "@/services/api/workspace";
export default {
  name: "reschedule-reservation",
  props: {
    group: {
      type: String,
      default: "reschedule-reservation",
    },
    mode: {
      type: String,
      default: "create",
    },
  },

  data() {
    return {
      date : new Date(),
      form: {
        date:  new Date(),
        start_time: null,
        end_time: null,
      },
      itemDialog: {},
      loading: false,
      startTime:[{value:'9:00',id:'1',active:true},{value:'9:15',id:'2',active:false},{value:'9:30',id:'3',active:false},{value:'9:45',id:'4',active:false},{value:'10:15',id:'5',active:false},{value:'10:30',id:'6',active:false}],
      endTime:[{value:'11:00',id:'12',active:true},{value:'11:15',id:'22',active:false},{value:'11:30',id:'32',active:false},{value:'11:45',id:'42',active:false},{value:'12:15',id:'62',active:false},{value:'12:30',id:'52',active:false}],
    };
  },

  methods: {
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        return;
      }
      const payload = {
        ...this.form,
        workspace_id: this.itemDialog.workspace_id ?? this.itemDialog.id,
        _method: "put",
      };
      if (this.mode === "create") {
        delete payload._method;
      }
      const formData = this.loadObjectToForm(payload);

      try {
        let { data } = await WorkspaceAPI.reservations.reservationReschedule(
          !this.mode === "create" ? this.itemDialog.id : "",
          formData
        );
        if (data.success) {
          window.successMsg();
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }
      this.closeEvent();
      this.loading = false;
    },
    openDialog(data) {
      this.itemDialog = { ...data };
      return true;
    },
    closeDialog() {
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
    getStartTime(item){
      this.form.start_time = item.value
      for (let index = 0; index < this.startTime.length; index++) {
        const element = this.startTime[index];
        if (element.id==item.id) {
          element.active=true
        }else{
          element.active=false

        }
      }
    },
     getEndTime(item){
      this.form.end_time = item.value
      for (let index = 0; index < this.endTime.length; index++) {
        const element = this.endTime[index];
        if (element.id==item.id) {
          element.active=true
        }else{
          element.active=false

        }
      }
    }
  },
};
</script>

<style>
.label-text {
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

.input-group-prepend {
  margin-right: -1px;
}

.input-group-text {
  background-color: #f8f9fa;
  border-color: #dee2e6;
}

.work-space-reschedule .vc-highlight{
  background:#1FB9B3 !important;
    border-radius: 20px 0 0px 20px !important;
  width: 50px !important;
}

.t-g-c{
  font-weight:100 ;
color: #73737359;
cursor: pointer;
}
    .work-space-reschedule-header .modal-header{
          /* display: none; */
          padding: 5px;
    }
  

</style>