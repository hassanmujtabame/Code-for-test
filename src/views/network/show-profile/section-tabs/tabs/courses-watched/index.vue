<template>
  <div class="container" style="min-height: 200px">
    <div class="show-profile-grid-container">
      <div v-for="(item, i) in courses" :key="i" class="grid-item">
        <CardItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import CardItem from "./card.vue";
export default {
  name: "d-tab-pane-your-blogs",
  components: {
    CardItem,
  },
  data: () => ({
    loading: false,
    courses: [],
  }),
  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await userAPI.getCoursesUser(
          this.$route.params.id,
          metaInfo
        );
        this.courses = response.data.data;
      } catch (error) {
        //
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
