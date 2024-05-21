<template>
  <div style="margin-top: 96px">
    <div class="container mt-5">
      <d-filter-list
        classTitle="col-lg-4"
        classSearchOrder="col-lg-8 "
        :call-list="loadList"
        hideSide
        classColCard="col-12 mt-2"
        @change="changeFilter"
      >
        <template v-slot:title>
          <h4 class="page-title">استشاراتي</h4>
        </template>
        <template v-slot:before-body>
          <ul class="nav nav-pills mb-3">
            <li
              v-for="(btn, i) in actions"
              :key="i"
              class="nav-item px-1 col-12 col-md-4"
            >
              <button
                style="font-size: 20px; line-height: 32px"
                class="nav-link border w-100 py-2 t-c m-auto"
                :class="{ active: status == btn.status }"
                type="button"
                @click="changeStatus(btn.status)"
              >
                {{ btn.label }}
              </button>
            </li>
          </ul>
          <!-- Upgrade your account WANRING tape -->
          <div
            v-if="false"
            class="d-flex warning-tap gap-2 justify-content-between align-items-center"
          >
            <div class="d-inline gap-2 flex-wrap">
              <div class="d-inline icon">
                <img
                  src="@/assets/img/warning.png"
                  height="26px"
                  width="auto"
                />
              </div>
              <div class="d-inline text">
                تذكر أنك لا تستطيع قبول أكثر من 10 استشارات في نفس الوقت / تلغى
                استشاراتك قيد الانتظار بعد مرور اسبوع
              </div>
            </div>
            <div class="d-inline">
              <div class="d-inline">
                <router-link
                  class="link"
                  :to="getRouteLocale('network-subscribe')"
                >
                  رقي حسابك</router-link
                >
              </div>
              <div class="d-inline text">
                {{ " " }}لقبول اكثر من 10 استشارات
              </div>
            </div>
          </div>
        </template>
        <template v-slot:default="{ item }">
          <ConsultingRequest :item="item" @update-list="updateList">
          </ConsultingRequest>
        </template>
      </d-filter-list>
    </div>
    <showLinkDialog />

    <showRescheduleDialog @update-list="updateList" />
  </div>
</template>
<script>
import ConsultingRequest from "./card-item.vue";
import consultingAPI from "@/services/api/consulting/index";
import showLinkDialog from "./dialogs/show-consultation-link/index";
import showRescheduleDialog from "../requests/dialogs/reschedule/index.vue";
export default {
  name: "consultation-bookings-page",
  components: {
    ConsultingRequest,
    showLinkDialog,
    showRescheduleDialog,
  },
  data: () => {
    return {
      status: null, //status=coming|past
      actions: [
        { status: null, label: "كل الاستشارات" },
        { status: "working_on", label: "استشارات تعمل عليها" },
        { status: "done", label: "استشارات تم الانتهاء منها" },
      ],
      filterItem: {
        search: null,
        created_at: "asc",
        status_working: null,
      },
    };
  },
  methods: {
    updateList() {
      this.fireEvent("d-filter-list-change-page", 1);
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status_working = status;
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
        return await consultingAPI.client.getBookings(params);
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
.warning-tap {
  margin-block: calc(20px);
  padding: 13px;
  background-color: rgba(255, 222, 47, 0.1);
}
.warning-tap * {
  font-size: 16px;
  font-weight: 500;
  color: #dc831d;
}
.link {
  color: #1fb9b3;
  text-decoration: underline;
}
</style>
