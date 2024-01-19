<template>
    <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
        <div class="netwok-home-header">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="header-title-page text-black" style="display: inline;">
                        أستشارات
                    </h1>
                    <h1 class="header-title-page select-title-main text-black" style="display: inline;">
                        رياديات
                        <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="">
                    </h1>
                    <p class="header-desc-page text-black mt-3">طموحة و تسعين لتحقيق حلمك و شغفك ؟</p>
                    <p class="header-desc-page text-black">
                        تقدمي إلى الأمام وابدئي مشروعك باستشارة مهنية في أغلب المجالات
                    </p>
                    <div class="my-4 ">
                        <template v-if="!user">
                            <router-link :to="getRouteLocale('register')" class="btn-custmer shadow mt-2">{{ $t('join-us')
                            }}</router-link>
                            <router-link :to="getRouteLocale('login')"
                                class="btn-custmer-w bg-transparent text-white mt-2">{{
                                    $t('login-female') }}</router-link>
                        </template>
                    </div>
                </div>
                <div class="col-12 col-md-6" style="min-height: 414px;" v-if="!isMobile">
                    <div style="height:100%;">
                        <iframe class="rounded" style="width: 100%; height: 100%"
                            src="https://www.youtube.com/embed/mKfqJ_3-jWQ" title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
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