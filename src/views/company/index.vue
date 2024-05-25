<template>
  <div style="padding-top: 112px; background: #fafafa">
    <div class="container bg-white p-4 rounded-4">
      <pageHeader :companyData="companyData" />
      <div class="row my-4">
        <nav>
          <ul class="d-flex align-items-center gap-1">
            <li
              class="rounded-3 py-2"
              :class="{ sp: item.id === id }"
              style="
                list-style: none;
                background-color: #fafafa;
                color: #8a8a8a;
                padding-left: 75px;
                padding-right: 75px;
                cursor: pointer;
              "
              v-for="item in navList"
              :key="item.id"
              @click="id = item.id"
            >
              {{ item.title }}
            </li>
          </ul>
        </nav>
      </div>
      <div class="" v-if="id === 1">
        <Offers />
      </div>
      <div class="" v-if="id === 2">
        <Discount />
      </div>
      <div class="" v-if="id === 3">
        <Services />
      </div>
      <div class="" v-if="id === 4">
        <Gallary />
      </div>
      <div class="" v-if="id === 5">
        <Places />
      </div>
    </div>
  </div>
</template>

<script>
import PartnersApi from "@/services/api/partners";

import pageHeader from "./page-header.vue";
import Offers from "./sections/offers.vue";
import Discount from "./sections/discount.vue";
import Places from "./sections/places.vue";
import Services from "./sections/services.vue";
import Gallary from "./sections/gallary.vue";
export default {
  name: "company-page",
  components: {
    pageHeader,
    Offers,
    Discount,
    Gallary,
    Places,
    Services,
  },

  data() {
    return {
      companyData: {},
      navList: [
        { title: "العروض", id: 1 },
        { title: "الخصومات", id: 2 },
        { title: "الخدمات", id: 3 },
        { title: "المعارض", id: 4 },
        { title: "اماكن", id: 5 },
      ],
      id: 1,
    };
  },
  computed: {
    companyId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async loadData() {
      let { data } = await PartnersApi.getItem(this.companyId);
      this.companyData = data.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
.sp {
  background-color: #1fb9b3 !important;
  color: white !important;
}
</style>
