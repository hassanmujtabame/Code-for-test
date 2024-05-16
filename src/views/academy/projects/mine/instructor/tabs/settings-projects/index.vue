<template>
  <div
    class="tab-pane fade show active"
    id="pills-settings-projects"
    role="tabpanel"
    aria-labelledby="pills-settings-projects-tab"
    tabindex="0"
  >
    <div class="position-relative">
      <d-overlays-simple v-if="loading" />
      <ValidationObserver ref="form" tag="div">
        <div class="box mt-4">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4>{{ $t("adjust-notification-settings") }} :</h4>
            </div>
          </div>

          <div class="row flex-wrap align-items-center">
            <div class="col-md-6">
              <div class="form-check">
                <d-check-input
                  v-model="itemForm.send_notice"
                  :false-value="0"
                  :true-value="1"
                >
                  ارسل لي اشعار كلما ارسل طالب مشروع
                </d-check-input>
              </div>
            </div>
          </div>
        </div>
        <div class="box mt-4">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4>{{ $t("adjust-grading-settings") }} :</h4>
            </div>
          </div>

          <ValidationProvider
            tag="div"
            vid="degree_success"
            rules="required"
            :name="$t('Degree')"
            v-slot="{ errors }"
            class="row flex-wrap align-items-center"
          >
            <div class="col-md-6">
              <div class="form-check">
                <d-radio-input v-model="itemForm.degree_success" :value="50">
                  يجتاز الطالب المشروع عند حصوله على نسبة 50%
                </d-radio-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <d-radio-input v-model="itemForm.degree_success" :value="80">
                  يجتاز الطالب المشروع عند حصوله على نسبة 80 %
                </d-radio-input>
              </div>
            </div>
            <div v-if="errors.length" class="col-md-12">
              <d-error-input :errors="errors" />
            </div>
          </ValidationProvider>
        </div>
        <div class="box mt-4">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <h4>{{ $t("times-project-will-deliver") }} :</h4>
            </div>
          </div>

          <ValidationProvider
            tag="div"
            vid="number_send_project"
            :name="$t('number_upload_project')"
            rules="required"
            v-slot="{ errors }"
            class="row flex-wrap align-items-center"
          >
            <div class="col-md-6">
              <div class="form-check">
                <d-radio-input
                  v-model="itemForm.number_send_project"
                  value="infinite"
                >
                  يمكن لطالب ارسال مشاريع عدد لا نهائي من مرات
                </d-radio-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <d-radio-input
                  v-model="itemForm.number_send_project"
                  value="twice"
                >
                  يمكن لطالب ارسال مشروع مرتين من بعدها يعتبر راسب ولا يحصل على
                  شهادة مطلقا
                </d-radio-input>
              </div>
            </div>

            <div v-if="errors.length" class="col-md-12">
              <d-error-input :errors="errors" />
            </div>
          </ValidationProvider>
        </div>

        <div class="mt-4" style="text-align: end">
          <button
            @click="save"
            :disabled="loading"
            class="btn btn-custmer px-3"
          >
            حفظ الاعدادات
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import academy from "@/services/api/academy";
export default {
  name: "settings-projects",
  data: () => ({
    loading: false,
    itemForm: {
      send_notice: 0,
      degree_success: 50, //number 50 | 80
      number_send_project: "infinite", ///twice | infinite
    },
  }),
  methods: {
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.mylog("invalid");
        this.loading = false;
        return;
      }
      let formData = this.loadObjectToForm(this.itemForm);
      try {
        let { data } = await academy.projectsAPI.saveSettings(formData);
        if (data.success) {
          window.SwalSuccess(data.message);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
      this.loading = false;
    },
    async initializing() {
      this.loading = true;

      try {
        let { data } = await academy.projectsAPI.loadSettings();
        if (data.success) {
          let { send_notice, degree_success, number_send_project } = data.data;
          this.itemForm = Object.assign(this.itemForm, {
            send_notice,
            degree_success,
            number_send_project,
          });
        } else {
          //window.SwalError(data.message)
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
h4 {
  font-size: 20px;
  font-weight: 600;
  color: #414042;
}
.form-check {
  margin-top: -10px;
  font-size: 14px;
  font-weight: 400;
  color: #667d80;
}
</style>
