<template>
  <div class="consulting" :class="[isMobile?'p-3':'p-5']">
            <div class="" :class="{container:!isMobile}">
                <div class="row">
                    <div class="col-8 col-md-6  mb-5">
                        <h1 class="header-title-page">اكاديمية رياديات</h1>
                        <p class="header-desc-page">
                            طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية رياديات ستكون معكِ خطوة بخطوة   
                        </p>
                           
                    </div>
                    <div class="col-3 col-md-6 m-auto">
                        <div style="overflow: inherit;" class="img-cons m-auto ">
                            <img  :src="`${publicPath}assets/img/1664192063672 1.png`" alt="academy-home" >
                        </div>

                    </div>
                    <div class="col-12 mb-3">
                                <a @click="shouldLoginMsg" class="btn-custmer shadow"> {{ $t('join-us') }} </a>
                                <router-link v-if="!token" :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2"> {{ $t('login-female') }}  </router-link>
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
name:'section-1'
}
</script>

<style>

</style>