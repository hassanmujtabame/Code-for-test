<template>
    <div class="consulting " style="background-image: linear-gradient(to bottom , #2EB9B3 , white);">
        <div class="container"  >
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6">
                    <h1 class="fs-r-56-72 text-white"> التسويق بالعمولة </h1>
                    <p class="text-white fs-r-24">
                        كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى مقابل كل عملية تسجيل
                    </p>
                    <div class="row d-flex  ">

                        <div class="btn-main-style py-5">
                            <router-link :to="getRouteLocale('register-affiliate')"
                            class="btn-default text-black mt-2" style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);"> انشاء حساب</router-link>
                        </div>
    
                        <div class="btn-main-style py-5">
                            <router-link :to="getRouteLocale('register-affiliate')"
                            class="btn-default text-black mt-2" style="box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);"> انشاء حساب</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div style="overflow: inherit" class="m-auto text-start ">
                        <img class="rounded-circle" style="background: #53ccb1;" src="@/assets/img/affiliate-top.png" alt="" />
                    </div>
                </div>
            </div>

            <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section-header'
}
</script>

<style scoped>
.star-cons {
    position: absolute;
    left: 38.15%;
    right: 92.19%;
    top: 9.72%;
    bottom: 71.67%;
}

.star-cons.stars {
    left: 30.56%;
    right: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
</style>