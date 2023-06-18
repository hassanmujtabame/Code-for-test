<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <template v-slot:header>{{
      mode == "create" ? "احجز الان" : "إعادة جدولة الحجز"
    }}</template>
    <template v-slot>
      <div>
        <ValidationObserver ref="form">
          <!-- start date-->
          <ValidationProvider
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
          </ValidationProvider>

          <!-- start time -->
          <ValidationProvider
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
          </ValidationProvider>

          <!-- end time -->
          <ValidationProvider
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
          </ValidationProvider>
        </ValidationObserver>

        <div class="mt-3 text-center">
          <button :disabled="loading" class="btn btn-customer" @click="save">
            {{ $t("schedule-confirmation") }}
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
      form: {
        date: null,
        start_time: null,
        end_time: null,
      },
      itemDialog: {},
      loading: false,
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
</style>