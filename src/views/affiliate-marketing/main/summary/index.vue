<template>
    <div style="margin-top:200px">
        <div class="container dashbord">
            <div class="mt-5">
                <div class="row">
                    <h1>
                        أخر الانجازات
                    </h1>

                </div>
                <SectionBalance />
            </div>
            <div class="mt-5">
                <line-chart></line-chart>
            </div>
        </div>
    </div>
</template>

<script>
import SectionBalance from './parts/section-balance/index.vue'
import LineChart from './parts/section-balance/BarChart.vue'
export default {
    name: 'affiliate-marketing-dashboard',
    components: {
        SectionBalance,
        LineChart,
    }
}
</script>

<style></style>