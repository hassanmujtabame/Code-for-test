<template>
  <div class="suggestions-tab-grid">
    <Card v-for="(item, i) in blogs" :key="i" :item="item"></Card>
  </div>
</template>

<script>
import blogsAPI from "@/services/api/blogs";
import Card from "../../section-tabs/tabs/blog/card.vue";
export default {
  data: () => ({
    blogs: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await blogsAPI.getRecent();
        this.blogs = response.data.data.slice(0, 5);
      } catch (error) {
        //
        console.log(error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style></style>
