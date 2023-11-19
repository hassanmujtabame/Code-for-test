<template>
  <div style="" class="consult">
    <!--section header-->
    <SectionHeader />
    <!-- members of network-->
    <SectionMemeberNetwork />
    <!--schedule network-->
    <SectionScheduleNework />
    <!-- Educational meeting -->
    <SectionEducationalMeeting />

    <!--investment projects-->
    <SectionInvestementProject v-if="user.id == 11" />
    <!--exhibitions-->
    <SectionExhibitions />

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div @click="checkSub" class="box clickable">
            <img class="w-100 shadow-hover" :src="`${publicPath}assets/img/Component 40.png`" alt="" height="295" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="shadow-hover box border p-5 rounded-2">
            <div class="d-flex" :class="{ 'flex-column-reverse': isMobile }">
              <div :class="{ 'w-75': !isMobile, 'w-100': isMobile }">
                <h3 class="text-dark">تحتاج الى المساعدة ؟</h3>
                <p class="text-dark">
                  لانك عضو في شبكة رياديات يمكنك طلب استشارات من مستشارينا
                  المميزين في اغلب المجالات بكل سهولة
                </p>
                <button @click="router_push('consulting-home')"
                  class="border border-white rounded-2 text-white bg-main p-2">
                  {{ $t("know_more") }}
                </button>
              </div>
              <div>
                <img class="img-fluid" :src="`${publicPath}assets/img/vuesax/v2.png`" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--قصص نجاح-->
    <SectionStory />
    <!--نماذج رياديات -->
    <SectionModels />
    <div class="main-top py-2 position-relative mt-5" :class="{ 'px-5': !isMobile, 'px-3': isMobile }">
      <div class="row align-items-center m-auto">
        <div class="box col-12 col-md-6">
          <h1 class="text-white fw-bolder" :class="{ 'fs-2': !isMobile, 'fs-6': isMobile }">
            محتاج خدمة ؟ تبحث عن موظف مميز ؟
          </h1>
          <p class="text-white" :class="{ 'w-75': !isMobile, 'w-100': isMobile }">
            اذا كنت تريد شراء الخدمات الجاهزة التي يقوم مقدمين الخدمات بأضافتها
            او حتى طلب خدمات خاصة او البحث عن موظفين مميزين لشركتك كل ماعليك
            فعله هو الدخول الى منصة مقدمي الخدمات
          </p>
          <router-link :to="getRouteLocale('service-provider-home')"
            class="btn border p-2 text-white bg-transpernt svg-network">
            <svg height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#F6F8F9" />
              <path
                d="M11.9999 18.25C11.7899 18.25 11.5899 18.22 11.4199 18.16C9.26986 17.43 5.85986 14.81 5.85986 10.91C5.85986 8.83 7.53986 7.14001 9.60986 7.14001C10.5099 7.14001 11.3399 7.45001 12.0099 8.01001C12.6799 7.45001 13.5199 7.14001 14.3999 7.14001C16.4699 7.14001 18.1499 8.83 18.1499 10.91C18.1499 14.8 14.7399 17.42 12.5799 18.16C12.4099 18.22 12.1999 18.25 11.9999 18.25ZM9.59987 8.64999C8.35987 8.64999 7.34987 9.67001 7.34987 10.92C7.34987 14.41 10.7199 16.35 11.8999 16.75C11.9399 16.76 12.0399 16.76 12.0799 16.75C13.2599 16.35 16.6299 14.41 16.6299 10.92C16.6299 9.67001 15.6199 8.64999 14.3799 8.64999C13.6799 8.64999 13.0099 8.99 12.5899 9.56C12.3099 9.94 11.6699 9.94 11.3899 9.56C10.9699 8.98 10.3199 8.64999 9.59987 8.64999Z"
                fill="#F6F8F9" />
            </svg>
            مقدمين الخدمات
          </router-link>
        </div>
        <div class="col-md-6">
          <img class="img-fluid" :src="`${publicPath}assets/img/Group 1171275365.png`" alt="" />
        </div>
      </div>

      <div class="star position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
      </div>
      <div class="square position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="" />
      </div>
      <div class="star-two position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
      </div>
      <div class="star-big position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="" />
      </div>
    </div>

    <!-- شركائنا-->
    <SectionPartner />
    <!-- تشاركينا ؟-->
    <SectionJoinUs v-if="!userPartner" />
    <SectionPodcast />
    <SectionWorkspace />
    <!--مدونات-->
    <SectionBlogs />

    <SectionContinueLearning />
    <SectionHear />
  </div>
</template>

<script>
import SectionWorkspace from "./parts/section-workspace"
import SectionHeader from "./parts/section-header/index.vue";
import SectionPodcast from "./parts/section-podcast/index.vue";
import SectionExhibitions from "./parts/section-exhibitions/index.vue";
import SectionInvestementProject from "./parts/section-investment-projects/index.vue";
import SectionScheduleNework from "../guest/parts/section-schedules/index.vue";
import SectionEducationalMeeting from "./parts/section-educational-meeting/index.vue";
import SectionMemeberNetwork from "./parts/section-member-network/index.vue";
import SectionStory from "./parts/section-successful-story/index.vue";
import SectionPartner from "./parts/section-partners/index.vue";
import SectionModels from "./parts/section-models/index.vue";
import SectionHear from "../guest/parts/section-hear/index.vue";
import SectionContinueLearning from "../guest/parts/section-continue-learning/index.vue";
import SectionJoinUs from "../guest/parts/section-join-us/index.vue";
import SectionBlogs from "./parts/section-blogs/index.vue";
export default {
  name: "home-network",
  components: {
    SectionWorkspace,
    SectionPartner,
    SectionBlogs,
    SectionPodcast,
    SectionHear,
    SectionContinueLearning,
    SectionHeader,
    SectionExhibitions,
    SectionInvestementProject,
    SectionScheduleNework,
    SectionEducationalMeeting,
    SectionStory,
    SectionModels,
    SectionMemeberNetwork,
    SectionJoinUs,
  },
  data: () => {
    return {
      showOffers: false,
    }
  },
  methods: {
    checkSubscriptionOptions() {
      for (let index = 0; index < this.user.subscription_options.length; index++) {
        const element = this.user.subscription_options[index];
        if (element.key == "show_offers") {
          this.showOffers = true
        }
      }
    },
    checkSub() {
      if (!this.showOffers) {
        let dataEvt = {
          title: 'للأسف لايمكنك  رؤية العروض  ',
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على العروض والخصومات   - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من العروض و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            { title: 'رقي حسابك', action: () => this.router_push('network-subscribe') }
          ]
        }
        this.showConfirmMsg(dataEvt);
        return;
      } else {
        this.router_push('network-offers')
      }
    }
  },
  mounted() {
    this.checkSubscriptionOptions()
  }
};
</script>

<style></style>