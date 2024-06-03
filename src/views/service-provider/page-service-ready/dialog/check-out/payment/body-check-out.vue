<template>
  <div
    v-if="openModal"
    style="
      top: 0;
      left: 0;
      z-index: 99999;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    "
    class="position-fixed overflow-y-auto"
  >
    <!-- <Modal
        :selectedProvider="selectedProvider"
        @payNow="proceedToPayment"
        @closeModal="handleEmit"
      /> -->
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
          X
        </button>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="row">
          <div class="col-md-8 col-12">
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
              <div class="card-container col-md-6 col-12 px-1">
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
              <div class="card-container col-md-6 col-12 px-1">
                <div class="card border-info mb-3">
                  <div class="card-body">
                    <div class="form-check">
                      <label
                        class="form-check-label d-flex align-items-center justify-content-between px-2"
                        for="tabi"
                      >
                        <div class="">
                          الدفع بواسطة تابى
                          <input
                            type="radio"
                            class="form-check-input"
                            id="tabi"
                            value="tabi"
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
              <div class="card-container col-md-6 col-12 px-1">
                <div class="card border-info mb-3">
                  <div class="card-body">
                    <div class="form-check">
                      <label
                        class="form-check-label d-flex align-items-center justify-content-between px-2"
                        for="hyperbill"
                      >
                        <div class="">
                          الدفع بواسطة هايبر بيل
                          <input
                            type="radio"
                            class="form-check-input"
                            id="hyperbill"
                            value="hyperbill"
                            v-model="selectedProvider"
                          />
                        </div>
                        <img
                          src="@/assets/img/academy/hyber.png"
                          alt="img"
                          width="91"
                          height="25"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 my-5">
              <h2 class="text-dark">اهداء الاشتراك لصديق؟</h2>
              <div class="rounded-1 border">
                <p class="border-bottom mx-2 my-2">
                  🎁 تقديم هذا الاشتراك كهدية؟
                </p>
                <div class="form-group my-2 mx-4">
                  <input
                    style="border: 2px solid #2cb7b3"
                    class="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                    v-bind="giveToAFriend"
                    @input="handleChange"
                  />
                  <label class="form-check-label mx-2" for="defaultCheck1">
                    نعم، أريد تقديم هذا الاشتراك كهدية
                   
                  </label>
                  <div v-if="giveToAFriend">
                    <input
                      v-model="email"
                      required
                      class="form-control"
                      placeholder="ادخل البريد الالكترونى"
                      type="email"
                      name=""
                      id="email"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button
                    @click="proceedToPaymentFriend"
                    style="background-color: #1fb9b3; width: 80%"
                    class="btn my-2 text-light"
                    :disabled="!giveToAFriend"
                  >
                    التاكيد والدفع
                  </button>
                </div>
              </div>
            </div> -->

            <!-- <div class="card border-info col-md-4 col-12 mb-3">
                 <div class="card-body">
                  <div class="form-check">
                    <label
                      class="form-check-label d-flex align-items-center justify-content-between px-2"
                      for="myfatoorah"
                    >
                      <div>
                        MyFatoorah
                        <input
                          type="radio"
                          class="form-check-input"
                          id="myfatoorah"
                          value="myfatoorah"
                          v-model="selectedProvider"
                        />
                      </div>
                      <img src="@/assets/img/payment/Group.png" alt="img" />
                    </label>
                  </div>
                </div> 
              </div> -->
          </div>
          <div class="col-md-4 col-12">
            <div class="d-flex my-4 flex-column gap-4">
              <!-- <div
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 18px">خطة {{ title }}</h4>
                <button
                  @click="handleClose"
                  style="
                    background-color: transparent;
                    color: #1fb9b3;
                    text-decoration: underline;
                    border: none;
                    font-size: 16px;
                    font-weight: bold;
                  "
                >
                  تغيير
                </button>
              </div>  -->
              <!-- <div
                style="border-bottom: 1px solid #888"
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 16px; color: #888">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 25.5938C8.105 25.5938 3.3125 20.8013 3.3125 14.9062C3.3125 9.01125 8.105 4.21875 14 4.21875C19.895 4.21875 24.6875 9.01125 24.6875 14.9062C24.6875 20.8013 19.895 25.5938 14 25.5938ZM14 5.90625C9.03875 5.90625 5 9.945 5 14.9062C5 19.8675 9.03875 23.9062 14 23.9062C18.9613 23.9062 23 19.8675 23 14.9062C23 9.945 18.9613 5.90625 14 5.90625Z"
                      fill="#414042"
                    />
                    <path
                      d="M14 15.4688C13.5387 15.4688 13.1562 15.0862 13.1562 14.625V9C13.1562 8.53875 13.5387 8.15625 14 8.15625C14.4612 8.15625 14.8438 8.53875 14.8438 9V14.625C14.8438 15.0862 14.4612 15.4688 14 15.4688Z"
                      fill="#414042"
                    />
                    <path
                      d="M17.375 3.09375H10.625C10.1637 3.09375 9.78125 2.71125 9.78125 2.25C9.78125 1.78875 10.1637 1.40625 10.625 1.40625H17.375C17.8363 1.40625 18.2188 1.78875 18.2188 2.25C18.2188 2.71125 17.8363 3.09375 17.375 3.09375Z"
                      fill="#414042"
                    />
                  </svg>
                  اشتراك كل

                  {{ title }}
                </h4>
                <h4 style="color: #888; font-size: 16px">{{ price }} ر.س</h4>
              </div> -->
              <!-- <div
                style="border-bottom: 1px solid #888"
                class="justify-content-between mx-2 align-items-center d-flex"
              >
                <h4 style="font-size: 18px">المجموع</h4>
                <h4 style="font-size: 18px">{{ price }} ر.س</h4>
              </div> -->
              <div class="text-center">
                <label style="font-weight: bold; font-size: 20px" for="discount"
                  >كود الخصم</label
                >
                <div class="row justify-content-center">
                  <div
                    class="d-flex flex-column my-3 w-75 position-relative align-items-center"
                  >
                    <input
                      class="px-4 rounded-3 py-2 form-control"
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
                      class="btn py-2 px-4 position-absolute rounded-2"
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

          <!-- <div class="d-flex flex-column">
              <h2 style="color: #">اهداء الاشتراك لصديق؟</h2>
            </div> -->
        </div>
      </div>
      <!-- <div class="col-12 text-center">
          <button
            @click="proceedToPayment"
            style="background-color: #1fb9b3; color: white"
            class="btn px-5 py-2"
          >
            التاكيد و الدفع
          </button>
        </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import PaymentApi from "@/services/api/payment";
import networkAPI from "@/services/api/network";

export default {
  props: {
    group: {
      type: String,
      default: "check-out-dialog",
    },
    title: {
      type: String,
      default: "تفاصيل الدفع",
    },
    changeable: {
      type: Boolean,
      default: false,
    },
    hideAmount: {
      type: Boolean,
      default: false,
    },
    otherData: {
      type: [Array, Object],
      default: () => {
        return {};
      },
    },
    defaultForm: {
      type: [Array, Object],
      default: () => {
        return {
          payment_type: "new",
          amount: null,
        };
      },
    },
  },
  // props: {
  //   itemId: {
  //     type: [String, Number],
  //   },
  //   title: {
  //     type: String,
  //   },
  //   price: {
  //     type: [String, Number],
  //   },
  //   id: {
  //     type: [String, Number],
  //   },
  //   type_subscribe: {
  //     type: String,
  //   },
  //   typeSectionSub: {
  //     type: String,
  //   },
  //   pack: {
  //     type: [Array, Object],
  //   },
  //   features: {
  //     type: [Array, Object],
  //   },
  //   subscribed: {
  //     // type: [Array, Object]
  //     type: [String, Number],
  //   },
  // },
  data() {
    return {
      packageType: "",
      selected_package: true,
      selectedPackage: "",
      openModal: false,
      selectedProvider: null,
      giveToAFriend: false,
      email: "",
    };
  },
  methods: {
    selected(evt) {
      evt.preventDefault();

      if (this.price == 0) {
        try {
          window.axios.defaults.baseURL = "https://api.riadiat.sa/";
          window.axios
            .get(
              `payments/myfatoorah/callback?package_id=${this.itemId}&package_type=${this.packageType}&user_id=${this.user.id}`
            )
            .then((res) => {
              console.log("res", res);
              this.$refs.normalSteps.nextTab();
            });
        } catch (error) {
          window.SwalError("The given data was invalid");
        }
      } else {
        let el = document.getElementById(this.pack.id);
        el.innerHTML = "تم الاختيار";
        el.classList.add("upgrade-button");
        el.classList.remove("subscribe-button");
        // Advance to the next tab
        // const scrollY = document.body.scrollHeight - window.innerHeight - 400; // Adjust 100 to your preferred position
        // window.scrollTo(0, scrollY);

        this.$emit("chosed", this.pack);
      }
    },
    handleModal() {
      this.openModal = true;
    },
    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "show_exhibitions") {
          console.log("444", element);
        }
      }
    },

    checkTypePackage() {
      let date = this.dateToString(new Date());
      if (this.user.system_subscriptions) {
        for (
          let index = 0;
          index < this.user.system_subscriptions.length;
          index++
        ) {
          const element = this.user.system_subscriptions[index];
          if (
            element.system_package.related_to.key == "network" &&
            element.end_at > date
          ) {
            this.subscribedType = element.system_package.id;
          }
        }
      }
    },
    handleChange() {
      this.giveToAFriend = !this.giveToAFriend; // Toggle the value of giveToA
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
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
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
          break;
        case "hyperbill":
          try {
            let { data } = await PaymentApi.PayPackageHyperBill({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
            });
            // let { data } = await PaymentApi.PayPackageMyFatoorah({
            //   package_id: this.id,
            //   type: "package",
            // });
            if (data.success) {
              window.location.href = data.data.payment_url;
            } else {
              console.log(data.response);
            }
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "myfatoorah":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
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
          break;
        case "card":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
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
          break;
        case "tabi":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
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
          break;
        default:
          // Handle case where no provider is selected
          window.errorMsg("اختار بوابة الدفع");
          return false;
      }
    },
    async proceedToPaymentFriend() {
      if (this.price == 0) {
        try {
          let { data } = await networkAPI.checkoutPackageFree({
            package_id: this.id,
          });
          if (data.success) {
            console.log("itsfree", data.data);
            window.SwalSuccess("تم الاشتراك بنجاح");
          } else {
            window.SwalError(data.message);
          }
        } catch (error) {
          console.log("error", error);
        }
        return;
      }
      switch (this.selectedProvider) {
        case "tamara":
          try {
            // let { data } = await PaymentApi.PayPackageTammara({
            //   package_id: this.id,
            //   type: "package",
            // });
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
              email: this.email,
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
        case "hyperbill":
          try {
            let { data } = await PaymentApi.PayPackageHyperBill({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
              email: this.email,
            });
            // let { data } = await PaymentApi.PayPackageMyFatoorah({
            //   package_id: this.id,
            //   type: "package",
            // });
            if (data.success) {
              window.location.href = data.data.payment_url;
            } else {
              console.log(data.response);
            }
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "myfatoorah":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
              email: this.email,
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
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
              email: this.email,
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
        case "tabi":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              // package_id: this.id,
              // type: "package",
              service_id: this.otherData.id,
              user_id: this.user.id,
              email: this.email,
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
    // async proceedToPayment() {
    //   if (this.price == 0) {
    //     try {
    //       let { data } = await networkAPI.checkoutPackageFree({
    //         package_id: this.id,
    //       });
    //       if (data.success) {
    //         console.log("itsfree", data.data);
    //         window.SwalSuccess("تم الاشتراك بنجاح");
    //       } else {
    //         window.SwalError(data.message);
    //       }
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //     return;
    //   }
    //   switch (this.selectedProvider) {
    //     case "tamara":
    //       try {
    //         // let { data } = await PaymentApi.PayPackageTammara({
    //         //   package_id: this.id,
    //         //   type: "package",
    //         // });
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "hyperbill":
    //       try {
    //         let { data } = await PaymentApi.PayPackageHyperBill({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         // let { data } = await PaymentApi.PayPackageMyFatoorah({
    //         //   package_id: this.id,
    //         //   type: "package",
    //         // });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "myfatoorah":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "card":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "tabi":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     default:
    //       // Handle case where no provider is selected
    //       window.errorMsg("اختار بوابة الدفع");
    //       return false;
    //   }
    // },
    // async proceedToPayment() {
    //   if (this.price == 0) {
    //     try {
    //       let { data } = await networkAPI.checkoutPackageFree({
    //         package_id: this.id,
    //       });
    //       if (data.success) {
    //         console.log("itsfree", data.data);
    //         window.SwalSuccess("تم الاشتراك بنجاح");
    //       } else {
    //         window.SwalError(data.message);
    //       }
    //     } catch (error) {
    //       console.log("error", error);
    //     }
    //     return;
    //   }
    //   switch (this.selectedProvider) {
    //     case "tamara":
    //       try {
    //         // let { data } = await PaymentApi.PayPackageTammara({
    //         //   package_id: this.id,
    //         //   type: "package",
    //         // });
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "hyperbill":
    //       try {
    //         let { data } = await PaymentApi.PayPackageHyperBill({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         // let { data } = await PaymentApi.PayPackageMyFatoorah({
    //         //   package_id: this.id,
    //         //   type: "package",
    //         // });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "myfatoorah":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "card":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     case "tabi":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           package_id: this.id,
    //           type: "package",
    //         });
    //         if (data.success) {
    //           window.location.href = data.data.payment_url;
    //         } else {
    //           console.log(data.response);
    //         }
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //       break;
    //     default:
    //       // Handle case where no provider is selected
    //       window.errorMsg("اختار بوابة الدفع");
    //       return false;
    //   }
    // },
  },
  // methods: {
  //   selected(evt) {
  //     evt.preventDefault();

  //     if (this.price == 0) {
  //       try {
  //         window.axios.defaults.baseURL = "https://api.riadiat.sa/";
  //         window.axios
  //           .get(
  //             `payments/myfatoorah/callback?package_id=${this.itemId}&package_type=${this.packageType}&user_id=${this.user.id}`
  //           )
  //           .then((res) => {
  //             console.log("res", res);
  //             this.$refs.normalSteps.nextTab();
  //           });
  //       } catch (error) {
  //         window.SwalError("The given data was invalid");
  //       }
  //     } else {
  //       let el = document.getElementById(this.pack.id);
  //       el.innerHTML = "تم الاختيار";
  //       el.classList.add("upgrade-button");
  //       el.classList.remove("subscribe-button");
  //       // Advance to the next tab
  //       // const scrollY = document.body.scrollHeight - window.innerHeight - 400; // Adjust 100 to your preferred position
  //       // window.scrollTo(0, scrollY);

  //       this.$emit("chosed", this.pack);
  //     }
  //   },
  //   handleModal() {
  //     this.openModal = true;
  //   },
  //   checkSubscriptionOptions() {
  //     for (
  //       let index = 0;
  //       index < this.user.subscription_options.length;
  //       index++
  //     ) {
  //       const element = this.user.subscription_options[index];
  //       if (element.key == "show_exhibitions") {
  //         console.log("444", element);
  //       }
  //     }
  //   },

  //   checkTypePackage() {
  //     let date = this.dateToString(new Date());
  //     if (this.user.system_subscriptions) {
  //       for (
  //         let index = 0;
  //         index < this.user.system_subscriptions.length;
  //         index++
  //       ) {
  //         const element = this.user.system_subscriptions[index];
  //         if (
  //           element.system_package.related_to.key == "network" &&
  //           element.end_at > date
  //         ) {
  //           this.subscribedType = element.system_package.id;
  //         }
  //       }
  //     }
  //   },
  //   handleChange() {
  //     this.giveToAFriend = !this.giveToAFriend; // Toggle the value of giveToA
  //   },
  //   handleClose() {
  //     this.openModal = false;
  //   },

  //   async proceedToPayment() {
  //     switch (this.selectedProvider) {
  //       case "tamara":
  //         try {
  //           // let { data } = await PaymentApi.PayPackageTammara({
  //           //   package_id: this.id,
  //           //   type: "package",
  //           // });
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "hyperbill":
  //         try {
  //           let { data } = await PaymentApi.PayPackageHyperBill({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //           });
  //           // let { data } = await PaymentApi.PayPackageMyFatoorah({
  //           //   package_id: this.id,
  //           //   type: "package",
  //           // });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "myfatoorah":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "card":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "tabi":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       default:
  //         // Handle case where no provider is selected
  //         window.errorMsg("اختار بوابة الدفع");
  //         return false;
  //     }
  //   },
  //   async proceedToPaymentFriend() {
  //     if (this.price == 0) {
  //       try {
  //         let { data } = await networkAPI.checkoutPackageFree({
  //           package_id: this.id,
  //         });
  //         if (data.success) {
  //           console.log("itsfree", data.data);
  //           window.SwalSuccess("تم الاشتراك بنجاح");
  //         } else {
  //           window.SwalError(data.message);
  //         }
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //       return;
  //     }
  //     switch (this.selectedProvider) {
  //       case "tamara":
  //         try {
  //           // let { data } = await PaymentApi.PayPackageTammara({
  //           //   package_id: this.id,
  //           //   type: "package",
  //           // });
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //             email: this.email,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "hyperbill":
  //         try {
  //           let { data } = await PaymentApi.PayPackageHyperBill({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //             email: this.email,
  //           });
  //           // let { data } = await PaymentApi.PayPackageMyFatoorah({
  //           //   package_id: this.id,
  //           //   type: "package",
  //           // });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "myfatoorah":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //             email: this.email,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "card":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //             email: this.email,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       case "tabi":
  //         try {
  //           let { data } = await PaymentApi.PayPackageMyFatoorah({
  //             // package_id: this.id,
  //             // type: "package",
  //             service_id: this.otherData.id,
  //             user_id: this.user.id,
  //             email: this.email,
  //           });
  //           if (data.success) {
  //             window.location.href = data.data.payment_url;
  //           } else {
  //             console.log(data.response);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //         }
  //         break;
  //       default:
  //         // Handle case where no provider is selected
  //         window.errorMsg("اختار بوابة الدفع");
  //         return false;
  //     }
  //   },
  //   // async proceedToPayment() {
  //   //   if (this.price == 0) {
  //   //     try {
  //   //       let { data } = await networkAPI.checkoutPackageFree({
  //   //         package_id: this.id,
  //   //       });
  //   //       if (data.success) {
  //   //         console.log("itsfree", data.data);
  //   //         window.SwalSuccess("تم الاشتراك بنجاح");
  //   //       } else {
  //   //         window.SwalError(data.message);
  //   //       }
  //   //     } catch (error) {
  //   //       console.log("error", error);
  //   //     }
  //   //     return;
  //   //   }
  //   //   switch (this.selectedProvider) {
  //   //     case "tamara":
  //   //       try {
  //   //         // let { data } = await PaymentApi.PayPackageTammara({
  //   //         //   package_id: this.id,
  //   //         //   type: "package",
  //   //         // });
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "hyperbill":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageHyperBill({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         // let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //         //   package_id: this.id,
  //   //         //   type: "package",
  //   //         // });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "myfatoorah":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "card":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "tabi":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     default:
  //   //       // Handle case where no provider is selected
  //   //       window.errorMsg("اختار بوابة الدفع");
  //   //       return false;
  //   //   }
  //   // },
  //   // async proceedToPayment() {
  //   //   if (this.price == 0) {
  //   //     try {
  //   //       let { data } = await networkAPI.checkoutPackageFree({
  //   //         package_id: this.id,
  //   //       });
  //   //       if (data.success) {
  //   //         console.log("itsfree", data.data);
  //   //         window.SwalSuccess("تم الاشتراك بنجاح");
  //   //       } else {
  //   //         window.SwalError(data.message);
  //   //       }
  //   //     } catch (error) {
  //   //       console.log("error", error);
  //   //     }
  //   //     return;
  //   //   }
  //   //   switch (this.selectedProvider) {
  //   //     case "tamara":
  //   //       try {
  //   //         // let { data } = await PaymentApi.PayPackageTammara({
  //   //         //   package_id: this.id,
  //   //         //   type: "package",
  //   //         // });
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "hyperbill":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageHyperBill({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         // let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //         //   package_id: this.id,
  //   //         //   type: "package",
  //   //         // });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "myfatoorah":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "card":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     case "tabi":
  //   //       try {
  //   //         let { data } = await PaymentApi.PayPackageMyFatoorah({
  //   //           package_id: this.id,
  //   //           type: "package",
  //   //         });
  //   //         if (data.success) {
  //   //           window.location.href = data.data.payment_url;
  //   //         } else {
  //   //           console.log(data.response);
  //   //         }
  //   //       } catch (error) {
  //   //         console.log("error", error);
  //   //       }
  //   //       break;
  //   //     default:
  //   //       // Handle case where no provider is selected
  //   //       window.errorMsg("اختار بوابة الدفع");
  //   //       return false;
  //   //   }
  //   // },
  // },
  mounted() {
    this.packageType = this.$route.meta.type;
    this.checkTypePackage();
  },
  computed: {
    // Map the 'user' state from the 'auth' module to a local computed property
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>
<style scoped>
.subscription-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f936;

  /* align-items: center; */
  transition: all 0.3s;
}

@media screen and (max-width: 1200px) {
  .subscription-card {
    flex-direction: column;
    align-items: center;
  }

  .subscription-header {
    flex-direction: column;
    align-items: center !important;
  }

  .subscription-actions {
    align-self: center !important;
  }
}

.subscription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscription-header {
  text-align: center;
  margin-bottom: 20px;
}

.subscription-title {
  font-size: 28px;
  color: #333;
  font-weight: 700;
  margin: 10px 0 10px 20px;
}

.subscription-price {
  font-size: 36px;
  display: flex;
  align-items: center;
  margin: 40px 20px 0;
}

.subscription-price span {
  margin-right: 5px;
}

.currency {
  font-size: 24px;
  color: #555;
  margin-left: 8px;
}

.subscription-features {
  margin-bottom: 10px;
  margin-right: 10px;
}

.features-title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #555;
  font-size: 18px;
}

.feature-item i {
  color: #1fb9b3;
  margin-right: 10px;
}

.subscription-actions {
  align-self: end;
}

.subscribe-button,
.upgrade-button,
.subscribed-button {
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  width: 180px;
  transition: all 0.3s;
}

.subscribe-button {
  background: linear-gradient(to bottom, #1fb9b3, #13a89d);
  color: #fff;
  margin-bottom: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscribe-button:hover {
  background: linear-gradient(to bottom, #13a89d, #1fb9b3);
}

.upgrade-button {
  background: white;
  color: #888;
  margin-bottom: 20px;
}

.upgrade-button:hover {
  opacity: 0.8;
}

.subscribed-button {
  background: #2eb9b3;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.subscribed-button:hover {
  opacity: 0.8;
}
.card-top {
  background-color: #1fb9b3;
}
.feature-top {
  color: white;
}
.feature-li {
  background-color: white;
}
.top-btn {
  background-color: #1fb9b3;
  color: white;
}
.baby {
  background: red;
}
.custom-modal-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.bv-modal {
  background-color: rgba(0, 0, 0, 0.5);
}
/* Customize modal header */
.b-modal-header {
  background-color: #007bff;
  color: #fff;
}
/* Customize modal title */
.b-modal-title {
  font-size: 1.5rem;
}

/* Customize modal body */
.b-modal-body {
  color: #333;
}

/* Customize modal footer */
.b-modal-footer {
  background-color: #007bff;
  color: #fff;
  border-top: none; /* Remove border */
}
</style>
