<template>
  <div class="mt-5 p-3">
    <div class="container">
      <div class="row">
        <div
          class="d-flex col-4 justify-content-between align-items-center container"
        >
          <h1 style="color: #1fb9b3" class="home-section-title">
            الدورات <br />
            <span class="text-dark">الأكثر</span> <br />
            شعبية
          </h1>
          <!-- <div>
            <button class="more">
              <router-link
                :to="getRouteLocale('academy-courses')"
                class="text-dark"
              >
                {{ $t("more") }}
              </router-link>
            </button>
          </div> -->
        </div>
        <d-swiper
          class="col-8"
          v-if="!loading"
          :slides-per-view="2"
          :space-between="10"
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
import MostPopularCards from "@/components/Most-popular-cards.vue";
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

<style></style>
