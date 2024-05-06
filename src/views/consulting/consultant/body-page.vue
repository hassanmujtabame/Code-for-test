<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-lg-7 bg-white p-5 rounded-4 border mt-5">
        <div class="box">
          <div class="consultant-info-box d-flex align-items-center gap-3">
            <div>
              <img
                class="rounded-3"
                :src="itemPage.image"
                :alt="itemPage.name"
                @error="handleImageError"
                width="200"
                height="200"
                style="object-fit: cover"
              />
            </div>

            <div class="consultant-info-left">
              <div>
                <h2 class="consultant-name">
                  {{ itemPage.name }}
                </h2>
                <p class="consultant-text">
                  {{ itemPage.job_title }}
                </p>
              </div>

              <div>
                <h5 class="mb-2" style="font-size: 16px">نوع الاستشارة</h5>
                <div
                  style="flex-flow: wrap"
                  class="d-flex align-items-center gap-2"
                >
                  <button
                    :class="{ activeTab: tab === 0 }"
                    @click="switchTab2"
                    class="px-4 py-2 btn rounded-5"
                    style="
                      font-size: 15px;
                      color: #1fb9b3;
                      background-color: white;
                      border: 1px solid #1fb9b3;
                    "
                  >
                    خدمه حضوريه
                  </button>

                  <button
                    :class="{ activeTab: tab === 1 }"
                    @click="switchTab1"
                    class="px-4 py-2 btn rounded-5"
                    style="
                      color: #1fb9b3;
                      background-color: white;
                      font-size: 15px;

                      border: 1px solid #1fb9b3;
                    "
                  >
                    خدمه عن بعد
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-3 mt-2">
            <h4 class="consultant-about">نبذة عن المستشار</h4>
            <p class="consultant-text">
              {{ itemPage.bio ?? "لا يوجد نبذة عن المستشار حاليا" }}
            </p>
            <!--courses-->
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="box bg-white mt-5 rounded-4 border mb-3">
          <div class="div p-5">
            <h4 class="consultant-name">تفاصيل جلسة الاستشارة</h4>
            <div class="d-flex justify-content-between mt-4">
              <p v-if="!tab" style="color: #f2631c">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M19.6005 17.8002C18.0905 17.8002 16.8105 16.6802 16.6905 15.2402C16.6105 14.4102 16.9105 13.6002 17.5105 13.0102C18.0205 12.4902 18.7205 12.2002 19.4705 12.2002H21.5505C22.5405 12.2302 23.3005 13.0102 23.3005 13.9702V16.0302C23.3005 16.9902 22.5405 17.7702 21.5805 17.8002H19.6005ZM21.5305 13.7002H19.4805C19.1305 13.7002 18.8105 13.8302 18.5805 14.0702C18.2905 14.3502 18.1505 14.7302 18.1905 15.1102C18.2505 15.7702 18.8805 16.3002 19.6005 16.3002H21.5605C21.6905 16.3002 21.8105 16.1802 21.8105 16.0302V13.9702C21.8105 13.8202 21.6905 13.7102 21.5305 13.7002Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                    fill="#F2631C"
                  />
                </svg>

                {{ itemPage.site_price ?? "0" }}
              </p>
              <p v-else style="color: #f2631c">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M19.6005 17.8002C18.0905 17.8002 16.8105 16.6802 16.6905 15.2402C16.6105 14.4102 16.9105 13.6002 17.5105 13.0102C18.0205 12.4902 18.7205 12.2002 19.4705 12.2002H21.5505C22.5405 12.2302 23.3005 13.0102 23.3005 13.9702V16.0302C23.3005 16.9902 22.5405 17.7702 21.5805 17.8002H19.6005ZM21.5305 13.7002H19.4805C19.1305 13.7002 18.8105 13.8302 18.5805 14.0702C18.2905 14.3502 18.1505 14.7302 18.1905 15.1102C18.2505 15.7702 18.8805 16.3002 19.6005 16.3002H21.5605C21.6905 16.3002 21.8105 16.1802 21.8105 16.0302V13.9702C21.8105 13.8202 21.6905 13.7102 21.5305 13.7002Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                    fill="#F2631C"
                  />
                </svg>
                {{ itemPage.remote_price ?? 20 }}
              </p>
              <p class="status-icons">
                <d-timer-icon :size="24" />
                {{ itemPage.duration_time ?? "--" }} دقيقة
              </p>
              <p class="status-icons">
                <d-chatting-icon :size="24" />
                مكالمة
              </p>
            </div>
            <div class="text-center mt-4">
              <button
                style="color: white; background-color: #1fb9b3; font-size: 22px"
                @click="openAddBooking"
                class="px-5 btn rounded-3 py-2"
              >
                احجز جلستك الان
              </button>
            </div>
          </div>
        </div>
        <!--rates-->
        <SectionRates :itemPage="itemPage" />
      </div>
    </div>
    <AddBookingConsultant :type="type" :itemPage="itemPage" />
  </div>
</template>
<script>
import SectionCourses from "./parts/section-courses";
import SectionProjects from "./parts/section-projects";
import SectionRates from "./parts/section-rates";
import AddBookingConsultant from "./dialogs/add-booking/index.vue";
export default {
  components: {
    SectionCourses,
    SectionProjects,
    SectionRates,
    AddBookingConsultant,
  },
  props: {
    itemPage: {},
    opts: {
      type: [Array, Object],
      default: null,
    },
  },
  data: () => ({
    tab: 0,
    type: "site",
  }),
  methods: {
    handleImageError(e) {
      e.target.src = `${this.publicPath}assets/img/no-img.png`;
    },
    buyConsultation() {},
    checkBeforeBooking() {
      return true;
    },
    openAddBooking() {
      this.fireOpenDialog("add-booking-consultant", {
        item: this.itemPage,
        opts: this.opts,
      });
    },

    switchTab1() {
      this.tab = 1;
      this.type = "remote";
    },
    switchTab2() {
      this.tab = 0;
      this.type = "site";
    },
  },
};
</script>
<style scoped>
.consultant-info-left {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.consultant-about,
.consultant-name {
  font-weight: 400;
  font-size: 24px;
  color: #414042;
}

.consultant-text {
  font-weight: 400;
  font-size: 16px;
  color: #979797;
}

.activeTab {
  color: #fff !important;
  background-color: #1fb9b3 !important;
  border: none;
}
.status-icons {
  font-size: 16px;
  font-weight: 400;
  color: #979797;
}
</style>
