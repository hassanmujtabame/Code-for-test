<template>
  <div class="container">
    <div class="box bg-white rounded-3 py-4">
      <div class="row align-items-center justify-content-center p-0 position-relative">
        <b-col xl="7 " class="">
          <div style class="text-center">
            <svg width="347" height="223" viewBox="0 0 347 223" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.458 86.299L135.423 115.85L121.688 61.0653L346.563 0L151.458 86.299Z" fill="#1FB9B3" />
              <path d="M170.47 101.048L135.598 115.852L151.632 86.3008L170.47 101.048Z" fill="#0B5243" />
              <path
                d="M102.513 23.6635L346.394 0L121.687 61.0653L97.1868 43.4579C89.0014 37.57 92.4775 24.6729 102.513 23.6635Z"
                fill="#CBEDE1" />
              <path
                d="M346.398 0L151.461 86.299L197.434 120.617C206.629 127.458 219.467 126.561 227.597 118.486L346.398 0Z"
                fill="#CBEDE1" />
              <path
                d="M120.931 117.379C98.2108 117.379 68.2946 138.102 69.7938 157.955C70.4601 166.76 79.0884 172.116 88.6496 169.673C98.2108 167.229 102.308 159.06 96.2119 152.197C88.0833 143.024 67.1953 140.044 41.9431 158.39C20.722 173.79 5.9305 198.062 1 222"
                stroke="#1FB9B3" stroke-width="1.34152" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="px-5 text-center">
            <h1 class="fw-bolder">أكتب الرمز</h1>
            <p>
              تلقيت رمز الاستعادة على البريد التالي
              <span>{{ dataInfo.form.email }}</span>
            </p>
            <p v-if="code" style="color:red">
              للتجريب فقط :رقم التاكيد هو
              <i>{{ code }}</i>
            </p>

            <p>
              لم يصلك الرمز؟
              <a href="#" @click="resendCode" class="m-c">أعد الارسال</a>
            </p>
            <ValidationObserver class="row g-3 needs-validation" ref="form">
              <ValidationProvider tag="div" :name="$t('confirm-code')" class="col-md-4 w-100" vid="pin_code"
                rules="required" v-slot="{ errors }">
                <div class="col-md-4 w-100">
                  <d-text-input :errors="errors" type="text" v-model="pin_code" class="form-control"
                    id="validationCustom01" label="   رمز استعادة كلمة السر"></d-text-input>
                </div>
              </ValidationProvider>
              <div class="col-12 text-center w-50 mx-auto">
                <button @click="verifyCode" class="btn btn-main mb-2 w-100">أستمر</button>
              </div>
            </ValidationObserver>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forget-password-check",
  props: {
    dataInfo: {}
  },
  data: vm => {
    return {
      code: vm.dataInfo.data.pin_code,
      pin_code: ""
    };
  },
  methods: {
    async resendCode(e) {
      if (e) e.preventDefault();

      let { email } = this.dataInfo.form;
      try {
        let { data } = await this.$axios.post("user/auth/resend-code", {
          email
        });
        if (data.success) {
          this.code = data.data.pin_code;
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
    async verifyCode(e) {
      if (e) e.preventDefault();

      let { email } = this.dataInfo.form;
      let pin_code = this.pin_code;
      try {
        let { data } = await this.$axios.post("user/auth/verify-code", {
          email,
          pin_code
        });
        if (data.success) {
          this.$emit("success", this.dataInfo);
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
    }
  }
};
</script>

<style></style>