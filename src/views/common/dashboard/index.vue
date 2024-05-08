<template>
  <div style="margin-top: 85px">
    <div class="container dashbord">
      <div class="row">
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
                :to="getRouteLocale('consultant-dashboard')"
                class="nav-link li-active hover-li"
              >
                المستشار
              </router-link>
            </li>
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('service-provider-dashboard')"
                class="nav-link hover-li"
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
          </ul>
        </div>

        <!--section balance-->
        <div class="col-md-10">
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
};
</script>

<style></style>
