<template>
  <div>
    <div class="dashbord">
      <div>
        <div class="row justify-content-between">
          <h1 class="col-2">الزيارات</h1>
          <div
            class="col-10 d-flex justify-content-end"
            style="height: 35px; gap: 4%"
          >
            <div class="d-flex justify-content-center gap-2 align-items-center">
              <h3>من</h3>
              <date-pick
                :months="months"
                nextMonthCaption=""
                prevMonthCaption=""
                v-model="startDate"
              ></date-pick>
            </div>
            <div class="d-flex justify-content-center gap-2 align-items-center">
              <h3>الى</h3>
              <date-pick
                :months="months"
                nextMonthCaption=""
                prevMonthCaption=""
                v-model="endDate"
              ></date-pick>
            </div>
            <button
              @click="filterData"
              class="text-white border-0"
              style="
                border-radius: 5px;
                box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
                padding: 10px;
                height: auto;
                margin-right: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25%;
                background-color: #2db7b3;
              "
            >
              فلتره
            </button>
          </div>
        </div>
        <div style="padding: 20px; border: 1px solid #2db7b3">
          <SectionTable :visits="totalVisits" />
        </div>
        <div class="row mt-4 gap-3">
          <button
            style="
              border-radius: 5px;
              box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
              padding: 10px;
              height: auto;
              margin-right: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100px;
              border: 2px solid rgb(182, 182, 182);
              background-color: transparent;
            "
          >
            {{ totalVisits.length }}
          </button>
          <button
            class="text-white border-0"
            style="
              border-radius: 5px;
              box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
              padding: 10px;
              height: auto;
              margin-right: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 150px;
              background-color: #2db7b3;
            "
          >
            اجمالى عدد الزيارات
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

import SectionTable from "./parts/section-table/index.vue";

export default {
  name: "affiliate-marketing-visits",
  components: {
    SectionTable,
    DatePick,
  },
  data: () => ({
    startDate: "",
    endDate: "",
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    totalVisits: [],
  }),
  methods: {
    async filterData() {
      try {
        const visitsResponse = await axios.get(`/affiliates/visitors`, {
          params: {
            startDate: this.startDate,
            endDate: this.endDate,
          },
        });

        if (visitsResponse.data.success) {
          this.totalVisits = visitsResponse.data.data;
        } else {
          console.error("Failed to fetch visits data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    async total() {
      try {
        const visitsResponse = await axios.get(`/affiliates/visitors`);

        if (visitsResponse.data.success) {
          this.totalVisits = visitsResponse.data.data;
        } else {
          console.error("Failed to fetch visits data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
  mounted() {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const formattedFirstDay = `${firstDayOfMonth.getFullYear()}-${(
      "0" +
      (firstDayOfMonth.getMonth() + 1)
    ).slice(-2)}-${("0" + firstDayOfMonth.getDate()).slice(-2)}`;

    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    const formattedLastDay = `${lastDayOfMonth.getFullYear()}-${(
      "0" +
      (lastDayOfMonth.getMonth() + 1)
    ).slice(-2)}-${("0" + lastDayOfMonth.getDate()).slice(-2)}`;

    this.startDate = formattedFirstDay;
    this.endDate = formattedLastDay;
    this.filterData();
  },
};
</script>

<style>
.vdpArrowPrev:after {
  border-right-color: #2db7b3;
}

.vdpArrowNext:after {
  border-left-color: #2db7b3;
}

.vdpCell.selectable:hover .vdpCellContent,
.vdpCell.selected .vdpCellContent {
  background: #2db7b3;
}

.vdpCell.today {
  color: #2db7b3;
}

.vdpTimeUnit > input:hover,
.vdpTimeUnit > input:focus {
  border-bottom-color: #2db7b3;
}

.vdpComponent.vdpWithInput > input {
  height: 100%;
  background: #eee;
  border-radius: 5px;
  border-color: #979797;
  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
}
</style>
