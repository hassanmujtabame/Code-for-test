<template>
  <div style="margin-top: 120px" class="mb-3">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container pb-3">
      <div class="row justify-content-between">
        <!-- <div
          style="
            background: linear-gradient(to right, #1e817d, #1fb9b3);
            height: 40vh;
          "
          class="col-12"
        >
          Content goes here
        </div> -->

        <div class="row justify-content-between my-5">
          <div class="col-md-6">
            <!-- <div
              class="mx-5 border border-1 p-2"
              style="border-radius: 10px; border-color: var(--pc) !important"
            >
              <h3
                class="m-c word-break-all d-flex justify-content-between"
                style="margin: 0 !important"
              >
                <span class="m-c">
                  {{ itemPage.title }}
                </span>
                <span
                  class="m-c"
                  style="
                    font-size: 16px;
                    background-color: #eee;
                    padding: 10px;
                    border-radius: 10px;
                  "
                >
                  {{ title_page }}
                </span>
              </h3>
            </div> -->
          </div>

          <!-- <button v-if="!isOwner" style="width: 145px;
          height: 50px;
          text-align: center;
          background: #ffbe39ff; border-radius:10px;" @click="openChat"
            class="col-md-6 text-white border-0 p-2 px-2 mx-4"><i class="fas fa-comments me-3 fa-sm"></i> {{ $t('chat')
            }}</button> -->
        </div>
        <!-- actions page-->
        <!-- <ActionForVisiter v-if="!isOwner" :itemPage="itemPage" /> -->

        <!-- #actions page-->
        <div class="row redy-services">
          <div class="col-lg-6 mt-3">
            <div
              v-if="itemPage.state == 'offline'"
              class="row justify-content-center mx-5 mb-4"
            >
              <div
                class="col-12 border border-1 p-2"
                style="border-radius: 10px; border-color: #979797 !important"
              >
                <div
                  class="m-c word-break-all d-flex justify-content-between"
                  style="margin: 0 !important"
                >
                  <div class="col-6 p-2">
                    <emptyWalletIcon :size="24" color="#979797" />
                    <span>سعر الخدمة : </span>
                    <span>{{ itemPage.price }} {{ $t("riyals") }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <timerIcon :size="24" color="#979797" />
                    <span>مدة التنفيذ : </span>
                    <span>{{ numberToDay(itemPage.execution_period) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- user info section -->
            <div class="box rounded-3 mx-5 mt-1 mb-3">
              <UserInfoLeftImg
                route-name="service-provider-show-profile"
                group-dialog="send-message-to-provider"
                :member="itemPage.user_info"
                :dataEvent="dataEventMessage"
                class="mb-3"
                v-if="!isOwner"
              />
            </div>

            <!-- gallary-->
            <!-- <SectionGallary :item="itemPage" /> -->
            <!--rate service-->
            <div>
              <div style="width: 100%">
                <ActionCrud
                  @suspend="suspend"
                  :itemPage="itemPage"
                  v-if="isOwner"
                />
              </div>

              <SectionRateService :item="itemPage" />
            </div>
          </div>

          <div class="col-lg-6 justify-content-center d-flex felx-column">
            <!-- <div
              v-if="isOwner"
              class="box rounded-3 p-2 mb-4 mt-3 text-center"
              style="background: #2eb9b3"
            >
           
            </div> -->

            <div
              style="object-fit: contain; width: auto; display: inline-block"
              class="box shadow mt-3 rounded-3 p-3"
            >
              <div class="d-flex w-100 flex-column gap-2">
                <div class="">
                  <img
                    style="width: 100%; height: 260px"
                    class="rounded-1 shadow"
                    :src="itemPage.image"
                    alt=""
                  />
                  <div
                    v-if="isOwner"
                    class="text-center my-4"
                    style="background-color: #1fb9b3"
                  >
                    <router-link
                      style="width: 100%; display: block; color: #fff"
                      :to="
                        getRouteLocale(
                          'service-provider-purchase-requests-one-service',
                          { id: itemPage.id }
                        )
                      "
                      class="fs-3 px-5 py-2"
                    >
                      متابعه طلبات الخدمه
                    </router-link>
                  </div>
                </div>

                <ActionForVisiter v-if="!isOwner" :itemPage="itemPage" />
              </div>
              <div>
                <h3 class="border-bottom p-2">وصف الخدمة</h3>
                <p class="p-2" v-html="itemPage.desc"></p>
              </div>

              <!-- user section -->
              <!-- <div>
                <h3 class="border-bottom p-2">بائع الخدمة</h3>
                <d-user-info-li :showBtnChat="false" route-name="service-provider-show-profile"
                  group-dialog="send-message-to-provider" :member="itemPage.user_info" :dataEvent="dataEventMessage"
                  style="border: none;" class="mb-3" />
              </div> -->
              <div>
                <h3 class="border-bottom p-2">تفاصيل الخدمة</h3>
                <div class="row">
                  <div class="col-6 p-2">
                    <eyeOpenIcon :size="24" color="#979797" />
                    <span>المشاهدات: </span>
                    <span class="m-c">{{ itemPage.views ?? "N/A" }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <starIcon :size="24" color="#979797" />

                    <span>التقيمات: </span>
                    <span class="m-c">{{ itemPage.rate ?? "N/A" }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <lovelyIcon :size="24" color="#979797" />
                    <span>المشترين: </span>
                    <span class="m-c">{{ itemPage.n_buyers ?? "N/A" }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <emptyWalletIcon :size="24" color="#979797" />
                    <span>سعر الخدمة</span>
                    <span class="m-c"
                      >{{ itemPage.price }} {{ $t("riyals") }}</span
                    >
                  </div>
                  <div class="col-6 p-2">
                    <signPostIcon :size="24" color="#979797" />
                    <span>التصنيف:</span>
                    <span class="m-c">{{ service_type }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <timerIcon :size="24" color="#979797" />

                    <span>مدة التنفيذ :</span>
                    <span class="m-c">{{
                      numberToDay(itemPage.execution_period)
                    }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <!--tree view icon-->
                    <treeViewIcon />
                    <span> المجال: </span>
                    <span class="m-c">{{
                      itemPage.category_name ?? "N/A"
                    }}</span>
                  </div>
                  <template v-if="itemPage.state == 'offline'">
                    <div class="col-6 p-2">
                      <localisationIcon :size="24" color="#979797" />
                      <span>العنوان : </span>
                      <span class="m-c">{{ itemPage.city ?? "N/A" }}</span>
                    </div>
                    <div class="col-md-auto p-2">
                      <truckIcon :size="24" color="#979797" />
                      <span>مكان التنفيذ أو التسليم :</span>
                      <span class="m-c">{{
                        delivery_placeToText(itemPage.delivery_place) ?? "N/A"
                      }}</span>
                    </div>
                  </template>
                </div>
              </div>
              <div class="mt-4">
                <h3 class="border-bottom p-2">الكلمات المفتاحية</h3>
                <div
                  class="d-flex flex-wrap justify-content-start text-white word-intial pt-3"
                >
                  <template v-if="itemPage.keywords">
                    <p
                      class="mx-1"
                      style="background-color: #eeeeee; color: #2c98b3"
                      v-for="(keyw, i) in itemPage.keywords.split(',')"
                      :key="i"
                    >
                      {{ keyw }}
                    </p>
                  </template>
                </div>
                <SectionShareService :item="itemPage" />
              </div>
              <!-- <div class="text-center">
                <span>{{ $t('publish-date') }}:</span>
                <span class="m-c fw-bolder">{{ dateReverse(itemPage.created_at) ?? 'N/A' }}</span>
              </div> -->
              <!-- <div class="mt-4">
                <ActionForVisiter v-if="!isOwner" :itemPage="itemPage" />

              </div> -->
            </div>

            <!--share service-->
          </div>
        </div>
      </div>
    </div>

    <SectionContinueLearning />
    <SectionHear />
    <DialogBooking />
    <DialogRequestService />
    <DialogDeleteService />
    <DialogUpdateService />
    <CheckOutDialog />
    <DialogSuccessSuspendService @suspend="suspend" />
    <DialogSuccessRepublishService />
  </div>
</template>

<script>
import readyServiceAPIs from "@/services/api/service-provider/provider/ready-service";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";

import SectionGallary from "./section-gallary/index.vue";
import SectionRateService from "./section-rate-service/index.vue";
import SectionShareService from "./section-share-service/index.vue";
import ActionCrud from "./actions/crud.vue";
import ActionForVisiter from "./actions/visiter.vue";
import DialogBooking from "./dialog/booking.vue";
import DialogRequestService from "./dialog/request-service/index.vue";
import DialogDeleteService from "@/layouts/service-provider/dialogs/del-service.vue";
import DialogSuccessSuspendService from "@/layouts/service-provider/dialogs/success-suspend-service.vue";
import DialogSuccessRepublishService from "@/layouts/service-provider/dialogs/success-republish-service.vue";
import DialogUpdateService from "@/layouts/service-provider/dialogs/update-service/index.vue";
import CheckOutDialog from "./dialog/check-out/index";
import treeViewIcon from "@/components/icon-svg/tree-view.vue";
import truckIcon from "@/components/icon-svg/truck.vue";
import localisationIcon from "@/components/icon-svg/localisation.vue";
import timerIcon from "@/components/icon-svg/timer.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import eyeOpenIcon from "@/components/icon-svg/eye-open.vue";
import signPostIcon from "@/components/icon-svg/sign-post-icon.vue";
import lovelyIcon from "@/components/icon-svg/lovely-icon.vue";
import starIcon from "@/components/icon-svg/star-icon.vue";
import UserInfoLeftImg from "./user-info-left-img.vue";
export default {
  name: "page-service-ready",
  metaInfo() {
    console.mylog("metaInfo");
    return { ...this.metaInfo_ };
  },
  metaInfo2: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "ريادات- Riadiat",
    // all titles will be injected into this template
    titleTemplate: "%s | ريادات- Riadiat",
  },
  components: {
    CheckOutDialog,
    UserInfoLeftImg,
    DialogBooking,
    DialogDeleteService,
    DialogSuccessSuspendService,
    DialogSuccessRepublishService,
    DialogRequestService,
    DialogUpdateService,
    ActionCrud,
    ActionForVisiter,
    SectionContinueLearning,
    SectionHear,
    SectionGallary,
    SectionRateService,
    SectionShareService,
    treeViewIcon,
    truckIcon,
    localisationIcon,
    timerIcon,
    emptyWalletIcon,
    eyeOpenIcon,
    signPostIcon,
    lovelyIcon,
    starIcon,
  },
  computed: {
    title_page() {
      switch (this.itemPage.state) {
        case "online":
          return "خدمه عن بعد";
        case "offline":
          return "خدمه حضورية";
        case "service":
          return "خدمه جاهزة";
        default:
          return this.$t("service");
      }
    },
    service_type() {
      switch (this.itemPage.state) {
        case "online":
        case "offline":
          return this.$t(this.itemPage.state);
        case "service":
          return this.$t("ready-service");

        default:
          return "N/A";
      }
    },
  },
  data: () => {
    return {
      metaInfo_: {},
      dataEventMessage: {
        formData: { user_id: null },
        opts: {},
      },
      loading: true,
      hasError: false,
      itemPage: {},
      isOwner: false,
    };
  },
  methods: {
    openChat() {
      this.fireEvent("chat-bar", { user: this.itemPage.user_info });
    },
    delivery_placeToText(div) {
      let item = readyServiceAPIs
        .getDeliveryPlaces()
        .data.find((x) => div == x.id);
      return item ? item.name : div;
    },
    suspend(val) {
      if (val) {
        this.fireOpenDialog("success-suspend-service", this.itemPage);
      } else {
        this.fireOpenDialog("success-republish-service", this.itemPage);
      }
      this.itemPage.is_suspend = val;
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await readyServiceAPIs.getItem(this.$route.params.id);
        if (data.success) {
          this.itemPage = data.data;
          this.dataEventMessage.formData.user_id = data.data.user_id;
          this.dataEventMessage.opts.user = data.data.user_info;
          this.metaInfo_ = { title: this.itemPage.title };
          this.isOwner = this.itemPage.user_id == this.user.id;
          try {
            await readyServiceAPIs.setAsView(this.$route.params.id);
          } catch (error) {
            console.log("error", error);
            console.log("error response", error.response);
          }
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
        this.hasError = true;
      }

      this.loading = false;
    },
  },
  async mounted() {
    await this.initializing();
  },
};
</script>

<style></style>
