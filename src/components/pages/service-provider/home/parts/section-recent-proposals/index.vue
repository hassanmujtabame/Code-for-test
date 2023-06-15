<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center container">
      <h2 class="home-section-title">أحدث الطلبات</h2>
      <div>
        <router-link
          class="router-link"
          custom
          :to="getRouteLocale('service-provider-proposals')"
          v-slot="{ navigate }"
        >
          <button @click="btnMore(navigate,$event)" class="more">{{ $t('more') }}</button>
        </router-link>
      </div>
    </div>
    <div class="mt-3 row order">
      <div v-for="(item, i) in items" :key="i" class="col-12 col-lg-6 mt-2">
        <a class="router-link" href="#" @click="goToProposal(item,$event)">
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
            :resetDays="item.rest_days"
            :department="item.category_name"
          />
        </a>
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
      if (!this.shouldBeProviderMsg()) navigate(evt);
    },
    goToProposal(item, evt) {
      //if(evt) evt.preventDefault();
      if (item.user_info.id != this.user.id && !this.shouldBeProviderMsg(evt)) {
        this.router_push("service-provider-proposal-page", { id: item.id });
      }
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
</style>