<template>
  <div class="suggestions-tab-grid">
    <Card
      v-for="(item, i) in consulters"
      :key="i"
      :img="item.image"
      :name="item.name"
      :description:="item.job_title"
      :to="getRouteLocale('network-show-profile', { id: item.id })"
    ></Card>
  </div>
</template>

<script>
import ConsultantsApi from "@/services/api/consulting/consultants";
import Card from "@/components/cards/card-member.vue";
export default {
  data: () => ({
    consulters: [],
  }),
  components: {
    Card,
  },
  methods: {
    async initializing() {
      try {
        const response = await ConsultantsApi.getBest();
        console.log("response > ", response);
        this.consulters = response.data.data.slice(0, 5);
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
