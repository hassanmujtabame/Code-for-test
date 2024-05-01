<template>
  <div class="suggestions-tab-grid">
    <Card v-for="(item, i) in providers" :key="i" :item="item"></Card>
  </div>
</template>

<script>
import serviceProvidersAPI from "@/services/api/service-provider/index.js";
import Card from "@/components/cards/card-member.vue";
export default {
  data: () => ({
    providers: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await serviceProvidersAPI.getBestProvider();
        this.providers = response.data.data.slice(0, 5);
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
