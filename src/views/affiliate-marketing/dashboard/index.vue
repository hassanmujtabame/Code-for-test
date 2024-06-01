<template>
  <div class="d-flex flex-wrap">
    <div class="chart-container">
      <label>
        <label>{{ $t("visits") }} <i class="fa-solid fa-share"></i></label>
      </label>
      <apexchart type="bar" :options="chartOptions" :series="series1" />
    </div>
    <div class="chart-container">
      <label>{{ $t("referrals") }} <i class="fa-solid fa-share"></i></label>
      <apexchart type="bar" :options="chartOptions" :series="series2" />
    </div>
    <div class="chart-container">
      <label>{{ $t("operations") }} <i class="fa-solid fa-share"></i></label>
      <apexchart type="bar" :options="chartOptions" :series="series3" />
    </div>
    <div class="chart-container">
      <label>{{ $t("links") }} <i class="fa-solid fa-share"></i></label>
      <apexchart type="bar" :options="chartOptions" :series="series4" />
    </div>
  </div>
</template>

<script>
export default {
  name: "affiliate-marketing-dashboard",
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
            borderRadius: 4,
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
};
</script>

<style scoped>
.chart-container {
  width: 50%;
}
label {
  font-family: Cairo;
  font-size: 22px;
  font-weight: 600;
  line-height: 41.23px;
  color: #414042;
}
label i {
  font-size: 20px;
}
</style>
