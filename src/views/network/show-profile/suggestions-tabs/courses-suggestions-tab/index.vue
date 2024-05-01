<template>
  <div class="suggestions-tab-grid">
    <Card v-for="(item, i) in courses" :key="i" :item="item"></Card>
  </div>
</template>

<script>
import coursesAPI from "@/services/api/academy/courses.js";
import Card from "./card.vue";
export default {
  data: () => ({
    courses: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await coursesAPI.getRecentCourses();
        console.log("response :> ", response.data.data);
        this.courses = response.data.data.slice(0, 5);
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
