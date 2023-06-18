<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row>
      <b-col xl="7">
        <div class="forget-password-form">
          <div class="text-center">
            <b-img :src="`${publicPath}assets/img/pot_1_@2x.png`" width="320" height="220" />
          </div>

          <div class="form">
            <h1 class="fw-bolder">نسيت كلمة السر ؟</h1>
            <p>لا تقلق سنساعدك على أستعادتها</p>

            <!-- Start Email -->
            <ValidationObserver ref="forgetPasswordForm">
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

              <div class="text-center mt-3">
                <button class="btn btn-main-v py-2 px-5" role="button" @click="doNext">أستمر</button>
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
  name: "forget-password",
  data() {
    return {
      form: {
        email: ""
      }
    };
  },
  methods: {
    async doNext() {
      let valid = await this.$refs.forgetPasswordForm.validate();
      if (!valid) {
        return;
      }
      try {
        let { data } = await this.$axios.post(
          "user/auth/forget-password",
          this.form
        );
        if (data.success) {
          let info = {
            data: data.data,
            form: this.form
          };
          this.$emit("success", info);
          window.successMsg(data.message);
        }
      } catch (error) {
        let response = error.response;
        window.errorMsg(response.data.message);
        if (response.status == 422) {
          this.setErrorsForm(this.$refs.forgetPasswordForm, response);
        }
      }
    }
  }
};
</script>

<style scoped>
.forget-password-form {
  padding: 2em;
}
.no-have-account {
  text-align: end;
}
.form {
  padding-top: 1.5rem;
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