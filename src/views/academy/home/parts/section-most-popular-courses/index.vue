<template>
  <div v-if="!loading" class="mt-5 p-3">
    <div class="container">
      <div class="row">
        <div
          class="d-flex col-3 justify-content-center align-items-center container"
        >
          <div style="color: #1fb9b3" class="home-section-title text-cairo">
            الدورات <br />
            <span class="text-dark text-cairo">الأكثر</span> <br />
            شعبية
          </div>
        </div>
        <d-swiper
          class="col-9"
          :slides-per-view="2"
          :space-between="20"
          is-auto
          :items="items"
        >
          <template v-slot:default="{ item }">
            <MostPopularCards
              :item="item"
              :url="getRouteLocale('academy-course-show', { id: item.id })"
            />
          </template>
        </d-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import CardVue from "@/components/cards/academy-course.vue";
import MostPopularCards from "@/components/most-popular-card-new.vue";
import coursesApI from "@/services/api/academy/courses.js";
export default {
  name: "section-most-popular-courses",
  components: {
    MostPopularCards,
  },
  data: () => ({
    items: [],
    loading: true,
    slidesperview: 4,
  }),
  methods: {
    async loadList() {
      this.loading = true;
      try {
        let { data } = await coursesApI.getRecentCourses({ paginate: 6 });
        if (data.success) {
          this.items = data.data;
          if (this.items.length <= 4) this.slidesperview = 3;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>
.home-section-title {
  text-align: center;
}
</style>
