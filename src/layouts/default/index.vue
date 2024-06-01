<template>
  <div>
    <DefaultHeader />
    <MyDrawer v-if="user" />
    <main style="margin-top: 80px">
      <slot></slot>
    </main>
    <d-standard-rate-dialog />
    <SectSubscribe />
    <DefaultFooter />
    <d-success-message />
    <d-confirm-message />
  </div>
</template>

<script>
import marketAPI from "@/services/api/market";

import "@/plugins/mixins.js";
import DefaultFooter from "../common/footer.vue";
import MyDrawer from "@/layouts/common/drawer.vue";
import DefaultHeader from "./header.vue";
import SectSubscribe from "@/layouts/common/section-subscribe/sect-subscribe.vue";
export default {
  name: "default-layout",
  components: {
    DefaultFooter,
    DefaultHeader,
    SectSubscribe,
    MyDrawer,
  },
  async mounted() {
    if (this.$route.query.affiliate_id) {
      localStorage.setItem("ComeFrom", this.$route.query.affiliate_id);
      await marketAPI.recoredVisit(this.$route.query.affiliate_id);
    }
  },
};
</script>

<style></style>
