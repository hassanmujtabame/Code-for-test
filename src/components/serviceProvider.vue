<template>
  <d-filter-list
    hideSide
    hideTitle
    :call-list="loadList"
    @change="changeFilter"
    :searchPlaceholder="'ابحث هنا'"
    orderName="price"
    :orderOpts="[
      { id: 'asc', name: 'الأقل سعرا' },
      { id: 'desc', name: 'الأغلى سعرا' },
    ]"
    classSearchOrder="col-md-9"
    classColOrder="col-12 col-md-4"
    classColSearch="col-12 col-md-8"
    classTotal="col-md-3"
  >
    <!-- <d-swiper
          :slides-per-view="2"
          is-auto
          :space-between="4"
          :items="items"
        > -->
    <template v-slot="{ item }">
      <SeriveProviderCard
        :title="item.title"
        :description="item.description"
        :department="item.category_name"
        :category="item.field_name"
        :price="item.price"
        :execution-time="item.execution_period"
        :during="item.rest_days"
        :place="item.city"
        :offers="item.count_offer"
        :datePublish="item.created_at"
        :image="item.image"
        :state="item.state"
        :id="item.id"
        :user_info="item.user_info"
        :shareLink="shareLink + '/' + item.id"
      />
    </template>
    <template v-slot:total="{}">
      <button
        @click="openAddService($event)"
        style="
          line-height: 2.5;
          height: 46px;
          width: 230px !important;
          margin-bottom: 20px;
        "
        class="btn-main btn-nav text-center text-white"
      >
        <plusCircleOutline :size="24" color="currentColor" class="mx-1" />

        {{ $t("add-new-service") }}
      </button>
    </template>
    <!-- </d-swiper> -->
    <template v-slot:side>
      <SidebarBox :filterItem="fitlterSide" @change="changeFilter" />
    </template>
  </d-filter-list>
</template>

<script>
// import dFilterList from "../filter-component/index.vue";
import dFilterList from "@/views/service-provider/proposals/parts/filter-component/index.vue";
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";
import SidebarBox from "@/views/service-provider/proposals/parts/section-filter/sidebar.vue";
// import SidebarBox from "./sidebar.vue";
import showProposal from "@/components/cards/proposal.vue";
import SeriveProviderCard from "@/components/Service-Provider-card.vue";
import plusCircleOutline from "@/components/icon-svg/plus-circle-outline.vue";

export default {
  name: "section-service-provider",
  components: {
    showProposal,
    SidebarBox,
    plusCircleOutline,
    dFilterList,
    SeriveProviderCard,
  },
  data: (vm) => {
    return {
      orderList: [
        { id: "asc", name: vm.$t("lower-price") },
        { id: "desc", name: vm.$t("higher-price") },
      ],
      fitlterSide: {
        state: null,
        category_id: [],
        city_id: [],
        max_period: 1000,
        min_period: 0,
        max_price: 5000,
        min_price: 0,
      },
      filterItem: {
        search: null,
        price: "asc",
        state: null,
        category_id: [],
        city_id: [],
        // max_period: 1000,
        // min_period: 0,
        max_price: 5000,
        min_price: 0,
      },
      items: [],
      shareLink: "",
    };
  },
  methods: {
    openAddService(evt) {
      evt.preventDefault();
      // closeNavList()
      // if(!this.userIsRoleProvider)
      // this.fireOpenDialog('add-proposal')
      // else
      this.fireOpenDialog("add-ready-service-dialog");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    // openAddService(evt) {
    //   evt.preventDefault();
    //   this.fireOpenDialog("add-my-request-dialog");
    // },
    closeAddService(evt) {
      evt.preventDefault();
      this.fireCloseDialog("add-my-request-dialog");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        ...this.filterItem,
      };

      return await proposalsAPIs.getAll(params);
    },
  },
  mounted() {
    this.shareLink = window.location.href;
  },
};
</script>

<style></style>
