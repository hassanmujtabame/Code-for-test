<template>
    <div>
        <div class="dashbord">
            <div>
                <div class="row">
                    <h1 class="col-2">
                        الملخص
                    </h1>
                    <div class="col-10 d-flex" style="height: 35px; gap: 4%">
                        <!-- <input type="text" style="width: 32%">
                        <input type="text" style="width: 32%"> -->
                        <date-pick :months="months" nextMonthCaption="" prevMonthCaption="" v-model="date"></date-pick>

                        <button class="btn btn-primary" style="width: 32%">
                            فلتره
                        </button>

                    </div>

                </div>
                <SectionBalance />
            </div>
            <div class="mt-3">
                <line-chart></line-chart>
            </div>
        </div>
    </div>
</template>

<script>

import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';


import SectionBalance from './parts/section-balance/index.vue'
import LineChart from './parts/section-balance/BarChart.vue'
export default {
    name: 'affiliate-marketing-dashboard',
    components: {
        SectionBalance,
        LineChart,
        DatePick
    },
    data: () => ({
        date: '2019-01-01',
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
            "ديسمبر"
        ],
        // weekdays: [
        //     "الأحد",
        //     "الإثنين",
        //     "الثلاثاء",
        //     "الأربعاء",
        //     "الخميس",
        //     "الجمعة",
        //     "السبت"
        // ]
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
</style>