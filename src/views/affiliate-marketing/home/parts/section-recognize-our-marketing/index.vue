<template>
  <div class="mt-5 p-3">
    <div class="container-fluid">
      <div class="d-flex justify-content-start align-items-center container">
        <h1>تعرفي على مجالات التسويق لدينا</h1>
      </div>
      <d-swiper :slides-per-view="5" is-auto :space-between="10" :items="items">
        <template v-slot:default="{ item }">
          <CardVue :title="item.title" :img="item.img" :icon="item.icon" />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import CardVue from "./card.vue";
export default {
  name: "section-recognize-our-marketing",
  components: {
    CardVue,
  },
  data: (vm) => {
    return {
      items: [
        {
          title: "المجوهرات",
          img: `${vm.publicPath}assets/icons/jewelry.svg`,
          icon: "jewelry",
          id: 7,
        },
        {
          title: "الازيــــــاء",
          img: `${vm.publicPath}assets/icons/fashion.svg`,
          icon: "fashion",
          id: 36,
        },
        {
          title: "التقنية",
          img: `${vm.publicPath}assets/icons/techinic.svg`,
          icon: "techinic",
          id: 9,
        },
        {
          title: "الزهــــور والهدايا",
          img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
          icon: "flowers-gifts",
        },
        {
          title: "التجـــــــارة الالكترونية",
          img: `${vm.publicPath}assets/icons/ecommerce.svg`,
          icon: "ecommerce",
          id: 8,
        },
        {
          title: "السياحة",
          img: `${vm.publicPath}assets/icons/swimming.svg`,
          icon: "beauty",
          id: 24,
        },
        {
          title: "العطور",
          // img: `../../../../../assets/img/academy/fi_1890693.png`,
          img: `../../../assets/img/academy/fi_1890693.png`,
          icon: "perfioum",
          id: 32,
        },
        {
          title: "التجميل",
          img: `${vm.publicPath}assets/icons/beauty.svg`,
          icon: "beauty",
        },
        {
          title: "التجميل",
          img: `${vm.publicPath}assets/icons/beauty.svg`,
          icon: "beauty",
        },
        {
          title: "التجميل",
          img: `${vm.publicPath}assets/icons/beauty.svg`,
          icon: "beauty",
        },
      ],
      // items: [
      //   {
      //     title: "المجوهرات",
      //     img: `${vm.publicPath}assets/icons/jewelry.svg`,
      //     icon: "jewelry",
      //     id: 7,
      //   },
      //   {
      //     title: "الازيــــــاء",
      //     img: `${vm.publicPath}assets/icons/fashion.svg`,
      //     icon: "fashion",
      //     id: 36,
      //   },
      //   {
      //     title: "التقنية",
      //     img: `${vm.publicPath}assets/icons/techinic.svg`,
      //     icon: "techinic",
      //     id: 9,
      //   },
      //   {
      //     title: "الزهــــور والهدايا",
      //     img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
      //     icon: "flowers-gifts",
      //   },
      //   {
      //     title: "التجـــــــارة الالكترونية",
      //     img: `${vm.publicPath}assets/icons/ecommerce.svg`,
      //     icon: "ecommerce",
      //     id: 8,
      //   },
      //   {
      //     title: "السياحة",
      //     img: `${vm.publicPath}assets/icons/swimming.svg`,
      //     icon: "beauty",
      //     id: 24,
      //   },
      //   {
      //     title: "العطور",
      //     img: `../../../../../assets/img/academy/fi_1890693.png`,
      //     icon: "perfioum",
      //     id: 32,
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      // ],
      // items: [
      //   {
      //     title: "المجوهرات",
      //     img: `${vm.publicPath}assets/icons/jewelry.svg`,
      //     icon: "jewelry",
      //   },
      //   {
      //     title: "الازيــــــاء",
      //     img: `${vm.publicPath}assets/icons/fashion.svg`,
      //     icon: "fashion",
      //   },
      //   {
      //     title: "التقنية",
      //     img: `${vm.publicPath}assets/icons/techinic.svg`,
      //     icon: "techinic",
      //   },
      //   {
      //     title: "الزهــــور والهدايا",
      //     img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
      //     icon: "flowers-gifts",
      //   },
      //   {
      //     title: "التجـــــــارة الالكترونية",
      //     img: `${vm.publicPath}assets/icons/ecommerce.svg`,
      //     icon: "ecommerce",
      //   },
      //   {
      //     title: "السباحة",
      //     img: `${vm.publicPath}assets/icons/swimming.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      // ],
      // items: [
      //   {
      //     title: "المجوهرات",
      //     img: `${vm.publicPath}assets/icons/jewelry.svg`,
      //     icon: "jewelry",
      //   },
      //   {
      //     title: "الازيــــــاء",
      //     img: `${vm.publicPath}assets/icons/fashion.svg`,
      //     icon: "fashion",
      //   },
      //   {
      //     title: "التقنية",
      //     img: `${vm.publicPath}assets/icons/techinic.svg`,
      //     icon: "techinic",
      //   },
      //   {
      //     title: "الزهــــور والهدايا",
      //     img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
      //     icon: "flowers-gifts",
      //   },
      //   {
      //     title: "التجـــــــارة الالكترونية",
      //     img: `${vm.publicPath}assets/icons/ecommerce.svg`,
      //     icon: "ecommerce",
      //   },
      //   {
      //     title: "السباحة",
      //     img: `${vm.publicPath}assets/icons/swimming.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      // ],
      // items: [
      //   {
      //     title: "المجوهرات",
      //     img: `${vm.publicPath}assets/icons/jewelry.svg`,
      //     icon: "jewelry",
      //   },
      //   {
      //     title: "الازيــــــاء",
      //     img: `${vm.publicPath}assets/icons/fashion.svg`,
      //     icon: "fashion",
      //   },
      //   {
      //     title: "التقنية",
      //     img: `${vm.publicPath}assets/icons/techinic.svg`,
      //     icon: "techinic",
      //   },
      //   {
      //     title: "الزهــــور والهدايا",
      //     img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
      //     icon: "flowers-gifts",
      //   },
      //   {
      //     title: "التجـــــــارة الالكترونية",
      //     img: `${vm.publicPath}assets/icons/ecommerce.svg`,
      //     icon: "ecommerce",
      //   },
      //   {
      //     title: "السباحة",
      //     img: `${vm.publicPath}assets/icons/swimming.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      // ],
      // items: [
      //   {
      //     title: "المجوهرات",
      //     img: `${vm.publicPath}assets/icons/jewelry.svg`,
      //     icon: "jewelry",
      //   },
      //   {
      //     title: "الازيــــــاء",
      //     img: `${vm.publicPath}assets/icons/fashion.svg`,
      //     icon: "fashion",
      //   },
      //   {
      //     title: "التقنية",
      //     img: `${vm.publicPath}assets/icons/techinic.svg`,
      //     icon: "techinic",
      //   },
      //   {
      //     title: "الزهــــور والهدايا",
      //     img: `${vm.publicPath}assets/icons/flowers-gifts.svg`,
      //     icon: "flowers-gifts",
      //   },
      //   {
      //     title: "التجـــــــارة الالكترونية",
      //     img: `${vm.publicPath}assets/icons/ecommerce.svg`,
      //     icon: "ecommerce",
      //   },
      //   {
      //     title: "السباحة",
      //     img: `${vm.publicPath}assets/icons/swimming.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      //   {
      //     title: "التجميل",
      //     img: `${vm.publicPath}assets/icons/beauty.svg`,
      //     icon: "beauty",
      //   },
      // ],
    };
  },
};
</script>

<style></style>
