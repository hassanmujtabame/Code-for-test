<template>
  <div class="rounded-3 container mobile-center">
    <b-row class="justify-content-between flex-column-reverse flex-md-row">
      <b-col class="col-12 col-md-6">
        <div class="login-form" style="position: relative">
          <img
            class="absolute-img"
            id="star1"
            src="@/assets/img/gold-star.png"
            alt="star"
          />
          <img
            class="absolute-img"
            id="star2"
            src="@/assets/img/gold-star.png"
            alt="star"
          />
          <img
            class="absolute-img"
            id="star3"
            src="@/assets/img/gold-star.png"
            alt="star"
          />
          <img
            class="absolute-img d-none d-md-block"
            id="framearrow"
            src="@/assets/img/framearrow.png"
            alt="arrow"
          />
          <div class="form" style="width: 80%; position: relative">
            <div style="position: relative">
              <ValidationObserver ref="loginForm">
                <!-- Start fullname -->
                <ValidationProvider
                  vid="full-name"
                  rules="required"
                  :name="$t('full-name')"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <b-form-input
                    style="
                      box-shadow: #cee4c6 0px 0px 16px 10px;
                      padding: 10px;
                      border: none;
                    "
                    type="text"
                    :placeholder="$t('full-name')"
                    v-model="form.fullName"
                    required
                  />
                  <div class="text-input-error">{{ errors[0] }}</div>
                </ValidationProvider>
                <!-- End fullname -->

                <!-- Start gender -->
                <ValidationProvider
                  vid="gender"
                  rules=""
                  :name="'ال' + $t('gender')"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <select
                    class="form-select"
                    style="
                      background-position: left 0.75rem center !important;
                      box-shadow: #cee4c6 0px 0px 15px 10px;
                      padding: 10px;
                      border: none;
                    "
                    aria-label="Default select example"
                    required
                  >
                    <option selected>{{ "ال" + $t("gender") }}</option>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                  </select>
                  <div class="text-input-error">{{ errors[0] }}</div>
                </ValidationProvider>
                <!-- End gender -->

                <!-- Start Email -->
                <ValidationProvider
                  vid="email"
                  rules="required|email"
                  :name="$t('Email')"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <b-form-input
                    style="
                      box-shadow: #cee4c6 0px 0px 15px 10px;
                      padding: 10px;
                      border: none;
                    "
                    type="text"
                    :placeholder="$t('Email')"
                    v-model="form.email"
                    required
                  />
                  <div class="text-input-error">{{ errors[0] }}</div>
                </ValidationProvider>
                <!-- End Email -->

                <!-- Start phone -->
                <ValidationProvider
                  vid="phone"
                  rules="required|numeric|min:10"
                  :name="$t('Phone')"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <b-form-input
                    style="
                      width: 100%;
                      box-shadow: #cee4c6 0px 0px 15px 10px;
                      padding: 10px;
                      border: none;
                    "
                    type="text"
                    :placeholder="$t('Phone')"
                    v-model="form.phone"
                    required
                  />
                  <div class="text-input-error">{{ errors[0] }}</div>
                </ValidationProvider>
                <!-- End phone -->

                <!-- Start phone -->
                <ValidationProvider
                  rules="required|min:20"
                  :name="$t('Field')"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <textarea
                    style="
                      width: 100%;
                      outline: none;
                      line-height: 2;
                      box-shadow: #cee4c6 0px 0px 15px 10px;
                      padding: 10px;
                      border: none;
                    "
                    placeholder="سبب انضمامك للبرنامج و هل لديك خبرات سابقه فى التسويق بالعموله"
                    required
                    name="other"
                    v-model="form.other"
                    rows="3"
                  ></textarea>
                  <div class="text-input-error">{{ errors[0] }}</div>
                </ValidationProvider>
                <!-- End phone -->

                <div
                  v-if="verifyCode"
                  class="alert alert-danger mt-2"
                  role="alert"
                >
                  <a href="#" @click="resendCode">{{ $t("resend-code") }}</a>
                </div>

                <div class="text-center mt-5">
                  <router-link
                    class="btn btn-main-v py-2 px-5"
                    :to="{ name: 'register-affiliate' }"
                    role="button"
                    >سجلى الان</router-link
                  >
                </div>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h2 class="fw-bolder text-center">انضمى الينا الأن</h2>
        <p class="text-center text-secondary">
          ابدأى معنا التسويق بالعموله وروجى لمنتجاتك و احصلى على اعلى نسبه مقابل
          كل عمليه تسويقيه فقط سجلى الأن
        </p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      form: {
        fullName: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        other: "",
      },
      verifyCode: false,
    };
  },
  methods: {
    async resendCode() {
      let email = this.form.email;
      try {
        let { data } = await this.$axios.post("user/auth/resend-code", {
          email,
        });
        if (data.success) {
          let pin_code = data.data.pin_code;
          this.$emit("change-form", { data: { pin_code }, form: { email } });
          window.successMsg(data.message);
        } else {
          window.errorMsg(data.message);
        }
      } catch (error) {
        let response = error.response;
        window.errorMsg(response.data.message);
      }
    },
    async login() {
      this.verifyCode = false;
      let valid = await this.$refs.loginForm.validate();
      if (!valid) {
        return;
      }
      try {
        let { data } = await this.$axios.post("user/auth/login", this.form);
        if (data.success) {
          window.successMsg();
          let { token, ...user } = data.data;
          window.store.commit("auth/SET_TOKEN", token);
          window.store.commit("auth/SET_USER", user);
          window.store.commit(
            "auth/SET_IS_PROVIDER",
            user.subscribers.service_provider.subscribe
          );
          window.store.commit("auth/ACADEMY_ROLE", "student");
          window.location.reload();
        } else {
          if (data.data.type == "verify_code") {
            this.verifyCode = true;
          }
        }
        this.$refs.loginForm.reset();
      } catch (error) {
        let response = error.response;
        window.errorMsg(response.data.message);
        if (response.status == 422) {
          this.setErrorsForm(this.$refs.loginForm, response);
        }
      }
    },
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
.absolute-img {
  position: absolute;
  z-index: 1001;
}
#star1 {
  width: 30px;
  top: -30px;
  right: 80px;
}
#star2 {
  width: 15px;
  top: 50%;
  right: -40px;
}
#star3 {
  width: 25px;
  bottom: 40%;
  left: 10%;
}
#framearrow {
  bottom: 0;
  left: -60%;
}
</style>
