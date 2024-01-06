<template>
  <div class="p-0 m-0 sec-one" style="background: var(--color-primary)">
    <div class="img-sec-one" :class="{ 'rotateY-180': $i18n.locale !== 'ar' }">
      <img class="img-fluid" src="@/assets/img/Group.png" alt="home-section-background" />
    </div>
    <div class="container" style="position:relative" :class="[isMobile ? 'p-3' : 'p-5 pb-0']">
      <div class="row align-items-center pt-5 pb-5">
        <div class="col-xl-7 text">
          <h1 class="header-title-page text-white">{{ $t('page-home-title') }}</h1>
          <p class="header-desc-page text-white">{{ $t('page-home-desc') }}</p>
          <div class v-if="!isAuthenticated">
            <button class="btn-custmer shadow mt-2 " @click="router_push('register')">انضمي الان</button>
            <router-link custom :to="getRouteLocale('login')" v-slot="{ navigate }">
              <button class="btn-custmer-w bg-transparent text-white mt-2 mx-3" @click="navigate">سجلي دخولك</button>
            </router-link>
          </div>
        </div>
        <div v-if="!isMobile"  style="overflow: hidden; background:rgba(255, 188, 0, 1);" class="img-cons m-auto ">
          <img src="@/assets/img/main-page.png" alt="" style="height: 300px !important; object-fit: contain !important;">
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

<style scoped>
.header-title-page,
.header-desc-page {
  color: black;
}
</style>