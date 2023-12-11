<template>
  <div class="mt-5 blog">
    <d-filter-list 
    :call-list="loadList" 
    @change="changeFilter" 
    :searchPlaceholder="$t('search_by_service')"
      orderName="price" 
      newFilter 
      hideTitle 
      showBtnSearch 
      :orderOpts="[
          { id: 'asc', name: 'الأقل سعرا' },
          { id: 'desc', name: 'الأغلى سعرا', }
        ]" 
        classColCard="col-lg-4 mt-3" 
        classSideBar="w-100" 
        classSearchOrder="col-md-9 flex-direction"
      classColOrder="col-12 col-md-3" 
      classColSearch="col-12 col-md-7" 
      classTotal="col-md-3">
      <!-- <template v-slot:side> -->
      <!-- <template v-slot:total="{ }" v-if="this.userIsRoleProvider" >
        <button @click="openAddService($event)"
          style="line-height: 2.5; height: 46px; width: 230px !important; margin-bottom: 20px;"
          class="btn-main btn-nav text-center text-white">
          <plusCircleOutline :size="24" color="currentColor" class="mx-1" />

          {{ $t('add-new-service') }}
        </button>
      </template> -->
      <template v-slot:side>
        <sidebarFilter @change="changeFilter" :filter-item="fitlterSide" />
      </template>

      <template v-slot="{ item }">
        <readyServiceCard :image="item.image" :description="item.desc" :title="item.title" :place="item.city"
          :price="item.price" :name="item.user_info" :id="item.id" :rates="item.rates"
          :categoryName="item.category_name" />
        <!-- </router-link> -->
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import readyServiceAPIs from "@/services/api/service-provider/provider/ready-service";
import readyServiceCard from "@/components/cards/ready-service.vue";
import sidebarFilter from "./sidebar-filter.vue";
export default {
  name: "section-filter-list",
  components: {
    readyServiceCard,
    sidebarFilter
  },
  data: vm => {
    let state = ["online", "offline", "service"].includes(vm.$route.query.state)
      ? vm.$route.query.state
      : null;
    return {
      fitlterSide: {
        state,
        category_id: [],
        max_period: 1000,
        min_period: 0,
        max_price: 1000,
        min_price: 0
      },
      filterItem: {
        search: null,
        price: "asc",
        state,
        category_id: [],
        max_period: 1000,
        min_period: 0,
        max_price: 1000,
        min_price: 0
      },
      totalYourServices: null
    };
  },
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    openAddService(evt) {
      evt.preventDefault();
      this.fireOpenDialog("add-ready-service-dialog");
    },
    closeAddService(evt) {
      evt.preventDefault();
      this.fireCloseDialog("add-ready-service-dialog");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,

        ...this.filterItem
      };
      return await readyServiceAPIs.getAll(params);
    },
    async getCategories() {
      try {
        let { data } = await readyServiceAPIs.getCategories();
        if (data.success) {
          let categories = data.data;
          categories.unshift({ id: null, name: "الكل" });
          this.categories = categories;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
    async getTotalYourServices() {
      try {
        let { data } = await readyServiceAPIs.getAll();
        if (data.success) {
          console.log('145', data);
          this.totalYourServices = data.meta.total
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },

  },
  mounted() {
    this.getTotalYourServices()
    //this.getCategories();
    console.log('items here=>', this.totalYourServices)
  }
};
</script>

<style>
.flex-direction {
  flex-direction: row-reverse;
  align-items: baseline;
}
</style>