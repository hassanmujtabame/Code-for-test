<template>
  <main style="margin-top: 85px">
    <div class="container dashbord">
      <div class="row">
        <!-- <div class="col-md-2">
          <SideBar />
        </div> -->
        <div
          style="margin-top: 8rem !important; background-color: #fff"
          class="col-md-2 d-flex justify-content-center align-items-start shadow rounded-3"
        >
          <ul
            class="d-flex py-5 flex-column gap-3 justify-content-center align-items-center"
          >
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('network-dashboard')"
                class="nav-link hover-li"
              >
                لوحه التحكم
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('consulting-dashboard')"
                class="nav-link hover-li"
              >
                المستشار
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('service-provider-dashboard')"
                class="nav-link li-active hover-li"
              >
                مقدم الخدمة
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('academy-dashboard')"
                class="nav-link hover-li"
              >
                ألاكاديمية
              </router-link>
            </li>
            <!-- <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('incubator-dashboard')"
                class="nav-link hover-li"
              >
                حاضنة رياديات
              </router-link>
            </li> -->
          </ul>
        </div>
        <div style="margin-top: 8rem !important" class="col-md-10">
          <!--section top-->
          <SectionBalance />
          <!-- <div>

          <SectionTop />
          </div> -->
          <!-- <SectionFirstVisit v-else /> -->
          <!--section balance-->
          <!--section my ready services-->
          <div class="mx-3">
            <SectionMyReadyServices />
          </div>

          <!--section my offers-->
          <!-- <div>

          <SectionMyOffers />
          </div> -->
          <!-- <div>

          <SectionMyWorkSpace />
          </div> -->
          <AskRiyadiate />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SectionTop from "./parts/section-top/index.vue";
import SectionFirstVisit from "./parts/section-first-visit/index.vue";
import SectionBalance from "./parts/section-balance/index.vue";
import SectionMyOffers from "./parts/section-my-offers/index.vue";
import SectionMyWorkSpace from "./parts/section-my-work-space/index.vue";
import AskRiyadiate from "./parts/ask-riyadiate/index.vue";
import SectionMyReadyServices from "./parts/section-my-ready-services/index.vue";
import SideBar from "@/components/sidebar-dash.vue";

export default {
  name: "service-provider-dashboard",
  components: {
    SectionTop,
    SectionFirstVisit,
    SideBar,
    SectionMyOffers,
    SectionBalance,
    SectionMyReadyServices,
    SectionMyWorkSpace,
    AskRiyadiate,
  },
  data: () => ({
    isFirst: true,
  }),
};
</script>

<style>
.hover-li:hover {
  color: #1fb9b3 !important;
  transition: all;
}
.hover-li {
  transition: all;
}
.li-active {
  color: #1fb9b3 !important;
}
</style>
