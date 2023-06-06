<template>
    <main style="margin-top: 94px;">
        <div class="container">

            <div class="row justify-content-between align-items-center">
                <div class=" col-md-8  col-md-4 mt-3">
                    <h4 class="fw-bold">
                        تفاصيل معاملاتي المالية
                    </h4>
                </div>
                <div class="col-md-4 text-start ">
                    <button @click="$router.push(getRouteLocale('service-provider-balance-charge'))" class="btn-main">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.3333 17H10.6667C10.12 17 9.66666 16.5467 9.66666 16C9.66666 15.4533 10.12 15 10.6667 15H21.3333C21.88 15 22.3333 15.4533 22.3333 16C22.3333 16.5467 21.88 17 21.3333 17Z"
                                fill="white" />
                            <path
                                d="M16 22.3337C15.4533 22.3337 15 21.8803 15 21.3337V10.667C15 10.1203 15.4533 9.66699 16 9.66699C16.5467 9.66699 17 10.1203 17 10.667V21.3337C17 21.8803 16.5467 22.3337 16 22.3337Z"
                                fill="white" />
                            <path
                                d="M20 30.3337H12C4.76 30.3337 1.66666 27.2403 1.66666 20.0003V12.0003C1.66666 4.76033 4.76 1.66699 12 1.66699H20C27.24 1.66699 30.3333 4.76033 30.3333 12.0003V20.0003C30.3333 27.2403 27.24 30.3337 20 30.3337ZM12 3.66699C5.85333 3.66699 3.66666 5.85366 3.66666 12.0003V20.0003C3.66666 26.147 5.85333 28.3337 12 28.3337H20C26.1467 28.3337 28.3333 26.147 28.3333 20.0003V12.0003C28.3333 5.85366 26.1467 3.66699 20 3.66699H12Z"
                                fill="white" />
                        </svg>
                        أشحن رصيدك
                    </button>
                </div>



            </div>
           <!--balance-->
           <SectionBalance />
            <!--filtered list-->
            <FilteredList />
        </div>

    </main>
</template>

<script>
import FilteredList from './sections/filtered-list/index.vue'
import SectionBalance from './sections/section-balance/index.vue'
export default {
    name: 'my-financial-transactions',
components:{
    FilteredList,
    SectionBalance
}
}
</script>

<style>

</style>