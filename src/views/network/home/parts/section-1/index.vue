<template>
  <div class="consulting p-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="fs-1 text-white">شبكة رياديات</h1>
          <p class="text-white">
            طموحة و تسعين لتحقيق حلمك و شغفك ؟ شبكة رياديات بتساعدك في مشروعك من
            الالف الى الياء
          </p>
          <div class="btn-main-style">
            <router-link v-if="user" :to="getRouteLocale('network-dashboard')" class="btn-custmer shadow mt-2">الصفحة
              الرئيسية</router-link>

            <template v-else>
              <router-link :to="getRouteLocale('network-subscribe')" class="btn-custmer shadow mt-2">انضمي إلينا
              </router-link>
              <router-link :to="getRouteLocale('login')" class="btn-custmer-w bg-transparent text-white mt-2">
                سجلي دخولك</router-link>
            </template>
          </div>
        </div>
        <div class="col-md-6 m-auto">
          <div class="img-cons m-auto">
            <img :src="`${publicPath}assets/img/1664179507602 aefwG.png`" alt="network-home" />
          </div>
        </div>
      </div>
      <div class="star-cons">
        <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
      </div>
      <div class="star-cons stars">
        <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-1",
};
</script>

<style></style>