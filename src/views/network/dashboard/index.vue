<template>
  <div style="margin-top: 85px">
    <div class="container dashbord">
      <!--section header-->
      <SectionHeader />
      <!--section balance-->
      <SectionBalance />
      <!--#section balance-->
      <div class="row mt-5">
        <div class="col-md-5 network">
          <div class="box bg-main p-3 rounded-2">
            <div class="d-flex">
              <div class="w-75">
                <h3 class="text-white">تشاركينا ؟</h3>
                <p class="text-white">
                  يمكنك ترقية حسابك الان من عضو في الشبكة الى شريك في منصة
                  رياديات والاستفادة بالكثير من المميزات
                </p>
                <router-link
                  custom
                  :to="getRouteLocale('register-networking')"
                  v-slot="{ navigate }"
                >
                  <button
                    @click="navigate"
                    class="border border-white rounded-2 text-white bg-transparent p-2"
                  >
                    {{ $t("know_more") }}
                  </button>
                </router-link>
              </div>
              <div>
                <img
                  class="img-fluid"
                  :src="`${publicPath}assets/img/ve 1.png`"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 network">
          <div class="box border p-4 rounded-2">
            <div class="d-flex">
              <div class="w-75">
                <h3 class="text-dark">تحتاج الى المساعدة ؟</h3>
                <p class="text-dark">
                  لانك عضو في شبكة رياديات يمكنك طلب استشارات من مستشارينا
                  المميزين في اغلب المجالات بكل سهولة
                </p>
                <router-link
                  :to="getRouteLocale('consulting-page')"
                  class="border border-white rounded-2 text-white bg-main p-2"
                >
                  {{ $t("know_more") }}
                </router-link>
              </div>
              <div>
                <img
                  class="img-fluid"
                  :src="`${publicPath}assets/img/vuesax/v2.png`"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div v-if="userIsConsultant" class="col-12 row mt-3 gap-4">
          <div class="col-md-5 border p-3">
            <widget-consulting-requests />
          </div>

          <div class="col-md-5 border p-3">
            <widget-consulting-rates />
          </div>
        </div>

        <div class="col-12 row mt-5 gap-4">
          <div class="col-md-5 border p-3">
            <widget-investment />
          </div>
          <div class="col-md-5 border p-3">
            <widget-investment-others />
          </div>
        </div>

        <div class="col-12 row mt-3 gap-4">
          <div class="col-md-5 border p-3">
            <WidgetDownloadModels />
          </div>
          <div class="col-md-5 border p-3">
            <widget-blog />
          </div>
        </div>
        <div class="col-12 row mt-3 gap-4">
          <div class="col-md-5 border p-3">
            <WidgetConsultingBookings />
          </div>
          <div class="col-md-5 border p-3">
            <WidgetMyInscriptionMeetings />
          </div>
        </div>
        <div class="col-12 row mt-3 gap-4">
            <div class="col-md-5 border p-3">
              <workspaceReservation />
            </div>
            <div class="col-md-5 border p-3">
              <workspaceRequest />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionBalance from "./parts/section-balance/index.vue";
import WidgetConsultingRequests from "./parts/widget-consulting-requests.vue";
import WidgetConsultingRates from "./parts/widget-consulting-rates";
import WidgetConsultingBookings from "./parts/widget-consulting-bookings";
import WidgetBlog from "./parts/widget-blog.vue";
import WidgetInvestmentOthers from "./parts/widget-investment-others.vue";
import WidgetInvestment from "./parts/widget-investment.vue";
import WidgetDownloadModels from "./parts/widget-download-models.vue";
import WidgetMyInscriptionMeetings from "./parts/widget-my-inscription-meetings.vue";
import workspaceReservation from "./parts/workspaceReservation.vue";
import workspaceRequest from "./parts/workspaceRequest.vue";



export default {
  name: "network-dashboard",
  components: {
    workspaceRequest,
    SectionHeader,
    SectionBalance,
    WidgetConsultingRequests,
    WidgetConsultingRates,
    WidgetConsultingBookings,
    WidgetBlog,
    WidgetInvestmentOthers,
    WidgetInvestment,
    WidgetDownloadModels,
    WidgetMyInscriptionMeetings,
    workspaceReservation
    
  },
};
</script>

<style>
</style>