<template>
  <nav class="navbar navbar-expand-xl">
    <div class="container">
      <router-link class="navbar-brand" :to="getRouteLocale('index')">
        <img :src="`${publicPath}assets/svg/logo-header.svg`" alt="">
      </router-link>
      <!-- <div v-if="false" class="d-block d-sm-none">
        <SearchInput />
      </div> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleOffcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start justify-content-between"
        id="offcanvasExample"
        :class="{ 'show': showMobileNav }"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            id="btn-close-header"
            class="btn-close me-3 m-c"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="toggleOffcanvas"
          ></button>
        </div>
        <ul class="navbar-nav">
          <slot :closeNavList="closeNavList" :clickLink="clickLink"></slot>
        </ul>
        <div>
          <div class="d-flex res-search">
            <!-- search input -->
            <SearchInput class="mx-2" v-if="!hideSearch" />
            <template v-if="token">
              <UserMsg :prefixRoute="prefixRoute" />
              <UserNotif :prefixRoute="prefixRoute" />
              <UserNav :prefixRoute="prefixRoute" />
            </template>
            <div
              v-else
              style="line-height: 3.5"
              class="btn-main btn-nav text-center"
            >
              <router-link
                :to="getRouteLocale('register')"
                class="text-white"
              >{{ $t("join-us") }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ArrowDownSVG from "@/components/icon-svg/arrow-down.vue";

import UserNav from "@/layouts/common/user-nav.vue";
import UserMsg from "@/layouts/common/user-msg.vue";
import UserNotif from "@/layouts/common/user-notif.vue";
import SearchInput from "./search.vue";
export default {
  name: "default-header",
  props: {
    prefixRoute: {
      type: String,
      default: "",
    },
    hideSearch: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SearchInput,
    ArrowDownSVG,
    UserNav,
    UserMsg,
    UserNotif,
  },
  data() {
    return {
      lang: "AR",
      showMobileNav: false,
    };
  },
  methods: {
    closeNavList() {
      this.showMobileNav = false;
    },
    clickLink(navigate, evnt) {
      this.closeNavList();
      navigate(evnt);
    },
    toggleOffcanvas() {
      this.showMobileNav = !this.showMobileNav;
    },
    logout() {
      window.store.commit("auth/CLEAR_TOKEN");
      window.store.commit("auth/CLEAR_USER");

      window.location.reload();
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  margin-right: 0;
}
a.nav-link {
  text-align: start;
  white-space: nowrap;
}
</style>
