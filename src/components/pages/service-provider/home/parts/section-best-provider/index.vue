<template>
  <div class="sec-five the-best-service-providers p-3 max-width-100-hidden">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center container">
        <h1 class="home-section-title w-100 text-centerl mb-3">أفضل مقدمي الخدمات هذا الشهر</h1>
      </div>
      <d-swiper v-if="!loading" :slides-per-view="4" :space-between="4" is-auto :items="items">
        <template v-slot:default="{item}">
          <CardMember
            :name="item.name"
            :description="item.job"
            :img="item.image"
            :rate="item.rate"
            :bio="item.bio"
            showRate
            :to="getRouteLocale('service-provider-show-profile',{id:item.id})"
          />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import CardMember from "@/components/cards/card-member-service.vue";
import serviceProviderAPIs from "@/services/api/service-provider/index";
export default {
  name: "section-best-provider",
  components: {
    CardMember
  },
  data() {
    return {
      loading: true,
      items: []
    };
  },
  methods: {
    async getBestProvider() {
      this.loading = true;
      try {
        let { data } = await serviceProviderAPIs.getBestProvider();
        if (data.success) {
          console.log('data', data.data);
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    }
  },
  mounted() {
    this.getBestProvider();
  }
};
</script>

<style>
.the-best-service-providers .provider-card{
width: 100% !important;
}
</style>