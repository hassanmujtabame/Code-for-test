<template>
  <div class="register-page">
    <div class="container" style="margin-top: 85px;">
      <RegisterForm @success="afterSuccessForm" v-if="status=='form'" :type="type"/>
      <RegisterCheck @success="afterSuccessCheck" :dataInfo="dataCheck" v-if="status=='check'" />
      <RegisterFinish v-if="status=='finish'" :dataInfo="dataFinish" />
    </div>
  </div>
</template>

<script>
import RegisterForm from "./RegisterView.vue";
import RegisterFinish from "./RegisterFinish.vue";
import RegisterCheck from "./RegisterCheck.vue";
export default {
  name: "register-page",
  components: {
    RegisterForm,
    RegisterFinish,
    RegisterCheck
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
      this.status = "check";
    },
    afterSuccessCheck(evt) {
      this.dataFinish = evt;
      this.status = "finish";
    }
  },
  mounted() {
    this.status = "form";
    this.type = this.$route.params.type;
  }
};
</script>

<style scoped>
.register-page {
  background-color: #f6f8f9;
  padding: 3em 0 6em;
}
</style>