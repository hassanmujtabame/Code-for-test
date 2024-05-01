<template>
  <div class="suggestions-tab-grid">
    <Card v-for="(item, i) in exhibitions" :key="i" :item="item"></Card>
  </div>
</template>

<script>
import exhibitionsAPI from "@/services/api/exhibitions";
import Card from "../../section-tabs/tabs/exhibitions/card.vue";
export default {
  data: () => ({
    exhibitions: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await exhibitionsAPI.getRecent();
        this.exhibitions = response.data.data.slice(0, 5);
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
