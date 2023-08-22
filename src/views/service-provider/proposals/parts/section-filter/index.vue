<template>
  <d-filter-list
  hideSide
  hideTitle
    :call-list="loadList"
    @change="changeFilter"
    :searchPlaceholder="$t('search-for-project')"
    orderName="price" 
    :orderOpts="
        [
          {id:'asc',name:'الأقل سعرا'},
          {id:'desc',name:'الأغلى سعرا',}
      ]"
      classSearchOrder="col-md-9"
classColOrder="col-12 col-md-4" 
classColSearch="col-12 col-md-8"
classTotal="col-md-3"
  >
      <template v-slot:total="{}">
           <button @click="openAddService($event)" style="line-height: 2.5; height: 46px; width: 230px !important; margin-bottom: 20px;" class="btn-main btn-nav text-center text-white">
           <plusCircleOutline :size="24" color="currentColor" class="mx-1"/>
             
              {{$t('add-new-service')}}
            </button>
      </template>
         <!-- <d-swiper
          :slides-per-view="2"
          is-auto
          :space-between="4"
          :items="items"
        > -->
    <template v-slot="{item}">
      <router-link
        class="router-link"
        :to="getRouteLocale('service-provider-proposal-page',{id:item.id})"
      >
        <showProposal
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
        />
      </router-link>
    </template>
         <!-- </d-swiper> -->
    <template v-slot:side>
      <SidebarBox :filterItem="fitlterSide" @change="changeFilter" />
    </template>
  </d-filter-list>
</template>

<script>
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";
import SidebarBox from "./sidebar.vue";
import showProposal from "@/components/cards/proposal.vue";
import plusCircleOutline from '@/components/icon-svg/plus-circle-outline.vue';

export default {
  name: "section-filter",
  components: {
    showProposal,
    SidebarBox,
    plusCircleOutline
  },
  data: vm => {
    return {
      orderList: [
        { id: "asc", name: vm.$t("lower-price") },
        { id: "desc", name: vm.$t("higher-price") }
      ],
      fitlterSide: {
        state: null,
        category_id: [],
        city_id: [],
        max_period: 1000,
        min_period: 0,
        max_price: 5000,
        min_price: 0
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
        min_price: 0
      },
      items: []
    };
  },
  methods: {
        openAddService(evt){
        evt.preventDefault();
        // closeNavList()
        // if(!this.userIsRoleProvider)
        // this.fireOpenDialog('add-proposal')
        // else
        this.fireOpenDialog('add-ready-service-dialog')
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
        ...this.filterItem
      };
      return await proposalsAPIs.getAll(params);
    }
  }
};
</script>

<style>
</style>