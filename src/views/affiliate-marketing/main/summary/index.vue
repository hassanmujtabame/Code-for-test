<template>
    <div>
        <div class="dashbord">
            <div>
                <div class="row">
                    <h1>
                        أخر الانجازات
                    </h1>

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