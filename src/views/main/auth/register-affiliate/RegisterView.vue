<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row>
      <b-col class="row" sm="12" md="12" xl="7">
        <p class="px-5 py-5" style="color: #888">
          أنشئ حسابك الان وانطلق نحو المستقبل
        </p>
        <div class="login-form my-3">
          <!-- <div class="text-center">
            <img src="../../../../assets/img/Image.png" alt="img" />
          </div> -->
          <ValidationObserver class="row" ref="form">
            <!-- <ValidationProvider
              name="name"
              tag="div"
              class="flex-grow-1 flex-column col-12 col-md-6 mb-3"
              vid="name"
              rules="required"
              v-slot="{ errors }"
            >
              <label class="my-1" for="name">الاسم </label>
              <b-form-input
                id="name"
                class="col-md-6 col-12"
                type="text"
                :placeholder="`ياسمين محمد`"
                v-model="form.name"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->
            <!-- <ValidationProvider
              name="email"
              tag="div"
              class="flex-grow-1 flex-column col-12 col-md-6 mb-3"
              vid="email"
              rules="required"
              v-slot="{ errors }"
            >
              <label class="my-1" for="email">الايميل</label>
              <b-form-input
                class=""
                type="email"
                :placeholder="`riadaiat1@example.com`"
                v-model="form.email"
                required
                id="email"
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->
            <ValidationProvider
              :name="$t('id_number')"
              tag="div"
              class="flex-grow-1 flex-column col-12 col-md-6 mb-3"
              vid="id_number"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <label class="my-1" for="id">رقم الهوية</label>
              <b-form-input
                id="id"
                class="col-md-6 col-12"
                type="text"
                :placeholder="`274829584032`"
                v-model="form.id_number"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <!-- <ValidationProvider
              name="phone number"
              tag="div"
              class="flex-grow-1 flex-column col-12 col-md-6 mb-3"
              vid="phone"
              rules="required|numeric"
              v-slot="{ errors }"
            >
              <label class="my-1" for="phone">الجوال</label>
              <b-form-input
                class=""
                type="number"
                :placeholder="`010000202020`"
                v-model="form.phone"
                required
                id="phone"
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->

            <ValidationProvider
              :name="$t('region')"
              vid="region"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="place">المنطقة</label>
              <b-form-input
                class=""
                type="text"
                :placeholder="`الرياض`"
                v-model="form.region"
                required
                id="place"
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('job_status')"
              vid="job_status"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <!-- <b-form-input
                class="col-md-6 col-12"
                type="text"
                :placeholder="`الحالة الوظيفية`"
                v-model="form.job_status"
                required
              /> -->
              <label class="my-1" for="eymp">الحاله الوظيفية</label>
              <select
                id="eymp"
                class="form-select mb-3"
                v-model="form.job_status"
                aria-label="Default select example"
              >
                <option selected value="part time">دوام جزئى</option>
                <option value="full time">دوام كامل</option>
                <option value="unemployed">لا اعمل</option>
              </select>
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <ValidationProvider
              name="البلد"
              vid="country"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <!-- <select
                v-for="(item, i) in countries"
                v-model="form.selectedCountry"
                :key="i"
                class="form-select mb-3"
                name=""
                id=""
              >
                <option value="">
                  {{ item.name }}
                </option>
              </select> -->
              <label class="my-1" for="country">الدوله</label>
              <select
                class="form-select"
                :v-bind="form.selectedCountry"
                name=""
                id="country"
              >
                <option selected value="السعوديه">السعوديه</option>
                <option value="مصر">مصر</option>
                <option value="لبنان">لبنان</option>
                <option value="قطر">قطر</option>
                <option value="العراق">العراق</option>
              </select>
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('bank_name')"
              vid="bank_name"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="bank-name">نوع الدفع</label>
              <b-form-input
                class=""
                type="text"
                :placeholder="` حساب بنكى `"
                v-model="form.bank_name"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <ValidationProvider
              :name="$t('bank_account')"
              vid="bank_account"
              rules="required|numeric"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="bank">رقم الحساب</label>
              <b-form-input
                class=""
                type="text"
                :placeholder="` 1100025000045287  `"
                v-model="form.bank_account"
                required
                id="bank"
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('gender')"
              vid="gender"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="gender">النوع</label>
              <select
                id="gender"
                class="form-select mb-3"
                v-model="form.gender"
                aria-label="Default select example"
              >
                <option selected value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <ValidationProvider
              :name="$t('what_you_know')"
              vid="what_you_know"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="what-know">ماذا تعرف عن رياديات</label>
              <b-form-input
                id="what-know"
                class=""
                type="text"
                placeholder="منصه مفيدة للغايه لصانعى المحتوى"
                v-model="form.what_you_know"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <!-- <ValidationProvider
              :name="$t('Region')"
              vid="region"
              tag="div"
              class="form-group"
              rules="required"
              v-slot="{ errors }"
            >
              <d-select-input :errors="errors" v-model="form.region">
                <option selected disabled value="">{{ $t("Region") }}</option>

                <option :key="i" v-for="(city, i) in cities" :value="city.name">
                  {{ `${city.name}` }}
                </option>
              </d-select-input>
            </ValidationProvider> -->

            <ValidationProvider
              :name="$t('reason_for_join')"
              vid="reason_for_join"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="why">سبب انضمامك بالبرنامج؟</label>
              <b-form-input
                id="why"
                class="col-md-6 col-12"
                type="text"
                :placeholder="` لان رياديات منصه رائعه للغاية  `"
                v-model="form.reason_for_join"
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('hours_number')"
              vid="hours_number"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="hours"
                >عدد الساعات التي من الممكن تخصصيها
              </label>
              <b-form-input
                id="hours"
                class="col-md-6 col-12"
                type="text"
                :placeholder="`  20`"
                v-model="form.hours_number"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('how_to_convence')"
              vid="how_to_convence"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="col-12 flex-column col-md-6 mb-3"
            >
              <label class="my-1" for="how"
                >كيف راح تقنع العملاء بالتسجيل معك</label
              >
              <b-form-input
                id="how"
                class="col-md-6 col-12"
                type="text"
                :placeholder="`  عن طريق اظهار مدى براعتى    `"
                v-model="form.how_to_convence"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <!-- <ValidationProvider vid="password" rules="required" :name="$t('Password')" v-slot="{ errors }" tag="div"
              class  col-12 col-md-6="mb-3">
              <div class="position-relative">
                <b-form-input 
                class="col-md-6 col-12" id="password-field" :type="show ? 'text' : 'password'" v-model="form.password"
                  class="form-control" :placeholder="$t('Password')" />
                <span @click="show = !show" class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->

            <!-- <ValidationProvider vid="passwordConfirm" rules="required" :name="$t('Password-confirm')" v-slot="{ errors }"
              tag="div" class  col-12 col-md-6="mb-3">
              <div class="position-relative">
                <b-form-input 
                class="col-md-6 col-12" id="password-register-confirm" :type="showC ? 'text' : 'password'"
                  v-model="form.passwordConfirm" class="form-control" :placeholder="$t('Password-confirm')" />
                <span @click="showC = !showC" class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !showC, 'fa-eye-slash': showC }"></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>
              <span class="text-input-error" v-if="errorPasswordConfirm">{{ errorPasswordConfirm }}</span>
            </ValidationProvider> -->

            <div class="col-12 text-center">
              <button @click="signup" class="btn btn-main" type="submit">
                ارسال
              </button>
            </div>
            <div>
              <!-- <p class="py-4">
                بانشاءك حساب جديد، انت توافق على
                <router-link :to="getRouteLocale('terms-and-conditions')" class="m-c" target="_blank">شروط الاستخدام
                  وسياسة الخصوصيه
                </router-link>
              </p> -->
            </div>

            <sent-dialog ref="modal"></sent-dialog>
          </ValidationObserver>
        </div>
      </b-col>
      <b-col xl="5" class="tablet-hide">
        <b-img
          class="main-img"
          :src="`${publicPath}assets/svg/riadiat-green-card.svg`"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SentDialog from "./sent-dialog/index.vue";
import $ from "jquery";
import commonAPI from "@/services/api/common";

export default {
  components: {
    SentDialog,
  },

  data: () => ({
    show: false,
    showC: false,
    phone_codes: [],
    errorPasswordConfirm: null,
    form: {
      email: process.env.EMAIL || "",
      password: process.env.PASSWORD || "",
      name: "",
      id_number: "",
      region: "",
      job_status: "part time",
      bank_name: "",
      bank_account: "",
      gender: "female",
      what_you_know: "",
      reason_for_join: "",
      hours_number: "",
      how_to_convence: "",
      phone: "",
      phone_code: "+966",
      passwordConfirm: "",
      selectedCountry: "",
    },
    hasError: false,
    message: "",
  }),
  methods: {
    showLoginDialog() {
      this.dialog = true;
    },
    updateDialog(value) {
      this.dialog = value;
    },
    showModal() {
      let element = this.$refs.modal.$el;
      $(element).modal("show");
    },
    async loadCountries() {
      try {
        let { data } = await commonAPI.getListCountries();
        if (!data.message) {
          let countries = data;
          this.phone_codes =
            window.DHelper.convertCountriesToPhoneCodes(countries);
        }
      } catch (error) {
        //
      }
    },
    async signup(e) {
      e.preventDefault();
      this.hasError = false;
      this.message = "";
      let valid = await this.$refs.form.validate();
      if (!valid || this.errorPasswordConfirm) {
        console.log("form invalid");
        return;
      }
      try {
        let { data } = await this.$axios.post("affiliates/register", this.form);
        // console.log('affiliate_data', data)
        if (data.success) {
          console.log(data.message);
          this.showModal();
          window.successMsg(data.message);
          let info = {
            data: data,
            form: this.form,
          };
          this.$router.push("affiliate-marketing/home");
          this.$emit("success", info);
        } else {
          this.message = data.message;
          this.hasError = true;
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          window.errorMsg(response.data.message);
          if (response.status == 422) {
            this.message = response.data.message;
            if (Object.hasOwnProperty.call(response.data, "errors")) {
              this.$refs.form.setErrors(response.data.errors);
            }
          }
        }

        this.hasError = true;
      }
    },
  },
  watch: {
    "form.passwordConfirm": function (val) {
      console.log(val);
      if (val != this.form.password) {
        return (this.errorPasswordConfirm = "كلمة السر غير مطابقة");
      }
      return (this.errorPasswordConfirm = null);
    },
    "form.password": function (val) {
      if (val != this.form.passwordConfirm) {
        return (this.errorPasswordConfirm = "كلمة السر غير مطابقة");
      }
      return (this.errorPasswordConfirm = null);
    },
  },
  mounted() {
    this.loadCountries();
  },
};
</script>
<style scoped>
.login-form {
  padding: 2em;
}

.no-have-account {
  text-align: end;
}

.form {
  padding-top: 2.5rem;
}

.icon-input-end {
  color: #cdd7d8;
  font-size: 23px;
}

html[lang="en"] .icon-input-end {
  left: auto;
  right: 15px;
}

.form-control {
  padding: 0.5rem 0.75rem;
}

.icon-input-end {
  color: #cdd7d8;
  font-size: 23px;
  left: 15px;
}

html[lang="en"] .icon-input-end {
  left: auto;
  right: 15px;
}

.flag-icon {
  height: 1.5em;
  width: 1.5em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
}

.main-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
