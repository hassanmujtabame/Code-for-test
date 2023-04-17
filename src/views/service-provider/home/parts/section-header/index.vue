<template>
   <div class="consulting" :class="[isMobile?'p-3':'p-5']">
            <div class="" :class="{container:!isMobile}">
                <div class="row">
                    <div class="col-8 col-md-6">
                        <h1 class="header-title-page">
                          {{ $t('service-providers') }}
                                                                        </h1>
                        <p class="header-desc-page text-white">
                            منصة تجمع أهم وألمع  رائدين و رائدات الأعمال في السعودية والخليج في مكان واحد
                                                </p>
                                                
                    </div>
                    <div class="col-3 col-md-6 m-auto">
                        <div style="overflow: inherit;" class="img-cons m-auto ">
                            <img  src="/assets/img/1664280407882 1.png" alt="service-provider-home" >
                        </div>

                    </div>
                    <div class="col-12 mb-3">
                                                    <a @click="shouldLoginMsg" class="btn-custmer shadow"> {{ $t('join-us') }} </a>
                                                    <router-link :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent"> {{ $t('login-female') }}</router-link>
                    </div>
                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="">
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="">
                </div>

            </div>

        </div>
</template>

<script>
export default {
 name:'section-header'
}
</script>

<style>

</style>