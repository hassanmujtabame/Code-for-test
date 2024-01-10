<template>
  <div class="p-0 m-0 sec-one" style="background: #fff">
    <div class="container" style="position:relative" :class="[isMobile ? 'p-3' : '']">
      <div class="row pb-5">
        <div class="col-12 col-md-4">
          <h1 class="header-title-page text-black">
            <!-- {{ $t('page-home-title') }} -->
<h1 class="header-title-page select-title-main text-black" style="display: inline;">
  رياديات
  <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="">
</h1>
            
            شبكة نسائية في جميع أنحاء العالم
            <br>

          </h1>
          <p class="header-desc-page text-black">
            طموحة و تسعين لتحقيق حلمك و شغفك ؟
            <br>
            شبكة رياديات بتساعدك في مشروعك من الالف الى الياء
            <!-- {{ $t('page-home-desc') }} -->
          </p>
          <div class v-if="!isAuthenticated">
            <button class="px-3 btn-custmer shadow" style="background-color: #ff5722 !important; border: none !important; " @click="router_push('register')">انضمي الان</button>
            <button class="px-3 btn-custmer-w shadow mx-3" @click="router_push('login')">سجلي دخولك</button>

            <!-- <router-link :to="getRouteLocale('login')">
              <span class="px-3 btn-custmer shadow mx-3" @click="navigate">سجلي دخولك</span>
            </router-link> -->
          </div>
        </div>
        <div v-if="!isMobile" class="col-8 d-flex justify-content-end">
          <img  style="  height: auto;
          object-fit: contain;width: 75%;" class="img-fluid" src="@/assets/img/new/main-page/header/Group 50.png" alt="home-section-background" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "section-header",
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/authenticated',
    })
  }
};
</script>

<style>
.select-title-main{
  position: relative;
}
.select-title-main img {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
}
</style>