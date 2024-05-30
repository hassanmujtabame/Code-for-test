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
            <li
              v-for="(item, index) in pagesToShow"
              :key="index"
              style="list-style: none"
              class="nav-item"
            >
              <router-link
                style="color: #888"
                :to="getRouteLocale(item.name)"
                class="nav-link hover-li"
                :class="{ 'li-active': page == item.name }"
              >
                {{ item.title }}
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
  data(vm) {
    return {
      pages: [
        {
          name: "network-dashboard",
          title: vm.$t("Dashboard"),
          show: true,
        },
        {
          name: "consultant-dashboard",
          title: vm.$t("the-consultant"),
          show: vm.userIsConsultant,
        },
        {
          name: "service-provider-dashboard",
          title: vm.$t("service-provider"),
          show: true,
        },
        {
          name: "academy-dashboard",
          title: vm.$t("academy"),
          show: true,
        },
        {
          name: "company-dashboard",
          title: vm.$t("the-companies"),
          show: true,
        },
        {
          name: "affiliate-marketing-dashboard",
          title: vm.$t("Affiliate-marketing"),
          show: true,
          children: [
            {
              name: "affiliate-marketing-visits",
              title: vm.$t("visits"),
            },
            {
              name: "affiliate-marketing-referrals",
              title: vm.$t("referrals"),
            },
            {
              name: "affiliate-marketing-operations",
              title: vm.$t("operations"),
            },
            {
              name: "affiliate-marketing-links",
              title: vm.$t("links"),
            },
          ],
        },
      ],
    };
  },
  computed: {
    page() {
      return this.$route.name;
    },
    pagesToShow() {
      return this.pages.filter((page) => page.show);
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
