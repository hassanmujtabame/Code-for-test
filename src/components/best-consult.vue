<template>
  <div class="position-relative" :class="{ 'swiper-mobile': isMobile }">
    <h1>hi</h1>
    <swiper
      :scrollbar="scrollbar"
      :navigation="navigation"
      :pagination="pagination"
      :slides-per-view="isAuto ? 'auto' : slidesPerView"
      :space-between="spaceBetween"
      :breakpoints="breakpoints"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <SwiperSlide v-for="(item, i) in items" :key="i">
        <CardItem :item="item" />
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Thumbs, Controller } from "swiper";
import CardItem from "./best-consult-item.vue";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);
import ConsultantsApi from "../services/api/consulting/consultants";
export default {
  name: "best-consulting",
  components: { Swiper, SwiperSlide, CardItem },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async loadData() {
      try {
        let { data } = await ConsultantsApi.getBest();
        data.success ? (data.data = this.items) : "";
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
