<template>
  <div class=" ">
    <apexchart type="bar" :options="chartOptions" :series="series1" />
  </div>
</template>

<script>
export default {
  name: "affiliate-marketing-visits",
  data: function () {
    return {
      series1: [
        {
          name: "الزيارات",
          data: [56, 21, 58, 63, 44, 55, 17],
        },
      ],
      series2: [
        {
          name: "الإحالات",
          data: [56, 60, 57, 14, 25, 63, 61],
        },
      ],
      series3: [
        {
          name: "العمليات",
          data: [23, 10, 57, 56, 61, 58, 44],
        },
      ],
      series4: [
        {
          name: "الروابط",
          data: [55, 17, 44, 63, 60, 26, 56],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
            borderRadius: 10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },

        fill: {
          colors: ["#FFBC00"],
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          categories: [
            "السبت",
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
          ],
        },
      },
      chartOptions1: {
        ...this.chartOptions,
      },
    };
  },
  methods: {
    async filterData() {
      try {
        const visitsResponse = await axios.get(`/affiliates/visitors`, {});
        // params: {
        //     startDate: this.startDate,
        //     endDate: this.endDate,
        //   },

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

<style></style>
