<template>
  <div class="sec-five p-3">
    <div class="">
      <!-- <div class="d-flex justify-content-between align-items-center"> -->
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="text-center">
          <h1 style="font-size: 42px" class="home-section-title px-3">
            أفضل المدربين في
            <span style="color: #1fb9b3"> مجال {{ item.name }} </span>
          </h1>
        </div>
        <!-- <p style="color: #888">
            هل تبحث عن أفضل التدريب لنجاحك في ريادة الأعمال؟ إذا كان الأمر كذلك،
            فنحن ندعوك للتعرف على أفضل المدربين لدينا.
          </p> -->
        <!-- </div> -->

        <!-- <div v-if="true">
          <button class="more">
            <a href="" class="text-dark">
              {{ $t("more") }}
            </a>
          </button>
        </div> -->
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
  </div>
</template>

<script>
import CardMember from "@/components/card-best-academy.vue";
import academyAPI from "@/services/api/academy";
import MostPopularVue from "@/components/MostPopular.vue";
export default {
  name: "section-best-instructors",
  components: {
    CardMember,
    MostPopularVue,
  },
  props: {
    item: {
      type: Object,
    },
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
