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
    <div class="my-5">
      <Category />
    </div>
    <div class="my-5">
      <Learn />
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import About from "./about-academy.vue";
import Best from "./best.vue";
import Blogs from "./blogs.vue";
import Category from "./category.vue";
import Learn from "./learn.vue";

export default {
  name: "category-academdy",
  components: { Header, About, Best, Blogs, Category, Learn },
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style></style>
