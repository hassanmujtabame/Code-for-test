<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    customHeaderClass="w-100"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <template v-slot:header>
      <div class="w-100">{{ $t("reschedule-appointment") }}</div>
    </template>
    <template v-slot>
      <div class="text-center" v-if="showDialog">
        <ValidationObserver ref="form">
          <!-- previous date-->
          <label class="label-text">{{ $t("booked-appointment") }}</label>
          <d-datepicker-input
            :value="itemDialog.start_date"
            :disabledEvents="true"
            label="تاريخ الاستشارة"
          />
          <!-- previous time-->
          <label class="label-text label-text-sm mt-2">{{
            $t("consultation-time")
          }}</label>
          <div class="d-flex flex-wrap gap-2">
            <availableTimeVue
              :time="itemDialog.available_time"
              @click="() => {}"
              :isSelected="true"
            />
          </div>
          <!-- new date-->
          <label class="label-text mt-2">{{ $t("new-appointment") }}</label>

          <ValidationProvider
            :name="$t('session-date')"
            vid="start_date"
            rules="required"
            v-slot="{ errors }"
          >
            <d-datepicker-input
              v-model="itemForm.start_date"
              label="تاريخ الاستشارة"
            />
            <d-error-input
              :errors="errors"
              v-if="errors && errors.length > 0"
            />
          </ValidationProvider>
          <!-- new time-->
          <label class="label-text label-text-sm mt-2">الوقت المتاح</label>
          <div class="d-flex flex-wrap gap-2">
            <availableTimeVue
              v-for="(it, i) in available_times"
              :key="i"
              :time="it"
              @click="available_time = $event"
              :isSelected="available_time == it"
            />
          </div>
          <div class="mt-2">
            <ValidationProvider
              :name="$t('reason')"
              vid="reason"
              rules="required"
              v-slot="{ errors }"
            >
              <textarea
                class="form-control"
                rows="5"
                v-model="itemForm.reason"
                :placeholder="$t('consultation-reschedule-reason')"
              >
              </textarea>
              <d-error-input
                v-if="errors && errors.length > 0"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
        </ValidationObserver>

        <div class="mt-3">
          <button
            :disabled="loading"
            @click="save"
            style="height: 40px"
            class="btn btn-custmer"
          >
            {{ $t("schedule-confirmation") }}
          </button>
        </div>
      </div>
    </template>
  </d-dialog-large>
</template>

<script>
import consultingAPI from "@/services/api/consulting/index";
import availableTimeVue from "@/components/available-time/index";

export default {
  name: "reschedule-session",
  props: {
    group: {
      type: String,
      default: "reschedule-session",
    },
  },
  components: {
    availableTimeVue,
  },
  data: (vm) => {
    return {
      x: 1,
      itemDialog: {
        id: null,
        start_date: null,
        available_time: null,
      },
      itemForm: {
        url: null,
        time: null,
        available_time: null,
        start_date: null,
        reason: null,
      },
      loading: false,
      showDialog: false,
      myAvailability: {},
      available_time: null,
      available_times: [],
    };
  },
  watch: {
    available_time() {
      this.itemForm.available_time = this.available_time;
    },
  },
  methods: {
    async initializing() {
      try {
        let { data } = await consultingAPI.consultants.getMyAvailability();
        if (data.success) {
          console.mylog("success", data.data[0]);
          this.myAvailability = data.data[0];
          this.available_times = this.myAvailability.available_times;
          if (
            this.available_time.length == 5 &&
            !this.available_times.includes(this.available_time)
          )
            this.available_times.push(this.available_time);
          this.available_times = this.available_times.sort((a, b) =>
            a > b ? 1 : -1
          );
        }
      } catch (error) {
        //
      }
      this.showDialog = true;

      return null;
    },
    async save() {
      console.log("this.itemDialog : ", this.itemDialog);
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        return;
      }
      const formData = this.loadObjectToForm(this.itemForm);
      try {
        let { data } = await consultingAPI.requests.rescheduleIt(
          this.itemDialog.id,
          formData
        );
        if (data.success) {
          this.$emit("update-list");
          this.closeEvent();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }
      this.closeEvent();
      this.loading = false;
    },
    openDialog(data) {
      this.itemDialog = Object.assign({}, data);
      this.initializing();
      this.available_time = this.itemDialog.session_time;
      this.itemForm.start_date = this.itemDialog.session_date;

      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
  },
};
</script>

<style scoped>
.label-text {
  display: flex;
  text-align: start;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  color: #414042;
}
.label-text-sm {
  font-size: 16px;
}
</style>
