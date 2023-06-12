<template>
  <div class="consulting pt-3 mobile-center">
    <b-container>
      <b-row>
        <b-col lg="6">
          <h1 class="header-title-page">{{ $t("service-providers") }}</h1>
          <p class="header-desc-page text-white">
            منصة تجمع أهم وألمع رائدين و رائدات الأعمال في السعودية والخليج في
            مكان واحد
          </p>

          <div class="actions pt-2">
            <a
              @click="shouldLoginMsg"
              class="btn-customer shadow d-inline-block mt-1"
            >{{ $t("join-us") }}</a>
            <router-link
              :to="getRouteLocale('login')"
              class="btn-custmer-w bg-transparent d-inline-block mx-4 mt-1"
            >{{ $t("login-female") }}</router-link>
          </div>
        </b-col>
        <b-col lg="6" class="m-auto mobile-hide">
          <div style="overflow: inherit" class="img-cons m-auto">
            <img :src="`${publicPath}assets/img/1664280407882 1.png`" alt="service-provider-home" />
          </div>
        </b-col>
      </b-row>
      <div class="star-cons">
        <img :src="`${publicPath}assets/img/starrrr.png`" alt />
      </div>
      <div class="star-cons stars">
        <img :src="`${publicPath}assets/img/starsss.png`" alt />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "section-header"
};
</script>

<style  scoped>
@media (max-width:991px) {
  .consulting {
    padding: 30px 0
  }
 }
</style>>
