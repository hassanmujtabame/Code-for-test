<template>
  <div class="box bg-white rounded-3 mobile-center">
    <div class="row align-items-center p-0 position-relative">
      <b-col xl="7" class="p-4">
        <div style class="text-center">
          <img class :src="`${publicPath}assets/img/pot_1_.png`" alt width="320" height="220" />
        </div>
        <div class="px-3">
          <h1 class="fw-bolder">تفعيل الحساب</h1>
          <p>
            أرسلنا اليك رمز التأكيد على ايميلك
            <span>{{dataInfo.form.email}}</span>
          </p>
          <p v-if="code" style="color:red">
            للتجريب فقط :رقم التاكيد هو
            <i>{{code}}</i>
          </p>
          <p>
            لم يصلك الرمز؟
            <a href="#" @click="resendCode" class="m-c">أعد الارسال</a>
          </p>
          <ValidationObserver class="row g-3 needs-validation" ref="verifyCodeForm">
            <ValidationProvider
              tag="div"
              :name="$t('confirm-code')"
              class="col-md-4 w-100"
              vid="pin_code"
              rules="required"
              v-slot="{errors}"
            >
              <input
                type="text"
                v-model="pin_code"
                class="form-control"
                placeholder="  رمز التاكيد"
              />

              <d-error-input :errors="errors" v-if="errors" />
            </ValidationProvider>

            <div class="col-12 text-center">
              <button @click="cancel" class="btn btn-main-v p-3 mx-2">الرجوع</button>
              <button @click="verifyCode" class="btn btn-main-v p-3">أستمر</button>
            </div>
          </ValidationObserver>
        </div>
      </b-col>
      <b-col xl="5" class="tablet-hide">
        <div class="box">
          <b-img fluid :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataInfo: {
      type: [Array, Object],
      require: true
    }
  },
  data: vm => {
    return {
      code: vm.dataInfo.data.pin_code,
      pin_code: ""
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async resendCode() {
      let { email } = this.dataInfo.form;
      try {
        let { data } = await this.$axios.post("user/auth/resend-code", {
          email
        });
        if (data.success) {
          window.successMsg(data.message);
          this.code = data.data.pin_code;
        } else {
          window.errorMsg(data.message);
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            if (Object.hasOwnProperty.call(response.data, "errors")) {
              this.$refs.form.setErrors(response.data.errors);
            }
          }
        }
      }
    },
    async verifyCode() {
      let valid = await this.$refs.verifyCodeForm.validate();
      if (!valid) {
        return;
      }
      const payload = {
        email: this.dataInfo.form.email,
        pin_code: this.pin_code
      };
      try {
        let { data } = await this.$axios.post("user/auth/verify-code", payload);
        if (data.success) {
          this.$emit("success", this.dataInfo);
          window.successMsg(data.message);
        } else {
          window.errorMsg(data.message);
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            if (Object.hasOwnProperty.call(response.data, "errors")) {
              this.$refs.verifyCodeForm.setErrors(response.data.errors);
            }
          }
        }
      }
    }
  }
};
</script>

<style>
</style>