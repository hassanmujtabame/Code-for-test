<template>
  <div class="mt-5">
    <div class="container">
      <div class="row">
        <ul class="nav nav-pills mb-3 justify-content-center text-center">
          <li class="nav-item col-12 col-md-3">
            <!-- <router-link to="ready-services" class="nav-link  border w-75 t-c m-auto active">اطلب خدمة
                جديدة</router-link> -->

            <button
              @click="openAddService($event, closeNavList)"
              class="nav-link border w-75 t-c m-auto active"
              style="height: 100%"
            >
              {{
                userIsRoleProvider
                  ? $t("add-new-service")
                  : $t("add-new-request")
              }}
            </button>
          </li>
          <li class="nav-item col-12 col-md-3">
            <router-link
              to="my-proposals"
              class="nav-link border w-75 t-c m-auto"
              >طلباتي المنشورة</router-link
            >
          </li>
          <li class="nav-item col-12 col-md-3">
            <router-link
              to="my-purchases"
              class="nav-link border w-75 t-c m-auto"
              >اعمالي قيد التنفيذ
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <d-filter-list
      :call-list="loadList"
      classSearchOrder="mb-5 justify-content-center flex-row-reverse align-items-center"
      showBtnSearch
      hideOrder
      hideTotal
      classBtnSearch="col-2"
      classColSearch="col-6"
      @change="changeFilter"
      :searchPlaceholder="$t('search_by_service')"
    >
      <template v-slot:side>
        <sidebarFilter @change="changeFilter" :filter-item="fitlterSide" />
      </template>

      <template v-slot="{ item }">
        <readyServiceCard
          class="mt-4"
          :image="item.image"
          :description="item.desc"
          :title="item.title"
          :place="item.city"
          :price="item.price"
          :name="item.user_info"
          :id="item.id"
          :rates="item.rates"
          :categoryName="item.category_name"
        />
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
    sidebarFilter,
  },
  data: (vm) => {
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
        min_price: 0,
      },
      filterItem: {
        search: null,
        price: "asc",
        state,
        category_id: [],
        max_period: 1000,
        min_period: 0,
        max_price: 1000,
        min_price: 0,
      },
      totalYourServices: null,
    };
  },
  methods: {
    openAddService(evt) {
      evt.preventDefault();
      // closeNavList()
      if (!this.userIsRoleProvider) this.fireOpenDialog("add-proposal");
      else this.fireOpenDialog("add-ready-service-dialog");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    // openAddService(evt) {
    //   evt.preventDefault();
    //   this.fireOpenDialog("add-ready-service-dialog");
    // },
    closeAddService(evt) {
      evt.preventDefault();
      this.fireCloseDialog("add-ready-service-dialog");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,

        ...this.filterItem,
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
          console.log("145", data);
          this.totalYourServices = data.meta.total;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
  },
  computed: {
    userIsRoleProvider() {
      return this.$store.state.isProviderRole;
    },
  },
  mounted() {
    this.getTotalYourServices();
    //this.getCategories();
    console.log("items here=>", this.totalYourServices);
  },
};
</script>

<style></style>
