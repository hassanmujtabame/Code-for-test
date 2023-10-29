<template>
    <div class="consulting " :class="[isMobile ? 'p-3' : 'p-5']">
        <div class="netwok-home-header">
            <div class="row align-items-center justify-content-between">
                <div class="col-8 col-md-6">
                    <h1 class="header-title-page">
                        {{ $t('Riadiat-network') }} </h1>
                    <p class="header-desc-page">
                        {{ $t('riadiat-network-home-text-1') }}
                    </p>
                    <p class="header-desc-page">
                        {{ $t('riadiat-network-home-text-2') }}
                    </p>
                    <p class="header-desc-page">
                        {{ $t('riadiat-network-home-text-3') }}
                    </p>

                </div>
                <div class="col-3 col-md-6">
                    <div style="overflow: inherit;" class=" m-auto text-start ">
                        <img class="img-fluid" :src="`${publicPath}assets/img/pana-network.png`" alt="">
                    </div>
                </div>
                <div class="my-5">
                    <a v-if="!token" @click="shouldLoginMsg" class="btn-custmer shadow mt-2 "> {{ $t('join-us') }} </a>
                    <router-link v-if="!token" :to="getRouteLocale('login')"
                        class="btn-custmer-w bg-transparent text-white mt-2 mx-3"> {{ $t('login-female') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section-header'
}
</script>

<style></style>