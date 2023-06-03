<template>
  <div class="px-5">
    <div class="box">
      <!--mySwiper2-->
      <d-swiper
        v-if="controlledSwiper"
        :controller="{ control: controlledSwiper }"
        :items="items"
        :spaceBetween="10"
        :slidesPerView="1"
        is-auto
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      >
        <template v-slot="{ item }">
          <img style="height: 300px" :src="item.image_path" />
        </template>
      </d-swiper>
    </div>
    <!--mySwiper service-provider-->
    <div class="px-2">
      <d-swiper
        class="mySwiper service-provider"
        :items="items"
        :spaceBetween="10"
        :slidesPerView="4"
        is-auto
        :freeMode="true"
        @swiper="setThumbsSwiper"
        watch-slides-progress
        :loop="true"
      >
        <template v-slot="{ item }">
          <img style="height: 115px" :src="item.image_path" />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-gallery",
  props: {
    singleWorkspace: {
      type: [Object, Array],
      require: true,
    },
  },
  data() {
    return {
      thumbsSwiper: null,
      controlledSwiper: null,
    };
  },
  computed: {
    items() {
      let gallery = [];
      if (this.singleWorkspace.medias.length) gallery = this.singleWorkspace.medias;
      return gallery;
    },
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.controlledSwiper = swiper;
    },
  },
  mounted() {},
};
</script>

<style scoped>
@media (max-width: 496px) {
  .img-cons img {
    width: 100% !important;
    left: 0 !important;
  }

  .img-cons {
    background-color: white;
    border-radius: 50%;
    width: 100%;
  }
}
.box {
  height: 300px;
}
</style>