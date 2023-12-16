<template>
  <div class="login-page"  style="margin-top: 85px;">
    <b-container>
      <LoginForm @change-form="afterSuccessForm" v-if="status == 'form'" :type="type"/>
      <ResendCodeView
        @success="afterSuccessCheck"
        @cancel="status = 'form'"
        :dataInfo="dataCheck"
        v-if="status == 'resend-code'"
      />
    </b-container>
  </div>
</template>

<script>
import ResendCodeView from "./ResendCode.vue";
import LoginForm from "./loginForm.vue";

export default {
  name: "login-page",
  metaInfo() {
    return { title: this.$t("login") };
  },
  components: {
    LoginForm,
    ResendCodeView
  },
  data: () => ({
    status: "form",
    type: '',

    dataCheck: {},
    dataFinish: {}
  }),
  methods: {
    afterSuccessForm(evt) {
      this.dataCheck = evt;
      console.log('form-test', evt)
      this.status = "resend-code";
    },
    afterSuccessCheck(/*evt*/) {
      /*this.dataFinish= evt*/
      window.SwalSuccess("تم تفعيل حسابك بنجاح");
      this.status = "form";
      if (this.type == 'client') {
        this.$router.push({name:'service-provider-home'})
      } else if (this.type == 'provider') {
        this.$router.push({name: 'create-profile-service-provider'})
      }
    }
  },
  mounted() {
    this.status = "form";
    this.type = this.$route.params.type;
  }
};
</script>

<style scoped> 
.login-page {
   background-color: #f6f8f9;
   padding: 3em 0 6em;
}
</style>