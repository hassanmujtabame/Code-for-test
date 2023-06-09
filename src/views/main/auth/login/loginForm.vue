<template>
  <div class="bg-white rounded-3">
    <b-row>
      <b-col lg="7">
        <div class="login-form">
          <h6 class="no-have-account">
            ليس لديك حساب ؟
            <router-link :to="getRouteLocale('register')" class="m-c">أنشئ حساب الان</router-link>
          </h6>
          <div class="form">
            <h1 class="fw-bolder">مرحبا بك من جديد</h1>
            <p class="mb-3 text-secondary-color">لنبدأمن جديد ال انطلاق نحو المستقبل</p>

            <!-- Start Email -->
            <ValidationObserver ref="form" @submit="login">
              <ValidationProvider
                :name="$t('Email')"
                rules="required"
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
                :name="$t('Password')"
                rules="required"
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
                    required
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
              <div class="text-center mt-5">
                <button
                  @click="login"
                  class="btn btn-main-v py-2 px-5"
                  role="button"
                >{{ $t('login') }}</button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </b-col>
      <b-col lg="5">
        <div class="box">
          <img :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />
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
      message: "",
      verifyCode: false
    };
  },
  methods: {
    async resendCode(e) {
      if (e) e.preventDefault();

      let email = this.form.email;
      try {
        let { data } = await this.$axios.post("user/auth/resend-code", {
          email
        });
        if (data.success) {
          let pin_code = data.data.pin_code;

          this.$emit("change-form", { data: { pin_code }, form: { email } });
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.SwalError("خطا غير معروف");
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.message = response.data.message;
            if (Object.hasOwnProperty.call(response.data, "errors")) {
              this.$refs.form.setErrors(response.data.errors);
            }
          }
        }
      }
    },
    async login(e) {
      e.preventDefault();
      this.verifyCode = false;
      this.message = "";
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }
      try {
        let { data } = await this.$axios.post("user/auth/login", this.form);
        if (data.success) {
          let { token, ...user } = data.data;
          window.store.commit("auth/SET_TOKEN", token);
          window.store.commit("auth/SET_USER", user);
          window.store.commit("auth/SET_IS_PROVIDER", false);
          window.store.commit("auth/ACADEMY_ROLE", "student");
          //this.$router.push('/')
          window.location.reload();
        } else {
          this.message = data.message;
          if (data.data.type == "verify_code") {
            this.verifyCode = true;
          }
        }
      } catch (error) {
        console.log("error", error);
        this.message = "خطا غير معروف";
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.message = response.data.message;
            if (Object.hasOwnProperty.call(response.data, "errors")) {
              this.$refs.form.setErrors(response.data.errors);
            }
          } else if (response.status == 401) {
            this.message = response.data.message;
            if (response.data["type"] == "verify_code") {
              this.verifyCode = true;
            }
          }
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
  padding: 2.5rem 0px;
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