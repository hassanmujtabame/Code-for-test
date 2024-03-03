<template>
  <div id="list-item-2">
    <div class="box border mt-5">
      <div class="d-flex justify-content-between px-3 align-items-center">
        <h3 style="color: #1fb9b3" class="border-bottom py-2 t-c px-3">
          معلومات شخصية
        </h3>
        <button
          v-if="!isEnabled"
          @click="enableInput"
          class="btn px-4 py-2 text-light"
          style="background-color: #1fb9b3"
        >
          <svg
            class="mx-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4219 0.847656C17.5664 -0.0078125 16.1836 -0.0078125 15.3281 0.847656L14.1523 2.01953L17.9766 5.84375L19.1523 4.66797C20.0078 3.8125 20.0078 2.42969 19.1523 1.57422L18.4219 0.847656ZM6.73437 9.44141C6.49609 9.67969 6.3125 9.97266 6.20703 10.2969L5.05078 13.7656C4.9375 14.1016 5.02734 14.4727 5.27734 14.7266C5.52734 14.9805 5.89844 15.0664 6.23828 14.9531L9.70703 13.7969C10.0273 13.6914 10.3203 13.5078 10.5625 13.2695L17.0977 6.73047L13.2695 2.90234L6.73437 9.44141ZM3.75 2.5C1.67969 2.5 0 4.17969 0 6.25V16.25C0 18.3203 1.67969 20 3.75 20H13.75C15.8203 20 17.5 18.3203 17.5 16.25V12.5C17.5 11.8086 16.9414 11.25 16.25 11.25C15.5586 11.25 15 11.8086 15 12.5V16.25C15 16.9414 14.4414 17.5 13.75 17.5H3.75C3.05859 17.5 2.5 16.9414 2.5 16.25V6.25C2.5 5.55859 3.05859 5 3.75 5H7.5C8.19141 5 8.75 4.44141 8.75 3.75C8.75 3.05859 8.19141 2.5 7.5 2.5H3.75Z"
              fill="white"
            />
          </svg>
          تعديل
        </button>
        <button v-else @click="save" class="btn-main">
          {{ $t("save") }}
        </button>
      </div>
      <ValidationObserver ref="form">
        <div class="p-3">
          <div class="row align-items-start">
            <label class="col-md-4 fs-5 fw-bolder">
              <i class="fa fa-cake-candles"></i>
              {{ $t("birthday") }} :
            </label>
            <div class="col-md-8 row mb-3">
              <ValidationProvider
                tag="div"
                :name="$t('birthday')"
                vid="birth_date"
                rules="required"
                v-slot="{ errors }"
                :disabled="!isEnabled"
                :max-date="'2100-12-31'"
                min-date="1960-1-1"
              >
                <date-picker-input
                  :disabled="!isEnabled"
                  :max-date="'2100-12-31'"
                  min-date="1960-1-1"
                  mode="calendar"
                  class="form-control"
                  v-model="itemForm.birth_date"
                />
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            </div>
          </div>
          <div class="row align-items-start">
            <label class="col-md-4 fs-5 fw-bolder">
              <i class="fa fa-globe"></i>
              {{ $t("nationality") }} :
            </label>
            <div class="col-md-8 row mb-3">
              <ValidationProvider
                tag="div"
                :name="$t('nationality')"
                vid="nationality"
                rules="required"
                v-slot="{ errors }"
              >
                <d-text-input
                  :disabled="!isEnabled"
                  :errors="errors"
                  type="text"
                  v-model="itemForm.nationality"
                  class="form-control"
                  placeholder="حدد جنسيتك"
                >
                </d-text-input>
              </ValidationProvider>
            </div>
          </div>
          <div class="row align-items-start mb-4">
            <label class="col-md-4 fs-5 fw-bolder">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16055 11.62C9.13055 11.62 9.11055 11.62 9.08055 11.62C9.03055 11.61 8.96055 11.61 8.90055 11.62C6.00055 11.53 3.81055 9.25 3.81055 6.44C3.81055 3.58 6.14055 1.25 9.00055 1.25C11.8605 1.25 14.1905 3.58 14.1905 6.44C14.1805 9.25 11.9805 11.53 9.19055 11.62C9.18055 11.62 9.17055 11.62 9.16055 11.62ZM9.00055 2.75C6.97055 2.75 5.31055 4.41 5.31055 6.44C5.31055 8.44 6.87055 10.05 8.86055 10.12C8.92055 10.11 9.05055 10.11 9.18055 10.12C11.1405 10.03 12.6805 8.42 12.6905 6.44C12.6905 4.41 11.0305 2.75 9.00055 2.75Z"
                  fill="#4F4F4F"
                />
                <path
                  d="M16.5404 11.75C16.5104 11.75 16.4804 11.75 16.4504 11.74C16.0404 11.78 15.6204 11.49 15.5804 11.08C15.5404 10.67 15.7904 10.3 16.2004 10.25C16.3204 10.24 16.4504 10.24 16.5604 10.24C18.0204 10.16 19.1604 8.96 19.1604 7.49C19.1604 5.97 17.9304 4.74 16.4104 4.74C16.0004 4.75 15.6604 4.41 15.6604 4C15.6604 3.59 16.0004 3.25 16.4104 3.25C18.7504 3.25 20.6604 5.16 20.6604 7.5C20.6604 9.8 18.8604 11.66 16.5704 11.75C16.5604 11.75 16.5504 11.75 16.5404 11.75Z"
                  fill="#4F4F4F"
                />
                <path
                  d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z"
                  fill="#4F4F4F"
                />
                <path
                  d="M18.3402 20.75C17.9902 20.75 17.6802 20.51 17.6102 20.15C17.5302 19.74 17.7902 19.35 18.1902 19.26C18.8202 19.13 19.4002 18.88 19.8502 18.53C20.4202 18.1 20.7302 17.56 20.7302 16.99C20.7302 16.42 20.4202 15.88 19.8602 15.46C19.4202 15.12 18.8702 14.88 18.2202 14.73C17.8202 14.64 17.5602 14.24 17.6502 13.83C17.7402 13.43 18.1402 13.17 18.5502 13.26C19.4102 13.45 20.1602 13.79 20.7702 14.26C21.7002 14.96 22.2302 15.95 22.2302 16.99C22.2302 18.03 21.6902 19.02 20.7602 19.73C20.1402 20.21 19.3602 20.56 18.5002 20.73C18.4402 20.75 18.3902 20.75 18.3402 20.75Z"
                  fill="#4F4F4F"
                />
              </svg>
              النوع
            </label>
            <div class="col-md-8 row">
              <div class="w-100">
                <ValidationProvider
                  tag="div"
                  :name="$t('gender')"
                  vid="gender"
                  rules="required"
                  v-slot="{ errors }"
                  :disabled="!isEnabled"
                >
                  <div class="">
                    <d-select-input
                      :errors="errors"
                      v-model="itemForm.gender"
                      :placeholder="$t('select-your-gender')"
                      class="form-select"
                    >
                      <option value="" class="t-c" disabled selected>
                        {{ $t("select-your-gender") }}
                      </option>
                      <option value="male">{{ $t("male") }}</option>
                      <option value="female">{{ $t("female") }}</option>
                    </d-select-input>
                  </div>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="row align-items-start">
            <label class="col-md-4 fs-5 fw-bolder">
              <i class="fa fa-id-card"></i>
              {{ $t("number_residence_id") }} :
            </label>
            <div class="col-md-8 row">
              <div class="col-md-12">
                <ValidationProvider
                  tag="div"
                  class="mb-3"
                  :name="$t('number_residence_id')"
                  vid="identification_number"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <d-text-input
                    :disabled="!isEnabled"
                    :errors="errors"
                    type="text"
                    v-model="itemForm.identification_number"
                    class="form-control"
                    placeholder="ادخل رقم هويتك الوطنية"
                  >
                  </d-text-input>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <!--file-->
          <div v-if="isSaoudi" class="row align-items-start">
            <label class="col-md-4 fs-5 fw-bolder">
              <i class="fa fa-id-card"></i>
              {{ $t("freelance_document") }} :
            </label>
            <div class="col-md-8 row mb-3">
              <div class="col-md-12">
                <ValidationProvider
                  tag="div"
                  :name="$t('freelance_document')"
                  vid="file"
                  rules="required"
                  v-slot="{ errors, validate }"
                >
                  <d-file-input
                    :disabled="!isEnabled"
                    :validate="validate"
                    :errors="errors"
                    v-model="file"
                    placeholder="أرفق وثيقة العمل الحر الخاصة بك"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
      <!-- <div class="m-auto text-center p-3">
        <button @click="save" class="btn-main">
          {{ $t("save") }}
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
export default {
  name: "section-information-personal",
  props: ["currentUser"],
  data: (vm) => {
    return {
      itemForm: {
        gender: "",
        birth_date: "",
        nationality: "",
        identification_number: "",
        ...vm.currentUser.personal_informations,
      },
      file: null,
      isEnabled: false,
    };
  },
  computed: {
    isSaoudi() {
      return ["سعودي", "سعودسة", "saoudi"].includes(this.itemForm.nationality);
    },
  },
  methods: {
    async save(evt) {
      if (evt) evt.preventDefault();
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }
      let formData = new FormData();
      Object.keys(this.itemForm).forEach((key) => {
        formData.append(`${key}`, this.itemForm[key]);
      });
      if (this.isSaoudi) formData.append("file", this.file);

      try {
        let { data } = await userAPI.postPersonalInformation(formData);
        if (data.success) {
          window.SwalSuccess(data.message);
          this.isEnabled = false;
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.log("error", error);
        if (error.response) {
          if (error.response.status == 422) {
            this.$refs.form.setErrors(error.response.data.errors);
          }
        }
      }
    },
    handlerFile(file) {
      this.file = file;
    },
    emptyFile() {
      this.file = null;
    },
    enableInput() {
      !this.isEnabled ? (this.isEnabled = true) : "";
    },
  },
};
</script>
