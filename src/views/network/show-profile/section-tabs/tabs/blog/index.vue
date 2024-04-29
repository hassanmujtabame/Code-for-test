<template>
  <EmptyCard
    mainText="لا توجد أي تدوينة"
    seconderyText="لم يضف هذا العضو أي تدوينة حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
    <div class="show-profile-grid-container">
      <div v-for="(item, i) in blogs" :key="i" class="grid-item">
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
  name: "d-tab-pane-your-blogs",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
    blogs: [],
  }),
  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await userAPI.getBlogstUser(
          this.$route.params.id,
          metaInfo
        );
        this.blogs = response.data.data.slice(0, 8);
        if (this.blogs.length > 0) {
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
