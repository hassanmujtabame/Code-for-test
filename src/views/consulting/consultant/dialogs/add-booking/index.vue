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
      <h6 style="color: #f2631c">{{ itemPage.consultation_price }} ر.س</h6>
      <div v-if="itemPage.duration_time" class="d-flex align-items-center">
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
        <p style="color: #888">
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
          <div class="form-group col-md-8 col-12">
            <ValidationProvider
              :name="$t('booking-desc')"
              vid="description"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                v-model="itemForm.description"
                label="اكتبي ملخص ما تريدين التحدث عنه"
              />
            </ValidationProvider>
          </div>
          <ValidationProvider
            class="col-md-4 d-flex flex-column gap-1 col-12"
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
            <label for=""> اختيار معاد </label>
            <!-- <div class="d-none"> -->
            <d-datepicker-input id="date" v-model="itemForm.start_date" />
            <!-- </div> -->
            <d-error-input :errors="errors" v-if="errors.length > 1" />
          </ValidationProvider>
        </div>
        <div v-if="times.length" class="mt-3">
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
      </ValidationObserver>
    </div>
    <template v-slot:actions>
      <button :disabled="loading" @click="save" class="btn btn-custmer">
        <i v-if="loading" class="fa fa-spinner fa-spin"></i>
        أحجز الاستشارة
      </button>
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
