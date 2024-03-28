<template>
  <div class="container my-5">
    <Header />
    <Ask />
    <Best />
    <Join />
    <Features />
    <Place />
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Ask from "./parts/ask.vue";
import Features from "./parts/features.vue";
import Place from "./parts/recent-place.vue";
import Best from "./parts/best-offers.vue";
import Join from "./parts/join.vue";
export default {
  name: "network-company",
  components: {
    Header,
    Ask,
    Best,
    Join,
    Features,
    Place,
  },
};
</script>

<style></style>
