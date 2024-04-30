<template>
  <EmptyCard
    mainText="لا يوجد أي معرض"
    seconderyText="لم ينضم هذا العضو لأي معرض حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
    <div class="show-profile-grid-container">
      <div v-for="(item, i) in exhibitions" :key="i" class="grid-item">
        <CardItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import CardItem from "./card.vue";
import EmptyCard from "../components/empty-card.vue";
export default {
  name: "d-tab-pane-exhibitions",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    exhibitions: [],
    loading: false,
    isEmptyObject: true,
  }),
  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await userAPI.getExhibitionstUser(
          this.$route.params.id,
          metaInfo
        );
        this.exhibitions = response.data.data.slice(0, 8);

        if (this.exhibitions.length > 0) {
          this.isEmptyObject = false;
        }
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
