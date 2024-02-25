<template>
  <div class="container">
    <div class="row">
      <div
        class="text-center d-flex flex-column justify-content-center align-items-center"
      >
        <h1 style="font-size: 48px" class="position-relative fw-bold">
          الاشتراكات

          <img
            class="position-absolute"
            style="top: 47px; left: 18px"
            src="@/assets/img/new/main-page/header/Vector 14.png"
            alt="line image"
          />
        </h1>
      </div>
    </div>
  </div>
  <!-- <div class="consulting" :class="[isMobile ? 'p-3 pb-0' : 'px-5']">
        <div class="" :class="{ container: !isMobile }">
            <div class="row d-flex align-items-center">
                <div class="col-8 col-md-6  mb-5">
                    <h1 class="header-title-page">اشتراكات رياديات</h1>
                    <h3 class="text-white">
                        ابدأ رحلة نجاحك معنا و اختر الباقه المناسبه لك
                    </h3>
                    <p class="header-desc-page">
                        رقى حسابك الى الباقه الشهريه أو السنويه واستفيد من العروض والمزيد من المميزات فى الموقع
                    </p>
                </div>
                <div v-if="!isMobile" class="col-3 col-md-6 m-auto d-flex justify-content-center" style="margin-bottom: 0 !important;">
                    <div style="overflow: hidden; background:rgba(255, 188, 0, 1); " class="img-cons m-auto ">
                    <img src="@/assets/img/bro.png" alt="academy-home" style="width: 70%; object-fit: contain !important;">
                    </div>

                </div>

            </div>
            <div class="star-cons">
                <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
            </div>
            <div class="star-cons stars">
                <img :src="`${publicPath}assets/img/starsss.png`" alt="">
            </div>

        </div>

    </div> -->
</template>

<script>
export default {
  name: "section-header",
};
</script>

<style></style>
