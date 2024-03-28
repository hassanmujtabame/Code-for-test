<template>
  <div class="container my-5">
    <Header />
    <Ask />
    <Best />
    <Join />
    <Features />
    <Place />
    <Sign />
    <Partners />
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Ask from "./parts/ask.vue";
import Features from "./parts/features.vue";
import Partners from "./parts/our-partners.vue";
import Place from "./parts/recent-place.vue";
import Best from "./parts/best-offers.vue";
import Join from "./parts/join.vue";
import Sign from "./parts/sign-up.vue";
export default {
  name: "network-company",
  components: {
    Header,
    Partners,
    Sign,
    Ask,
    Best,
    Join,
    Features,
    Place,
  },
};
</script>

<style></style>
