<template>
  <EmptyCard
    mainText="لا يوجد أي استثمار"
    seconderyText="لم يشارك هذا العضو بأي استثمار حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
    <div class="show-profile-3-grid-container">
      <div v-for="(item, i) in investments" :key="i" class="grid-item">
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
  name: "d-tab-pane-investments",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
    investments: [],
  }),

  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await userAPI.getProjectsUser(
          this.$route.params.id,
          metaInfo
        );
        console.log("response : ", response);
        this.investments = response.data.data.slice(0, 8);
        if (this.investments.length > 0) {
          this.isEmptyObject = false;
        }
      } catch (error) {
        console.log("investments error : ", error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>
<!-- {
       metaInfo object
        "current_page": 1,
        "total": 10,
        "last_page": 0,
        "paginate": 2,
        "to": 2,
        "total_page": 5
    } -->
<style></style>
