<template>
  <div class="mx-5">
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
/*let itemsTest=[
        {id:1,image_path:`${vm.publicPath}assets/img/serv-1.png`},
        {id:2,image_path:`${vm.publicPath}assets/img/serv-2.png`},
        {id:3,image_path:`${vm.publicPath}assets/img/serv-3.png`},
    ]*/
export default {
  name: "section-gallary",
  props: {
    item: {
      type: [Object, Array],
      require: true
    }
  },
  data: vm => {
    let gallery = [];
    if (vm.item.medias.length) gallery = vm.item.medias.filter(x => !!x);
    gallery.unshift({ id: -1, image_path: vm.item.image });

    return {
      thumbsSwiper: null,
      controlledSwiper: null,
      //items:itemsTest
      items: gallery //??itemsTest
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      console.log("swiper");
      this.controlledSwiper = swiper;
      //this.thumbsSwiper = swiper;
    }
  },
  mounted() {}
};
</script>
  
  <style scoped>
.box {
  height: 300px;
}
</style>