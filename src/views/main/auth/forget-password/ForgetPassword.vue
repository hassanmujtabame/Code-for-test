<template>
  <div class="bg-white rounded-3 mobile-center">
    <b-row class="d-flex justify-content-center">
      <b-col xl="7">
        <div class="forget-password-form">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="153" height="173" viewBox="0 0 153 173" fill="none">
              <path d="M147.756 23.3024C118.947 15.6738 80.0409 1 80.0409 1H73.2051C62.9289 5.00875 33.8655 17.5735 12.2212 23.3024C12.2212 50.5709 5.13115 100.785 8.94544 126.528C12.9542 153.587 60.6553 160.572 73.2051 172H80.0409C93.6078 164.371 146.574 156.653 151.032 126.528C154.846 100.77 147.756 50.5559 147.756 23.3024Z" fill="#1FB9B3" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M140.922 23.3024C112.113 15.6738 73.2076 1 73.2076 1C73.2076 1 34.2419 15.6738 5.40289 23.3024C5.40289 50.5709 -1.68721 100.785 2.12708 126.528C6.58457 156.653 59.6257 164.371 73.2076 172C86.7745 164.371 139.741 156.653 144.198 126.528C148.013 100.77 140.922 50.5559 140.922 23.3024Z" fill="#CBEDE1" stroke="#1FB9B3" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M128.011 34.2952C104.707 28.1325 73.2351 16.2559 73.2351 16.2559C73.2351 16.2559 41.7186 28.1325 18.3841 34.2952C18.3841 56.3433 12.6552 96.9693 15.7365 117.791C19.3414 142.157 62.241 148.395 73.2351 154.573C84.2143 148.41 127.054 142.172 130.644 117.791C133.725 96.9693 127.996 56.3433 127.996 34.2952H128.011Z" fill="#1FB9B3"/>
              <path d="M74.3086 40.25C74.3086 40.25 74.4432 40.25 74.503 40.25C74.5629 40.25 74.6377 40.25 74.6975 40.25H74.3086Z" fill="#1FB9B3" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M74.503 40.25C58.7821 40.3547 46.8008 52.4258 46.8008 66.5312V80.861H101.577V66.5312C101.577 52.4408 89.8649 40.3547 74.503 40.25ZM93.051 79.1109H55.5811V68.042C55.5811 58.4389 63.7183 50.212 74.4133 50.0774C74.4133 50.0774 74.503 50.0774 74.5479 50.0774C74.5928 50.0774 74.6376 50.0774 74.6825 50.0774C85.1232 50.227 93.0659 58.4539 93.0659 68.0569V79.1259L93.051 79.1109Z" fill="#1FB9B3" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M95.0603 77.6172H54.4343C46.7019 77.6172 40.4336 83.8855 40.4336 91.6179V117.032C40.4336 124.764 46.7019 131.032 54.4343 131.032H95.0603C102.793 131.032 109.061 124.764 109.061 117.032V91.6179C109.061 83.8855 102.793 77.6172 95.0603 77.6172Z" fill="#1FB9B3" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M55.5703 104.328L60.7458 98.3448C65.1734 100.828 69.1821 103.849 72.4579 107.828C77.3791 99.347 83.2127 92.3018 89.8391 86.498L97.737 92.0325C89.6447 96.4601 78.0971 109.877 73.1011 117.7C66.9534 111.657 61.0449 106.856 55.5853 104.328H55.5703Z" fill="#0CC79F"/>
              <path d="M71.25 40.25C71.25 40.25 71.3846 40.25 71.4445 40.25C71.5043 40.25 71.5791 40.25 71.6389 40.25H71.25Z" fill="#FBF9ED" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M71.4268 40.25C55.706 40.3547 43.7246 52.4258 43.7246 66.5312V80.861H98.5008V66.5312C98.5008 52.4408 86.7887 40.3547 71.4268 40.25ZM89.9748 79.1109H52.505V68.042C52.505 58.4389 60.6421 50.212 71.3371 50.0774C71.3371 50.0774 71.4269 50.0774 71.4717 50.0774C71.5166 50.0774 71.5615 50.0774 71.6063 50.0774C82.047 50.227 89.9897 58.4539 89.9897 68.0569V79.1259L89.9748 79.1109Z" fill="#FBF9ED" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M91.9919 77.6172H51.3659C43.6336 77.6172 37.3652 83.8855 37.3652 91.6179V117.032C37.3652 124.764 43.6336 131.032 51.3659 131.032H91.9919C99.7243 131.032 105.993 124.764 105.993 117.032V91.6179C105.993 83.8855 99.7243 77.6172 91.9919 77.6172Z" fill="#CBEDE1" stroke="#1FB9B3" stroke-width="0.75" stroke-miterlimit="10"/>
              <path d="M52.502 105.586L57.6774 99.6026C62.105 102.086 66.1137 105.107 69.3895 109.086C74.3107 100.605 80.1444 93.5596 86.7708 87.7559L94.6686 93.2903C86.5763 97.7179 75.0287 111.135 70.0327 118.958C63.885 112.915 57.9766 108.114 52.5169 105.586H52.502Z" fill="#0CC79F"/>
            </svg>
          </div>

          <div class="form mb-2 text-center">
            <h1 class="fw-bold">
              هل نسيت كلمة المرور            
            </h1>
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

              <div class="text-center mt-3 w-50 mx-auto">
                <button class="btn btn-main-v py-2 px-5 w-100" role="button" @click="doNext">أستمر</button>
              </div>
            </ValidationObserver>
            <router-link  style="color: #F2631C;" :to="{name: 'login'}" class="btn mt-2">
            العودة لتسجيل الدخول

            </router-link>
          </div>
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
        if (response.status == 422) {
          window.errorMsg(response.data.message.email);
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