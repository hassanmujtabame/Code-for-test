<template>
  <d-dialog-large :group="group" :xl="false" :openDialog="openDialog" :closeDialog="closeDialog"
    class="work-space-reschedule-header">
    <template v-slot:header>{{
      mode == "create" ? "" : "إعادة جدولة الحجز"
    }}</template>
    <template v-slot>
      <div>
        <ValidationObserver ref="form" class="work-space-reschedule">
          <!-- start date-->
          <vc-date-picker class="mb-3" v-model="form.date" :min-date="new Date()"
            style="width:100%; border-top: 0 ; border-left: 0; border-right: 0; border-radius:0 " />


          <div class="mb-2">ميعاد الدخول</div>
          <div class="d-flex justify-content-between">

            <div v-for="( item, i ) in  startTime " :key="i">
              <div @click="getStartTime(item)" class="px-3 py-1 t-g-c border rounded-2" style="width:fit-content"
                :class="{ 'bg-main text-white': item.active }">
                {{ item.value }}
              </div>

            </div>
          </div>

          <div class="my-3">ميعاد الخروج</div>
          <div class="d-flex justify-content-between">

            <div v-for="( item, i ) in  endTime " :key="i">
              <div @click="getEndTime(item)" class="px-3 py-1 t-g-c border rounded-2" style="width:fit-content"
                :class="{ 'bg-main text-white': item.active }">
                {{ item.value }}
              </div>

            </div>
          </div>
          <hr>

          <!-- start test -->




          <div class="row mt-3">
            <div class="col-12">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class=""> اختار المناسب ليك </h5>
                  <hr class="style-1 mb-4">

                  <ValidationProvider v-slot="{ errors }" :name="$t('الدفع')" rules="required" tag="div" class="my-2">

                    <label class="card-radio-btn">
                      <span style="width:fit-content; display:block; ">
                        ادفع
                        20%
                        فقط
                      </span>
                      <input type="radio" name="options" class="card-input-element d-none" value="part"
                        v-model="form.selectedOption">
                      <div class="card card-body">
                        <div class="content_head"> جزئي</div>
                        <div class="content_sub"> ر.س {{ partPrice }}</div>
                      </div>
                    </label>

                    <label class="card-radio-btn">
                      <input type="radio" name="options" class="card-input-element d-none" value="full"
                        v-model="form.selectedOption">
                      <div class="card card-body">
                        <div class="content_head">كلى</div>
                        <div class="content_sub"> ر.س {{ fullPrice }}</div>
                      </div>
                    </label>

                    <d-error-input :errors="errors" v-if="errors.length > 0" />

                  </ValidationProvider>

                </div>
              </div>
            </div>
          </div>


          <!-- <ValidationProvider rules="required" v-slot="{ errors }">
            <label class="card-radio-btn">
              <input type="radio" name="options" id="total" class="card-input-element d-none" v-model="selectedOption" value="part">
              <div class="card card-body">
                <div class="content_head">كلى</div>
                <div class="content_sub">$1049,00</div>
              </div>
            </label>
            <div>
              <input type="radio" id="option1" name="options" value="option1" v-model="selectedOption" />
              <label for="option1">Option 1</label>
            </div>
            <div>
              <input type="radio" id="option2" name="options" value="option2" v-model="selectedOption" />
              <label for="option2">Option 2</label>
            </div>
            <span>{{ errors[0] }}</span>
          </ValidationProvider> -->
          <!-- end test -->
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
    price: {
      type: String
    }
  },

  data() {
    return {
      // date: new Date(),
      form: {
        date: new Date(),
        // date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        start_time: '09:00',
        end_time: '11:00',
        selectedOption: ''
      },
      itemDialog: {},
      loading: false,
      startTime: [{ value: '09:00', id: '1', active: true }, { value: '09:15', id: '2', active: false }, { value: '09:30', id: '3', active: false }, { value: '09:45', id: '4', active: false }, { value: '10:15', id: '5', active: false }, { value: '10:30', id: '6', active: false }],
      endTime: [{ value: '11:00', id: '12', active: true }, { value: '11:15', id: '22', active: false }, { value: '11:30', id: '32', active: false }, { value: '11:45', id: '42', active: false }, { value: '12:15', id: '62', active: false }, { value: '12:30', id: '52', active: false }],
    };
  },

  computed: {
    fullPrice() {
      const time1 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.start_time);
      const time2 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.end_time);
      const differenceInMs = time2.getTime() - time1.getTime();
      const differenceInHours = differenceInMs / (1000 * 60 * 60);

      return this.price * differenceInHours
    },
    partPrice() {
      const time1 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.start_time);
      const time2 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.end_time);
      const differenceInMs = time2.getTime() - time1.getTime();
      const differenceInHours = differenceInMs / (1000 * 60 * 60);

      return (this.price * differenceInHours) / 5
    },
  },
  methods: {
    openConfirmDialog() {
      let dataEvt = {
        title: '',
        description: `يجب عليك الاشتراك فى باقة الشركات`,
        type: 'warning',
        btns: [
          { title: this.$t('subscribe'), action: () => this.router_push('network-subscribe') }
        ]
      }
      this.showConfirmMsg()
      //this.fireOpenDialog('go-to-pther-section',dept)
    },
    async save() {
      const time1 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.start_time);
      const time2 = new Date(this.form.date.toJSON().slice(0, 10) + "T" + this.form.end_time);
      const differenceInMs = time2.getTime() - time1.getTime();
      const differenceInHours = differenceInMs / (1000 * 60 * 60);
      console.log(
        'hours', differenceInHours
      )
      //this.$router.push({
      //name: 'workspaces-pay',
      //params: {
      //title: 'Alice',
      //age: 25
      //}
      //})
      // this.openConfirmDialog()
      // this.form.date = this.form.date.toJSON().slice(0,10).replace(/-/g,'/')    
      console.log("this.form.selectedOption::", this.form.selectedOption)
      // die()
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        return;
      }
      const payload = {
        // ...this.form,
        date: this.form.date.toJSON().slice(0, 10).replace(/-/g, '/'),
        start_time: this.form.start_time,
        end_time: this.form.end_time,
        type: this.form.selectedOption,
        gateway: 'myfatoorah',
        workspace_id: this.itemDialog.workspace_id ?? this.itemDialog.id,
        _method: "put",
      };
      if (this.mode === "create") {
        delete payload._method;
      }
      const formData = this.loadObjectToForm(payload);

      // try {
      //   let { data } = await WorkspaceAPI.reservations.reservationReschedule(
      //     !this.mode === "create" ? this.itemDialog.id : "",
      //     formData
      //   );
      //   if (data.success) {
      //     console.log('data.data.success', data)
      //     window.successMsg();
      //     this.$emit("update-list");
      //   } else {
      //     window.SwalError(data.message);
      //   }
      // } catch (error) {
      //   window.DHelper.catchException.call(this, error, this.$refs.form);
      // }
      try {
        let { data } = await WorkspaceAPI.reservations.reservationReschedule(
          !this.mode === "create" ? this.itemDialog.id : "",
          formData
        );
        if (data.success) {
          console.log('data.data.success', data.data.payment_url)
          window.location = data.data.payment_url;
          // window.successMsg();
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
    getStartTime(item) {
      this.form.start_time = item.value
      for (let index = 0; index < this.startTime.length; index++) {
        const element = this.startTime[index];
        if (element.id == item.id) {
          element.active = true
        } else {
          element.active = false

        }
      }
    },
    getEndTime(item) {
      this.form.end_time = item.value
      for (let index = 0; index < this.endTime.length; index++) {
        const element = this.endTime[index];
        if (element.id == item.id) {
          element.active = true
        } else {
          element.active = false

        }
      }
    }
  },
};
</script>

<style scoped>
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

.work-space-reschedule .vc-highlight {
  background: #1FB9B3 !important;
  border-radius: 20px 0 0px 20px !important;
  width: 50px !important;
}

.t-g-c {
  font-weight: 100;
  color: #73737359;
  cursor: pointer;
}

.work-space-reschedule-header .modal-header {
  /* display: none; */
  padding: 5px;
}

.card {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.65rem;
}

hr.style-1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.07);
}

.fw-500 {
  font-weight: 400;
}

.fw-600 {
  font-weight: 500;
}

.mt_2 {
  margin-top: 2rem !important;
}

/*Simple radio btn input CSS*/
.custom-control-label {
  cursor: pointer;
}

.cap-opt-1 {
  display: inline-block;
  min-width: 50px;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #59a9f7;
  background-color: #59a9f7;
}

/*Card Button CSS*/

.card-radio-btn .content_head {
  color: #333;
  font-size: 1.2rem;
  line-height: 30px;
  font-weight: 500;
}

.card-radio-btn .content_sub {
  color: #9e9e9e;
  font-size: 14px;
}

.card-input-element+.card {
  width: 105px;
  height: 105px;
  margin: 10px;
  justify-content: center;
  color: var(--primary);
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 2px solid transparent;
  border-radius: 10px;
  text-align: center;
  -webkit-box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.card-input-element+.card:hover {
  cursor: pointer;
}

.card-input-element:checked+.card {
  border: 2px solid #719eca;
  -webkit-transition: border 0.3s;
  -o-transition: border 0.3s;
  transition: border 0.3s;
}

.card-input-element:checked+.card::after {
  content: "\f058";
  color: rgba(113, 158, 201, 0.6);
  position: absolute;
  right: 5px;
  top: 5px;
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-animation-name: fadeInCheckbox;
  animation-name: fadeInCheckbox;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@-webkit-keyframes fadeInCheckbox {
  from {
    opacity: 0;
    -webkit-transform: rotateZ(-20deg);
  }

  to {
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
  }
}

@keyframes fadeInCheckbox {
  from {
    opacity: 0;
    transform: rotateZ(-20deg);
  }

  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}
</style>