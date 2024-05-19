<template>
  <d-dialog-large
    :xl="false"
    :group="group"
    customHeaderClass="m-2 w-100"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
  >
    <template v-slot:header>
      <div
        style="
          font-size: 24px !important;
          font-weight: 600 !important;
          color: #0c2f33 !important;
        "
      >
        تحديث الأوقات وتفاصيل الاستشارات
      </div>
    </template>
    <template v-slot:default>
      <div style="height: 415px; overflow-y: auto">
        <ValidationObserver v-if="showDialog" ref="form" tag="div">
          <h3 class="consulting-schedule-dialog_title">معلومات عن الاستشارة</h3>
          <!--type-->
          <ValidationProvider
            tag="div"
            class="mb-3"
            vid="type"
            :name="$t('consulting-type')"
            rules="required"
            v-slot="{ errors }"
          >
            <d-select-input
              :errors="errors"
              v-model="itemForm.type"
              :label="$t('consulting-type')"
            >
              <option></option>
              <option
                v-for="(it, i) in consulting_types"
                :key="i"
                :value="it.id"
              >
                {{ it.name }}
              </option>
            </d-select-input>
          </ValidationProvider>
          <!--duration_time-->
          <ValidationProvider
            tag="div"
            class="mb-3"
            vid="duration_time"
            :name="$t('consulting-during')"
            rules="required|numeric"
            v-slot="{ errors }"
          >
            <d-text-input
              :errors="errors"
              v-model="minutes"
              :label="$t('consulting-during')"
            >
              <template v-slot:append-icon>
                <span>{{ $t("minute") }}</span>
              </template>
            </d-text-input>
          </ValidationProvider>
          <h3 class="consulting-schedule-dialog_title">مواعيد</h3>
          <!--duration_days-->
          <ValidationProvider
            tag="div"
            class="mb-3"
            vid="duration_days"
            :name="$t('scheduling-duration')"
            rules="required|numeric"
            v-slot="{ errors }"
          >
            <d-text-input
              :errors="errors"
              v-model="itemForm.duration_days"
              :label="$t('scheduling-duration')"
            >
              <template v-slot:append-icon>
                <span>{{ $t("day") }}</span>
              </template>
            </d-text-input>
          </ValidationProvider>
          <!--days-->
          <ValidationProvider
            tag="div"
            class="mb-3"
            :name="$t('days_week')"
            vid="days"
            rules="required"
            v-slot="{ errors }"
          >
            <d-multiselect-input
              :errors="errors"
              label="ايام الاستشارة ( حددي ايام الاسبوع )"
              :opts="daysOfWeek"
              track-id="id"
              label-name="name"
              v-model="itemForm.days"
              multi-select
              placeholder="ايام الاستشارة ( حددي ايام الاسبوع )"
            />
          </ValidationProvider>
          <!-- start date-->
          <ValidationProvider
            :name="$t('start_date_consulting')"
            vid="start_date"
            rules="required"
            v-slot="{ errors }"
          >
            <d-datepicker-input
              disabledEvents
              v-model="itemForm.start_date"
              label="موعد بداية الجدولة"
            >
              <template v-slot:[`append-icon`]="{ togglePopover }">
                <button class="btn" @click="togglePopover">
                  <i class="fa fa-calendar"></i>
                </button>
              </template>
            </d-datepicker-input>
            <d-error-input
              :errors="errors"
              v-if="errors && errors.length > 0"
            />
          </ValidationProvider>
          <h3 class="consulting-schedule-dialog_title2">الوقت المتاح</h3>
          <div class="d-flex flex-wrap gap-2">
            <showAvailabeTime
              v-for="(it, i) in itemForm.available_times"
              :key="i"
              :time="it"
              @delete="deleteTime"
            />
          </div>
          <div>
            <addTimeBtn :times="itemForm.available_times" @store="addTime" />
          </div>
        </ValidationObserver>
      </div>
    </template>
    <template v-slot:actions>
      <button @click="save" :disabled="loading" class="btn btn-custmer">
        {{ $t("save") }}
      </button>
    </template>
  </d-dialog-large>
</template>

<script>
import commonAPI from "@/services/api/common";
import addTimeBtn from "./add-time.vue";
import showAvailabeTime from "./show-time.vue";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "new-schedule",
  props: {
    group: {
      type: String,
      default: "new-schedule-consulting",
    },
  },
  components: {
    addTimeBtn,
    showAvailabeTime,
  },
  data: () => {
    let daysOfWeek = commonAPI.getDaysOfWeek();
    let type_consulations = commonAPI.getTypeConsultations();
    return {
      msg: "",
      minutes: 0, // Default value for minutes

      daysOfWeek: daysOfWeek,
      consulting_types: type_consulations,
      loading: false,
      itemDialog: {},
      itemForm: { available_times: [] },
      showDialog: false,
    };
  },
  methods: {
    deleteTime(time) {
      this.itemForm.available_times = this.itemForm.available_times.filter(
        (x) => x != time
      );
    },
    formatDuration(durationInSeconds) {
      // Convert seconds to HH:mm:ss format
      let hours = Math.floor(durationInSeconds / 3600);
      let minutes = Math.floor((durationInSeconds % 3600) / 60);
      let seconds = durationInSeconds % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`;
    },

    // formatDuration(durationInSeconds) {
    //   // Convert seconds to HH:mm:ss format
    //   const hours = Math.floor(durationInSeconds / 3600);
    //   const minutes = Math.floor((durationInSeconds % 3600) / 60);
    //   const seconds = durationInSeconds % 60;
    //   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    //     2,
    //     "0"
    //   )}:${String(seconds).padStart(2, "0")}`;
    // },
    // parseDuration(formattedDuration) {
    //   // Parse HH:mm:ss format and convert to seconds
    //   const [hours, minutes, seconds] = formattedDuration
    //     .split(":")
    //     .map(Number);
    //   return hours * 3600 + minutes * 60 + seconds;
    // },

    // formatDuration(durationInSeconds) {
    //   // Convert seconds to hours, minutes, and remaining seconds
    //   let hours = Math.floor(durationInSeconds / 3600);
    //   let minutes = Math.floor((durationInSeconds % 3600) / 60);
    //   let seconds = durationInSeconds % 60;

    //   // Format the time components as two-digit numbers
    //   hours = String(hours).padStart(2, "0");
    //   minutes = String(minutes).padStart(2, "0");
    //   seconds = String(seconds).padStart(2, "0");

    //   // Construct the formatted duration string
    //   return `${hours}:${minutes}:${seconds}`;
    // },
    addTime(time) {
      if (this.itemForm.available_times == null) {
        this.itemForm.available_times = [time];
      } else if (this.itemForm.available_times.includes(time)) {
        return;
      } else this.itemForm.available_times.push(time);
    },
    async save() {
      console.log("in save");
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        return;
      }
      try {
        let { data } = await consultingAPI.consultants.updateMyAvailability(
          this.itemForm
        );
        if (data.success) {
          this.closeEvent();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }

      this.loading = false;
    },
    openDialog(dataEvt) {
      this.initializing();
      this.itemDialog = { ...dataEvt };
      this.itemForm = {
        type: "",
        days: null,
        duration_time: null,
        duration_days: null,
        start_date: "",
        available_times: [],
      };
      this.showDialog = false;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
    closeEvent() {
      this.fireCloseDialog(this.group);
    },
    async initializing() {
      try {
        let { data } = await consultingAPI.consultants.getMyAvailability();
        if (data.success) {
          console.mylog("success", data.data[0]);

          const {
            duration_days,
            duration_time,
            available_times,
            start_date,
            type,
            days,
          } = data.data[0];
          this.itemForm = Object.assign(this.itemForm, {
            available_times,
            duration_days: parseInt(duration_days),
            duration_time: parseInt(duration_time),
            start_date,
            type,
            days,
          });
        }
      } catch (error) {
        //
      }
      this.showDialog = true;

      return null;
    },
  },
  //   computed: {
  //     computed: {
  //       formattedDuration() {
  //         // Assuming itemForm.duration_time contains the duration in seconds
  //         // Convert the duration from seconds to HH:mm:ss format
  //         return this.formatDuration(this.itemForm.duration_time);
  //       },
  //     },
  //   },
  //   computed: {
  //     formattedDuration: {
  //       get() {
  //         // Get the duration time in seconds from itemForm
  //         const durationInSeconds = this.itemForm.duration_time;
  //         // Format the duration time into HH:mm:ss format
  //         const formattedDuration = this.formatDuration(durationInSeconds);
  //         return formattedDuration;
  //       },
  //       set(newValue) {
  //         // Set the duration time back to itemForm in seconds
  //         this.itemForm.duration_time = this.parseDuration(newValue);
  //       },
  //     },
  //   },
  watch: {
    minutes(newMinutes) {
      // Convert minutes to seconds and then format it
      this.itemForm.duration_time = this.formatDuration(newMinutes * 60);
    },
  },
};
</script>

<style>
.consulting-schedule-dialog_title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #414042;
  margin-bottom: 10px;
}
.consulting-schedule-dialog_title2 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #979797;
  margin-bottom: 10px;
}
</style>
