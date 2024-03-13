<template>
  <d-dialog-large
    :xl="false"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    :group="group"
  >
    <div class="d-flex align-items-center my-3 gap-3">
      <div>
        <img
          class="rounded-3"
          :src="itemPage.image"
          :alt="itemPage.name"
          width="80"
          height="80"
        />
      </div>
      <div>
        <h6
          style="font-size: 20px; font-weight: semibold"
          class="consultant-name"
        >
          {{ itemPage.name }}
        </h6>
        <p style="color: #888" class="consultant-text">
          {{ itemPage.job_title }}
        </p>
      </div>
    </div>
    <h6>تفاصيل الاستشارة</h6>

    <div class="d-flex align-items-center gap-2">
      <h6 style="color: #f2631c">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z"
            fill="#F2631C"
          />
          <path
            d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"
            fill="#F2631C"
          />
          <path
            d="M19.6005 17.8002C18.0905 17.8002 16.8105 16.6802 16.6905 15.2402C16.6105 14.4102 16.9105 13.6002 17.5105 13.0102C18.0205 12.4902 18.7205 12.2002 19.4705 12.2002H21.5505C22.5405 12.2302 23.3005 13.0102 23.3005 13.9702V16.0302C23.3005 16.9902 22.5405 17.7702 21.5805 17.8002H19.6005ZM21.5305 13.7002H19.4805C19.1305 13.7002 18.8105 13.8302 18.5805 14.0702C18.2905 14.3502 18.1505 14.7302 18.1905 15.1102C18.2505 15.7702 18.8805 16.3002 19.6005 16.3002H21.5605C21.6905 16.3002 21.8105 16.1802 21.8105 16.0302V13.9702C21.8105 13.8202 21.6905 13.7102 21.5305 13.7002Z"
            fill="#F2631C"
          />
          <path
            d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
            fill="#F2631C"
          />
        </svg>
        {{ itemPage.consultation_price }} ر.س
      </h6>
      <div
        v-if="itemPage.duration_time"
        class="d-flex gap-2 align-items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
            fill="#979797"
          />
          <path
            d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
            fill="#979797"
          />
          <path
            d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
            fill="#979797"
          />
        </svg>
        <p style="color: #888; padding-top: 15px">
          {{ itemPage.duration_time }}
        </p>
      </div>
    </div>
    <!-- <div class="my-2">
      <div class="text-end">
        <h6 style="color: #888">الوقت المتاح</h6>
      </div>
    </div> -->
    <!-- <template v-slot:header> إحجزي جلستك الان </template> -->

    <div>
      <ValidationObserver ref="form" tag="div" v-if="showDialog">
        <!-- date -->
        <div class="row">
          <div v-if="times.length" class="my-3">
            <ValidationProvider
              :name="$t('booking-time')"
              tag="div"
              vid="time"
              v-slot="{ errors }"
            >
              <label>الوقت المتاح</label>
              <div class="d-flex">
                <availableTimeCard
                  :isSelected="itemForm.available_time == it"
                  v-for="(it, i) in times"
                  :key="i"
                  @click="itemForm.available_time = $event"
                  :value="it"
                />
              </div>
              <d-error-input :errors="errors" v-if="errors.length > 1" />
            </ValidationProvider>
          </div>
          <div class="form-group col-md-7 col-12">
            <ValidationProvider
              :name="$t('booking-desc')"
              vid="description"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                v-model="itemForm.description"
                label="موضوع الاستشارة"
              />
            </ValidationProvider>
          </div>
          <ValidationProvider
            style=""
            class="col-md-5 d-flex flex-column gap-1 col-12"
            :name="$t('booking-date')"
            tag="div"
            vid="start_date"
            v-slot="{ errors }"
          >
            <!-- <label
              for="date"
              style="background-color: #1fb9b3; width: 300px; height: 200px"
            >
              b
            </label> -->
            <!-- <label for=""> اختيار معاد </label> -->
            <!-- <div class="d-none"> -->
            <div
              class="rounded-3"
              style="width: fit-content; border: 1px solid #2cb7b3"
            >
              <d-datepicker-input
                style=" border:none height: 52px"
                class="rounded-3 form-control"
                placeholder="اختيار المعاد"
                id="date"
                v-model="itemForm.start_date"
              />
            </div>
            <!-- </div> -->
            <d-error-input :errors="errors" v-if="errors.length > 1" />
          </ValidationProvider>
        </div>
        <div class="form-group col-md-12 my-2 col-12">
          <ValidationProvider name="message" vid="message" v-slot="{ errors }">
            <d-textarea-input
              :errors="errors"
              v-model="itemForm.message"
              label=" ارسل رساله للمستشار"
            />
          </ValidationProvider>
        </div>
        <!-- <div v-if="times.length" class="mt-3">
          <ValidationProvider
            :name="$t('booking-time')"
            tag="div"
            vid="time"
            v-slot="{ errors }"
          >
            <label>الوقت المتاح</label>
            <div class="d-flex">
              <availableTimeCard
                :isSelected="itemForm.available_time == it"
                v-for="(it, i) in times"
                :key="i"
                @click="itemForm.available_time = $event"
                :value="it"
              />
            </div>
            <d-error-input :errors="errors" v-if="errors.length > 1" />
          </ValidationProvider>
        </div> -->
        <!-- desc -->

        <!-- <div class="form-group mt-3">
          <ValidationProvider
            :name="$t('booking-desc')"
            vid="description"
            v-slot="{ errors }"
          >
            <d-textarea-input
              :errors="errors"
              v-model="itemForm.description"
              label="اكتبي ملخص ما تريدين التحدث عنه"
            />
          </ValidationProvider>
        </div> -->
        <!-- <div class="form-group mt-3">
          <ValidationProvider
            :name="$t('booking-desc')"
            vid="description"
            v-slot="{ errors }"
          >
            <d-textarea-input
              :errors="errors"
              v-model="itemForm.description"
              label="اكتبي ملخص ما تريدين التحدث عنه"
            />
          </ValidationProvider>
        </div> -->
        <!-- <div class="form-group mt-3">
          <ValidationProvider
            :name="$t('booking-desc')"
            vid="description"
            v-slot="{ errors }"
          >
            <d-textarea-input
              :errors="errors"
              v-model="itemForm.description"
              label="اكتبي ملخص ما تريدين التحدث عنه"
            />
          </ValidationProvider>
        </div> -->
      </ValidationObserver>
    </div>
    <template v-slot:actions>
      <div style="width: 100%" class="text-end">
        <button :disabled="loading" @click="save" class="btn btn-custmer">
          <i v-if="loading" class="fa fa-spinner fa-spin"></i>
          طلب حجز معاد
        </button>
      </div>
    </template>
  </d-dialog-large>
</template>

<script>
import consultingAPI from "@/services/api/consulting";
import availableTimeCard from "./available-time.vue";
export default {
  name: "add-booking-consultant",
  props: {
    group: {
      default: "add-booking-consultant",
    },
    itemPage: {
      type: Object,
      default: function () {
        return {}; // Default value as an empty object
      },
    },
  },
  components: {
    availableTimeCard,
  },
  data: () => ({
    loading: false,
    showDialog: false,
    itemDailog: {},
    itemForm: { start_date: null, description: "", available_time: "" },
    times: [],
    availability: {},
    attributes_date: [
      {
        key: "today",
        highlight: true,
        dates: {
          start: new Date(),
          //end:null
        },
      },
    ],
    // minDate:new Date(),
    // maxDate: null,
    availableDates: [],
  }),
  methods: {
    async save() {
      this.loading = true;
      let valid = this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        console.mylog("invalid");
        return;
      }
      const formData = this.loadObjectToForm(this.itemForm);
      try {
        let { data } = await consultingAPI.bookingConsultant(formData);
        if (data.data) {
          let dataEvt = {
            title: "لقت تم ارسال طلب حجز موعد بنجاح",
            description: "سيتم التواصل معك عند اقتراب موعد الاستشارة",
            btns: [
              {
                title: this.$t("Home"),
                action: () => this.router_push("network-home"),
              },
            ],
          };
          this.showSuccessMsg(dataEvt);

          this.closeEvent();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }
      this.loading = false;
    },
    async loadAvailableDates() {
      try {
        let { data } = await consultingAPI.consultants.getAvailability(
          this.itemDailog.id
        );
        if (data.success) {
          this.availability = Object.assign(this.availability, {
            ...data.data[0],
          });
          let days = [new Date(this.availability.start_date)];
          for (let i = 1; i <= parseInt(this.availability.duration_days); i++)
            days.push(this.addDays(this.availability.start_date, i));

          this.minDate = days[0];
          this.maxDate = days[days.length - 1];
          this.times = this.availability.available_times;
          this.availableDates = days;
        }
      } catch (error) {
        console.mylog("error", error);
        //
      }
    },
    openDialog(dataEvt) {
      this.itemDailog = dataEvt.item;
      this.loadAvailableDates();
      this.itemForm = {
        start_date: null,
        consultant_id: this.itemDailog.id,
        description: "",
        available_time: null,
      };
      if (dataEvt.opts) {
        this.itemForm = Object.assign(this.itemForm, { ...dataEvt.opts });
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
    },
  },
};
</script>

<style scoped>
.label-dialog {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height, or 106% */
  color: #979797;
}
</style>
