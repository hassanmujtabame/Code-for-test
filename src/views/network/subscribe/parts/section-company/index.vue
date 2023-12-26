<template>
    <div class="consulting" :class="[isMobile ? 'p-3 pb-0' : 'px-5']">
        <div class="" :class="{ container: !isMobile }">
            <div class="row d-flex align-items-center">
                <div class="col-8 col-md-6  mb-5">
                    <h1 class="header-title-page">الشركة </h1>
                    <h3 class="text-white">
                        الخدمات التي تحصل عليها الشركة
                    </h3>
                    
                    <p class="header-desc-page">

                        لماذا يجب أن تقدم الخصومات والعروض لأعضاء الشبكة؟ فرصة للتواصل مع  مجتمعات واسعة من مناطق المملكة والخليج العربي الوصول إلى فئتك المستهدفة من رائدات الأعمال في مختلف المجالات تقديم الخدمات للمهتمات بالتعلم في المجالات التي يجدن فيها شغفهن.
                    </p>
                </div>
                <div v-if="!isMobile" class="col-3 col-md-6 m-auto d-flex justify-content-center" style="margin-bottom: 0 !important;">
                    <!-- <div style="overflow: hidden; background:rgba(255, 188, 0, 1); " class="img-cons m-auto "> -->
                    <img src="@/assets/img/bro.png" alt="academy-home" style="width: 70%; object-fit: contain !important;">
                    <!-- </div> -->

                </div>

            </div>
            <!-- <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="">
            </div> -->

        </div>

    </div>
</template>

<script>
export default {
    name: 'section-company'
}
</script>

