<template>
  <div class="container my-5">
    <Header :item="item" />
    <About :item="item" />
    <div class="my-5">
      <Best :item="item" />
    </div>
    <div class="my-5">
      <Blogs :item="item" />
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
import academyApi from "@/services/api/academy/index";

export default {
  name: "category-academdy",
  components: { Header, About, Best, Blogs, Category, Learn },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    async getData(id) {
      try {
        let { data } = await academyApi.getDepartment(id);
        if (data.success) {
          this.item = data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    let idFromUrl = this.$route.params.id;
    this.getData(idFromUrl);
    console.log(idFromUrl);
  },
  watch: {
    "$route.params.id"(newId, oldId) {
      this.getData(newId);
      console.log("ID changed from", oldId, "to", newId);
    },
  },
};
</script>

<style></style>
