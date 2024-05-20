<template>
  <div style="margin-top: 96px">
    <div class="container mt-5">
      <d-filter-list
        :call-list="loadList"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
        classTitle="col-md-4"
        classSearchOrder="col-md-8 justify-content-center"
        classColSearch="w-50"
        classColOrder="w-50"
        searchPlaceholder="أبحث  في قائمة الاستشارات"
      >
        <template v-slot:title>
          <h4 class="page-title">استشاراتي</h4>
        </template>
        <template v-if="false" v-slot:before-body>
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
          <ConsultingRequest :item="item" @update-list="updateList" />
        </template>
      </d-filter-list>
    </div>
    <showConfirmSessionDialog />
    <showRescheduleDialog @update-list="updateList" />
  </div>
</template>
<script>
import ConsultingRequest from "../bookings/card-item.vue";
import showConfirmSessionDialog from "./dialogs/confirm-accept/index";
import showRescheduleDialog from "./dialogs/reschedule/index";
import consultingAPI from "@/services/api/consulting/index";
export default {
  name: "request-invet-projects",
  components: {
    ConsultingRequest,
    showConfirmSessionDialog,
    showRescheduleDialog,
  },
  data: () => {
    return {
      status: null, //status=approve|disapprove|waiting|finished
      actions: [
        { status: null, label: "كل طلبات" },
        { status: "waiting", label: "طلبات بانتظار موافقتك" },
        { status: "approve", label: "طلبات تم الموافقة عليها" },
        { status: "finished", label: "طلبات تم الانتهاء منها" },
      ],
      filterItem: {
        search: null,
        created_at: "asc",
        status: null,
      },
    };
  },
  methods: {
    updateList() {
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 4,
          ...this.filterItem,
        };
        return await consultingAPI.requests.getAll(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style scoped>
.page-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-align: right;
  text-transform: capitalize;
  color: #1fb9b3;
}
</style>
