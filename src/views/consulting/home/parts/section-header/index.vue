<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            أستشارات
          </h1>
          <h1
            class="header-title-page position-relative select-title-main text-black"
            style="display: inline"
          >
            رياديات
            <img
              style="width: 135px; bottom: 1px; right: -1px"
              class="position-absolute"
              src="@/assets/img/new/main-page/header/Vector 14.png"
              alt=""
            />
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
          <div class="my-4 d-flex flex-wrap">
            <template v-if="user">
              <router-link
                style="background-color: #f2631c"
                :to="getRouteLocale('consulting-fields')"
                class="px-5 rounded-2 py-2 text-light mx-1 shadow mt-2"
                >اطلب استشارة</router-link
              >
              <router-link
                style="background-color: #1fb9b3"
                :to="getRouteLocale('consulting-register')"
                class="px-5 py-2 rounded-2 mx-1 text-white mt-2"
                >انضم كمستشار</router-link
              >
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div class="position-relative">
            <img
              style="z-index: 10"
              class="img-omar position-relative img-fluid"
              src="../../../../../assets/img/consult/Frame 1171276680.png"
              alt="hero img"
            />
            <img
              class="position-absolute img-fluid"
              src="../../../../../assets/img/consult/Path 2212.png"
              alt=""
              style="top: 20px; left: -57px; z-index: 5"
            />
            <!-- <img
              style="top: -24px; left: 83px"
              class="position-absolute"
              src="../../../../../../public/assets/img/Ellipse 615.png"
              alt=""
            />
            <img
              style="top: 69px; right: 15px"
              class="position-absolute"
              src="../../../../../../public/assets/img/Ellipse 616.png"
              alt=""
            />
            <img
              style="bottom: -8px; right: 150px"
              class="position-absolute"
              src="../../../../../../public/assets/img/Ellipse 614.png"
              alt=""
            /> -->
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
