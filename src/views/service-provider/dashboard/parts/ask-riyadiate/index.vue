<template>
  <div class="row mt-5 p-3 rounded-4" style="background:rgba(245, 245, 245, 1);">
    <div class="col-md-8 col-12 d-flex justify-content-between">
    <div class="col-md-6 col-12">
      <h2>اسأل رياديات</h2>
      <div class=" d-flex justify-content-center align-items-center mt-5 bg-white rounded-3" style="width:90px; height:71px;">
      <img  style=" width: 41px; height: 41px; object-fit: contain"  class="" :src="`${publicPath}assets/svg/Vector.svg`" alt="" />
      </div>
    </div>
      <div class="col-md-6 col-12">
        <h2>قدم فكرة أو اقتراح لفريق رياديات</h2>
      <div class=" d-flex justify-content-center align-items-center mt-5 bg-white rounded-3" style="width:90px; height:71px;">
      <img  style="width:42px; height:42px; object-fit: contain"  class="" :src="`${publicPath}assets/svg/Vector1.svg`" alt="" />
      </div>
    </div>    
    </div>
    <div style="display: flex; justify-content: end;" class="col-md-4 col-12">
      <img  style="width:233px; height:203px; object-fit: contain"  class="" :src="`${publicPath}assets/svg/bro.svg`" alt="" />
    </div>

  </div>
</template>

<script>
import readyServicesAPI from "@/services/api/service-provider/provider/ready-service.js";
export default {
  name: "section-my-offers",
  data: () => ({
    loading: true,
    itemCard: {}
  }),
  computed: {
    percentFinished() {
      return this.calcPercent(
        this.itemCard.service_finished,
        this.itemCard.count_offers
      );
    },
    percentUnderway() {
      return this.calcPercent(
        this.itemCard.service_underway,
        this.itemCard.count_offers
      );
    },
    percentWaiting() {
      return this.calcPercent(
        this.itemCard.service_waiting,
        this.itemCard.count_offers
      );
    },
    percentExcluded() {
      return this.calcPercent(
        this.itemCard.service_excluded,
        this.itemCard.count_offers
      );
    }
  },
  methods: {
    calcPercent(x, total) {
      if (!total) return 0;
      return Math.floor((x / total) * 100);
    },
    async initializing() {
      console.log("ss");
      this.loading = true;
      try {
        let { data } = await readyServicesAPI.getServiceOffersStatistics();
        if (data.success) {
          this.itemCard = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    }
  },
  mounted() {
    this.initializing();
  }
};
</script>

<style>
</style>