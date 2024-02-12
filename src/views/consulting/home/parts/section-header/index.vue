<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            أستشارات
          </h1>
          <h1
            class="header-title-page select-title-main text-black"
            style="display: inline"
          >
            رياديات
            <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="" />
          </h1>
          <p class="header-desc-page text-black mt-3">
            طموحة و تسعين لتحقيق حلمك و شغفك ؟
          </p>
          <p class="header-desc-page text-black">
            تقدمي إلى الأمام وابدئي مشروعك باستشارة مهنية في أغلب المجالات
          </p>
          <div class="my-4">
            <template v-if="!user">
              <router-link
                :to="getRouteLocale('register')"
                class="btn-custmer mx-1 shadow mt-2"
                >{{ $t("join-us") }}</router-link
              >
              <router-link
                :to="getRouteLocale('login')"
                class="btn-custmer-w mx-1 bg-transparent text-white mt-2"
                >{{ $t("login-female") }}</router-link
              >
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div class="">
            <img
              class="rounded-4 img-omar img-fluid shadow"
              src="../../../../../../public/assets/img/video-con.png"
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-1",
};
</script>

<style>
.img-omar {
  width: 750px;
  height: 350px;
}
</style>
