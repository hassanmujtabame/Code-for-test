<template>
  <div class="container my-5">
    <Header />
    <div>
      <!-- to do -->
      <Feature />
    </div>
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Feature from "./parts/features.vue";
export default {
  name: "speical-manager",
  components: { Header, Feature },
};
</script>

<style></style>
