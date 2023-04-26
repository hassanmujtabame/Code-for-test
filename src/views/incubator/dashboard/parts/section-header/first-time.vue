<template>
    <div class="box tow  p-3 row">
        <div class="col-md-6">
            <img class="w-100" src="/assets/img/bro.png" alt="" height="195">
        </div>
        <div class="col-md-4 text-center m-auto p-0 m-0 ">

            <p class="">
                يسعدنا تسجيلك معنا
                <span style="color:#F2631C ;" class="fw-bolder fs-4">
                    لـــكـــــــــــــــــن
                </span>
                <br>
                يجيب أستكمال بيانتك حتـى تستطيع البــــــدء بتقديم الخدمـــــــــــات
            </p>
            <router-link :to="getRouteLocale('network-my-profile')" class="border px-3 py-2 rounded-2 bg-transparent">
                أكمل الان بيانتك
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>