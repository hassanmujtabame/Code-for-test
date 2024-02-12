<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            خدمات
          </h1>

          <p class="header-desc-page text-black mt-3">
            أصبح بإمكانك الآن طلب الخدمات عبر الإنترنت أو في العالم الواقعي، كما
            يمكنك المشاركة في تقديم الخدمات للأعضاء الآخرين.
          </p>

          <div class="my-5">
            <template v-if="!user">
              <router-link
                :to="getRouteLocale('register')"
                class="btn-custmer shadow mx-2"
                >{{ $t("join-us") }}</router-link
              >
              <router-link
                :to="getRouteLocale('login')"
                class="btn-custmer-w bg-transparent text-white mt-2"
                >{{ $t("login-female") }}</router-link
              >
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6" v-if="!isMobile">
          <div>
            <!-- <iframe class="rounded" style="width: 100%; height: 100%"
                            src="https://www.youtube.com/embed/mKfqJ_3-jWQ" title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe> -->
            <img
              class="rounded-4 shadow img-fluid"
              src="../../../../../../../public/assets/img/video-service.png"
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
