<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row>
      <b-col xl="7">
        <div class="login-form">

          <h1 class="fw-bolder">مرحبا بك معنا</h1>
          <p>انشئ حساب جديد وأنضمي الى عالم رياديات</p>
          <ValidationObserver ref="form">

            <!-- <ValidationProvider :name="$t('Full-name')" vid="name" rules="required" v-slot="{ errors }" tag="div"
              class="mb-3">
              <b-form-input type="text" :placeholder="$t('Full-name')" v-model="form.name" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider :name="$t('Email')" vid="email" rules="required|email" v-slot="{ errors }" tag="div"
              class="mb-3">
              <b-form-input type="email" :placeholder="$t('Email')" v-model="form.email" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->

            <!-- <div class="cols-12 d-flex gap-1 mb-3 align-items-start">

              <ValidationProvider :name="$t('Phone')" tag="div" class="flex-grow-1" vid="phone"
                rules="required|numeric|min:10" v-slot="{ errors }">
                <b-form-input type="number" :placeholder="$t('Phone')" v-model="form.phone" required />
                <div class="text-input-error">{{ errors[0] }}</div>
              </ValidationProvider>

              <ValidationProvider :name="$t('country-phone')" tag="div" class="flex-grow-1" vid="phone_code"
                rules="required" v-slot="{ errors }">
                <d-select-input :errors="errors" type="text" class="text-flag  rounded-3 align-items-center"
                  v-model="form.phone_code">
                  <option v-for="(it, i) in phone_codes" :key="i" :value="it.phone_code">{{ it.flag }}({{ it.phone_code
                  }})
                  </option>
                </d-select-input>
              </ValidationProvider>
            </div> -->


            <ValidationProvider :name="$t('id_number')" tag="div" class="flex-grow-1 mb-3" vid="id_number"
              rules="required|numeric" v-slot="{ errors }">
              <b-form-input type="text" :placeholder="`رقم الهوية الوطنية / الاقامة`" v-model="form.id_number"
                required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>


            <ValidationProvider :name="$t('region')" vid="region" rules="required" v-slot="{ errors }" tag="div"
              class="mb-3">
              <b-form-input type="text" :placeholder="`المنطقة`" v-model="form.region" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>


            <ValidationProvider :name="$t('job_status')" vid="job_status" rules="required" v-slot="{ errors }" tag="div"
              class="mb-3">
              <b-form-input type="text" :placeholder="`الحالة الوظيفية`" v-model="form.job_status" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>



            <ValidationProvider :name="$t('bank_account')" vid="bank_account" rules="required" v-slot="{ errors }"
              tag="div" class="mb-3">
              <b-form-input type="text" :placeholder="`  الحساب البنكي`" v-model="form.bank_account" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider :name="$t('bank_name')" vid="bank_name" rules="required" v-slot="{ errors }" tag="div"
              class="mb-3">
              <b-form-input type="text" :placeholder="` اسم البنك`" v-model="form.bank_name" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider :name="$t('what_you_know')" vid="what_you_know" rules="required" v-slot="{ errors }"
              tag="div" class="mb-3">
              <b-form-input type="text" :placeholder="` ماذا تعرف عن رياديات ؟ `" v-model="form.what_you_know" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>


            <!-- <ValidationProvider :name="$t('gender')" vid="gender" rules="required" v-slot="{ errors }" tag="div"
            class="mb-3">
            <select class="form-select mb-3" aria-label="Default select example">
              <option selected disabled>الجنس </option>
              <option value="male">ذكر</option>
              <option value="female"> أنثى </option>
            </select>
            <div class="text-input-error">{{ errors[0] }}</div>
          </ValidationProvider> -->

            <ValidationProvider :name="$t('reason_for_join')" vid="reason_for_join" rules="required" v-slot="{ errors }"
              tag="div" class="mb-3">
              <b-form-input type="text" :placeholder="` سبب انضمامك بالبرنامج؟ `" v-model="form.reason_for_join"
                required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider :name="$t('hours_number')" vid="hours_number" rules="required" v-slot="{ errors }"
              tag="div" class="mb-3">
              <b-form-input type="text" :placeholder="` عدد الساعات التي من الممكن تخصصيها للبرنامج بشكل اسبوعي ؟ `"
                v-model="form.hours_number" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider :name="$t('how_to_convence')" vid="how_to_convence" rules="required" v-slot="{ errors }"
              tag="div" class="mb-3">
              <b-form-input type="text" :placeholder="` كيف راح تقنع العملاء بالتسجيل معك ؟ `"
                v-model="form.how_to_convence" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>



            <!-- <ValidationProvider vid="password" rules="required" :name="$t('Password')" v-slot="{ errors }" tag="div"
              class="mb-3">
              <div class="position-relative">
                <b-form-input id="password-field" :type="show ? 'text' : 'password'" v-model="form.password"
                  class="form-control" :placeholder="$t('Password')" />
                <span @click="show = !show" class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider> -->

            <!-- <ValidationProvider vid="passwordConfirm" rules="required" :name="$t('Password-confirm')" v-slot="{ errors }"
              tag="div" class="mb-3">
              <div class="position-relative">
                <b-form-input id="password-register-confirm" :type="showC ? 'text' : 'password'"
                  v-model="form.passwordConfirm" class="form-control" :placeholder="$t('Password-confirm')" />
                <span @click="showC = !showC" class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !showC, 'fa-eye-slash': showC }"></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>
              <span class="text-input-error" v-if="errorPasswordConfirm">{{ errorPasswordConfirm }}</span>
            </ValidationProvider> -->

            <div class="col-12 text-center">
              <button @click="signup" class="btn btn-main" type="submit"> ارسال </button>
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
        <b-img class="main-img" :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />
      </b-col>
    </b-row>

  </div>
</template>
<script>
import SentDialog from './sent-dialog/index.vue';
import $ from 'jquery';
import commonAPI from "@/services/api/common";

export default {
  components: {
    SentDialog
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
      id_number: '',
      region: '',
      job_status: '',
      bank_name: '',
      bank_account: '',
      gender: '',
      what_you_know: '',
      reason_for_join: '',
      hours_number: '',
      how_to_convence: '',
      phone: "",
      phone_code: "+966",
      passwordConfirm: ""
    },
    hasError: false,
    message: ""
  }),
  methods: {
    showLoginDialog() {
      this.dialog = true;
    },
    updateDialog(value) {
      this.dialog = value;
    },
    showModal() {
      let element = this.$refs.modal.$el
      $(element).modal('show')
    },
    async loadCountries() {
      try {
        let { data } = await commonAPI.getListCountries();
        if (!data.message) {
          let countries = data;
          this.phone_codes = window.DHelper.convertCountriesToPhoneCodes(
            countries
          );
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
          this.showModal();
          window.successMsg(data.message);
          let info = {
            data: data,
            form: this.form
          };
          this.$router.push('affiliate-marketing/home')
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
    }
  },
  watch: {
    'form.passwordConfirm': function (val) {
      console.log(val);
      if (val != this.form.password) {
        return this.errorPasswordConfirm = "كلمة السر غير مطابقة"
      }
      return this.errorPasswordConfirm = null
    },
    'form.password': function (val) {
      if (val != this.form.passwordConfirm) {
        return this.errorPasswordConfirm = "كلمة السر غير مطابقة"
      }
      return this.errorPasswordConfirm = null
    }
  },
  mounted() {
    this.loadCountries();
  }
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
