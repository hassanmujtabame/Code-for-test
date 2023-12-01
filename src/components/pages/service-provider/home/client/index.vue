<template>
    <div class="container" style="margin-top: 200px;">
        <div class="row">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item col-12 col-md-3">
                    <router-link to="my-proposals" class="nav-link  border w-75 t-c m-auto active"> اعرض خدمه جديده </router-link>
                </li>
                <li class="nav-item col-12 col-md-3">
                    <button class="nav-link  border w-75 t-c m-auto ">عروضى المرسله</button>
                </li>
                <li class="nav-item col-12 col-md-3">
                    <button class="nav-link  border w-75 t-c m-auto ">خدمات قيد التنفيذ</button>
                </li>
            </ul>
        </div>
        <div class="row">
            <SectionSearch />
        </div>
        <div class="row">
            <SectionServices />
        </div>
    </div>
</template>

<script>
import SectionSearch from './parts/section-search/index'
import SectionServices from './parts/section-recent-services/index'
export default {
    name: 'request-purchase-services',
    data: () => {
        return {
            status: null,
        }
    },
    components: { SectionSearch, SectionServices }
}
</script>