<template>
  <div class="d-flex gap-2 justify-content-end">
    <div style="width: 100%">
      <button
        @click="openBooking"
        style="height: 70px; width: 100%"
        class="btn-main d-flex justify-content-center align-items-center fs-4"
        role="button"
      >
        {{ labelBuyBtn }}
        &nbsp; | &nbsp;
        <div>
          <emptyWalletIcon :size="24" color="#fff" />
          &nbsp;
          <span class="text-white"
            >{{ itemPage.price }} &nbsp;{{ $t("riyals") }}</span
          >
        </div>
      </button>
    </div>
    <!-- <div>
            <button @click="sendAbuse" class="border-0 px-3 py-1 rounded-3">

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.86621 30.3327C6.31954 30.3327 5.86621 29.8793 5.86621 29.3327V2.66602C5.86621 2.11935 6.31954 1.66602 6.86621 1.66602C7.41288 1.66602 7.86621 2.11935 7.86621 2.66602V29.3327C7.86621 29.8793 7.41288 30.3327 6.86621 30.3327Z"
                        fill="#CDD7D8" />
                    <path
                        d="M21.7995 22.334H6.86621C6.31954 22.334 5.86621 21.8807 5.86621 21.334C5.86621 20.7873 6.31954 20.334 6.86621 20.334H21.7995C23.2529 20.334 23.9329 19.9473 24.0662 19.614C24.1995 19.2807 23.9995 18.534 22.9595 17.5073L21.3595 15.9073C20.7062 15.334 20.3062 14.4673 20.2662 13.5073C20.2262 12.494 20.6262 11.494 21.3595 10.7607L22.9595 9.16065C23.9462 8.17398 24.2529 7.37398 24.1062 7.02732C23.9595 6.68065 23.1995 6.33398 21.7995 6.33398H6.86621C6.30621 6.33398 5.86621 5.88065 5.86621 5.33398C5.86621 4.78732 6.31954 4.33398 6.86621 4.33398H21.7995C24.7195 4.33398 25.6529 5.54732 25.9595 6.26732C26.2529 6.98732 26.4529 8.50732 24.3729 10.5873L22.7729 12.1873C22.4395 12.5207 22.2529 12.9873 22.2662 13.454C22.2795 13.854 22.4395 14.214 22.7195 14.4673L24.3729 16.1073C26.4129 18.1473 26.2129 19.6673 25.9195 20.4007C25.6129 21.1073 24.6662 22.334 21.7995 22.334Z"
                        fill="#CDD7D8" />
                </svg>
                {{ $t('submit-report') }}
            </button>
        </div> -->

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
      <div style="background-color: white; height: 100%" class="container">
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
              <div class="d-flex border rounded-3 my-4 flex-column gap-4">
                <div class="text-center py-2">
                  <p
                    class="border-bottom py-2"
                    style="font-size: 16px; font-weight: semibold"
                  >
                    نوع الدفع : <span style="color: #2cb7b3"> مقدم خدمة </span>
                  </p>
                  <div
                    class="d-flex align-items-center justify-content-between px-3"
                  >
                    <p style="font-size: 18px; font-weight: bold">المجموع</p>
                    <p style="font-size: 18px; font-weight: bold">
                      {{ itemPage.price }}
                      ر.س
                    </p>
                  </div>
                </div>
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
  </div>
</template>

<script>
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import { mapState } from "vuex";

import PaymentApi from "@/services/api/payment";
import networkAPI from "@/services/api/network";

export default {
  components: {
    emptyWalletIcon,
  },
  name: "action-for-visiter",
  props: ["itemPage"],
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
            let { data } = await PaymentApi.PayPackageTammara({
              // package_id: this.id,
              // type: "package",
              service_id: this.itemPage.id,
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
              service_id: this.itemPage.id,
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
              service_id: this.itemPage.id,
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
              service_id: this.itemPage.id,
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
        case "tabby":
          try {
            let { data } = await PaymentApi.PayPackageTabby({
              // package_id: this.id,
              // type: "package",
              service_id: this.itemPage.id,
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
        case "tabby":
          try {
            let { data } = await PaymentApi.PayPackageTabby({
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
    // async proceedToPaymentFriend() {
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
    //           // package_id: this.id,
    //           // type: "package",
    //           service_id: this.otherData.id,
    //           user_id: this.user.id,
    //           email: this.email,
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
    //           // package_id: this.id,
    //           // type: "package",
    //           service_id: this.otherData.id,
    //           user_id: this.user.id,
    //           email: this.email,
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
    //           // package_id: this.id,
    //           // type: "package",
    //           service_id: this.otherData.id,
    //           user_id: this.user.id,
    //           email: this.email,
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
    //           // package_id: this.id,
    //           // type: "package",
    //           service_id: this.otherData.id,
    //           user_id: this.user.id,
    //           email: this.email,
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
    //     case "tabby":
    //       try {
    //         let { data } = await PaymentApi.PayPackageMyFatoorah({
    //           // package_id: this.id,
    //           // type: "package",
    //           service_id: this.otherData.id,
    //           user_id: this.user.id,
    //           email: this.email,
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
    //     case "tabby":
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
    //     case "tabby":
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
    openBooking() {
      this.openModal = true;
    },
  },
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
  // computed: {
  //   labelBuyBtn() {
  //     if (this.itemPage.state == "offline") return "أطلب الخدمة";
  //     return "إشتري الخدمة";
  //   },
  // },
  // methods: {
  //   sendAbuse() {
  //     this.showAbuseDialog({
  //       item: this.itemPage,
  //       form: { table_type: "ready-service", table_id: this.itemPage.id },
  //     });
  //   },
  //   openBooking() {
  //     if (this.itemPage.state == "online") {
  //       this.openBookingOnlineSer();
  //     } else if (this.itemPage.state == "offline")
  //       this.fireOpenDialog("booking-service", this.itemPage);
  //     else {
  //       let dataEvt = {
  //         title: "انت على وشك شراء الخدمة",
  //         description: `بمجرد دفع للخدمة يمكنك تحميل الخدمة بحد اقصى 3 مرات و بعد ذلك يلزمك شراؤها من جديد`,
  //         type: "warning",
  //         btns: [
  //           {
  //             title: this.$t("buy_service"),
  //             action: () => this.openCheckout(),
  //           },
  //         ],
  //       };
  //       this.showConfirmMsg(dataEvt);
  //     }
  //   },
  //   openBookingOnlineSer() {
  //     let dataEvt = {
  //       title: "انت على وشك شراء الخدمة",
  //       description: `بمجرد دفع للخدمة يمكنك تحميل الخدمة بحد اقصى 3 مرات و بعد ذلك يلزمك شراؤها من جديد`,
  //       type: "warning",
  //       btns: [
  //         { title: this.$t("buy_service"), action: () => this.openCheckout() },
  //       ],
  //     };
  //     this.showConfirmMsg(dataEvt);
  //   },
  //   openCheckout() {
  //     this.fireOpenDialog("checkout-ready-service-online", {
  //       item: { amount: this.itemPage.price, title: this.itemPage.title },
  //       data: this.itemPage,
  //     });
  //   },
  // },
};
</script>

<style></style>
