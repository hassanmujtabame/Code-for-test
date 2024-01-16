<template>
    <div style="margin-top: 85px" class="consult max-width-100-hidden">
        <!--section header -->
        <SectionHeader />
        <!-- section recent models-->
        <SectionRecentModel />
        <div class="mt-5">
            <SectionFilterList />
        </div>
    </div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'

import SectionRecentModel from './parts/section-recent-models/index.vue'
import SectionFilterList from './parts/section-filter-list/index.vue'
export default {
    name: 'models-page',
    components: {
        SectionHeader,
        SectionRecentModel,
        SectionFilterList
    }
}
</script>

<style></style>