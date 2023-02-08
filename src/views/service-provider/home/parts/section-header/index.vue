<template>
 <div class="consulting p-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">
                          {{ $t('service-providers') }}
                                                                        </h1>
                        <p class="text-white">
                            منصة تجمع أهم وألمع  رائدين و رائدات الأعمال في السعودية والخليج في مكان واحد
                                                </p>
                                                <div class="btn-main-style">
                                                    <router-link  :to="getRouteLocale('service-provider-subscribe')" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </router-link>
                                                    <router-link :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2"> {{ $t('login-female') }}</router-link>
                                                </div>
                    </div>
                    <div class="col-md-6 m-auto">
                        <div style="overflow: inherit;" class="img-cons m-auto ">
                            <img style=" position: absolute;width: 341px; height: 341px;top: 7px;left: -36px;" src="/assets/img/1664280407882 1.png" alt="" >
                        </div>

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