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
            <img
              class="img-fluid"
              src="@/assets/img/new/main-page/header/Vector 14.png"
              alt=""
            />
          </h1>
          <p class="header-desc-page text-black mt-3">
            طموحة و تسعين لتحقيق حلمك و شغفك ؟
          </p>
          <p class="header-desc-page text-black mb-5">
            شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
          </p>
          <div class="mt-4">
            <router-link
              v-if="user"
              :to="getRouteLocale('network-dashboard')"
              class="btn-custmer shadow"
              >الصفة الرئيسية</router-link
            >

            <template v-else>
              <div
                class="d-flex flex-wrap gap-1 justify-content-center justify-content-md-start align-items-center"
              >
                <router-link
                  :to="getRouteLocale('register')"
                  class="btn-custmer shadow mx-2"
                  >{{ $t("join-us") }}</router-link
                >
                <router-link
                  :to="getRouteLocale('login')"
                  class="btn-custmer-w bg-transparent text-white"
                  >{{ $t("login-female") }}</router-link
                >
              </div>
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6" v-if="!isMobile">
          <div class="img-fluid">
            <img class="img-fluid" src="@/assets/img/Left.png" alt="hero" />

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
  name: "section-header",
};
</script>

<style></style>
