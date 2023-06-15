<template>
  <div class="register-page">
    <div class="container">
      <RegisterForm @success="afterSuccessForm" v-if="status=='form'" />
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
  }
};
</script>

<style scoped>
.register-page {
  background-color: #f6f8f9;
  padding: 3em 0 6em;
}
</style>