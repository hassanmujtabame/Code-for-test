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
              </div>
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
              <p>
                <d-empty-wallet-icon :size="24" />

                {{ itemPage.consultation_price ?? "N/A" }} ريال
              </p>
              <p>
                <d-timer-icon :size="24" />
                {{ itemPage.during ?? "N/A" }} دقيقة
              </p>
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
