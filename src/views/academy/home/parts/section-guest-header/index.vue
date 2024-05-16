<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page t" style="display: inline">
            {{ $t("academy_") }}
          </h1>
          <h1
            class="header-title-page select-title-main"
            style="display: inline"
          >
            {{ $t("Riadiat") }}
            <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="" />
          </h1>
          <p class="header-desc-page my-5">
            {{ $t("academy_develop_your_skills_text") }}
          </p>
          <div class="my-4 d-flex">
            <button
              @click="router_push('login')"
              class="btn btn-accent btns-text"
            >
              {{ $t("subscribe-now-") }}
            </button>
            <router-link
              v-if="!token"
              :to="getRouteLocale()"
              class="btns-text presentation"
            >
              <i class="fa-regular fa-circle-play"></i>
              {{ $t("Presentation") }}
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
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
  name: "subscription-offering-section",
};
</script>

<style scoped>
.btns-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  padding: 20px 48px;
}
.presentation {
  color: #1fb9b3;
  font-weight: 500;
}
.header-title-page {
  font-family: Cairo;
  font-size: 72px;
  font-weight: 700;
  line-height: 79.2px;
  color: #414042;
}
.header-desc-page {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 38.4px;

  color: #a6a6a6;
}
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
