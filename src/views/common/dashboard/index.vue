<template>
  <div style="margin-top: 85px">
    <div class="container dashbord">
      <div class="row">
        <div
          style="background-color: #fff"
          class="col-md-2 d-flex justify-content-center align-items-start rounded-3"
        >
          <ul
            class="d-flex py-5 flex-column gap-4 justify-content-center align-items-start"
          >
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('network-dashboard')"
                class="nav-link hover-li"
                :class="{ 'li-active': page == 'network-dashboard' }"
              >
                {{ $t("Dashboard") }}
              </router-link>
            </li>
            <li
              v-if="userIsConsultant"
              style="list-style: none"
              class="nav-item"
            >
              <router-link
                style="color: #888"
                :to="getRouteLocale('consultant-dashboard')"
                class="nav-link hover-li"
                :class="{ 'li-active': page == 'consultant-dashboard' }"
              >
                {{ $t("the-consultant") }}
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('service-provider-dashboard')"
                class="nav-link hover-li"
                :class="{
                  'li-active': page == 'service-provider-dashboard',
                }"
              >
                {{ $t("service-provider") }}
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('academy-dashboard')"
                class="nav-link hover-li"
                :class="{ 'li-active': page == 'academy-dashboard' }"
              >
                {{ $t("academy") }}
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('company-dashboard')"
                class="nav-link hover-li"
                :class="{ 'li-active': page == 'company-dashboard' }"
              >
                {{ $t("the-companies") }}
              </router-link>
            </li>
          </ul>
        </div>

        <!--section balance-->
        <div class="col-md-10 balance">
          <div class="my-5">
            <SectionBalance />
          </div>
          <!--#section services-->
          <div class="mx-3">
            <router-view />
          </div>

          <AskUs />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AskUs from "@/components/ask-us-consult.vue";
import SectionBalance from "./parts/balance-section/index.vue";

export default {
  name: "dashboard",
  components: {
    AskUs,
    SectionBalance,
  },
  computed: {
    page() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.nav-item,
.nav-link {
  text-align: start;
  font-size: 18px;
}
.li-active {
  font-weight: bold;
  color: #1fb9b3 !important;
}
</style>
