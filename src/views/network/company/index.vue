<template>
  <div class="container my-5">
    <Header />
    <Ask />
    <Best />
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Ask from "./parts/ask.vue";
import Best from "./parts/best-offers.vue";
export default {
  name: "network-company",
  components: {
    Header,
    Ask,
    Best,
  },
};
</script>

<style></style>
