<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center container">
      <h2 class="home-section-title">
        أحدث الطلبات
        
        </h2>
      <div>
        <router-link
          class="router-link d-flex align-items-center"
          custom
          :to="getRouteLocale('service-provider-proposals')"
          v-slot="{ navigate }"
        >
          <button @click="btnMore(navigate,$event)" class="more m-c seeMore px-0">{{ $t('seeMore') }}</button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.29302 12.7064C8.10555 12.5188 8.00024 12.2645 8.00024 11.9994C8.00024 11.7342 8.10555 11.4799 8.29302 11.2924L13.95 5.63537C14.0423 5.53986 14.1526 5.46367 14.2746 5.41126C14.3966 5.35886 14.5278 5.33127 14.6606 5.33012C14.7934 5.32896 14.9251 5.35426 15.048 5.40454C15.1709 5.45483 15.2825 5.52908 15.3764 5.62297C15.4703 5.71686 15.5446 5.82852 15.5948 5.95141C15.6451 6.07431 15.6704 6.20599 15.6693 6.33877C15.6681 6.47155 15.6405 6.60277 15.5881 6.72477C15.5357 6.84677 15.4595 6.95712 15.364 7.04937L10.414 11.9994L15.364 16.9494C15.5462 17.138 15.647 17.3906 15.6447 17.6528C15.6424 17.915 15.5373 18.1658 15.3518 18.3512C15.1664 18.5366 14.9156 18.6418 14.6534 18.644C14.3912 18.6463 14.1386 18.5455 13.95 18.3634L8.29302 12.7064Z" fill="#1FB9B3"/>
</svg>
        </router-link>
      </div>
    </div>
    <div class="mt-3 row order">
      <div v-for="(item, i) in items" :key="i" class="col-12 col-lg-6 mt-2">
        <!-- <a class="router-link" @click="goToProposal(item,$event)"> -->
          <showProposal
            :title="item.title"
            :description="item.description"
            :category="item.field_name"
            :price="item.price"
            :during="item.rest_days"
            :place="item.city"
            :offers="item.count_offer"
            :datePublish="item.created_at"
            :image="item.image"
            :executionTime="item.execution_period"
            :resetDays="item.rest_days"
            :department="item.category_name"
            :state="item.state"
            :id="item.id"

          />
        <!-- </a> -->
      </div>
    </div>
    
  </div>
</template>

<script>
import myRequestsAPIs from "@/services/api/service-provider/user/proposals.js";
//import CardService from './card.vue'
import showProposal from "@/components/cards/proposal.vue";
export default {
  name: "section-recent-requests",
  components: {
    showProposal
  },
  data: () => ({
    loading: true,
    items: []
  }),
  methods: {
    btnMore(navigate, evt) {
      navigate(evt)
    },
    goToProposal(item, evt) {
      // if (!this.shouldBeProviderMsg(evt)) {
        this.router_push("service-provider-proposal-page", { id: item.id });
      // }
    },
    async loadList() {
      this.loading = true;
      try {
        let { data } = await myRequestsAPIs.getRecent();
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    }
  },
  mounted() {
    this.loadList();
  }
};
</script>

<style>
.seeMore{
  border: 0 !important;
  text-decoration: underline;
  min-width: unset !important;
}
</style>