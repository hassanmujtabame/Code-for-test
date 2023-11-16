<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<!-- old but gold -->



<!-- <template>
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto'
  export default {
    data: () => {
      return {
        data: {
          labels: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          datasets: [{
            label: ' (نقرات) ملخص أخر ثلاثين يوم',
            data: [0, 3, 6, 15, 50, 25,32, 55, 62, 81, 23, 21,2, 59, 12, 81, 56, 55,32, 62, 79, 81, 56, 55,65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'ملخص اخر ثلاثين يوم (التحويلات)  ',
            data: [0, 3, 77, 15, 73, 4,34, 73, 80, 81, 56, 55,65, 59, 80, 81, 56, 55,65, 59, 80, 81, 56, 55,65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#e47470ff',
            backGroundColor: '#e47470ff',
            tension: 0.1
          }]
        }
      }
    }
    ,
    mounted() {
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  </script>
  <style>
  .test {
    color : rgb(75, 192, 192)
  }
  </style> -->