<template>
    <div class="container" style="margin-top: 200px;">
        <div class="row">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item col-12 col-md-3">
                    <router-link to="ready-services" class="nav-link  border w-75 t-c m-auto active">اطلب خدمة جديدة</router-link>
                </li>
                <li class="nav-item col-12 col-md-3">
                    <router-link to="my-proposals" class="nav-link  border w-75 t-c m-auto ">طلباتي المنشورة</router-link>
                </li>
                <li class="nav-item col-12 col-md-3">
                    <router-link to="my-purchases" class="nav-link  border w-75 t-c m-auto ">اعمالي قيد التنفيذ</router-link>
                </li>
            </ul>
        </div>
        <div class="row">
            <SectionSearch />
        </div>
        <div class="row">
            <!-- <SectionServices /> -->
            <SectionBrowsing />
        </div>
    </div>
</template>

<script>
import SectionSearch from './parts/section-search/index'
import SectionServices from './parts/section-recent-services/index'
import SectionBrowsing from './parts/section-browsing/index'
export default {
    name: 'request-purchase-services',
    data: () => {
        return {
            status: null,
        }
    },
    components: { SectionSearch, SectionServices, SectionBrowsing }
}
</script>