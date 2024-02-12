<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            حاضنة
          </h1>
          <h1
            class="header-title-page select-title-main text-black"
            style="display: inline"
          >
            رياديات
            <img src="@/assets/img/new/main-page/header/Vector 14.png" alt="" />
          </h1>

          <p class="header-desc-page text-black my-5">
            فكـــرة مشروعـــــك راح تـــصـــبـــح واقـــــــــــــع أول خطوة
            لتحقيقه أشتراكك في حاضنة رياديات
          </p>
          <div class="mt-4">
            <router-link
              v-if="!token"
              :to="getRouteLocale('login')"
              class="btn-custmer-w bg-transparent text-white mt-2 mx-3"
            >
              {{ $t("login-female") }}
            </router-link>
            <button
              style="color: #1fb9b3"
              class="btn btn-lg bg-light bg mx-1 px-4 py-2"
            >
              <play-icon class="mx-1" />
              عرض توجيهى
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
            <img
              class="img-fluid shadow rounded-4"
              src="../../../../../../public/assets/img/Video-hugging.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playIcon from "@/components/icon-svg/play.vue";
export default {
  name: "section-top",
  data: () => {
    return {
      subNetworkTitle:
        "يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في حاضنة رياديات",
    };
  },
  components: {
    playIcon,
  },
};
</script>

<style scoped>
.select-title-main {
  position: relative;
}

.select-title-main img {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 100%;
}
</style>
