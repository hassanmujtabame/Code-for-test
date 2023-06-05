<template>
  <div class="work-space-request">
    <div class="d-flex align-items-center">
      <span class="status waiting-status" v-if="item.status == 'waiting'"
        >انتظار</span
      >
      <span class="status precedent-status" v-if="item.status == 'precedent'"
        >سابق</span
      >
      <span class="status comping-status" v-if="item.status == 'comping'"
        >قادمة</span
      >
      <p class="title">{{ item.title }}</p>
    </div>

    <div class="d-flex align-items-center icons">
      <div class="mx-3">
        <d-user-rect-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.user_info.name ?? "N/A" }} </span>
      </div>
      <div class="mx-3">
        <d-timer-icon :size="16" color="currentColor" />
        <span class="mx-1"> {{ item.start_time }} - {{ item.end_time }} </span>
      </div>
      <div class="mx-3">
        <d-calendar-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.date }} </span>
      </div>
      <div class="mx-3">
        <d-money-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.price }} ر.س/ساعة </span>
      </div>
    </div>

    <div class="row align-items-center">
      <p class="t-c my-4 col-lg-8" v-html="item.description"></p>
      <div class="col-lg-4">
        <div v-if="item.status === 'waiting'">
          <button class="btn btn-customer" @click="approveWorkSpacesRequest()">
            {{ $t("accept") }}
          </button>
          <button
            class="btn btn-customer btn-danger mx-2"
            @click="disApproveWorkSpacesRequest()"
          >
            {{ $t("reject") }}
          </button>
        </div>

        <div v-if="item.status === 'comping'">
          <button class="btn btn-customer" @click="cancelWorkSpacesRequest()">
            الغاء
          </button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
  
  <script>
import WorkspaceAPI from "@/services/api/workspace";
export default {
  name: "my-request-client-card",
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    async approveWorkSpacesRequest() {
      try {
        let { data } = await WorkspaceAPI.requests.approveWorkSpacesRequest(
          this.item.id
        );
        if (data.success) {
          window.successMgs();
          this.$emit("update-list");
        } else {
          window.SwalError();
        }
      } catch (error) {
        window.SwalError(error.response.data.message);
      }
    },

    async disApproveWorkSpacesRequest() {
      try {
        let { data } = await WorkspaceAPI.requests.disApproveWorkSpacesRequest(
          this.item.id
        );
        if (data.success) {
          window.successMgs();
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.SwalError(error.response.data.message);
      }
    },

    async cancelWorkSpacesRequest() {
      try {
        let { data } = await WorkspaceAPI.requests.cancelWorkSpacesRequest(
          this.item.id
        );
        if (data.success) {
          window.successMgs();
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.SwalError(error.response.data.message);
      }
    },
  },
};
</script>
  
  <style scoped>
.status {
  margin: 10px;
  font-size: 15px;
  color: white;
  padding: 10px 25px;
  border-radius: 10px;
}
.waiting-status {
  background: #ffbc00;
}
.precedent-status {
  background: #f2631c;
}
.comping-status {
  background: #1fb9b3;
}
.work-space-request .title {
  margin: 0;
  color: #1fb9b3;
  font-size: 20px;
}
@media (max-width: 991px) {
  .work-space-request {
    text-align: center !important;
  }
  .icons {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>    