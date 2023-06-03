<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container">
      <d-filter-list
        :call-list="loadList"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
      >
        <template v-slot:total>
          <h4 class="fw-bold">طلبات شراء خدماتك</h4>
          <h6 v-if="readyService">
            {{ $t("service") }} : {{ readyService.title }}
          </h6>
        </template>
        <template v-slot:before-body>
          <ul class="nav nav-pills mb-3">
            <li
              v-for="(btn, i) in actions"
              :key="i"
              class="nav-item col-12 col-md-3"
            >
              <button
                class="nav-link border w-75 t-c m-auto"
                :class="{ active: status == btn.status }"
                type="button"
                @click="changeStatus(btn.status)"
              >
                {{ btn.label }}
              </button>
            </li>
          </ul>
        </template>
        <template v-slot:default="{ item }">
          <d-request-purchase-card
            :item="item"
            :itemId="item.id"
            :state="item.state"
            :status="item.status"
            :service="item.title"
            :name="item.from_user"
            :dateRequest="item.created_at"
            :place="item.city"
            :during="item.implementation_period"
            :requests="item.count_requests"
            :description="item.note"
            :homeDelivery="item.home_delivery"
            :delivery="item.delivery_product_available"
            :route-full="redirectToReadyService"
            @cancel-success="cancelledOrder"
          >
          </d-request-purchase-card>
        </template>
      </d-filter-list>
    </div>
    <confirmRequestPurchase />
  </div>
</template>
<script>
import serviceProviderAPI from "@/services/api/service-provider";
import requestPurchasesAPI from "@/services/api/service-provider/provider/request-purchases.js";
import confirmRequestPurchase from "./dialogs/confirm-request-puchase.vue";
export default {
  name: "request-purchase-services",
  components: {
    confirmRequestPurchase,
  },
  data: () => {
    return {
      loading: true,
      hasError: false,
      readyService: null,
      status: null,
      actions: [
        { label: "كل الطلبات", status: null },
        { label: "طلبات بأنتظار الموافقة", status: "waiting" },
        { label: "طلبات تعمل عليها", status: "underway" },
        { label: "طلبات تم الانتهاء منها", status: "finished" },
        //{label:'طلبات تم إلغاؤها',status:"excluded"},
      ],
      filterItem: {
        ready_service: null,
        search: null,
        created_at: "asc",
        status: null,
      },
    };
  },
  methods: {
    async initializing() {
      this.loading = true;
      this.hasError = false;
      if (this.$route.params.id)
        try {
          let { data } = await serviceProviderAPI.readyService.getItem(
            this.$route.params.id
          );
          if (data.success) {
            this.readyService = data.data;
            this.filterItem.ready_service = this.readyService.id;
          } else {
            this.hasError = true;
          }
        } catch (error) {
          this.hasError = true;
        }
      this.loading = false;
    },
    cancelledOrder(/*item*/) {
      this.fireEvent("d-filter-list-refresh");
    },
    redirectToReadyService(item) {
      if (item.status == "waiting" || item.service.state == "online")
        this.router_push("service-provider-ready-service", {
          id: item.service.id,
        });
      else
        this.router_push("service-provider-request-purchase-service-show", {
          id: item.id,
        });
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem,
        };
        return await requestPurchasesAPI.getAll(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
</style>