<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-md-7 bg-white p-3 rounded-4 border mt-5">
        <div class="box">
          <div class="d-flex align-items-center gap-3">
            <div>
              <img
                class="rounded-3"
                :src="itemPage.image"
                :alt="itemPage.name"
                width="200"
                height="200"
              />
            </div>
            <div>
              <h2 class="consultant-name">
                {{ itemPage.name }}
              </h2>
              <p class="consultant-text">
                {{ itemPage.job_title }}
              </p>
              <!-- <button
                style="background-color: #ffbc00"
                class="text-white border-0 p-1"
              >
                {{ itemPage.department_name }}
              </button> -->
              <h5>نوع الاستشارة</h5>
              <div class="d-flex align-items-center gap-2">
                <!-- <div
                  class="text-center rounded-5"
                  style="background-color: #1fb9b3; width: 125px"
                > -->
                <!-- <p
                    class="px-4"
                    style="color: white; margin-top: 13px"
                    v-if="itemPage.type === 'call'"
                  >
                    خدمه عن بعد
                  </p> -->
                <p
                  class="px-4 py-2 rounded-3"
                  style="
                    color: white;
                    background-color: #1fb9b3;
                    font-size: 15px;
                  "
                >
                  خدمه حضوريه
                </p>
                <!-- </div> -->
                <!-- <div
                  class="text-center rounded-5"
                  style="
                    background-color: white;
                    width: 125px;
                    border: 1px solid #1fb9b3;
                  "
                > -->
                <p
                  class="px-4 py-2 rounded-3"
                  style="
                    color: #1fb9b3;
                    background-color: white;
                    font-size: 15px;

                    border: 1px solid #1fb9b3;
                  "
                >
                  خدمه عن بعد
                </p>
                <!-- </div> -->
                <!-- <div
                  class="text-center rounded-5"
                  style="
                    background-color: white;
                    width: 125px;
                    border: 1px solid #1fb9b3;
                  "
                > -->
                <p
                  class="px-4 py-2 rounded-3"
                  style="
                    color: #1fb9b3;
                    background-color: white;
                    font-size: 15px;
                    border: 1px solid #1fb9b3;
                  "
                >
                  زياره شركه
                </p>
                <!-- </div> -->
              </div>
              <!-- <div class="d-flex align-items-center gap-2">
                <div
                  class="text-center rounded-5"
                  style="background-color: #1fb9b3; width: 155px"
                >
                  <p
                    class="px-4"
                    style="color: white; margin-top: 13px"
                    v-if="itemPage.type === 'call'"
                  >
                    خدمه عن بعد
                  </p>
                  <p class="px-4" style="color: white; margin-top: 13px" v-else>
                    خدمه حضوريه
                  </p>
                </div>
                <div
                  class="text-center rounded-5"
                  style="
                    background-color: white;
                    width: 155px;
                    border: 1px solid #1fb9b3;
                  "
                >
                  <p class="px-4" style="color: #1fb9b3; margin-top: 13px">
                    خدمه عن بعد
                  </p>
                </div>
              </div> -->
            </div>
          </div>
          <div class="pt-3 mt-5">
            <h4 class="consultant-title">نبذه عن المستشار</h4>
            <p class="consultant-text">
              {{ itemPage.bio }}
            </p>
            <!--courses-->
          </div>
          <div class="container">
            <div class="row">
              <SectionCourses :itemPage="itemPage" />
              <SectionProjects :itemPage="itemPage" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="box bg-white mt-5 rounded-4 border">
          <div class="div p-4">
            <h4 class="consultant-title">تفاصيل جلسة الاستشارة</h4>
            <div class="d-flex justify-content-between">
              <p style="color: #f2631c">
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

                <!-- <d-empty-wallet-icon style="color: #f2631c" :size="24" /> -->

                <!-- {{ itemPage.consultation_price ?? "N/A" }} ريال -->
                {{ itemPage.remote_price ?? 0 }} -
                {{ itemPage.site_price ?? 0 }}
              </p>
              <!-- <p>
                <d-timer-icon :size="24" />
                {{ itemPage.duration_time ?? "N/A" }} دقيقة
              </p> -->
              <p>
                <d-chatting-icon :size="24" />
                مكالمة
              </p>
            </div>
            <div class="text-center">
              <button
                style="color: white; background-color: #1fb9b3"
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
    <AddBookingConsultant :itemPage="itemPage" />
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
  data: () => ({}),
  methods: {
    buyConsultation() {},
    checkBeforeBooking() {
      /*
            let dataEvt = {
                title:'لقد وصلت للحد الأقصى من الاستشارات المجانية',
                image:`${this.publicPath}assets/img/Group 1171275442.png`,
                description:`لقد قمت ب 4 استشارت مجانية  هذا الشهر هو الحد الاقصى لك , ولكن لا تقلق مازل بامكانك شراء الاستشارة بقيمة<span class="o-c"> 150 ريال</span> `,
                btns:[
                    {title:'أشتريها الان',action:this.buyConsultation}
                ]
            }
            this.showConfirmMsg(dataEvt);
            */
      return true;
    },
    openAddBooking() {
      this.fireOpenDialog("add-booking-consultant", {
        item: this.itemPage,
        opts: this.opts,
      });

      // if(this.checkBeforeBooking())
      // this.fireOpenDialog('add-booking-consultant',{item:this.itemPage,opts:this.opts})
    },
    // openAddBooking() {
    //   if (this.userSubNetwork.type == "year") {
    //     this.fireOpenDialog("add-booking-consultant", {
    //       item: this.itemPage,
    //       opts: this.opts,
    //     });
    //   } else {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك الحصول على استشارة ",
    //       description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  استشارة - رقي حسابك الى الباقة السنوية و استفيد من المميزات في الشبكة`,

    //       image: `${this.publicPath}assets/img/Group 1171275670.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   }
    //   // if(this.checkBeforeBooking())
    //   // this.fireOpenDialog('add-booking-consultant',{item:this.itemPage,opts:this.opts})
    // },
    // openAddBooking() {
    //   if (this.userSubNetwork.type == "year") {
    //     this.fireOpenDialog("add-booking-consultant", {
    //       item: this.itemPage,
    //       opts: this.opts,
    //     });
    //   } else {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك الحصول على استشارة ",
    //       description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  استشارة - رقي حسابك الى الباقة السنوية و استفيد من المميزات في الشبكة`,

    //       image: `${this.publicPath}assets/img/Group 1171275670.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   }
    //   // if(this.checkBeforeBooking())
    //   // this.fireOpenDialog('add-booking-consultant',{item:this.itemPage,opts:this.opts})
    // },
  },
};
</script>
