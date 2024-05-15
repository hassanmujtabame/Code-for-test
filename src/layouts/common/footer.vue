<template>
  <footer style="padding-top: 20px; padding-bottom: 0px" class="">
    <div class="container">
      <div
        class="row justify-content-between p-3 text-right"
        style="position: relative"
      >
        <div class="col-12 col-md-3 mt-2">
          <div>
            <img
              class="img-fluid"
              src="../../assets/img/footer/Group 6.png"
              alt="logo"
            />
          </div>
        </div>
        <div class="col-12 col-md-7 mt-2">
          <div class="row justify-content-between nav">
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6 style="color: #2cb7b3" class="">عن رياديات</h6>
              <router-link :to="getRouteLocale('who-are-we')" class="d-block">{{
                $t("who-are-we")
              }}</router-link>
              <router-link
                :to="getRouteLocale('network-models')"
                class="d-block"
                >الشروط والأحكام</router-link
              >
              <router-link
                :to="getRouteLocale('workspaces-home')"
                class="d-block"
                >سياسة الخصوصية</router-link
              >
            </div>
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
              <router-link
                :to="getRouteLocale('workspaces-home')"
                class="d-block"
                >أماكن العمل</router-link
              >
            </div>
            <div class="col-xl-3 col-lg-6 mt-3">
              <h6 style="color: #2cb7b3">انضم لنا</h6>
              <router-link
                :to="getRouteLocale('service-provider-jobs')"
                class="d-block"
                >انضم لفريق عملنا</router-link
              >
              <router-link
                :to="getRouteLocale('affiliate-marketing-home')"
                class="d-block"
                >{{ $t("Affiliate-marketing") }}</router-link
              >
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
        <div class="col-12 col-md-2 text-right mt-2">
          <h6 style="color: #2cb7b3" class="mt-3">
            {{ $t("download-application") }}
          </h6>
          <div class="d-flex align-items-center gap-2">
            <a href="/">
              <img
                src="../../assets/img/footer/Mobile app store badge.png"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="../../assets/img/footer/Mobile app store badge (1).png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="col-12 my-5">
          <div style="width: fit-content" class="d-flex mx-auto flex-column">
            <div class="text-end">
              <h6 style="color: #2cb7b3">منتجات رياديات</h6>
            </div>
            <div class="align-items-center d-flex justify-content-center gap-2">
              <router-link :to="getRouteLocale('network-home')">
                <img src="../../assets/img/footer/Logo.png" alt="" />
              </router-link>
              <router-link :to="getRouteLocale('incubator-home')">
                <img src="../../assets/img/footer/Group 11550.png" alt="" />
              </router-link>
              <router-link :to="getRouteLocale('academy-home')">
                <img src="../../assets/img/footer/Group 11552.png" alt="" />
              </router-link>
              <router-link :to="getRouteLocale('workspaces-home')">
                <img src="../../assets/img/footer/Group 11549.png" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <d-success-message />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />

    <div
      class="py-4 d-flex align-items-center justify-content-between px-5"
      style="background-color: #f6f8f9"
    >
      <div class="d-flex align-items-center gap-5">
        <div class="d-flex flex-column">
          <p style="color: #98a2b3">السجل التجاري</p>
          <p style="color: #98a2b3">1010457094</p>
        </div>
        <div class="d-flex flex-column">
          <p style="color: #98a2b3">الرقم الضريبي</p>
          <p style="color: #98a2b3">310227304700003</p>
        </div>
      </div>

      <div class="copy-rights">
        <p class="d-flex align-items-center gap-1" style="color: #98a2b3">
          <span> {{ $t("Riadiat") }}</span>
          <span> {{ gitTag }} </span>
          <span><i class="fa-regular fa-copyright"></i></span>
          <span>{{ currentYear }}</span>
        </p>
      </div>
      <div class="d-flex flex-column">
        <p style="color: #98a2b3">ابقي علي تواصل</p>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <a :href="instagramUrl">
            <i class="footer-link-icon fa-brands fa-instagram"></i
          ></a>
          <a :href="twitterUrl">
            <i class="footer-link-icon fa-brands fa-twitter"></i
          ></a>
          <a :href="facebookUrl">
            <i class="footer-link-icon fa-brands fa-facebook"></i
          ></a>
          <a :href="linkedinUrl">
            <i class="footer-link-icon fa-brands fa-linkedin"></i
          ></a>
          <a :href="snapchatUrl">
            <i class="footer-link-icon fa-brands fa-snapchat"></i
          ></a>
          <a :href="tiktokUrl">
            <i
              class="footer-link-icon fa-brands fa-tiktok"
              style="font-size: 24px"
            ></i
          ></a>
          <a :href="youtubeUrl">
            <i class="footer-link-icon fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "default-footer",
  props: ["category"],
  data() {
    return {
      currentYear: new Date().getFullYear(),
      instagramUrl: process.env.VUE_APP_INSTAGRAM,
      twitterUrl: process.env.VUE_APP_TWITTER,
      facebookUrl: process.env.VUE_APP_FACEBOOK,
      linkedinUrl: process.env.VUE_APP_LINKEDIN,
      snapchatUrl: process.env.VUE_APP_SANPCHAT,
      tiktokUrl: process.env.VUE_APP_TIKTOK,
      youtubeUrl: process.env.VUE_APP_YOUTUBE,
      gitTag: process.env.VUE_APP_GIT_TAG,
    };
  },
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
.footer-link-icon {
  font-size: 28px;
  color: #98a2b3;
}
.copy-rights {
  height: 70px;
  display: flex;
  align-items: end;
}
</style>
