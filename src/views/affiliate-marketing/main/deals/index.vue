<template>
    <div>
        <div class="dashbord">
            <div>
                <div class="row justify-content-between mb-4" style="padding: 20px; border: 1px solid #2DB7B3; width: 100%;
                margin-right: inherit;" >
                    <h1 class="col-4">
                        ملخص العمليات
                    </h1>
                    <div class="col-8 d-flex justify-content-end" style="height: 35px; gap: 4%">

                        <button
                            style="border-radius : 5px; padding:5px; height:fit-content; margin-right: 5px; display: flex; justify-content: center; align-items: center; width: 150px; border: 2px solid rgb(182, 182, 182); background-color:transparent;">
                            طلب التحويل
                            <svg style="margin-right: 5px;" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.4043 11.0326C7.4043 11.8609 8.04473 12.5269 8.83032 12.5269H10.4357C11.1188 12.5269 11.6738 11.9462 11.6738 11.2204C11.6738 10.4434 11.3323 10.1616 10.8285 9.98226L8.2582 9.08566C7.7544 8.90634 7.41284 8.63309 7.41284 7.8475C7.41284 7.13021 7.96787 6.54102 8.651 6.54102H10.2563C11.0419 6.54102 11.6824 7.20706 11.6824 8.03536" stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.53906 5.69727V13.3824" stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0781 9.53905C18.0781 14.2526 14.2526 18.0781 9.53905 18.0781C4.82549 18.0781 1 14.2526 1 9.53905C1 4.82549 4.82549 1 9.53905 1" stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0777 4.41562V1H14.6621" stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.8086 5.26953L18.0781 1" stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                

                        </button>

                    </div>
                    <SectionBalance class="mb-3" />
                </div>
                <div class="row justify-content-between">
                    <h1 class="col-2">
                        العمليات
                    </h1>
                    <div class="col-10 d-flex justify-content-end" style="height: 35px; gap: 4%">
                        <button class="text-white border-0"
                            style="border-radius : 5px; box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center; width: 20%; background-color: #2DB7B3">
                            استيراد البيانات
                        </button>
                        <!-- <input type="text" style="width: 32%">
                        <input type="text" style="width: 32%"> -->
                        <date-pick :months="months" nextMonthCaption="" prevMonthCaption=""
                            v-model="start_date"></date-pick>
                        <date-pick :months="months" nextMonthCaption="" prevMonthCaption="" v-model="end_date"></date-pick>

                        <button class="text-white border-0"
                            style="border-radius : 5px; box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125); padding:10px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center; width: 20%; background-color: #2DB7B3">
                            فلتره
                        </button>

                    </div>

                </div>
                <div style="padding: 20px; border: 1px solid #2DB7B3">

                    <SectionTable />
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';


import SectionTable from './parts/section-table/index.vue'
import SectionBalance from './parts/section-balance/index.vue'

export default {
    name: 'affiliate-marketing-visits',
    components: {
        SectionTable,
        SectionBalance,
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
}</style>