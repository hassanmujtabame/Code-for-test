<template>
  <div class="work-space-requests">
    <div class="container work-space-requests-contain">
      <d-filter-list
        :call-list="getWorkSpacesReservations"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
        class="filter-requests"
      >
        <template v-slot:total>
          <h4 class="fw-bold">حجوزات أماكن العمل</h4>
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
          <ConsultingRequest
            :itemId="item.id"
            :status="item.status"
            :title="item.title"
            :userName="item.user_info.name"
            :dateRequest="item.start_date"
            :timeRequest="item.available_time"
            :place="item.city"
            :desc="item.description"
            :price="item.price"
            @update-list="updateList"
            :description="item.desc"
          >
          </ConsultingRequest>
        </template>
      </d-filter-list>
    </div>
    <showConfirmSessionDialog />
    <showRescheduleDialog @update-list="updateList" />
  </div>
</template>
  <script>
import ConsultingRequest from "./card-item.vue";
import showConfirmSessionDialog from "./dialogs/confirm-accept/index";
import showRescheduleDialog from "./dialogs/reschedule/index";
import workSpacesAPI from "@/services/api/consulting/index";
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
        { status: null, label: "في انتظار موافقتك" },
        { status: "waiting", label: "قادمة" },
        { status: "approve", label: "حالية" },
        { status: "finished", label: "سابقة" },
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
    async getWorkSpacesReservations(metaInfo) {
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
.work-space-requests {
  margin-top: 83px;
  background-color: #F6F8F9;
  padding: 5rem 0;
}
.filter-requests {
  padding: 1.5em;
  border-radius: 10px;
}
</style>