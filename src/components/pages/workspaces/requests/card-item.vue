<template>
  <div class="work-space-request">
    <div class="d-flex align-items-center">
      <span class="status">انتظار</span>
      <p class="title">غرفة مكتبية: الورود</p>
    </div>

    <div class="d-flex align-items-center icons">
      <div class="mx-3">
        <d-user-rect-icon :size="16" color="currentColor" />
        <span class="mx-1">نهى علي</span>
      </div>
      <div class="mx-3">
        <d-timer-icon :size="16" color="currentColor" />
        <span class="mx-1">9ص - 12ص </span>
      </div>
      <div class="mx-3">
        <d-calendar-icon :size="16" color="currentColor" />
        <span class="mx-1">20/12/2022 </span>
      </div>
      <div class="mx-3">
        <d-money-icon :size="16" color="currentColor" />
        <span class="mx-1">150 ر.س/ساعة </span>
      </div>
    </div>

    <div class="row align-items-center">
      <p class="t-c my-4 col-lg-8">
        هنا هيبقى مكتوب وصف المكان بحيث إن اليوزر يفتكر المكان حتى بدون ما يحتاج
        يدخل هنا هيبقى مكتوب وصف المكان بحيث إن اليوزر يفتكر المكان حتى بدون ما
        يحتاج يدخل.
      </p>
      <div class="col-lg-4">
        <button class="btn btn-customer" @click="acceptRequest">
          {{ $t("accept") }}
        </button>
        <button
          class="btn btn-customer btn-danger mx-2"
          @click="confirmDisapproveRequest"
        >
          {{ $t("reject") }}
        </button>
      </div>
    </div>
    <hr/>
  </div>
</template>
  
  <script>
import consultingAPI from "@/services/api/consulting";
export default {
  name: "my-request-client-card",
  props: {
    itemId: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    userName: {
      type: String,
    },
    place: {
      type: String,
    },
    desc: {
      type: String,
    },
    dateRequest: {
      type: String,
    },
    timeRequest: {
      type: String,
    },
    status: {
      type: String,
    },
  },

  methods: {
    rescheduleRequest() {
      this.fireOpenDialog("reschedule-session", {
        id: this.itemId,
        session_date: this.dateRequest,
        session_time: this.timeRequest,
      });
    },
    async finishSession() {
      try {
        let { data } = await consultingAPI.requests.finishedIt(this.itemId);
        if (data.success) {
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }
    },
    confirmFinishRequest() {
      let dataEvt = {
        title: "انت على وشك انهاء الجلسة",
        description: "",
        type: "warning",
        btns: [
          {
            title: this.$t("confirm-finishing-session"),
            action: this.finishSession,
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    acceptRequest() {
      this.fireOpenDialog("show-session-confirmation", {
        id: this.itemId,
        title: this.userName,
        description: this.description,
      });
    },
    async disapproveSession() {
      try {
        let { data } = await consultingAPI.requests.disapproveIt(this.itemId);
        if (data.success) {
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
        window.DHelp.catchException.call(this, error, this.$refs.form);
      }
    },
    confirmDisapproveRequest() {
      let dataEvt = {
        title: "انت على وشك رفض الطلب",
        description: "",
        type: "warning",
        btns: [
          {
            title: this.$t("confirm-rejection"),
            action: this.disapproveSession,
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
  },
};
</script>
  
  <style scoped>
.work-space-request .status {
  margin: 10px;
  font-size: 15px;
  background: #ffbc00;
  color: white;
  padding: 10px 25px;
  border-radius: 10px;
}
.work-space-request .title {
  margin: 0;
  color: #1fb9b3;
  font-size: 20px;
}

@media (max-width: 991px) {
  .work-space-request{
    text-align: center !important;

  }
  .icons {
    flex-wrap: wrap;
  }
}
</style>    