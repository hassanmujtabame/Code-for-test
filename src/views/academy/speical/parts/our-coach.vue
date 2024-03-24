<template>
  <div class="row my-5">
    <div class="text-center">
      <h3 style="font-size: 40px; color: #495057">
        مدربينا في برامج ريادة الاعمال
        <span style="color: #2cb7b3"> العامة</span>
      </h3>
    </div>
    <div class="container">
      <d-swiper
        v-if="!loading"
        :slides-per-view="4"
        is-auto
        :space-between="25"
        :items="items"
      >
        <template v-slot:default="{ item }">
          <CardMember
            class="my-2"
            :countCourse="item.countCourse"
            :name="item.name"
            :img="item.image"
            job_title:item.job_title
            :to="getRouteLocale('academy-show-profile', { id: item.id })"
          />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import CardMember from "./coach-card.vue";
import academyAPI from "@/services/api/academy";
import MostPopularVue from "@/components/MostPopular.vue";
export default {
  name: "section-best-instructors",
  components: {
    CardMember,
    MostPopularVue,
  },
  data: () => ({
    loading: true,
    total: 0,
    items: [],
    slidesperview: 2,
  }),
  methods: {
    async initlizing() {
      this.loading = true;
      try {
        let { data } = await academyAPI.instructor.getBest({ paginate: 8 });
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initlizing();
  },
};
</script>

<style>
.swiper-slide {
  width: 257.5px !important;
  /* width:280px !important */
}

.provider-card {
  width: 100% !important;
}
</style>
