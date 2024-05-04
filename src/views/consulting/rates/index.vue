<template>
  <div class="page-rate-service" :class="{ 'page-rate-service': isMobile }">
    <div class="container">
      <div class="page-rate-service-card mt-5">
        <d-filter-list
          hideSide
          classTitle="col-lg-4"
          classSearchOrder="col-lg-8 "
          :searchPlaceholder="$t('search_by_service')"
          :call-list="loadList"
          classColCard="col-12"
          @change="changeFilter"
        >
          <template v-slot:title>
            <h4 class="fw-bold mx-5">تقييم استشاراتي</h4>
          </template>
          <template v-slot="{ item }">
            <cardRate
              :itemId="item.id"
              :name="item.from_user"
              :image="item.image"
              :rate="item.rate"
              :date="`${item.created_at} ${item.time}`"
              :description="item.comment"
              :service="{
                id: item.service_id,
                title: item.title,
              }"
              @send-abuse="openSendAbuse(item)"
            >
            </cardRate>
          </template>
        </d-filter-list>
      </div>
    </div>
    <sendAbuseDialog />
  </div>
</template>
<script>
import cardRate from "./card-rate.vue";
import sendAbuseDialog from "./abuse-comment.vue";
import consultingAPI from "@/services/api/consulting";
import readyServiceAPI from "@/services/api/service-provider/provider/ready-service.js";
export default {
  name: "request-purchase-services",
  components: {
    cardRate,
    sendAbuseDialog,
  },
  data: () => {
    return {
      status: "all",
      actions: [
        { label: "كل الطلبات", status: "all" },
        { label: "طلبات بأنتظار الموافقة", status: "pending" },
        { label: "طلبات تعمل عليها", status: "processing" },
        { label: "طلبات تم الانتهاء منها", status: "completed" },
      ],
    };
  },
  methods: {
    openSendAbuse(item) {
      this.fireOpenDialog("abuse-comment", item);
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
        return await consultingAPI.consultants.getRates(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style>
.page-rate-service {
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: var(--bg-gray);
}
.page-rate-service-mobile {
  padding-top: 80px;
}
.page-rate-service-card {
  background: white;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
}
</style>
