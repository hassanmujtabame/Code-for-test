<template>
    <div>
        <div class="dashbord">
            <div>
                <div class="row justify-content-between">
                    <h1 class="col-2">
                        الملخص
                    </h1>
                    <div class="col-10 d-flex justify-content-end" style="height: 35px; gap: 4%">
                        <!-- <input type="text" style="width: 32%">
                        <input type="text" style="width: 32%"> -->
                        <date-pick :months="months" nextMonthCaption="" prevMonthCaption=""
                            v-model="start_date"></date-pick>
                        <date-pick :months="months" nextMonthCaption="" prevMonthCaption="" v-model="end_date"></date-pick>

                        <button class="text-white border-0"
                            style="border-radius : 5px; box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center; width: 25%; background-color: #2DB7B3">
                            فلتره
                        </button>

                    </div>

                </div>
                <SectionBalance />
            </div>

            <div class="mt-5 p-4" style="
            border-radius : 20px; 
            box-shadow: rgba(0, 0, 0, 0.125) 0 0 10px 1px">
                <h2 class="row mb-2">
                    الزيارات
                </h2>
                <bar-chart class="row" :chart-data="chartDataVisits" :chart-options="chartOptionsVisits"></bar-chart>
            </div>


            <div class="mt-5 p-4" style="
            border-radius : 20px; 
            box-shadow: rgba(0, 0, 0, 0.125) 0 0 10px 1px">
                <h2 class="row mb-2">
                    الاحالات
                </h2>
                <bar-chart class="row" :chart-data="chartDataRefers" :chart-options="chartOptionsRefers"></bar-chart>
            </div>

        </div>
    </div>
</template>

<script>

import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';


import SectionBalance from './parts/section-balance/index.vue'
import BarChart from './parts/section-balance/BarChart.vue'
export default {
    name: 'affiliate-marketing-dashboard',
    components: {
        SectionBalance,
        BarChart,
        DatePick
    },
    data: () => ({
        chartDataVisits: {
            labels: ['1 jun', '2 jun', '3 jun', '4 jun', '5 jun', '6 jun', '7 jun', '8 jun', '9 jun', '10 jun',],
            datasets:
                [
                    {
                        label: 'الزيارات',
                        backgroundColor: '#2DB7B3',
                        // borderColor: 'rgba(75, 192, 192, 1)',
                        // borderWidth: 1, 
                        data: [40, 20, 12, 40, 20, 12, 30, 40, 20, 12]
                    }]
        },
        chartOptionsVisits: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 32
                        }
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
        },
        chartDataRefers: {
            labels: ['1 jun', '2 jun', '3 jun', '4 jun', '5 jun', '6 jun', '7 jun', '8 jun', '9 jun', '10 jun',],
            datasets:
                [
                    {
                        label: 'الاحالات',
                        backgroundColor: '#2DB7B3',
                        // borderColor: 'rgba(75, 192, 192, 1)',
                        // borderWidth: 1, 
                        data: [20, 30, 12, 10, 5, 30, 32, 28, 18, 17]
                    }]
        },
        chartOptionsRefers: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 32
                        }
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
        },
        start_date: '2023-01-01',
        end_date: '2024-01-01',
        months: [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ],
    })
}
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

.vdpTimeUnit>input:hover,
.vdpTimeUnit>input:focus {
    border-bottom-color: #2db7b3;
}

.vdpComponent.vdpWithInput>input {
    height: 100%;
    background: #eee;
    border-radius: 5px;
    border-color: #979797;
    box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
}
</style>