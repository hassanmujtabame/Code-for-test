<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row>
      <b-col xl="7">
        <div class="login-form">
          <h6 class="no-have-account">
            ليس لديك حساب ؟
            <router-link :to="getRouteLocale('register')" class="m-c">أنشئ حساب الان</router-link>
          </h6>
          <div class="form">
            <h1 class="fw-bolder">مرحبا بك من جديد</h1>
            <p class="mb-3 text-secondary-color">لنبدأمن جديد ال انطلاق نحو المستقبل</p>


            <ValidationObserver ref="loginForm">

              <!-- Start Email -->
              <ValidationProvider
                vid="email"
                rules="required|email"
                :name="$t('Email')"
                v-slot="{ errors }"
                tag="div"
                class="mb-3"
              >
                <b-form-input type="text" :placeholder="$t('Email')" v-model="form.email" required />
                <div class="text-input-error">{{ errors[0] }}</div>
              </ValidationProvider>
              <!-- End Email -->

              <!-- Start Password -->
              <ValidationProvider
                vid="password"
                rules="required"
                :name="$t('Password')"
                v-slot="{ errors }"
                tag="div"
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
              <!-- End Password -->

              <div class="d-flex justify-content-between mt-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('rememberme') }}</label>
                </div>
                <router-link
                  :to="getRouteLocale('forget-password')"
                  class="m-c"
                >{{ $t('forgot_password') }}</router-link>
              </div>

              <div v-if="verifyCode" class="alert alert-danger mt-2" role="alert">
                <a href="#" @click="resendCode">{{ $t('resend-code') }}</a>
              </div>

              <div class="text-center mt-5">
                <button
                  class="btn btn-main-v py-2 px-5"
                  role="button"
                  @click="login"
                >{{ $t('login') }}</button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </b-col>
      <b-col xl="5" class="tablet-hide">
        <div class="box">
          <b-img fluid :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />
        </div>
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
        email: "",
        password: ""
      },
      verifyCode: false
    };
  },
  methods: {
    async resendCode() {
      let email = this.form.email;
      try {
        let { data } = await this.$axios.post("user/auth/resend-code", {
          email
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
          window.store.commit("auth/SET_IS_PROVIDER", user.subscribers.service_provider.subscribe);
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
    }
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
</style>