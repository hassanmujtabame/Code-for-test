<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      {{ hasError }}
    </div>
    <div v-else class="container">
      <div class="row profile-services">
        <!-- <div class="col-12 col-lg-3 mt-3">
          <Sidebar />
        </div> -->
        <div class="col-12 col-lg-12 mt-3">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <!-- معومات العرض-->
            <SectionDisplay :currentUser="currentUser" />
            <!--معومات شخصية  -->
            <SectionPersonal :currentUser="currentUser" />
            <!-- بطاقات الدفع -->
            <!-- <div>

            <SectionPaymentCards />
            </div> -->
            <!--معلومات الدراسة -->
            <!-- <div>

            <SectionEducation :currentUser="currentUser" />
            </div> -->
            <!--معلومات مهنية -->
            <!-- <div>

            <SectionProfessional :currentUser="currentUser" />
            </div> -->
            <!--معلومات الاقامة -->
            <!-- <div>

            <SectionResidence :currentUser="currentUser" />
            </div> -->
            <!-- معلومات التواصل -->
            <SectionCommunication :currentUser="currentUser" />
            <!-- اعدادات الاشعارات -->

            <SectionSettingsNotif :currentUser="currentUser" />
            <!--قائمة الحظر -->
            <!-- <div>
              
            <SectionListBlocks :currentUser="currentUser" />
            </div> -->
            <!--معرض الاعمال -->
            <!-- <div>

            <SectionShowerProject :currentUser="currentUser" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import Sidebar from "./parts/sidebar/index.vue";
import SectionPaymentCards from "./parts/sections/payment-cards/index.vue";
import SectionDisplay from "./parts/sections/information-display/index.vue";
import SectionPersonal from "./parts/sections/information-personal/index.vue";
import SectionEducation from "./parts/sections/information-education/index.vue";
import SectionProfessional from "./parts/sections/information-professional/index.vue";
import SectionCommunication from "./parts/sections/information-communication/index.vue";
import SectionResidence from "./parts/sections/information-residence/index.vue";
import SectionSettingsNotif from "./parts/sections/settings-notif/index.vue";
import SectionListBlocks from "./parts/sections/list-blocks/index.vue";
import SectionShowerProject from "./parts/sections/shower-project/index.vue";
export default {
  name: "show-profile",
  components: {
    Sidebar,
    SectionDisplay,
    SectionPersonal,
    SectionEducation,
    SectionCommunication,
    SectionProfessional,
    SectionResidence,
    SectionSettingsNotif,
    SectionListBlocks,
    SectionShowerProject,
    SectionPaymentCards,
  },
  data: () => {
    return {
      currentUser: {},
      loading: true,
      hasError: false,
    };
  },
  methods: {
    async loadCurrentUser() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await userAPI.me();
        if (data.success) {
          this.currentUser = data.data;
        } else {
          this.hasError = data.message;
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 401) {
            this.logout();
          } else {
            this.hasError = " هناك خطأ غير معروف يرجي تحديث الصفحة";
          }
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.loadCurrentUser();
  },
};
</script>

<style></style>
