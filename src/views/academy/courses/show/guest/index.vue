<template>
  <div style="margin-top: 85px" class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-md-8">
          <img
            style="width: 100%; height: 400px"
            class=""
            :src="itemPage.image_path"
            alt=""
          />
        </div>
        <div class="col-md-4 d-flex flex-column">
          <div class="d-flex my-4 align-items-center gap-2">
            <p
              style="background-color: #ffbc00"
              class="px-4 rounded-3 text-light py-1"
              v-if="itemPage.type === 'live'"
            >
              اونلاين
            </p>
            <p
              style="background-color: #ffbc00"
              class="px-4 rounded-3 text-light py-1"
              v-if="itemPage.type === 'recorded'"
            >
              مسجله
            </p>
            <p
              style="background-color: #ffbc00"
              class="px-4 rounded-3 text-light py-1"
              v-if="itemPage.type === 'on-site'"
            >
              حضورى
            </p>
            <p
              style="background-color: #08a6f4"
              class="px-4 rounded-3 text-light py-1"
            >
              {{ itemPage.department_name }}
            </p>
          </div>
          <h3 style="color: #2cb7b3">
            {{ itemPage.title }}
          </h3>
          <div class="d-flex align-items-center gap-2">
            <svg
              style="margin-top: -14px"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4707_46526)">
                <path
                  d="M1.33325 10.666C1.33325 8.7804 1.33325 7.83759 1.91904 7.2518C2.50482 6.66602 3.44763 6.66602 5.33325 6.66602H10.6666C12.5522 6.66602 13.495 6.66602 14.0808 7.2518C14.6666 7.83759 14.6666 8.7804 14.6666 10.666C14.6666 12.5516 14.6666 13.4944 14.0808 14.0802C13.495 14.666 12.5522 14.666 10.6666 14.666H5.33325C3.44763 14.666 2.50482 14.666 1.91904 14.0802C1.33325 13.4944 1.33325 12.5516 1.33325 10.666Z"
                  stroke="#2CB7B3"
                />
                <path
                  d="M4 6.66732V5.33398C4 3.12485 5.79086 1.33398 8 1.33398C9.86384 1.33398 11.4299 2.60876 11.874 4.33398"
                  stroke="#2CB7B3"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4707_46526">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p style="color: #737373">محتوى متاح دائماََ</p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <svg
              style="margin-top: -14px"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3879 2.01248L13.4053 2.51218L13.3879 2.01248ZM10.9999 2.32561L10.8565 1.84662L10.9999 2.32561ZM9.11581 3.20249L8.86536 2.76973V2.76973L9.11581 3.20249ZM2.65485 2.05058L2.62418 2.54964L2.65485 2.05058ZM4.66658 2.32561L4.79416 1.84216V1.84216L4.66658 2.32561ZM6.85475 3.25096L6.62103 3.69297L6.85475 3.25096ZM9.08497 13.3801L9.32017 13.8214L9.08497 13.3801ZM11.3333 12.4229L11.2057 11.9394L11.3333 12.4229ZM13.3233 12.1492L13.3546 12.6482L13.3233 12.1492ZM6.91486 13.3801L6.67966 13.8214L6.91486 13.3801ZM4.66658 12.4229L4.79416 11.9394H4.79416L4.66658 12.4229ZM2.67649 12.1492L2.64528 12.6482H2.64528L2.67649 12.1492ZM1.83325 10.763V3.33252H0.833252V10.763H1.83325ZM15.1666 10.763V3.28945H14.1666V10.763H15.1666ZM13.3705 1.51279C12.6116 1.53922 11.6196 1.61816 10.8565 1.84662L11.1433 2.80461C11.7761 2.61518 12.6594 2.53816 13.4053 2.51218L13.3705 1.51279ZM10.8565 1.84662C10.1932 2.04521 9.44701 2.43311 8.86536 2.76973L9.36626 3.63524C9.93323 3.30711 10.5965 2.96831 11.1433 2.80461L10.8565 1.84662ZM2.62418 2.54964C3.26817 2.58921 3.99754 2.66618 4.53901 2.80906L4.79416 1.84216C4.15362 1.67314 3.34336 1.59195 2.68553 1.55152L2.62418 2.54964ZM4.53901 2.80906C5.18042 2.97832 5.96982 3.34863 6.62103 3.69297L7.08848 2.80895C6.42483 2.45802 5.55169 2.04206 4.79416 1.84216L4.53901 2.80906ZM9.32017 13.8214C9.98085 13.4692 10.7991 13.081 11.4608 12.9063L11.2057 11.9394C10.4254 12.1453 9.52174 12.5807 8.84978 12.9389L9.32017 13.8214ZM11.4608 12.9063C11.9961 12.7651 12.7154 12.6882 13.3546 12.6482L13.2921 11.6502C12.6387 11.691 11.8393 11.7722 11.2057 11.9394L11.4608 12.9063ZM7.15006 12.9389C6.4781 12.5807 5.57439 12.1453 4.79416 11.9394L4.53901 12.9063C5.20072 13.081 6.01899 13.4692 6.67966 13.8214L7.15006 12.9389ZM4.79416 11.9394C4.16053 11.7722 3.36109 11.691 2.7077 11.6502L2.64528 12.6482C3.28445 12.6882 4.00369 12.7651 4.53901 12.9063L4.79416 11.9394ZM14.1666 10.763C14.1666 11.2202 13.7877 11.6192 13.2921 11.6502L13.3546 12.6482C14.3374 12.5867 15.1666 11.7872 15.1666 10.763H14.1666ZM15.1666 3.28945C15.1666 2.31391 14.3897 1.47728 13.3705 1.51279L13.4053 2.51218C13.8152 2.4979 14.1666 2.83505 14.1666 3.28945H15.1666ZM0.833252 10.763C0.833252 11.7872 1.66244 12.5867 2.64528 12.6482L2.7077 11.6502C2.21212 11.6192 1.83325 11.2202 1.83325 10.763H0.833252ZM8.84978 12.9389C8.32159 13.2205 7.67825 13.2205 7.15006 12.9389L6.67966 13.8214C7.50187 14.2597 8.49797 14.2597 9.32017 13.8214L8.84978 12.9389ZM8.86536 2.76973C8.31997 3.08538 7.64102 3.10112 7.08848 2.80895L6.62103 3.69297C7.48251 4.1485 8.52724 4.12082 9.36626 3.63524L8.86536 2.76973ZM1.83325 3.33252C1.83325 2.86773 2.20154 2.52366 2.62418 2.54964L2.68553 1.55152C1.6467 1.48767 0.833252 2.33308 0.833252 3.33252H1.83325Z"
                fill="#2CB7B3"
              />
              <path d="M8 3.90234V13.9996" stroke="#2CB7B3" />
              <path
                d="M3.33325 6L5.99992 6.66667"
                stroke="#2CB7B3"
                stroke-linecap="round"
              />
              <path
                d="M3.33325 8.66602L5.99992 9.33268"
                stroke="#2CB7B3"
                stroke-linecap="round"
              />
              <path
                d="M12.6665 8.66602L9.99984 9.33268"
                stroke="#2CB7B3"
                stroke-linecap="round"
              />
              <path
                d="M12.6667 3.66602V6.33954C12.6667 6.52326 12.6667 6.61512 12.6034 6.65225C12.5402 6.68938 12.4537 6.6483 12.2807 6.56614L11.4526 6.17276C11.3941 6.14496 11.3648 6.13106 11.3333 6.13106C11.3019 6.13106 11.2726 6.14496 11.2141 6.17276L10.3859 6.56614C10.213 6.6483 10.1265 6.68938 10.0632 6.65225C10 6.61512 10 6.52326 10 6.33954V4.6327"
                stroke="#2CB7B3"
                stroke-linecap="round"
              />
            </svg>

            <p style="color: #737373">تقييم نهائي</p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <svg
              style="margin-top: -14px"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5166_79490)">
                <path
                  d="M4.66659 11.9995C3.21657 11.9914 2.43129 11.9271 1.91904 11.4149C1.33325 10.8291 1.33325 9.88627 1.33325 8.00065L1.33325 5.33398C1.33325 3.44837 1.33325 2.50556 1.91904 1.91977C2.50482 1.33398 3.44763 1.33398 5.33325 1.33398L10.6666 1.33398C12.5522 1.33398 13.495 1.33398 14.0808 1.91977C14.6666 2.50556 14.6666 3.44837 14.6666 5.33398V8.00065C14.6666 9.88627 14.6666 10.8291 14.0808 11.4149C13.5942 11.9014 12.8613 11.9838 11.5464 11.9978L10.9999 11.9995"
                  stroke="#2CB7B3"
                />
                <path d="M6 4L10 4" stroke="#2CB7B3" stroke-linecap="round" />
                <path
                  d="M4.66675 6.33398H11.3334"
                  stroke="#2CB7B3"
                  stroke-linecap="round"
                />
                <path
                  d="M7.26032 9.29777C7.68648 8.9346 8.31328 8.9346 8.73944 9.29777C8.92206 9.4534 9.14912 9.54745 9.3883 9.56654C9.94644 9.61108 10.3897 10.0543 10.4342 10.6124C10.4533 10.8516 10.5473 11.0787 10.703 11.2613C11.0661 11.6875 11.0661 12.3143 10.703 12.7404C10.5473 12.923 10.4533 13.1501 10.4342 13.3893C10.3897 13.9474 9.94644 14.3906 9.3883 14.4352C9.14912 14.4543 8.92206 14.5483 8.73944 14.7039C8.31328 15.0671 7.68648 15.0671 7.26032 14.7039C7.0777 14.5483 6.85064 14.4543 6.61146 14.4352C6.05331 14.3906 5.6101 13.9474 5.56556 13.3893C5.54647 13.1501 5.45242 12.923 5.29679 12.7404C4.93362 12.3143 4.93362 11.6875 5.29679 11.2613C5.45242 11.0787 5.54647 10.8516 5.56556 10.6124C5.6101 10.0543 6.05331 9.61108 6.61146 9.56654C6.85064 9.54745 7.0777 9.4534 7.26032 9.29777Z"
                  stroke="#2CB7B3"
                />
                <path
                  d="M7 12.134L7.57143 12.6673L9 11.334"
                  stroke="#2CB7B3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5166_79490">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p style="color: #737373">شهادة إتمام الدورة</p>
          </div>
          <!-- two button ( subscribe - buy single course ) -->
          <div v-if="isOwner && userAcademyRole == 'instructor'">
            <button @click="showCourse" class="btn btn-custmer w-100 mt-3 py-3">
              الذهاب الى الدورة
            </button>
          </div>
          <div v-else-if="itemPage.user_is_join_course">
            <button
              @click="confirmCancelJoin"
              class="btn btn-danger w-100 mt-3 py-3"
            >
              {{ $t("undo-joining") }}
            </button>
          </div>
          <div v-else-if="userIsSubAcademy">
            <button
              @click="confirmJoinCourse"
              class="btn btn-custmer w-100 mt-3 py-3"
            >
              اشترك في الدورة
            </button>
          </div>
          <div v-else class="d-flex justify-content-around align-items-center">
            <div class="text-center">
              <div>
                <div class="text_1">تبدأ من</div>
                <div class="text_2">{{ 150 }} ر.س / شهر</div>
              </div>

              <button
                @click="router_push('academy-subscribe')"
                class="btn btn-customer"
              >
                اشتراك
              </button>
              <div class="text_1 mt-2">افتح هذه الدورة و 4 آخرين</div>

              <!-- <checkoutCourseDiag :show="show" /> -->
            </div>
            <div class="vr mx-2"></div>
            <div
              class="text-center d-flex flex-column justify-content-start h-100"
            >
              <div class="text_1">اشتري هذه الدورة</div>
              <div class="text_2">{{ itemPage.price }} رس</div>

              <button @click="openDialog" class="btn btn-customer-w">
                {{ itemPage.price == 0 ? "إنضمام" : "شراء" }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h1 style="color: #cf1f3e">تفاصيل الدورة</h1>
          <p style="color: #415c5e">
            {{ itemPage.desc }}
          </p>
          <!-- <h1 style="color: #cf1f3e">ماذا ستتعلم</h1> -->
          <!-- <p></p> -->
          <SectionWhatLearn :itemPage="itemPage" />
        </div>
        <div
          style="
            background-color: #fafafa;
            min-height: 300px;
            height: fit-content;
            max-height: 600px;
          "
          class="col-md-4 rounded-3 box"
        >
          <div class="d-flex flex-column align-items-center gap-1">
            <SectionLectures
              class="d-flex w-100 align-items-center justify-content-between rounded-3 overflow-y-auto px-4"
              v-if="itemPage.type == 'recorded'"
              :itemPage="itemPage"
            />
          </div>
        </div>
        <div class="col-12">
          <SectionSimilarCourses :itemPage="itemPage" />
        </div>
      </div>
    </div>

    <div
      style="
        top: 0;
        left: 0;
        z-index: 9999999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      "
      v-if="openModal"
      class="position-fixed overflow-y-auto d-flex justify-content-center align-items-center"
    >
      <div style="background-color: white; height: auto" class="container">
        <div class="text-end py-5 px-5">
          <button
            @click="handleClose"
            class=""
            style="
              color: red;
              font-size: 20px;
              border: none;
              background-color: transparent;
            "
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="row">
            <div class="col-xl-8 col-md-6 col-12">
              <div class="text-end">
                <h3 class="my-4">تفاصيل الدفع</h3>
              </div>
              <div class="card border-info col-12 mb-3">
                <div class="card-body">
                  <div class="form-check">
                    <label
                      class="form-check-label d-flex align-items-center justify-content-between px-2"
                      for="card"
                    >
                      <div>
                        الدفع بواسطة بطاقة الائتمان
                        <input
                          type="radio"
                          class="form-check-input"
                          id="card"
                          value="card"
                          v-model="selectedProvider"
                        />
                      </div>
                      <img
                        src="@/assets/img/payment/Group 1171276314.png"
                        alt="payment method"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div
                style="
                  padding-right: 0.55rem !important;
                  padding-left: 0.55rem !important;
                "
                class="row"
              >
                <div class="card-container col-12 px-1">
                  <div style="padding-top: 4px" class="card border-info mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <label
                          class="form-check-label d-flex align-items-center justify-content-between px-2"
                          for="tamara"
                        >
                          <div>
                            الدفع بواسطة تمارا
                            <input
                              type="radio"
                              class="form-check-input"
                              id="tamara"
                              value="tamara"
                              v-model="selectedProvider"
                            />
                          </div>
                          <img
                            src="@/assets/img/payment/Group 1171276324.png"
                            alt="payment method"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container col-12 px-1">
                  <div class="card border-info mb-3">
                    <div class="card-body">
                      <div class="form-check">
                        <label
                          class="form-check-label d-flex align-items-center justify-content-between px-2"
                          for="tabby"
                        >
                          <div class="">
                            الدفع بواسطة تابى
                            <input
                              type="radio"
                              class="form-check-input"
                              id="tabby"
                              value="tabby"
                              v-model="selectedProvider"
                            />
                          </div>
                          <img
                            src="@/assets/img/payment/Group 1171276318.png"
                            alt="img"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="d-flex my-4 flex-column gap-4">
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">المجموع</h4>
                  <h4 style="font-size: 18px">{{ itemPage.price }} ر.س</h4>
                </div>
                <div class="text-center">
                  <label
                    style="font-weight: bold; font-size: 20px"
                    for="discount"
                    >كود الخصم</label
                  >
                  <div class="row justify-content-center">
                    <div
                      class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                    >
                      <input
                        class="px-4 rounded-3 py-2 form-control sale-code-input"
                        id="discount"
                        type="text"
                        style="border: 1px dashed gray; border-left: none"
                        placeholder="ادخل كود الخصم"
                      />
                      <button
                        style="
                          background-color: rgb(31, 185, 179);
                          color: white;
                          font-size: 18px;
                          top: -1px;
                          left: 10px;
                        "
                        class="btn px-4 sale-code-button position-absolute rounded-2"
                      >
                        تطبيق
                      </button>
                      <button
                        @click="proceedToPayment"
                        style="background-color: #1fb9b3; color: white"
                        class="btn my-4 w-100 px-5 py-2"
                      >
                        التاكيد و الدفع
                      </button>
                    </div>
                    <p style="font-size: 14px">
                      بالنقر على التاكيد و الدفع فانت توافق على
                      <router-link
                        :to="getRouteLocale('conditions')"
                        class=""
                        style="
                          color: rgb(31, 185, 179);
                          font-weight: 500;
                          text-decoration: underline;
                        "
                      >
                        الشروط و الاحكام
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./sections/section-header/index.vue";
import SectionDesc from "./sections/section-desc/index.vue";
import SectionWhatLearn from "./sections/section-what-learn/index.vue";
import SectionNotes from "./sections/section-notes/index.vue";
import SectionLectures from "./sections/section-lectures/index.vue";
import SectionInstructors from "./sections/section-instructors/index.vue";
import SectionRates from "./sections/section-rates/index.vue";
import SectionSimilarCourses from "./sections/section-similar-courses/index.vue";
import SectionAttachments from "./sections/section-attachments";
import cardFixed from "./card-fixed.vue";
// import watchVideoLecture from './dialogs/watch-video/index'
// import checkoutCourseDiag from './dialogs/check-out-course/index.vue';
import academyAPI from "@/services/api/academy";
import paymentAPI from "@/services/api/payment";
export default {
  name: "course-show-recorded",
  components: {
    SectionHeader,
    SectionDesc,
    SectionWhatLearn,
    SectionNotes,
    SectionLectures,
    SectionInstructors,
    SectionRates,
    SectionSimilarCourses,
    SectionAttachments,
    // checkoutCourseDiag,
    // watchVideoLecture,
    cardFixed,
  },
  data: () => {
    return {
      loading: true,
      hasError: false,
      itemPage: {},
      isOwner: false,
      show: false,
      openModal: false,
      selectedProvider: null,
    };
  },
  methods: {
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await academyAPI.coursesApi.getItem(
          this.$route.params.id
        );
        if (data.success) {
          this.itemPage = data.data;

          this.isOwner =
            this.user &&
            this.itemPage.user_info &&
            this.itemPage.user_info.id == this.user.id;
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
    async openDialog() {
      if (this.token) {
        if (this.itemPage.price == 0) {
          this.confirmJoinCourse();
        } else {
          this.openModal = true;
        }
      } else {
        this.$router.push(this.getRouteLocale("login"));
      }
    },
    handleClose() {
      this.openModal = false;
    },
    async proceedToPayment() {
      switch (this.selectedProvider) {
        case "tamara":
          try {
            // let { data } = await PaymentApi.PayPackageTammara({
            //   package_id: this.id,
            //   type: "package",
            // });
            let { data } = await paymentAPI.PayPackageTammara({
              course_id: this.itemPage.id,
              type: "course",
            });
            if (data.success) {
              window.location.href = data.data.payment_url;
            } else {
              console.log(data.response);
            }
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "card":
          try {
            let { data } = await paymentAPI.PayPackageMyFatoorah({
              course_id: this.itemPage.id,
              type: "course",
            });
            if (data.success) {
              window.location.href = data.data.payment_url;
            } else {
              console.log(data.response);
            }
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "tabby":
          try {
            let { data } = await paymentAPI.PayPackageTabby({
              course_id: this.itemPage.id,
              type: "course",
            });
            if (data.success) {
              window.location.href = data.data.payment_url;
            } else {
              console.log(data.response);
            }
          } catch (error) {
            console.log("error", error);
          }
          break;
        default:
          // Handle case where no provider is selected
          window.errorMsg("اختار بوابة الدفع");
          return false;
      }
    },
    handleClick() {
      this.show = true;
    },
    showCourse() {
      this.router_push("academy-course-preview-show");
    },
    async buyCourse() {
      if (this.shouldLoginMsg()) return;
      try {
        let { data } = await academyAPI.PayPackageSelect({
          course_id: this.itemPage.id,
          type: "course",
          user_id: this.user.id,
        });
        if (data.success) {
          window.location.href = data.data.payment_url;
        } else {
          console.log(data.response);
        }
      } catch (error) {
        console.log("error", error);
      }

      // this.fireOpenDialog('checkout-course-academy', {
      //   item: {
      //     amount: this.itemPage.price,
      //     title: `${this.$t('the-course')}:${this.itemPage.title}`
      //   }, data: this.itemPage })
    },
    confirmJoinCourse() {
      let dataEvt = {
        title: "هل أنت متأكد من إنضمامك لهذه الدورة ؟",
        description: `بإنضمامك إلى هذه الدورة سيتبقى لك <span style="color:#F2631C">${this.resetCourse} دورات</span> هذا الشهر`,
        type: "warning",
        btns: [
          {
            title: this.$t("join_confirmation"),
            action: () => this.joinCourse(),
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    async joinCourse() {
      try {
        let { data } = await academyAPI.coursesApi.joinCourse(this.itemPage.id);
        if (data.success) {
          let dataEvt = {
            title: "تم الإنضمام إلى هذه الدورة بنجاح",
            description: "",
            btns: [
              {
                title: this.$t("undo-joining"),
                action: () => this.cancelJoin(),
                class: "btn btn-danger",
              },
            ],
          };
          this.initializing();
          this.showSuccessMsg(dataEvt);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
    },
    confirmCancelJoin() {
      let dataEvt = {
        title: "هل أنت متأكد من التراجع عن الإنضمام إلى هذه الدورة ؟",
        btns: [
          {
            title: this.$t("undo-joining"),
            action: () => this.cancelJoin(),
            class: "btn btn-danger",
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    async cancelJoin() {
      try {
        let { data } = await academyAPI.coursesApi.cancelJoinCourse(
          this.itemPage.id
        );
        if (data.success) {
          this.initializing();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
    },
  },
  mounted() {
    this.initializing();
  },
  watch: {
    "$route.params.id": function (newId, oldId) {
      // Invoke your function here
      this.initializing();
    },
  },
};
</script>
<style>
.text_1 {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 275;
  line-height: 17px;
  color: #0c2f33;
}
.text_2 {
  margin-bottom: 12px;
  font-family: cairo;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  text-align: justified;

  color: #0c2f33;
}
.course-guest-section__title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  text-transform: capitalize;
  /* Turquoise text */
  color: #0c2f33;
  margin: 0;
}
.sale-code-button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
@media screen and (max-width: 600px) {
  .sale-code-button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
}
</style>
