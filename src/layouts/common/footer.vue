<template>
  <footer>
    <div class="container">
      <div
        class="row justify-content-between align-items-center p-3 text-center"
      >
        <div class="col-12 col-md-3 mt-2">
          <div>
            <!-- <img :src="`${publicPath}assets/svg/logo-footer.svg`" width="100" /> -->
            <!-- <img src="@/assets/logo-white.png" width="100" /> -->
            <img
              class="img-fluid"
              src="../../assets/img/footer/Group 6.png"
              alt="logo"
            />
          </div>
          <!-- <div class="col-12 d-flex flex-row justify-content-center gap-2 mt-3">
            <a
              v-for="(m, i) in socialMedias"
              :key="i"
              :href="m.url"
              class="text-white"
              target="_blank"
            >
              <i
                v-if="m.name == 'facebook'"
                class="fab fa-facebook-f col-3"
              ></i>
              <i v-if="m.name == 'youtube'" class="fab fa-youtube col-3"></i>
              <i
                v-if="m.name == 'linkedin'"
                class="fab fa-linkedin-in col-3"
              ></i>
              <i
                v-if="m.name == 'instagram'"
                class="fab fa-instagram col-3"
              ></i>
              <i v-if="m.name == 'whatsapp'" class="fab fa-whatsapp col-3"></i>
              <i
                v-if="m.name == 'twitter'"
                class="fa-brands fa-x-twitter col-3"
              ></i>
              <i v-if="m.name == 'tiktok'" class="fab fa-tiktok col-3"></i>
            </a>
          </div> -->

          <!-- <div class="row mx-auto">
            <div class="my-2">
              <router-link
                class="text-white"
                :to="
                  getRouteLocale('terms-and-conditions-category', {
                    category: category,
                  })
                "
              >
                {{ $t("terms-use") }}
              </router-link>
            </div>
            <h6 style="color: white" class="mb-0">السجل التجارى: 1010457094</h6>
            <h6 style="color: white">الرقم الضريبى: 310227304700003</h6>
          </div> -->
        </div>
        <div class="col-12 col-md-7 mt-2">
          <div class="row justify-content-between nav">
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6 style="color: #2cb7b3" class="">{{ $t("Riadiat") }}</h6>
              <router-link :to="getRouteLocale('who-are-we')" class="d-block">{{
                $t("who-are-we")
              }}</router-link>

              <!-- <a href="#" class="d-block">النماذج</a> -->
              <router-link
                :to="getRouteLocale('network-models')"
                class="d-block"
                >النماذج</router-link
              >
              <router-link
                :to="getRouteLocale('workspaces-home')"
                class="d-block"
                >{{ $t("workspaces") }}</router-link
              >
            </div>
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6 style="color: #2cb7b3">{{ $t("riadiat-channel") }}</h6>
              <router-link
                :to="getRouteLocale('network-blogs')"
                class="d-block"
                >{{ $t("Blogs") }}</router-link
              >
              <router-link
                :to="getRouteLocale('network-podcasts')"
                class="d-block"
                >{{ $t("podcast") }}</router-link
              >
              <router-link
                :to="getRouteLocale('network-success-stories')"
                class="d-block"
                >{{ $t("success-story") }}</router-link
              >
              <a
                href="https://www.youtube.com/channel/UCM0gTqCAolncVWSr0aPbi6w"
                class="d-block"
                >قناة رياديات</a
              >
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
              <h6 style="color: #2cb7b3">خدماتنا</h6>
              <router-link :to="getRouteLocale('network-home')" class="d-block"
                >الشبكة</router-link
              >
              <router-link :to="getRouteLocale('academy-home')" class="d-block"
                >الأكاديمية</router-link
              >
              <router-link
                :to="getRouteLocale('incubator-home')"
                class="d-block"
                >الحاضنة</router-link
              >
              <router-link
                :to="getRouteLocale('service-provider-home')"
                class="d-block"
                >الخدمات</router-link
              >
              <!-- <router-link :to="getRouteLocale('contact-us')" class="d-block">{{
                $t("contact-us")
              }}</router-link> -->
            </div>
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6 style="color: #2cb7b3">{{ $t("support") }}</h6>
              <router-link
                :to="getRouteLocale('common-questions')"
                class="d-block"
                >{{ $t("faq") }}</router-link
              >
              <router-link :to="getRouteLocale('contact-us')" class="d-block">{{
                $t("contact-us")
              }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2 text-center mt-2">
          <h6 style="color: #2cb7b3">{{ $t("download-application") }}</h6>
          <div class="newsletter">
            <div class="mt-3">
              <a href="">
                <img
                  :src="`${publicPath}assets/svg/google-play-with-text.svg`"
                />
              </a>
            </div>
            <div class="mt-3">
              <a href="">
                <img
                  :src="`${publicPath}assets/svg/app-store-with-text.svg`"
                  alt=""
                />
              </a>
            </div>
            <!-- <div class="d-flex align-items-center gap-2">
            <img
              src="../../assets/img/footer/Mobile app store badge.png"
              alt=""
            />
            <img
              src="../../assets/img/footer/Mobile app store badge (1).png"
              alt=""
            />
          </div> -->
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-between px-3 align-items-center"
        style="background-color: #98a2b3"
      ></div>

      <!-- <div style="border-color: var(--pc) !important;"
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
          <a class="fs-2" style="cursor: pointer;" >
            السجل التجارى: 1010457094

          </a>
          <a class="fs-2" style="cursor: pointer;">
            الرقم الضريبى: 310227304700003
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
      </div> -->
    </div>
    <d-success-message />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a href="https://wa.me/966504913601" class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "default-footer",
  props: ["category"],
};
</script>

<style scoped>
footer {
  background-color: #333;
  position: relative;
  max-width: 100vw;
  overflow: hidden;
}

footer .nav a {
  color: #bdbdbd;
}

footer h6 {
  color: #fff;
}
.float {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>
