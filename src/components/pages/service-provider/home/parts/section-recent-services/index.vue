<template>
  <div class="container mt-5 mb-5 pt-5">
    <div class="d-flex justify-content-between align-items-center container">
      <h1 class="home-section-title h-1 d-flex align-items-center">
        <span class="mx-1" style="color: #1fb9b3">أحدث</span>
        الخدمات
      </h1>
      <div>
        <router-link
          class="router-link d-flex align-items-center"
          custom
          :to="getRouteLocale('service-provider-ready-services')"
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="more m-c seeMore px-0">
            {{ $t("seeMore") }}
          </button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.29302 12.7064C8.10555 12.5188 8.00024 12.2645 8.00024 11.9994C8.00024 11.7342 8.10555 11.4799 8.29302 11.2924L13.95 5.63537C14.0423 5.53986 14.1526 5.46367 14.2746 5.41126C14.3966 5.35886 14.5278 5.33127 14.6606 5.33012C14.7934 5.32896 14.9251 5.35426 15.048 5.40454C15.1709 5.45483 15.2825 5.52908 15.3764 5.62297C15.4703 5.71686 15.5446 5.82852 15.5948 5.95141C15.6451 6.07431 15.6704 6.20599 15.6693 6.33877C15.6681 6.47155 15.6405 6.60277 15.5881 6.72477C15.5357 6.84677 15.4595 6.95712 15.364 7.04937L10.414 11.9994L15.364 16.9494C15.5462 17.138 15.647 17.3906 15.6447 17.6528C15.6424 17.915 15.5373 18.1658 15.3518 18.3512C15.1664 18.5366 14.9156 18.6418 14.6534 18.644C14.3912 18.6463 14.1386 18.5455 13.95 18.3634L8.29302 12.7064Z"
              fill="#1FB9B3"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="row mt-3 gy-5 gx-5">
      <div class="col-md-3 col-12">
        <analytics></analytics>
      </div>

      <!-- <div v-for="(item, i) in items" :key="i" class=" "> -->
      <!-- <router-link
            class="router-link"
            :to="getRouteLocale('service-provider-ready-service', { id: item.id })"
          > -->
      <!-- <d-swiper
        v-if="!loading"
        class="col-md-9 col-12"
        is-auto
        :responsive="{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 }, // Adjusted for large screens
        }"
        :space-between="1"
        :items="items"
      >
        <template v-slot:default="{ item }">
          <CardService
            :keywords="item.keywords"
            :index="i"
            :state="item.state"
            :image="item.image"
            :description="item.desc"
            :title="item.title"
            :place="item.city"
            :price="item.price"
            :name="item.user_info"
            :id="item.id"
            :created_at="item.created_at"
          />
        </template>
      </d-swiper> -->
      <div class="col-md-9 col-12">
        <div class="row">
          <div
            v-for="(item, i) in items.filter((item, index) => index % 2 === 0)"
            :key="i"
            class="col-md-4 col-12 mb-3"
          >
            <div
              class="rounded-3"
              :style="{ backgroundColor: calculateBackgroundColor(i) }"
            >
              <CardService
                :keywords="item.keywords"
                :index="i"
                :state="item.state"
                :image="item.image"
                :description="item.desc"
                :title="item.title"
                :place="item.city"
                :price="item.price"
                :name="item.user_info"
                :id="item.id"
                :created_at="item.created_at"
              />
            </div>
          </div>
          <div
            v-for="(item, i) in items.filter((item, index) => index % 2 !== 0)"
            :key="i"
            class="col-md-4 col-12 mb-3"
          >
            <div
              class="rounded-3"
              :style="{ backgroundColor: calculateBackgroundColor(i) }"
            >
              <CardService
                :keywords="item.keywords"
                :index="i"
                :state="item.state"
                :image="item.image"
                :description="item.desc"
                :title="item.title"
                :place="item.city"
                :price="item.price"
                :name="item.user_info"
                :id="item.id"
                :created_at="item.created_at"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- </router-link> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import serviceProviderAPIs from "@/services/api/service-provider/index";
import CardService from "./new-card.vue";
import Analytics from "./analytics.vue";
export default {
  name: "section-recent-services",
  components: {
    CardService,
    Analytics,
  },
  data: () => ({
    loading: true,
    items: [],
  }),
  methods: {
    async loadList() {
      this.loading = true;
      try {
        let { data } = await serviceProviderAPIs.getRecentServices();
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    },
    calculateBackgroundColor(index) {
      // Define an array of colors
      const colors = [
        "rgba(31, 185, 179, 0.24)",
        "rgba(242, 99, 28, 0.24)",
        "#A7FDC0",
        "#FDD6AE",
        "#AED0FD",
        "#FDC0D7",
      ];

      // Return the color based on the index
      return colors[index % colors.length];
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style></style>
