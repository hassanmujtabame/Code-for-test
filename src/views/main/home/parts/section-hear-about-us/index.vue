<template>
  <div
    class="sex-eight mt-5 max-width-100-hidden"
    v-if="items && items.length > 0"
  >
    <div class="container-fluid">
      <h2 class="text-end">{{ $t("what-do-they-say-about-us") }}</h2>
      <div class="ad-slider">
        <carousel
          :perPage="3"
          :navigationEnabled="true"
          :paginationEnabled="true"
        >
          <slide v-for="(item, i) in items" :key="i">
            <ItemSlide
              :desc="item.desc"
              :name="item.user_info.name"
              :image="item.user_info.image"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import commonAPI from "@/services/api/common";
import ItemSlide from "@/components/cards/opinion-item.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "section-hear",
  components: {
    ItemSlide,
    Carousel,
    Slide,
  },
  data: (vm) => {
    return {
      carouselId: `carousel-${vm.generateRandomString(8)}`,
      loading: true,
      items: [],
    };
  },
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await commonAPI.getOpinions({ department_name: "" });
        //console.log(data)
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  async mounted() {
    await this.initializing();
    window.$(`#${this.carouselId}`).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      rtl: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  },
};
</script>

<style></style>
