<template>
  <div class="suggestions-tab-grid">
    <Card v-for="(item, i) in investments" :key="i" :item="item"></Card>
  </div>
</template>

<script>
import projectsAPI from "@/services/api/projects";
import Card from "../../section-tabs/tabs/investments/card.vue";
export default {
  data: () => ({
    investments: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await projectsAPI.getRecents();
        this.investments = response.data.data.slice(0, 5);
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
