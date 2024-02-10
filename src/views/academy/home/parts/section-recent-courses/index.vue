<template>
  <div class="mt-5 p-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center container">
        <h1 class="home-section-title">أحدث دوراتنا</h1>
        <div>
          <button class="more">
            <router-link
              :to="getRouteLocale('academy-courses')"
              class="text-dark"
            >
              {{ $t("more") }}
            </router-link>
          </button>
        </div>
      </div>
      <d-swiper
        v-if="!loading"
        :slides-per-view="slidesperview"
        :space-between="10"
        is-auto
        :items="items"
      >
        <template v-slot:default="{ item }">
          <CardVue
            :item="item"
            :url="getRouteLocale('academy-course-show', { id: item.id })"
          />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import CardVue from "@/components/cards/academy-course.vue";
import coursesApI from "@/services/api/academy/courses.js";
export default {
  name: "section-recent-courses",
  components: {
    CardVue,
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

<style></style>
