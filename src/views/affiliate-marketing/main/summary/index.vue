<template>
  <div>
    <div class="dashbord">
      <div>
        <div class="row justify-content-between">
          <h1 class="col-2">الملخص</h1>
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
        <SectionBalance
          :visits="totalVisits"
          :totalProfite="profileData.Profitratio"
          :subscriptions="totalSubscriptions"
        />
      </div>

      <div
        class="mt-5 p-4"
        style="
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.125) 0 0 10px 1px;
        "
      >
        <h4 class="row mb-2">الزيارات</h4>
        <bar-chart
          class="row"
          :chartData="chartDataVisits"
          :chart-options="chartOptionsVisits"
        ></bar-chart>
      </div>

      <div
        class="mt-5 p-4"
        style="
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.125) 0 0 10px 1px;
        "
      >
        <h2 class="row mb-2">الاحالات</h2>
        <bar-chart
          class="row"
          :chart-data="chartDataSubscriptions"
          :chart-options="chartOptionsSubscriptions"
        ></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

import SectionBalance from "./parts/section-balance/index.vue";
import BarChart from "./parts/section-balance/BarChart.vue";
export default {
  name: "affiliate-marketing-dashboard",
  components: {
    SectionBalance,
    BarChart,
    DatePick,
  },
  props: ["profileData"],
  data() {
    return {
      categorizedVisitsChartData: {}, // Initialize with empty data or default
      chartDataVisits: {
        labels: [],
        datasets: [
          {
            label: "الزيارات",
            backgroundColor: "#2DB7B3",
            // borderColor: 'rgba(75, 192, 192, 1)',
            // borderWidth: 1,
            data: [],
          },
        ],
      },
      chartOptionsVisits: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 32,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
      chartDataSubscriptions: {
        labels: [],
        datasets: [
          {
            label: "الاحالات",
            backgroundColor: "#2DB7B3",
            // borderColor: 'rgba(75, 192, 192, 1)',
            // borderWidth: 1,
            data: [],
          },
        ],
      },
      chartOptionsSubscriptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 32,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
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
      totalSubscriptions: [],
    };
  },
  methods: {
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
      try {
        const subscriptionsResponse = await axios.get(
          `/affiliates/subscriptions-users`
        );

        if (subscriptionsResponse.data.success) {
          this.totalSubscriptions = subscriptionsResponse.data.data;
        } else {
          console.error("Failed to fetch subscriptions data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    async filterData() {
      if (!this.startDate || !this.endDate) return;

      const daysBetweenDates = this.getDaysBetweenDates();
      console.log("Days between selected dates:", daysBetweenDates);

      try {
        const visitsResponse = await axios.get(`/affiliates/visitors`, {
          params: {
            start_date: this.startDate,
            end_date: this.endDate,
          },
        });

        if (visitsResponse.data.success) {
          const categorizedVisits = this.categorizeVisitsByDate(
            visitsResponse.data.data
          );
          this.updateChartDataVisits(categorizedVisits);

          console.log("Fetched Visits:", categorizedVisits);
        } else {
          console.error("Failed to fetch visits data");
        }

        const subscriptionsResponse = await axios.get(
          `/affiliates/subscriptions-users`,
          {
            params: {
              start_date: this.startDate,
              end_date: this.endDate,
            },
          }
        );

        if (subscriptionsResponse.data.success) {
          const categorizedSubscriptions = this.categorizeSubscriptionsByDate(
            subscriptionsResponse.data.data
          );
          this.updateChartDataSubscriptions(categorizedSubscriptions);

          console.log("Fetched Subscriptions:", categorizedSubscriptions);
        } else {
          console.error("Failed to fetch subscriptions data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },

    formatLabel(dateString) {
      const dateParts = dateString.split("-");
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${day} ${monthNames[month - 1]}`;
    },

    updateChartDataVisits(categorizedVisits) {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);

      const labels = [];
      const dataPoints = [];

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const formattedDate = [
          ("0" + currentDate.getDate()).slice(-2),
          ("0" + (currentDate.getMonth() + 1)).slice(-2),
          currentDate.getFullYear(),
        ].join("-");

        labels.push(this.formatLabel(formattedDate)); // Apply custom label format
        dataPoints.push(categorizedVisits[formattedDate] || 0);

        console.log("aaaa", categorizedVisits["28-1-2024"]);

        currentDate.setDate(currentDate.getDate() + 1);
      }

      this.chartDataVisits = {
        labels: labels,
        datasets: [
          {
            label: "الزيارات",
            backgroundColor: "#2DB7B3",
            data: dataPoints,
          },
        ],
      };
    },

    updateChartDataSubscriptions(categorizedSubscriptions) {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);

      const labels = [];
      const dataPoints = [];

      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const formattedDate = [
          ("0" + currentDate.getDate()).slice(-2),
          ("0" + (currentDate.getMonth() + 1)).slice(-2),
          currentDate.getFullYear(),
        ].join("-");

        labels.push(this.formatLabel(formattedDate)); // Apply custom label format
        dataPoints.push(categorizedSubscriptions[formattedDate] || 0);

        currentDate.setDate(currentDate.getDate() + 1);
      }

      this.chartDataSubscriptions = {
        labels: labels,
        datasets: [
          {
            label: "الاحالات",
            backgroundColor: "#2DB7B3",
            data: dataPoints,
          },
        ],
      };
    },

    getDaysBetweenDates() {
      const days = [];
      let currentDate = new Date(this.startDate);

      while (currentDate <= new Date(this.endDate)) {
        const formattedDate = [
          ("0" + currentDate.getDate()).slice(-2),
          ("0" + (currentDate.getMonth() + 1)).slice(-2),
          currentDate.getFullYear(),
        ].join("-");

        days.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return days;
    },
    categorizeVisitsByDate(visitsData) {
      const categorizedData = {};

      // Loop through the received visits data
      visitsData.forEach((visit) => {
        const visitDate = new Date(visit.created_at);
        const formattedDate = `${visitDate.getDate()}-${
          visitDate.getMonth() + 1
        }-${visitDate.getFullYear()}`;

        // Check if the date exists in categorizedData, if not initialize it with count 1
        if (!categorizedData[formattedDate]) {
          categorizedData[formattedDate] = 1;
        } else {
          // Increment the count for the existing date
          categorizedData[formattedDate]++;
        }
      });

      return categorizedData;
    },
    categorizeSubscriptionsByDate(subscriptionsData) {
      const categorizedData = {};

      subscriptionsData.forEach((subscription) => {
        const subscriptionDate = new Date(subscription.created_at);
        const formattedDate = `${subscriptionDate.getDate()}-${
          subscriptionDate.getMonth() + 1
        }-${subscriptionDate.getFullYear()}`;

        if (!categorizedData[formattedDate]) {
          categorizedData[formattedDate] = 1;
        } else {
          categorizedData[formattedDate]++;
        }
      });

      return categorizedData;
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
    this.total();
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
