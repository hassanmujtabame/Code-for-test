<template>
    <div class="consulting" :class="[isMobile ? 'p-3' : 'p-5']">
        <div class="netwok-home-header">
            <div class="row">
                <div class="col-8 col-md-6">
                    <h1 class="header-title-page">شبكة رياديات </h1>
                    <p class="header-desc-page">طموحة و تسعين لتحقيق حلمك و شغفك ؟</p>
                    <p class="header-desc-page">
                        شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
                    </p>

                </div>
                <div class="col-3 col-md-6 m-auto">
                    <div class="m-auto " style="    display: flex;
                        justify-content: center;">
                        <!-- <img class="img-fluid"  :src="`${publicPath}assets/svg/Group 117127620699.svg`" alt="" > -->
                        <img style="position: absolute;
                        height: 400px !important;
                        object-fit: contain !important;
                        top: 0;" src="@/assets/svg/network-header.svg" alt="">
                        <!-- <img :src="`${publicPath}assets/img/1664179507602 aefwG.png`" alt="network-home" > -->
                    </div>

                </div>
                <div class="col-12 my-3">
                    <router-link v-if="user" :to="getRouteLocale('network-dashboard')" class="btn-custmer shadow mt-2">الصفة
                        الرئيسية</router-link>

                    <template v-else>


                        <router-link :to="getRouteLocale('register')" class="btn-custmer shadow mt-2">{{ $t('join-us')
                        }}</router-link>
                        <router-link :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2">{{
                            $t('login-female') }}</router-link>
                    </template>
                </div>

            </div>
            <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="">
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'section-1'
}
</script>

<style></style>