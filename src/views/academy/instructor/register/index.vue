<template>
  <div style="margin-top: 86px">
    <SectionForm v-if="!userIsInstructor" />
  </div>
</template>

<script>
import SectionForm from "./parts/section-form/index.vue";
export default {
  name: "register-instructor",
  components: {
    SectionForm,
  },
  mounted() {
    if (store.state.auth.isInstructor) {
      this.$router.push({ name: "academy-home" });
    }
  },
};
</script>
