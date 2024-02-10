<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            اكاديمية
          </h1>
          <h1
            class="header-title-page select-title-main text-black"
            style="display: inline"
          >
            رياديات
            <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="" />
          </h1>
          <p class="header-desc-page text-black my-5">
            طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية
            رياديات ستكون معكِ خطوة بخطوة
          </p>
          <div class="mt-4">
            <a
              v-if="!token"
              @click="shouldLoginMsg"
              class="btn-custmer shadow mt-2"
            >
              {{ $t("join-us") }}
            </a>
            <router-link
              v-if="!token"
              :to="getRouteLocale('login')"
              class="btn-custmer-w bg-transparent text-white mt-2 mx-3"
            >
              {{ $t("login-female") }}
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
            <!-- <iframe class="rounded" style="width: 100%; height: 100%" src="https://www.youtube.com/embed/2sd9rg4lzBU"
                            title="جلسة حوارية عربيات" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe> -->
            <img
              class="img-fluid rounded-4 shadow"
              src="../../../../../../public/assets/img/Video.png"
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
  name: "section-1",
};
</script>

<style scoped>
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
