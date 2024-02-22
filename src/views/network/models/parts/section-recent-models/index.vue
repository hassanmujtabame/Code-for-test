<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between">
      <div>
        <h2>أحدث النماذج</h2>
      </div>
    </div>
    <div class="row mt-3">
      <div v-for="(item, i) in items" :key="i" class="col-md-3 rounded-4">
        <router-link
          class="router-link"
          :to="getRouteLocale('network-model-show', { id: item.id })"
        >
          <ModelCard
            :title="item.title"
            :img="item.image"
            :value="item.count_download"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ModelsAPI from "@/services/api/models.js";
import ModelCard from "@/components/cards/model.vue";
export default {
  name: "recent-models",
  components: {
    ModelCard,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    async getRecents() {
      try {
        let { data } = await ModelsAPI.getRecent();
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
  },
  mounted() {
    this.getRecents();
  },
};
</script>

<style></style>
