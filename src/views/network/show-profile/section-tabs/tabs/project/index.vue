<template>
  <EmptyCard
    mainText="لا يوجد أي مشروع"
    seconderyText="لم يضف هذا العضو أي مشروع حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
    <div class="show-profile-3-grid-container">
      <div v-for="(item, i) in projects" :key="i" class="grid-item">
        <CardItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import CardItem from "./card";
import EmptyCard from "../components/empty-card.vue";
export default {
  name: "d-tab-pane-projects",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
    projects: [],
  }),
  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await userAPI.getProjectsUser(
          this.$route.params.id,
          metaInfo
        );
        this.projects = response.data.data;
        if (this.projects.length > 0) {
          this.isEmptyObject = false;
        }
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
