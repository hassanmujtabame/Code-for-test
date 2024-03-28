<template>
  <div class="container my-5">
    <Header />
    <Ask />
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Ask from "./parts/ask.vue";
export default {
  name: "network-company",
  components: {
    Header,
    Ask,
  },
};
</script>

<style></style>
