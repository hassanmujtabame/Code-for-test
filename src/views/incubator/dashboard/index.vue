<template>
  <div style="margin-top: 85px">
    <div class="container dashbord">
      <div class="row">
        <!-- <div
          style="margin-top: 8rem !important; background-color: #fff"
          class="col-md-2 d-flex justify-content-center align-items-start shadow rounded-3"
        >
          <ul
            class="d-flex py-3 text-end flex-column gap-3 justify-content-center align-items-center"
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
                :to="getRouteLocale('network-dashboard')"
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
            <li style="list-style: none" class="nav-item">
              <router-link
                style="color: #888"
                :to="getRouteLocale('incubator-dashboard')"
                class="nav-link hover-li"
              >
                حاضنة رياديات
              </router-link>
            </li>
          </ul>
        </div> -->

        <!--section header-->
        <!-- <div>

            <SectionHeader />
            </div> -->
        <!--section balance-->
        <div class="col-md-12">
          <div class="my-5">
            <SectionBalance />
          </div>
          <!--#section balance-->
          <Services />
          <AskUs />
        </div>
        <!-- <div class="col-md-6">
          <d-card-one />
        </div> -->
        <!-- <div class="col-md-6">
          <d-card-two />
        </div> -->

        <!-- <div class="row justify-content-between">
        <div class="col-12 row mt-5 gap-4">
          <div class="col-md-5 border p-3">
            <widget-courses />
          </div>
          <div class="col-md-5 border p-3">
            <widget-learning-meetings />
          </div>
        </div>

        <div class="col-12 row mt-3 gap-4">
          <div class="col-md-5 border p-3">
            <WidgetAttachments />
          </div>
          <div class="col-md-5 border p-3">
            <widget-consultations />
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import Services from "@/components/service-dashboard.vue";
import AskUs from "@/components/ask-us-consulting.vue";
import SectionBalance from "./parts/section-balance/index.vue";
import WidgetConsultations from "./parts/widget-consultations.vue";
import WidgetLearningMeetings from "./parts/widget-learning-meetings.vue";
import WidgetCourses from "./parts/widget-courses.vue";
import WidgetAttachments from "./parts/widget-attachments.vue";
import dCardOne from "./parts/card-one.vue";
import dCardTwo from "./parts/card-two.vue";
export default {
  name: "network-dashboard",
  components: {
    AskUs,
    SectionHeader,
    Services,
    SectionBalance,
    WidgetConsultations,
    WidgetLearningMeetings,
    WidgetCourses,
    WidgetAttachments,
    dCardOne,
    dCardTwo,
  },
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
