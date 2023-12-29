<template>
    <div class="consulting " :class="[isMobile ? 'p-3' : 'p-5 pb-0']">
        <div class="" :class="{ container: !isMobile }">
            <div class="row">
                <div class="col-8 col-md-6">
                    <h1 class="header-title-page">
                        اي خدمه.
                        <br>
                        اي وقت.
                        <br>
                        اي مكان.

                        
                    </h1>
                    <p class="header-desc-page mb-5">
                        منصة تجمع أهم وألمع رائدين و رائدات الأعمال في السعودية والخليج في مكان واحد
                    </p>

                    <div class="my-5">
                        <router-link :to="getRouteLocale('service-provider-choose-type')"
                            class="btn-custmer mt-2 mx-3"> انجز مهمتك
                        </router-link>
                    </div>
                </div>

                <div class="col-3 col-md-6 m-auto d-none d-lg-block d-xl-block">
                    <div style="overflow: inherit;" class="m-auto d-flex justify-content-end">
                        <img src="@/assets/img/ex1.png" alt=""
                            style="height: 256px !important; object-fit: contain !important;">
                    </div>
                </div>
                <!-- <div class="col-12">
                      <div class="my-3">
                      <a v-if="!token" @click="shouldLoginMsg" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
                            <router-link v-else-if="userIsSubIncubator" :to="getRouteLocale('incubator-subscribe')" class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </router-link>
                            <a v-else @click="shouldSubNetworkMsg(subNetworkTitle,$event)"  class="btn-custmer shadow mt-2"> {{ $t('join-us') }} </a>
                            <router-link v-if="!token" :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2"> {{ $t('login-female') }}  </router-link>
                           </div> 
                          </div> -->
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
    name: 'section-top',
    data: () => {
        return {
            subNetworkTitle: 'يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في حاضنة رياديات'
        }
    }
}
</script>

<style scoped>

.header-title-page {
    color: #2EB9B3;
}
.consulting {
    background: inherit;
}
.header-desc-page {
    color: #838383;
}

</style>