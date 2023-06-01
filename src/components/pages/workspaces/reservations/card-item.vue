<template>
  <div class="work-space-reservation">
    <div class="d-flex align-items-center">
      <span class="status">انتظار</span>
      <p class="title">{{ item.company }}</p>
    </div>

    <div class="d-flex align-items-center icons">
      <div class="mx-3">
        <d-timer-icon :size="16" color="currentColor" />
        <span class="mx-1">
          {{ item.start_time ?? "N/A" }} - {{ item.end_time ?? "N/A" }}
        </span>
      </div>
      <div class="mx-3">
        <d-calendar-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.date ?? "N/A" }} </span>
      </div>
      <div class="mx-3">
        <d-localisation-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.address ?? "N/A" }} </span>
      </div>
      <div class="mx-3">
        <d-money-icon :size="16" color="currentColor" />
        <span class="mx-1">{{ item.price }} ر.س/ساعة </span>
      </div>
    </div>

    <div class="row align-items-center">
      <p class="t-c my-4 col-lg-8" v-html="item.description"></p>
      <div class="col-lg-4">
        <div>
          <button class="btn btn-customer" @click="rescheduleRequest">
            {{ $t("reschedule") }}
          </button>
          <button
            class="btn btn-customer btn-danger mx-2"
            @click="openCancelPopUp"
          >
            الغاء
          </button>
        </div>

        <div>
          <button class="btn btn-customer" @click="showRateProvider">
            تقييم
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
  name: "my-reservation-client-card",
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    rescheduleRequest() {
      this.fireOpenDialog("reschedule-reservation", this.item);
    },

    showRateProvider() {
      let dataEvent = {
        title: "قيم مكان العمل",
        btns: [
          {
            title: "تقييم",
            action: (evt, form) => this.rateReservation(evt, form),
            class: "btn btn-customer",
          },
        ],
      };
      this.showRateMsg(dataEvent);
    },

    async rateReservation(dataE, form) {
      let valid = await form.validate();
      if (!valid) {
        return false;
      }
      let formData = this.loadObjectToForm(dataE);
      try {
        let { data } = await WorkspaceAPI.reservations.rateReservation(
          this.item.workspace_id,
          formData
        );
        if (data.success) {
          window.SwalSuccess();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        return false;
      }
    },

    // open Cancel
    openCancelPopUp() {
      let dataEvt = {
        title: "هل أنت متأكد من إلغاء حجز مكان؟",
        description: "بمجرد إلغاء الحجز سوف يتم إزالته من قائمة حجوزاتك",
        type: "warning",
        btns: [
          {
            title: "إلغاء",
            action: this.reservationCanceled,
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },

    // Cancel request
    async reservationCanceled() {
      try {
        let { data } = await WorkspaceAPI.reservations.reservationCanceled(
          this.item.id
        );
        if (data.success) {
          window.SwalSuccess();
          this.$emit("update-list");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelp.catchException.call(this, error, this.$refs.form);
      }
    },
  },
};
</script>
  
  <style scoped>
.work-space-reservation .status {
  margin: 10px;
  font-size: 15px;
  background: #ffbc00;
  color: white;
  padding: 10px 25px;
  border-radius: 10px;
}
.work-space-reservation .title {
  margin: 0;
  color: #1fb9b3;
  font-size: 20px;
}
@media (max-width: 991px) {
  .work-space-reservation {
    text-align: center !important;
  }
  .icons {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>    