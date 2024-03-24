<template>
  <div class="container my-5">
    <Header />
    <div>
      <!-- to do -->
      <Feature />
    </div>
    <KnowMore />
    <Market />
  </div>
</template>

<script>
import Header from "./parts/header.vue";
import Feature from "./parts/features.vue";
import KnowMore from "./parts/know-more.vue";
import Market from "./parts/merket.vue";
export default {
  name: "speical-manager",
  components: { Header, Feature, KnowMore, Market },
};
</script>

<style></style>
