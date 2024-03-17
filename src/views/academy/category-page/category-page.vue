<template>
  <div class="container my-5">
    <Header />
    <About />
    <div class="my-5">
      <Best />
    </div>
    <div class="my-5">
      <Blogs />
    </div>
  </div>
</template>

<script>
import playIcon from "@/components/icon-svg/play.vue";
import Header from "./header.vue";
import About from "./about-academy.vue";
import Best from "./best.vue";
import Blogs from "./blogs.vue";

export default {
  name: "category-academdy",
  components: { playIcon, Header, About, Best, Blogs },
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style></style>
