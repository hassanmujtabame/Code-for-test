<template>
  <div class="w-100">
    <div class="container p-5 mt-5">
      <div>
        <div class="row redy-services">
          <div class="row">
            <div class="col-md-6">
              <div class="box p-3 rounded-2 d-flex flex-column">
                <h3 class="m-c m-0">
                  {{ itemPage.title }}
                </h3>
                <div class="d-flex gap-3" v-if="isOwner">
                  <div>
                    <button
                      @click="openEditDialog"
                      style="height: 40px"
                      class="btn-main px-3 w-100 border-0 rounded-2"
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                      {{ $t("modification") }}
                    </button>
                  </div>
                  <div>
                    <button
                      @click="openDeleteDialog"
                      style="height: 40px"
                      class="btn-main btn-danger px-3 w-100 border-0 rounded-2"
                      role="button"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                      {{ $t("delete") }}
                    </button>
                  </div>
                </div>
                <div v-if="!isOwner" class="">
                  <!-- user info-->
                  <SectionUserInfo :itemPage="itemPage" />
                </div>
                <!-- <div v-else>
                  <span
                    class="m-c"
                    style="
                      font-size: 16px;
                      background-color: #eee;
                      padding: 10px;
                      border-radius: 10px;
                    "
                  >
                    {{ itemPage.state }}
                  </span>
                </div> -->
                <!-- <div v-else>
                  <span
                    class="m-c"
                    style="
                      font-size: 16px;
                      background-color: #eee;
                      padding: 10px;
                      border-radius: 10px;
                    "
                  >
                    {{ itemPage.state }}
                  </span>
                </div> -->
              </div>
            </div>

            <div class="col-md-6 my-auto">
              <div
                v-if="isOwner"
                class="box border p-3 rounded-2 h-100 d-flex flex-row justify-content-between align-items-center"
              >
                <h3 class="m-0">
                  الحالة :
                  <span>
                    {{ statusName }}
                  </span>
                </h3>
                <router-link
                  :to="
                    getRouteLocale('service-provider-my-proposal-offers', {
                      id: itemPage.id,
                    })
                  "
                  class="btn btn-main"
                  style="
                    width: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  تصفح العروض

                  <span
                    class="m-c d-flex justify-content-center align-items-center rounded-5 bg-white"
                    style="margin-right: 8px; width: 25px; height: 25px"
                    >{{ itemPage.count_offer }}</span
                  >
                </router-link>
              </div>
              <div v-if="!isOwner">
                <div
                  class="border border-2 col-12 text-center p-2 rounded-2"
                  v-if="is_offer_sent"
                >
                  <h2 class="h-100 t-c">لقد ارسلت عرضك</h2>
                </div>
                <div
                  v-else-if="
                    itemPage.user_offer &&
                    itemPage.user_offer.status != 'waiting'
                  "
                >
                  <h1>لقد تم قبول عرض اخر</h1>
                </div>
                <div v-if="!is_offer_sent">
                  <!-- <div v-if="is_offer_sent">
                                        <h1>لقد ارسلت عرضك</h1>
                                    </div> -->
                  <!-- <div v-else-if="itemPage.user_offer && itemPage.user_offer.status!='waiting'">
                                        <h1>لقد تم قبول عرض اخر</h1>
                                    </div> -->
                  <div>
                    <ValidationObserver
                      tag="div"
                      class="position-relative"
                      ref="form"
                    >
                      <div class="col-12 text-center" style="height: auto">
                        <button
                          @click="sendOffer"
                          class="btn h-100 w-100 text-light fs-5 p-3"
                          type="submit"
                          role="button"
                          style="background-color: #f2631c"
                        >
                          قدم عرض
                        </button>
                      </div>

                      <!-- <d-overlays-simple /> -->
                      <h3 class="m-c p-2" v-if="sending">أضف عرضك</h3>
                      <ValidationProvider
                        v-if="sending"
                        :name="$t('your-offer')"
                        vid="note"
                        tag="div"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <textarea
                          v-model="itemForm.note"
                          class="w-100 border p-2 rounded-2"
                          id=""
                          rows="7"
                          placeholder="أكتب ماذا يمكنك أن تقدم  "
                        ></textarea>
                        <d-error-input :errors="errors" v-if="errors.length" />
                      </ValidationProvider>

                      <div class="col-md-4 w-100">
                        <ValidationProvider
                          v-if="sending"
                          :name="$t('attachment')"
                          vid="file"
                          rules=""
                          v-slot="{ errors }"
                        >
                          <label class="w-100 position-relative rounded-2">
                            <input
                              type="file"
                              @change="uploadFile($event)"
                              id="validationCustom03"
                              class="form-control opacity-0"
                              required
                            />

                            <svg
                              style="top: 12px"
                              class="position-absolute"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.99967 15.1668H5.99967C2.37967 15.1668 0.833008 13.6202 0.833008 10.0002V6.00016C0.833008 2.38016 2.37967 0.833496 5.99967 0.833496H9.99967C13.6197 0.833496 15.1663 2.38016 15.1663 6.00016V10.0002C15.1663 13.6202 13.6197 15.1668 9.99967 15.1668ZM5.99967 1.8335C2.92634 1.8335 1.83301 2.92683 1.83301 6.00016V10.0002C1.83301 13.0735 2.92634 14.1668 5.99967 14.1668H9.99967C13.073 14.1668 14.1663 13.0735 14.1663 10.0002V6.00016C14.1663 2.92683 13.073 1.8335 9.99967 1.8335H5.99967Z"
                                fill="#1FB9B3"
                              />
                              <path
                                d="M10.0003 6.84013C9.87362 6.84013 9.74695 6.79346 9.64695 6.69346L8.00029 5.0468L6.35362 6.69346C6.16028 6.8868 5.84029 6.8868 5.64695 6.69346C5.45362 6.50013 5.45362 6.18013 5.64695 5.9868L7.64695 3.9868C7.84029 3.79346 8.16028 3.79346 8.35362 3.9868L10.3536 5.9868C10.547 6.18013 10.547 6.50013 10.3536 6.69346C10.2536 6.79346 10.127 6.84013 10.0003 6.84013Z"
                                fill="#1FB9B3"
                              />
                              <path
                                d="M8 10.1732C7.72667 10.1732 7.5 9.94651 7.5 9.67318V4.33984C7.5 4.06651 7.72667 3.83984 8 3.83984C8.27333 3.83984 8.5 4.06651 8.5 4.33984V9.67318C8.5 9.95318 8.27333 10.1732 8 10.1732Z"
                                fill="#1FB9B3"
                              />
                              <path
                                d="M7.99997 12.1531C6.5933 12.1531 5.17996 11.9264 3.83996 11.4798C3.57996 11.3931 3.43996 11.1065 3.52663 10.8465C3.6133 10.5865 3.89997 10.4398 4.15997 10.5331C6.63997 11.3598 9.36664 11.3598 11.8466 10.5331C12.1066 10.4464 12.3933 10.5865 12.48 10.8465C12.5666 11.1065 12.4266 11.3931 12.1666 11.4798C10.82 11.9331 9.40663 12.1531 7.99997 12.1531Z"
                                fill="#1FB9B3"
                              />
                            </svg>

                            <p
                              style="top: 6px; right: 13px"
                              class="position-absolute px-2 m-c"
                            >
                              أرفق ملف
                            </p>
                          </label>
                          <d-error-input
                            :errors="errors"
                            v-if="errors.length"
                          />
                        </ValidationProvider>
                      </div>
                    </ValidationObserver>
                    <SuccessSendOffer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row redy-services mt-3">
            <div class="col-md-6">
              <div class="box border p-3 rounded-2 h-100 d-flex flex-column">
                <h2 class="border-bottom p-2 flex-shrink-0">وصف المشروع</h2>
                <p class="p-3 flex-grow-1" v-html="itemPage.description"></p>
                <!-- <div class="d-flex gap-3 flex-wrap flex-shrink-0">
                  <span>
                    الملحقات
                  </span>
                  <a style="text-decoration: revert;" class="t-c" href>Image 1</a>
                  <a style="text-decoration: revert;" class="t-c" href>Image 2</a>
                  <a style="text-decoration: revert;" class="t-c" href>Image 3</a>
                  <a style="text-decoration: revert;" class="t-c" href>Image 4</a>
                  <a style="text-decoration: revert;" class="t-c" href>Image 5</a>
                </div> -->
              </div>
            </div>

            <div class="col-md-6">
              <div
                class="box border p-3 rounded-2"
                :class="{ 'mt-5l': !isOwner }"
              >
                <h2 class="border-bottom p-2">تفاصيل الخدمة المطلوبة</h2>
                <!-- <h2 class="border-bottom p-2">تفاصيل عن المشروع</h2> -->

                <div class="row">
                  <!--sect 1-->
                  <div class="col-6 p-2">
                    <emptyWalletIcon class="t-c" color="#979797" :size="24" />
                    <span>سعر الخدمة :</span>
                    <span class="m-c"
                      >{{ itemPage.price }} {{ $t("riyals") }}</span
                    >
                  </div>
                  <!--sect 2-->
                  <div class="col-6 p-2">
                    <thunderIcon class="t-c" color="#979797" :size="24" />
                    <span>عدد العروض :</span>
                    <span class="m-c">{{ itemPage.count_offer ?? "N/A" }}</span>
                  </div>
                  <div class="col-6 p-2">
                    <timerIcon class="t-c" color="#979797" :size="24" />
                    <span>مدة تنفيذ الخدمة :</span>
                    <span class="m-c"
                      >{{ itemPage.execution_period ?? "N/A" }} أيام</span
                    >
                  </div>

                  <div class="col-6 p-2">
                    <truckIcon class="t-c" color="#979797" :size="24" />
                    <span>توصيل :</span>
                    <span class="m-c">{{ itemPage.delivery ?? "N/A" }}</span>
                  </div>

                  <div class="col-6 p-2">
                    <localisationIcon class="t-c" color="#979797" :size="24" />
                    <span>مكان :</span>
                    <span class="m-c">{{ itemPage.city }}</span>
                  </div>

                  <div class="col-6 p-2">
                    <timeIcon class="t-c" color="#979797" :size="24" />
                    <span>النشر :</span>
                    <span class="m-c">{{
                      itemPage.created_at
                        ? timeAgoToHuman(itemPage.created_at)
                        : "N/A"
                    }}</span>
                  </div>

                  <div class="col-12">
                    <heartIcon class="t-c" color="#979797" :size="24" />

                    <span>المهارات المطلوبة :</span>
                    <div
                      class="d-flex justify-content-start flex-wrap gap-3 mt-2"
                    >
                      <p
                        v-for="(skill, i) in itemPage.skills.split(',')"
                        :key="i"
                        :style="{ 'background-color': colors[i % 4] }"
                        class="rounded-2 px-3 text-white"
                      >
                        {{ skill }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div v-if="!isOwner" class="col-md-6">
              <SectionUserInfo :itemPage="itemPage" />
            </div> -->
            <!-- <div class="col-md-6 mt-3">
              <div class="box border p-3 rounded-2 h-100 d-flex flex-column">
                <h2 class="border-bottom p-2 flex-shrink-0">الملحقات</h2>
                <div class="d-flex gap-3 flex-wrap flex-shrink-0">
                  <a style="text-decoration: revert" class="t-c" href
                    >Image 1</a
                  >
                  <a style="text-decoration: revert" class="t-c" href
                    >Image 2</a
                  >
                  <a style="text-decoration: revert" class="t-c" href
                    >Image 3</a
                  >
                  <a style="text-decoration: revert" class="t-c" href
                    >Image 4</a
                  >
                  <a style="text-decoration: revert" class="t-c" href
                    >Image 5</a
                  >
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- section continue learning-->
    <!-- <div>

    <SectionContinueLearning />
    <SectionHear />
    </div> -->
    <abuseCommentDialog />
  </div>
</template>

<script>
import showProposal from "@/components/cards/proposal.vue";

import SectionUserInfo from "./parts/section-user-info/index.vue";
import SuccessSendOffer from "./parts/section-user-info/success-send-offer.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
import abuseCommentDialog from "./dialogs/abuse-comment.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import timerIcon from "@/components/icon-svg/timer.vue";
import timeIcon from "@/components/icon-svg/time.vue";
import localisationIcon from "@/components/icon-svg/localisation.vue";
import heartIcon from "@/components/icon-svg/heart.vue";
import thunderIcon from "@/components/icon-svg/thunder.vue";
import truckIcon from "@/components/icon-svg/truck.vue";
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";

export default {
  name: "request-show-page",
  props: {
    itemPage: {},
    isOwner: {},
  },
  components: {
    SectionHear,
    abuseCommentDialog,
    SectionUserInfo,
    SectionContinueLearning,
    localisationIcon,
    timeIcon,
    heartIcon,
    truckIcon,
    timerIcon,
    thunderIcon,
    emptyWalletIcon,
    showProposal,
    SuccessSendOffer,
  },
  data: (vm) => ({
    itemForm: {
      note: "",
      file: null,
    },
    is_offer_sent: vm.itemPage.is_offer_sent,
    sending: false,
    loading: true,
    hasError: false,
    shareLink: "",

    colors: ["#2C98B3", "#1FB9B3", "#F2631C", "#FFBC00"],
  }),
  methods: {
    openSendAbuse() {
      this.fireOpenDialog("abuse-comment", this.itemPage);
    },
    openEditDialog() {
      this.fireOpenDialog("add-proposal", this.itemPage);
    },
    openDeleteDialog() {
      let dataEvt = {
        title: "انت على وشك حذف طلبك",
        description: "",
        type: "warning",
        btns: [
          {
            title: this.$t("confirm_delete"),
            action: this.deleteItem,
            class: "btn btn-danger",
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
      //this.fireOpenDialog('delete-item',this.itemPage)
    },
    async deleteItem() {
      this.loading = true;
      try {
        let { data } = await proposalsAPIs.deleteItem(this.itemPage);
        if (data.success) {
          this.router_push("service-provider-my-proposals");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
    uploadFile(evt) {
      if (!evt.target.files && !evt.target.files[0]) {
        this.itemForm.file = null;

        return;
      }
      this.itemForm.file = evt.target.files[0];
    },
    async checkUser() {
      let data = await window.axios.post(`user/me`);
      let { ...user } = data.data.data;
      return user;
    },
    async sendOffer() {
      let checkUser = await this.checkUser();
      // if(!checkUser.serviceProviderPortfolio){
      //   this.openConfirmDialog()
      //   return
      // }
      if (!this.$store.state.isProviderRole) {
        let dataEvent = {
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          title: "لا يمكنك تقديم عرض تقديم الخدمة",
          description:
            "حتى تتمكن من التقديم على الخدمات يجب ان تكون كمقدم خدمة في المنصة",
          btns: [
            {
              title: "تحول كمقدم خدمة",
              action: () => this.$store.commit("changeRole", "provider"),
              class: "btn btn-custmer",
            },
          ],
        };
        this.showSuccessMsg(dataEvent);
        return;
      } else if (checkUser.serviceProviderPortfolio === null) {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة  خدمه جديده",
          description: `يجب عليك انشاء ملف اعمالك اولا لكى تستطيع اضافه خدماتك`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "انشاء ملف اعمالك",
              action: () =>
                this.$router.push({ name: "create-profile-service-provider" }),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
      // if (!this.userIsSubProvider) {
      //     let dataEvent = {
      //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
      //         title: 'لا يمكنك تقديم عرض تقديم الخدمة',
      //         description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون مشترك كمقدم خدمة في المنصة',
      //         btns: [
      //             { title: 'إشترك الان', action: () => this.router_push('service-provider-subscribe'), class: 'btn btn-custmer' }
      //         ]

      //     }
      //     this.showSuccessMsg(dataEvent)
      //     return;
      // }
      this.sending = true;
      let valid = this.$refs.form.validate();
      if (!valid) {
        this.sending = false;
        return;
      }
      try {
        let formData = new FormData();
        Object.keys(this.itemForm).forEach((key) => {
          formData.append(key, this.itemForm[key]);
        });
        formData.append("service_id", this.itemPage.id);
        formData.append("user_id", this.itemPage.user_info.id);
        let { data } = await window.axios.post(
          "service-provider/user/offer-for-service",
          formData
        );
        if (data.success) {
          this.fireOpenDialog("success-send-offer");
          this.itemForm.note = "";
          this.itemForm.file = null;
          this.$refs.form.reset();
          this.is_offer_sent = true;
          this.sending = false;
          this.itempPage.is_offer_sent = true;
        }
      } catch (error) {
        console.log("errorte", error);
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            if (response.data.errors)
              this.$refs.form.setErrors(response.data.errors);
          }
        }
      }
      // this.sending = false;
    },
  },
  // methods: {
  //   openSendAbuse() {
  //     this.fireOpenDialog("abuse-comment", this.itemPage);
  //   },
  //   openEditDialog() {
  //     this.fireOpenDialog("add-proposal", this.itemPage);
  //   },
  //   openDeleteDialog() {
  //     let dataEvt = {
  //       title: "انت على وشك حذف طلبك",
  //       description: "",
  //       type: "warning",
  //       btns: [
  //         {
  //           title: this.$t("confirm_delete"),
  //           action: this.deleteItem,
  //           class: "btn btn-danger",
  //         },
  //       ],
  //     };
  //     this.showConfirmMsg(dataEvt);
  //     //this.fireOpenDialog('delete-item',this.itemPage)
  //   },
  //   async deleteItem() {
  //     this.loading = true;
  //     try {
  //       let { data } = await proposalsAPIs.deleteItem(this.itemPage);
  //       if (data.success) {
  //         this.router_push("service-provider-my-proposals");
  //       } else {
  //         window.SwalError(data.message);
  //       }
  //     } catch (error) {
  //       //
  //     }
  //     this.loading = false;
  //   },
  //   uploadFile(evt) {
  //     if (!evt.target.files && !evt.target.files[0]) {
  //       this.itemForm.file = null;

  //       return;
  //     }
  //     this.itemForm.file = evt.target.files[0];
  //   },
  //   async checkUser() {
  //     let data = await window.axios.post(`user/me`);
  //     let { ...user } = data.data.data;
  //     return user;
  //   },
  //   async sendOffer() {
  //     let checkUser = await this.checkUser();
  //     // if(!checkUser.serviceProviderPortfolio){
  //     //   this.openConfirmDialog()
  //     //   return
  //     // }
  //     if (!this.$store.state.isProviderRole) {
  //       let dataEvent = {
  //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
  //         title: "لا يمكنك تقديم عرض تقديم الخدمة",
  //         description:
  //           "حتى تتمكن من التقديم على الخدمات يجب ان تكون كمقدم خدمة في المنصة",
  //         btns: [
  //           {
  //             title: "تحول كمقدم خدمة",
  //             action: () => this.$store.commit("changeRole", "provider"),
  //             class: "btn btn-custmer",
  //           },
  //         ],
  //       };
  //       this.showSuccessMsg(dataEvent);
  //       return;
  //     } else if (checkUser.serviceProviderPortfolio === null) {
  //       let dataEvt = {
  //         title: "للأسف لايمكنك  اضافة  خدمه جديده",
  //         description: `يجب عليك انشاء ملف اعمالك اولا لكى تستطيع اضافه خدماتك`,
  //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
  //         btns: [
  //           {
  //             title: "انشاء ملف اعمالك",
  //             action: () =>
  //               this.$router.push({ name: "create-profile-service-provider" }),
  //           },
  //         ],
  //       };
  //       this.showConfirmMsg(dataEvt);
  //       return;
  //     }
  //     // if (!this.userIsSubProvider) {
  //     //     let dataEvent = {
  //     //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
  //     //         title: 'لا يمكنك تقديم عرض تقديم الخدمة',
  //     //         description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون مشترك كمقدم خدمة في المنصة',
  //     //         btns: [
  //     //             { title: 'إشترك الان', action: () => this.router_push('service-provider-subscribe'), class: 'btn btn-custmer' }
  //     //         ]

  //     //     }
  //     //     this.showSuccessMsg(dataEvent)
  //     //     return;
  //     // }
  //     this.sending = true;
  //     let valid = this.$refs.form.validate();
  //     if (!valid) {
  //       this.sending = false;
  //       return;
  //     }
  //     try {
  //       let formData = new FormData();
  //       Object.keys(this.itemForm).forEach((key) => {
  //         formData.append(key, this.itemForm[key]);
  //       });
  //       formData.append("service_id", this.itemPage.id);
  //       formData.append("user_id", this.itemPage.user_info.id);
  //       let { data } = await window.axios.post(
  //         "service-provider/user/offer-for-service",
  //         formData
  //       );
  //       if (data.success) {
  //         this.fireOpenDialog("success-send-offer");
  //         this.itemForm.note = "";
  //         this.itemForm.file = null;
  //         this.$refs.form.reset();
  //         this.is_offer_sent = true;
  //         this.sending = false;
  //         this.itempPage.is_offer_sent = true;
  //       }
  //     } catch (error) {
  //       console.log("errorte", error);
  //       if (error.response) {
  //         let response = error.response;
  //         if (response.status == 422) {
  //           if (response.data.errors)
  //             this.$refs.form.setErrors(response.data.errors);
  //         }
  //       }
  //     }
  //     // this.sending = false;
  //   },
  // },
  computed: {
    statusName() {
      switch (this.itemPage.status) {
        case "finished":
          return "مكتمل";
        case "waiting":
          return "قيد الانتظار";
        case "underway":
          return "قيد التنفيذ";
        case "cancel":
          return "ملغاة";

        default:
          return this.status;
      }
    },
  },
  mounted() {
    this.shareLink = window.location.href;
    console.log("ksd", this.itemPage);
  },
};
</script>

<style>
.vue-form-wizard .wizard-progress-bar {
  float: right !important;
  transform: translateX(-15px) !important;
}

.wizard-header {
  display: none !important;
}

.showProposal .proposal-card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
</style>
