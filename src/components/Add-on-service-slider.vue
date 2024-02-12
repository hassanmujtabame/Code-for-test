<template>
  <div class="position-relative" :class="{ 'swiper-mobile': isMobile }">
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
        <slot :item="item"> </slot>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Thumbs, Controller } from "swiper";

import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export default {
  name: "d-swiper",

  props: {
    name: {
      type: [String, Object],
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    state: {
      type: String,
    },
    id: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
    place: {
      type: String,
      default: "N/A",
    },
    price: {
      type: [String, Number],
    },
    keywords: {
      type: [String, Array],
    },
    created_at: {
      type: [String, Number],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: (vm) => {
    let responsive;
    if (vm.slidesPerView != "auto")
      responsive = {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: vm.slidesPerView,
        },
      };
    else responsive = vm.$attrs.breakpoints ?? {};
    return {
      breakpoints: vm.isAuto || vm.slidesPerView == "auto" ? responsive : {},
      state_ar: {
        online: "اونلاين",
        offline: "حضورى",
      },
      shareLink: "",
    };
  },
};
</script>
