<template>
  <div class="pt-5 academy-course-width">
    <h1 style="color: #cf1f3e" class="">دورات المشابهة</h1>

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
</template>

<script>
import CardVue from "@/components/card-sim.vue";
import coursesApI from "@/services/api/academy/courses.js";
export default {
  name: "section-similar-courses",
  props: {
    itemPage: {},
  },
  components: {
    CardVue,
  },
  data: () => ({
    items: [],
    loading: true,
    slidesperview: 2,
  }),
  methods: {
    async loadList() {
      this.loading = true;
      try {
        let { data } = await coursesApI.getSimilars(this.itemPage.id);
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

<style>
.academy-course-width .swiper-slide {
  width: 220px !important;
  height: 450px !important;
  margin-bottom: 20px !important;
}
</style>
