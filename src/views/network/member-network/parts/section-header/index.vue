<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-md-4">
          <!-- <h1 class="fs-1">أعضاء شبكة رياديات</h1> -->
          <!-- <p class="" style="font-size: 24px">
            رواد ورائدات الأعمال دائما ما نكون اسرة نستفيد من خبرات بعضنا البعض
            فلا تررد بابستكشاف الاخرين او التواصل معهم
          </p> -->
          <div class="text-center">
            <h1 class="m-0 header-text-members">اعضاء</h1>
            <h1 class="m-0 header-text-pioneers" style="color: #1fb9b3">
              رياديات
            </h1>
            <p style="color: #888; font-size: 20px">
              من كل انحاء السعودية و الوطن العربي والعالم
            </p>
            <router-link
              v-if="!token"
              :to="getRouteLocale('login')"
              style="background-color: #f2631c"
              class="btn px-5 text-light py-2"
            >
              انضم الينا
            </router-link>
            <router-link
              v-if="token"
              :to="getRouteLocale('network-subscribe')"
              style="background-color: #f2631c"
              class="btn px-5 text-light py-2"
            >
              انضم الينا
            </router-link>
          </div>
        </div>
        <div class="col-md-8" v-if="!isMobile">
          <div style="">
            <img
              class="img-fluid"
              src="@/assets/img/members.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-header",
};
</script>

<style>
.header-text-members {
  font-size: min(5vw, 82px);
}
.header-text-pioneers {
  font-size: min(9vw, 128px);
}
.header-text {
  font-size: min(1.5vw, 20px);
}
@media (max-width: 640px) {
  .header-text-members {
    font-size: 10vw;
  }
  .header-text-pioneers {
    font-size: 18vw;
  }
}
</style>
