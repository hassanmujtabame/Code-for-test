<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            شبكة
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
            شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
          </p>
          <div class="my-4">
            <router-link
              v-if="user"
              :to="getRouteLocale('network-dashboard')"
              class="btn-custmer shadow mx-2 mt-2"
              >الصفحة الرئيسية</router-link
            >
            <template v-else>
              <div
                class="d-flex align-items-center justify-content-center flex-wrap gap-2"
              >
                <router-link
                  :to="getRouteLocale('register')"
                  class="btn-custmer shadow mt-2"
                  >{{ $t("join-us") }}</router-link
                >
                <router-link
                  :to="getRouteLocale('login')"
                  class="btn-custmer-w bg-transparent text-white mt-2"
                  >{{ $t("login-female") }}</router-link
                >
              </div>
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6" v-if="!isMobile">
          <div>
            <img
              src="@/assets/img/Left.png"
              class="img-fluid"
              alt="hero image"
            />
            <!-- <iframe class="rounded" style="width: 100%; height: 100%" src="https://www.youtube.com/embed/mKfqJ_3-jWQ"
                            title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe> -->
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
.select-title-main {
  position: relative;
}

.select-title-main img {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
}
</style>
