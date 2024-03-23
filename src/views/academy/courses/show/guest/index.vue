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
          <div class="d-flex align-items-center gap-2">
            <p>تبدا من</p>
            <h3 style="font-size: 22px">ر.س {{ itemPage.price }}</h3>
          </div>
          <checkoutCourseDiag :show="show" />

          <button
            @click="handleClick"
            style="background-color: #1fb9b3; color: white"
            class="btn px-4 py-2"
          >
            اشترك الان
          </button>
          <div class="text-center">
            <p style="color: #888">افتح هذه الدورة و 4 آخرين</p>
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
            <div class="d-flex align-items-center gap-4 px-1">
              <h1 style="color: #cf1f3e; font-size: 20px">محتويات الدورة</h1>
              <div style="margin-top: 16px" class="">
                <p style="color: #666666; font-size: 12px">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99992 2.33398C4.59416 2.33398 1.83325 5.09489 1.83325 8.50065C1.83325 11.9064 4.59416 14.6673 7.99992 14.6673C11.4057 14.6673 14.1666 11.9064 14.1666 8.50065C14.1666 5.09489 11.4057 2.33398 7.99992 2.33398ZM0.833252 8.50065C0.833252 4.54261 4.04188 1.33398 7.99992 1.33398C11.958 1.33398 15.1666 4.54261 15.1666 8.50065C15.1666 12.4587 11.958 15.6673 7.99992 15.6673C4.04188 15.6673 0.833252 12.4587 0.833252 8.50065ZM7.99992 5.33398C8.27606 5.33398 8.49992 5.55784 8.49992 5.83398V8.29354L10.0201 9.81376C10.2154 10.009 10.2154 10.3256 10.0201 10.5209C9.82488 10.7161 9.50829 10.7161 9.31303 10.5209L7.64637 8.8542C7.5526 8.76044 7.49992 8.63326 7.49992 8.50065V5.83398C7.49992 5.55784 7.72378 5.33398 7.99992 5.33398Z"
                      fill="#666666"
                    />
                  </svg>

                  1ساعة 39دقيقة/14 مقطع
                </p>
              </div>
            </div>
            <div
              class="d-flex align-items-center justify-content-between rounded-3 overflow-y-auto px-4"
              style="background-color: #e1eeef; width: 100%"
            >
              <h5 style="color: #1fb9b3">1.مقدمه</h5>
              <p style="color: #1fb9b3; margin-top: 9px">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.96979 13.6422C8.61979 13.6422 8.29479 13.5589 8.00313 13.3922C7.33646 13.0089 6.95312 12.2256 6.95312 11.2339V8.76724C6.95312 7.7839 7.33646 6.99224 8.00313 6.6089C8.66979 6.22557 9.53646 6.2839 10.3948 6.7839L12.5365 8.01724C13.3865 8.5089 13.8781 9.2339 13.8781 10.0006C13.8781 10.7672 13.3865 11.4922 12.5365 11.9839L10.3948 13.2172C9.91146 13.5006 9.41979 13.6422 8.96979 13.6422ZM8.97813 7.6089C8.84479 7.6089 8.72812 7.6339 8.63646 7.69224C8.36979 7.85057 8.21146 8.24224 8.21146 8.76724V11.2339C8.21146 11.7589 8.36146 12.1506 8.63646 12.3089C8.90312 12.4672 9.31979 12.4006 9.77812 12.1339L11.9198 10.9006C12.3781 10.6339 12.6365 10.3089 12.6365 10.0006C12.6365 9.69224 12.3781 9.3589 11.9198 9.10057L9.77812 7.86724C9.47812 7.69224 9.20313 7.6089 8.97813 7.6089Z"
                    fill="#1FB9B3"
                  />
                  <path
                    d="M9.9974 18.9577C5.05573 18.9577 1.03906 14.941 1.03906 9.99935C1.03906 5.05768 5.05573 1.04102 9.9974 1.04102C14.9391 1.04102 18.9557 5.05768 18.9557 9.99935C18.9557 14.941 14.9391 18.9577 9.9974 18.9577ZM9.9974 2.29102C5.7474 2.29102 2.28906 5.74935 2.28906 9.99935C2.28906 14.2493 5.7474 17.7077 9.9974 17.7077C14.2474 17.7077 17.7057 14.2493 17.7057 9.99935C17.7057 5.74935 14.2474 2.29102 9.9974 2.29102Z"
                    fill="#1FB9B3"
                  />
                </svg>
                شاهد مجانا
              </p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <SectionSimilarCourses :itemPage="itemPage" />
        </div>
      </div>
      <!-- <SectionHeader :itemPage="itemPage" /> -->
      <!-- <div style="max-width:628px" class="px-5">
        <SectionDesc :itemPage="itemPage" />
        <SectionWhatLearn :itemPage="itemPage" />
        <SectionNotes v-if="['on-site'].includes(itemPage.type)" :itemPage="itemPage" />
        <div class="mt-4">
          <SectionAttachments hideHeader v-if="['live'].includes(itemPage.type)" :itemPage="itemPage" />
        </div>
        <SectionLectures v-if="itemPage.type == 'recorded'" :itemPage="itemPage" />
        <SectionInstructors :itemPage="itemPage" />
        <div class="mt-4">
          <SectionRates :itemPage="itemPage" />
        </div>
        <SectionSimilarCourses :itemPage="itemPage" />
      </div> -->
      <!-- <cardFixed :itemPage="itemPage" :isOwner="isOwner" /> -->
      <!-- <watchVideoLecture />
      -->
      <!-- <checkoutCourseDiag />   -->
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
    };
  },
  // watch: {
  //   '$route': {
  //     deep: true,
  //     handler() {
  //       this.initializing()
  //     }
  //   }
  // },
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
    handleClick() {
      this.show = true;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
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
</style>
