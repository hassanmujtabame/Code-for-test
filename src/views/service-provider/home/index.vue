<template>
  <div>
    <ServiceProviderHome />
  </div>
</template>

<script>
import ServiceProviderHome from "@/components/pages/service-provider/home";
export default {
  name: "service-provider-home",
  components: {
    ServiceProviderHome,
  },
  async mounted() {
    if (this.$route.query.affiliate_id) {
      localStorage.setItem("ComeFrom", this.$route.query.affiliate_id);
      await window.axios.post('affiliates/visitor', {affiliate_id: this.$route.query.affiliate_id})
    }
  },
};
</script>

<style></style>
