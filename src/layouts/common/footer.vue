<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between align-items-center p-3 text-center">
        <div class="col-12 col-md-7 mt-2">
          <div class="row justify-content-between nav">
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6>{{ $t("Riadiat") }}</h6>
              <router-link :to="getRouteLocale('who-are-we')" class="d-block">{{
                $t("who-are-we")
              }}</router-link>

              <a href="#" class="d-block">النماذج</a>
              <router-link :to="getRouteLocale('workspaces-home')" class="d-block">{{ $t("workspaces") }}</router-link>
            </div>
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6>{{ $t("riadiat-channel") }}</h6>
              <router-link :to="getRouteLocale('network-blogs')" class="d-block">{{ $t("Blogs") }}</router-link>
              <router-link :to="getRouteLocale('network-podcasts')" class="d-block">{{ $t("podcast") }}</router-link>
              <router-link :to="getRouteLocale('network-success-stories')" class="d-block">{{ $t("success-story")
              }}</router-link>
              <a href="#" class="d-block">قناة رياديات</a>
            </div>

            <!-- uncomment after edition in jobs  -->

            <!-- <div class="col-xl-3 col-lg-6 mt-3">
              <h6>{{ $t("join-us") }}</h6>
              <router-link
                :to="getRouteLocale('service-provider-jobs')"
                class="d-block"
                >{{ $t("recruitment") }}</router-link
              >
              <router-link
                :to="getRouteLocale('affiliate-marketing-home')"
                class="d-block"
                >{{ $t("Affiliate-marketing") }}</router-link
              >
            </div> -->

            <div class="col-xl-3 col-lg-6 mt-3">
              <h6>{{ $t("support") }}</h6>
              <router-link :to="getRouteLocale('common-questions')" class="d-block">{{ $t("faq") }}</router-link>
              <router-link :to="getRouteLocale('contact-us')" class="d-block">{{
                $t("contact-us")
              }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2 text-center mt-2">
          <h6>{{ $t("download-application") }}</h6>
          <div class="newsletter">
            <div class="mt-3">
              <a href="">
                <img :src="`${publicPath}assets/svg/google-play-with-text.svg`" />
              </a>
            </div>
            <div class="mt-3">
              <a href="">
                <img :src="`${publicPath}assets/svg/app-store-with-text.svg`" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style="border-color: var(--pc) !important;"
        class="d-flex fs-2 justify-content-between align-items-center border border-1 p-3 rounded-4 ">
        <a href="/"
          class="d-flex header-logo align-items-center justify-content-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <div>
            <img :src="`${publicPath}assets/svg/logo-footer.svg`" width="100" />
          </div>
        </a>
        <div class="policy-links">
          <router-link class="fs-2" :to="getRouteLocale('terms-and-conditions-category', { category: category })">
            {{ $t("terms-use") }}
          </router-link>
          <!-- <router-link class="fs-2" :to="getRouteLocale('terms-and-conditions-category')">
            {{ $t("Privacy-policy") }}
          </router-link> -->
          <!-- <router-link class="fs-2" :to="getRouteLocale('terms-and-conditions-category', { category: category })">
            {{ $t(category) }}
          </router-link> -->
          <a class="fs-2" style="cursor: pointer;" @click="openShowMsg('commercialRegister')">
            السجل التجارى
          </a>
          <a class="fs-2" style="cursor: pointer;" @click="openShowMsg('taxNumber')">
            الرقم الضريبى
          </a>
        </div>
        <div class="social mt-3">
          <span class="d-block mb-3 text-center">تابعنا</span>
          <a v-for="(m, i) in socialMedias" :key="i" :href="m.url" class="t-c" target="_blank">
            <i v-if="m.name == 'facebook'" class="fab fa-facebook-f"></i>
            <i v-if="m.name == 'youtube'" class="fab fa-youtube"></i>
            <i v-if="m.name == 'linkedin'" class="fab fa-linkedin-in"></i>
            <i v-if="m.name == 'instagram'" class="fab fa-instagram"></i>
            <i v-if="m.name == 'twitter'" class="fab fa-twitter"></i>
            <i v-if="m.name == 'tiktok'" class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
    <d-success-message />
  </footer>
</template>

<script>

export default {
  name: "default-footer",
  props: ['category'],
  methods: {
    openShowMsg(type) {
      if (type == 'commercialRegister') {
        let dataEvt = {
          title: 'السجل التجارى',
          description: '1010457094',
          descriptionClass: 'fs-2',
          hideBtn: true
        }
        this.showSuccessMsg(dataEvt)
      } else if (type == 'taxNumber') {
        let dataEvt = {
          title: 'الرقم الضريبى',
          description: '310227304700003',
          descriptionClass: 'fs-2',
          hideBtn: true,
        }
        this.showSuccessMsg(dataEvt)
      }
    }
  }
};
</script>

<style scoped>
footer {
  max-width: 100vw;
  overflow: hidden;
}
</style>