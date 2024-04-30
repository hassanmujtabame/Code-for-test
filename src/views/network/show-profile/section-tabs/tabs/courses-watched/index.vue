<template>
  <EmptyCard
    mainText="لا توجد أي دورة"
    seconderyText="لم يشاهد هذا العضو أي دورة حتى الآن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
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
import EmptyCard from "../components/empty-card.vue";
export default {
  name: "d-tab-pane-course-watched",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
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
        if (this.courses.length > 0) {
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
