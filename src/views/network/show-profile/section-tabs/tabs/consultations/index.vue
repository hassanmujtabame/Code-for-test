<template>
  <EmptyCard
    mainText="لا توجد أي استشارة"
    seconderyText="لم يقدم هذا العضو أي استشارة حتى الأن"
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
import ConsultantsApi from "@/services/api/consulting/consultants";
import CardItem from "../components/course-card";
import EmptyCard from "../components/empty-card.vue";

export default {
  name: "d-tab-pane-your-course",
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
        const response = await ConsultantsApi.getItem(this.$route.params.id);
        this.courses = response.data.data.slice(0, 8);
        if (this.courses.length > 0) {
          this.isEmptyObject = false;
        }
      } catch (error) {
        console.log("ConsultantsApi error : ", error);
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
