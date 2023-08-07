<template>
  <div class="px-5">

    <div class="box mb-4">
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
        <template v-slot="{ item }" >
          <!-- <div class="d-flex mx-auto" style=" height: 300px; width: 420px; ">  -->
          <img style=" height: 300px;   width: 420px;" :src="item.image" />
          <!-- </div> -->
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
      >
        <template v-slot="{ item }">
          <img style="heigh115px; object-fit: contain;" :src="item.image" />
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
      if (this.singleWorkspace.medias.length)
        gallery = this.singleWorkspace.medias;
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
.box {
  height: 300px;
}
</style>