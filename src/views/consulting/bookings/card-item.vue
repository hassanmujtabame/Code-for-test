<template>
  <div class="card-body d-flex gap-3">
    <div class="d-flex flex-column px-2 p py-2 gap-2" style="flex: 1">
      <div class="d-flex gap-2 flex-wrap align-items-center">
        <div
          v-if="statusText"
          class="consulting-booking__status"
          :class="statusClass"
        >
          {{ statusText }}
        </div>
        <div v-if="departmentName" class="text-center field-counseling">
          {{ $t("field-counseling") }} :
          <span>{{ departmentName ?? "N/A" }} </span>
        </div>
      </div>
      <div class="d-flex gap-2 flex-wrap mt-3">
        <p class="consulting-booking__info-label">
          <d-user-rect-icon :size="16" color="currentColor" />
          {{ userName }}
        </p>
        <p class="consulting-booking__info-label">
          <d-calendar-icon :size="16" color="currentColor" />
          {{ dateBooking }}
        </p>
        <p class="consulting-booking__info-label">
          <d-time-icon :size="16" color="currentColor" />
          {{ timeFormatAMPM(timeBooking, true) }}
        </p>
        <p class="consulting-booking__info-label">
          <d-time-icon :size="16" color="currentColor" />
          {{ duringBooking }}{{ $t("minute") }}
        </p>
        <p style="color: #ff1616" class="consulting-booking__info-label">
          <d-empty-wallet-icon :size="16" color="#FF1616" />
          {{ price }}{{ $t("riyals") }}
        </p>
      </div>
      <div style="min-height: 30px">
        <div class="desc-text t-c w-100 m-0" v-html="desc"></div>
      </div>
    </div>
    <div
      class="d-flex flex-column px-2 py-2 gap-2"
      style="flex-grow: 0; justify-content: space-between"
    >
      <div class="start-time-text d-flex gap-2 flex-wrap">
        <div class="clock-icon">
          <d-time-icon :size="16" color="currentColor" />
        </div>
        <div class="consulting-start-date-text">
          {{ $t("request-start-date") }} : {{ dateBooking }}
        </div>
      </div>
      <div class="d-flex gap-2" style="">
        <button
          style="flex: 1"
          @click="showConsultationLink"
          class="btn btn-main-v"
        >
          {{ $t("Consultation-link") }}
        </button>
        <button
          style="flex: 1; color: #1fb9b3"
          @click="rescheduleDialog"
          class="btn btn-main-v bg-white"
          v-if="status !== 'finished'"
        >
          {{ $t("reschedule") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import consultingAPI from "@/services/api/consulting";
export default {
  name: "my-booking-client-card",
  props: {
    item: {},
  },
  computed: {
    itemId() {
      return this.item.id;
    },
    departmentName() {
      return this.item.department_name;
    },
    userName() {
      return this.item.user_info.name;
    },
    price() {
      return this.item.price;
    },
    desc() {
      return this.item.description;
    },
    dateBooking() {
      return this.item.start_date;
    },
    timeBooking() {
      return this.item.available_time;
    },
    duringBooking() {
      return this.item.during_booking ?? "N/A";
    },
    status() {
      return this.item.status;
    },
    statusText() {
      switch (this.status) {
        case "disapprove":
          return this.$t("disapproved");
        case "waiting":
          return this.$t("awaiting-approval");
        case "approve":
          return this.$t("approved");
        case "finished":
          return this.$t("finished-consulting");
        default:
          return "";
      }
    },
    statusClass() {
      switch (this.status) {
        case "disapprove":
        case "waiting":
        case "approve":
        case "finished":
          return `consulting-booking__status-${this.status}`;
        default:
          return "";
      }
    },
  },
  methods: {
    showConsultationLink() {
      this.fireOpenDialog("show-consultation-link", {
        title: this.$t("Consultation-link"),
        description: `سيتم بدأ الجلسة الساعة ${this.timeFormatAMPM(
          this.timeBooking
        )} في تاريخ ${this.dateBooking}  
        لا تقلق  سنقوم تنبيهك قبل موعد الاستشارة!`,
      });
    },
    rescheduleDialog() {
      this.fireOpenDialog("reschedule-session", {
        id: this.itemId,
        start_date: this.dateBooking,
        available_time: this.timeBooking,
      });
    },
  },
};
</script>

<style scoped>
.card-body {
  padding-bottom: 22px;
  border-bottom: 1px #cdd7d8 solid;
}
.consulting-booking {
  padding: 10px;
  border-bottom: 1px solid rgba(205, 215, 216, 1);
}
.consulting-booking__title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  display: flex;
  align-items: center;
  text-transform: capitalize;

  color: #414042;
}
.consulting-booking__type {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #f2631c;
}
.consulting-booking__info-label {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */

  color: #737373;
}
.start-time-text {
  font-weight: 400;
  font-size: 16px;
  color: #737373;
}
.desc-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* Number of lines to show */
}
.field-counseling > span,
.field-counseling {
  color: #1fb9b3;
  font-size: 20px;
  font-weight: 700;
}
.field-counseling > span {
  color: #000;
}
.consulting-booking__status {
  padding: 3px 9px;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 500;
  color: white !important;
}
.consulting-booking__status-approve {
  background: var(--color-accent);
}
.consulting-booking__status-disapprove {
  background: var(--color-dark-gray);
}
.consulting-booking__status-waiting {
  background: var(--color-secondary);
}
.consulting-booking__status-finished {
  background: var(--color-primary);
}
</style>
