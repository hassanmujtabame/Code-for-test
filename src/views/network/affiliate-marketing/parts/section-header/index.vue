<template>
   <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-r-56-72 text-white">  التسويق بالعمولة  </h1>
                        <p class="text-white fs-r-24">
                            كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى مقابل  كل عملية تسجيل 
                        </p>
             
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" :src="`${publicPath}assets/img/bg-affiliate-marketing.png`" alt="" />
                        </div>
                    </div>
                    <div class="btn-main-style py-5">
                          <router-link :to="getRouteLocale('network-subscribe')" class="btn-custmer fs-r-24 shadow mt-2">الدخول الى متجرك </router-link>
                          <router-link :to="getRouteLocale('login')" class="btn-custmer-w fs-r-24 bg-transparent text-white mt-2">{{ $t('login-female') }}</router-link>

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
 name:'section-header'
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