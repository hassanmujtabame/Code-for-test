<template>
  <div style="padding-top: 112px; background: #fafafa">
    <i v-if="isLoading" class="fa fa-spinner fa-spin" aria-hidden="true"></i>
    <div v-else class="container bg-white p-4 rounded-4">
      <pageHeader :companyData="companyData" />
      <div class="row my-4">
        <nav>
          <ul class="d-flex nav nav-pills mb-3 gap-3 pb-3 py-3 px-2">
            <li
              class="tab-btn rounded-3 py-3"
              :class="{ sp: item.id === id }"
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
        <Exhibitions />
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
import Exhibitions from "./sections/exhibitions.vue";
export default {
  name: "company-page",
  components: {
    pageHeader,
    Offers,
    Discount,
    Exhibitions,
    Places,
    Services,
  },

  data() {
    return {
      isLoading: false,
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
      this.isLoading = true;
      try {
        let { data } = await PartnersApi.getItem(this.companyId);
        if (data.success) {
          this.companyData = data.data;
        } else {
          this.router_push("NotFound");
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.sp {
  background-color: #1fb9b3 !important;
  color: white !important;
}
.tab-btn {
  list-style: none;
  background-color: #fafafa;
  color: #8a8a8a;
  padding-left: 75px;
  padding-right: 75px;
  cursor: pointer;
  text-align: center;
  flex-grow: 1;
  font-family: Cairo;
  font-size: 15.36px;
  font-weight: 500;
  line-height: 15.36px;
}
</style>
