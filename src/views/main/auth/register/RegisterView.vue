<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row>
      <b-col xl="7">
        <div class="login-form">
          <div
            :style="{ top: '17px', left: $i18n.locale == 'ar' ? 'auto' : '0', right: $i18n.locale !== 'ar' ? 'auto' : '0' }"
          >
            <h6>
              لديك حساب بالفعل؟
              <router-link :to="getRouteLocale('login')" class="m-c">سجل دخولك الان</router-link>
            </h6>
          </div>
          <h1 class="fw-bolder">مرحبا بك معنا</h1>
          <p>انشئ حساب جديد وأنضمي الى عالم رياديات</p>
          <ValidationObserver ref="form">
            <ValidationProvider
              :name="$t('Full-name')"
              vid="name"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <b-form-input
                type="text"
                :placeholder="$t('Full-name')"
                v-model="form.name"
                required
              />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <ValidationProvider
              :name="$t('Email')"
              vid="email"
              rules="required|email"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <b-form-input type="email" :placeholder="$t('Email')" v-model="form.email" required />
              <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <div class="cols-12 d-flex gap-1 mb-3 align-items-start">
              <ValidationProvider
                :name="$t('Phone')"
                tag="div"
                class="flex-grow-1"
                vid="phone"
                rules="required|numeric|min:10"
                v-slot="{ errors }"
                
              >
                <b-form-input
                  type="number"
                  :placeholder="$t('Phone')"
                  v-model="form.phone"
                  required
                />
                <div class="text-input-error">{{ errors[0] }}</div>
              </ValidationProvider>
              <ValidationProvider
                :name="$t('country-phone')"
                tag="div"
                class="flex-grow-1"
                vid="phone_code"
                rules="required"
                v-slot="{ errors }"
              >
                <d-select-input
                  :errors="errors"
                  type="text"
                  class="text-flag  rounded-3 align-items-center"
                  v-model="form.phone_code"
                >
                  <option
                    v-for="(it,i) in phone_codes"
                    :key="i"
                    :value="it.phone_code"
                  >{{it.flag}}({{ it.phone_code }})</option>
                </d-select-input>
              </ValidationProvider>
            </div>

            <ValidationProvider
              vid="password"
              rules="required"
              :name="$t('Password')"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="position-relative">
                <b-form-input
                  id="password-field"
                  :type="show ? 'text' : 'password'"
                  v-model="form.password"
                  class="form-control"
                  :placeholder="$t('Password')"
                />
                <span
                  @click="show = !show"
                  class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                ></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>

            </ValidationProvider>

            <ValidationProvider
              vid="passwordConfirm"
              rules="required"
              :name="$t('Password-confirm')"
              v-slot="{ errors }"
              tag="div"
              class="mb-3"
            >
              <div class="position-relative">
                <b-form-input
                  id="password-register-confirm"
                  :type="showC ? 'text' : 'password'"
                  v-model="form.passwordConfirm"
                  class="form-control"
                  :placeholder="$t('Password-confirm')"
                />
                <span
                  @click="showC = !showC"
                  class="icon-input-end fa-regular position-absolute"
                  :class="{ 'fa-eye': !showC, 'fa-eye-slash': showC }"
                ></span>
              </div>
              <div class="text-input-error">{{ errors[0] }}</div>
              <span class="text-input-error" v-if="errorPasswordConfirm">{{ errorPasswordConfirm }}</span>
            </ValidationProvider>

            <div class="col-12 text-center">
              <button @click="signup" class="btn btn-main" type="submit">أشتركي الان</button>
            </div>
            <div>
              <p class="py-4">
                بانشاءك حساب جديد، انت توافق على
                <router-link
                  :to="getRouteLocale('terms-and-conditions')"
                  class="m-c"
                  target="_blank"
                >شروط الاستخدام وسياسة الخصوصيه</router-link>
              </p>
            </div>
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
import commonAPI from "@/services/api/common";

export default {
  data: () => ({
    show: false,
    showC: false,
    phone_codes: [],
    errorPasswordConfirm:null,
    form: {
      email: process.env.EMAIL || "",
      password: process.env.PASSWORD || "",
      name: "",
      phone: "",
      phone_code: "+966",
      passwordConfirm: ""
    },
    hasError: false,
    message: ""
  }),
  methods: {
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
        let { data } = await this.$axios.post("user/auth/register", this.form);
        if (data.success) {
          window.successMsg(data.message);
          let info = {
            data: data,
            form: this.form
          };
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
            return  this.errorPasswordConfirm=null
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
