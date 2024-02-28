<template>
  <!-- start -->
  <div>
    <div
      :class="{ 'card-top': title === 'ستة شهور' }"
      class="subscription-card d-flex flex-column"
      style="height: 623px"
    >
      <div class="subscription-header text-center">
        <h2
          :class="{
            'feature-top': title === 'ستة شهور',
            'text-dark': title !== 'ستة شهور',
          }"
          class="subscription-title"
        >
          {{ title }}
        </h2>
        <!-- <div class="subscription-image">
        <img
          v-if="title == 'شهر'"
          src="../../../public/assets/img/Clip path group.png"
          alt=""
        />
        <img
          v-if="title == 'ثلاثة اشهر'"
          src="@/assets/img/subscription_three_months.png"
          alt=""
        />
        <img
          v-if="title == 'سنة'"
          src="@/assets/img/subscription_year.png"
          alt=""
        />
      </div> -->
        <div class="subscription-price d-flex flex-column">
          <div>
            <span
              :class="{
                'feature-top': title === 'ستة شهور',
                'text-dark': title !== 'ستة شهور',
              }"
              class=""
              >{{ price }}</span
            >
            <span
              :class="{
                'feature-top': title === 'ستة شهور',
                'text-dark': title !== 'ستة شهور',
              }"
              v-if="subscribed.type !== 'free'"
              class=""
              >{{ $t("riyals") }}</span
            >
          </div>
          <!-- <small style="font-size: 12px; color: #888">{{ title }}</small> -->
        </div>
      </div>
      <div class="subscription-features">
        <!-- <h3 class="features-title">الميزات و الخدمات:</h3> -->
        <div class="rounded-4" :class="{ 'feature-li': title === 'ستة شهور' }">
          <ul
            style="max-height: 300px"
            class="feature-list overflow-y-auto d-flex flex-row flex-wrap overflow-y-auto"
            :class="{ 'feature-li': title === 'ستة شهور' }"
          >
            <li v-for="(feature, i) in features" :key="i" class="feature-item">
              <i class="fas fa-check-circle mx-2"></i>

              <!-- <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1962_11498)">
              <path
                d="M7.32092 12C7.0103 12 6.71609 11.884 6.52757 11.684L3.97614 8.986C3.89726 8.90268 3.83967 8.80774 3.80667 8.70659C3.77366 8.60545 3.76589 8.50009 3.7838 8.39654C3.8017 8.29299 3.84494 8.19329 3.91102 8.10312C3.97711 8.01295 4.06475 7.93409 4.16895 7.87104C4.2731 7.80774 4.39184 7.7615 4.51837 7.73499C4.64489 7.70848 4.77671 7.70221 4.90627 7.71654C5.03583 7.73088 5.16057 7.76553 5.27337 7.81852C5.38616 7.87151 5.48477 7.9418 5.56356 8.02534L7.24237 9.79922L11.4633 4.37472C11.6033 4.19561 11.8264 4.06826 12.0835 4.02058C12.3407 3.97291 12.611 4.00881 12.8351 4.12041C13.3014 4.35243 13.4449 4.8439 13.1536 5.21765L8.1664 11.624C8.08127 11.7338 7.96392 11.8254 7.82455 11.8907C7.68518 11.956 7.52799 11.9932 7.36663 11.9989C7.35092 12 7.33663 12 7.32092 12Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1962_11498">
                <rect
                  width="10.1291"
                  height="8.32"
                  fill="white"
                  transform="translate(3.47559 3.83984)"
                />
              </clipPath>
            </defs>
          </svg> -->
              <span>{{ feature }}</span>
            </li>
          </ul>
          <div style="width: 100%" class="subscription-actions text-center">
            <button
              @click="handleModal"
              v-if="type_subscribe === 'مجانا' && pack.id !== subscribed"
              class="subscribe-button shadow"
              :class="{ 'top-btn': title === 'ستة شهور' }"
            >
              {{ $t("subscribe-now") }}
            </button>
            <button
              @click="handleModal"
              :class="{ 'top-btn': title === 'ستة شهور' }"
              :id="pack.id"
              v-else-if="pack.id !== subscribed"
              class="upgrade-button shadow"
            >
              رقي حسابك
            </button>
            <button
              :class="{ 'top-btn': title === 'ستة شهور' }"
              v-else-if="pack.id == subscribed"
              class="subscribed-button shadow"
            >
              انت مشترك الان
            </button>
          </div>
        </div>
      </div>
      <!-- <div style="width: 100%" class="subscription-actions text-center">
      <button
        @click="selected"
        v-if="typeSubscribe === 'مجانا' && pack.id !== subscribed"
        class="subscribe-button shadow"
      >
        {{ $t("subscribe-now") }}
      </button>
      <button
        @click="selected"
        :id="pack.id"
        v-else-if="pack.id !== subscribed"
        class="upgrade-button"
      >
        رقي حسابك
      </button>
      <button v-else-if="pack.id == subscribed" class="subscribed-button">
        انت مشترك الان
      </button>
    </div> -->
    </div>
    <div
      style="
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
      "
      v-if="openModal"
      class="position-fixed"
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
              <div class="text-center">
                <h3 class="my-4">اختيار طريقة الدفع</h3>
              </div>
              <div class="card border-info col-12 mb-3">
                <div class="card-body">
                  <div class="form-check">
                    <label
                      class="form-check-label d-flex align-items-center justify-content-between px-2"
                      for="tamara"
                    >
                      <div>
                        الدفع بواسطة بطاقة الائتمان
                        <input
                          type="radio"
                          class="form-check-input"
                          id="tamara"
                          disabled
                        />
                      </div>
                      <img
                        src="../assets/img/payment/Group 1171276314.png"
                        alt="payment method"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div class="card border-info col-md-4 col-12 mb-3">
                <div class="card-body">
                  <div class="form-check">
                    <label
                      class="form-check-label d-flex align-items-center justify-content-between px-2"
                      for="tamara"
                    >
                      <div>
                        Tamara
                        <input
                          type="radio"
                          class="form-check-input"
                          id="tamara"
                          value="tamara"
                          v-model="selectedProvider"
                        />
                      </div>
                      <img
                        src="../assets/img/payment/Group 1171276324.png"
                        alt="payment method"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div class="card border-info col-md-4 col-12 mb-3">
                <div class="card-body">
                  <div class="form-check">
                    <label
                      class="form-check-label d-flex align-items-center justify-content-between px-2"
                      for="hyperbill"
                    >
                      <div class="">
                        HyperBill
                        <input
                          type="radio"
                          class="form-check-input"
                          id="hyperbill"
                          value="hyperbill"
                          v-model="selectedProvider"
                        />
                      </div>
                      <img
                        src="../assets/img/payment/Group 1171276318.png"
                        alt="img"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div class="card border-info col-md-4 col-12 mb-3">
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
                      <img src="../assets/img/payment/Group.png" alt="img" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="d-flex my-4 flex-column gap-4">
                <div
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">خطة {{ title }}</h4>
                  <button
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
                </div>
                <div
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
                </div>
                <div
                  style="border-bottom: 1px solid #888"
                  class="justify-content-between mx-2 align-items-center d-flex"
                >
                  <h4 style="font-size: 18px">المجموع</h4>
                  <h4 style="font-size: 18px">{{ price }} ر.س</h4>
                </div>
                <div class="text-center">
                  <label for="discount">كود الخصم</label>
                  <div class="d-flex my-3 align-items-center">
                    <input
                      class="px-4 rounded-3 py-2"
                      id="discount"
                      type="text"
                      style="border: 1px dashed gray"
                      placeholder="ادخل كود الخصم"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <button
            @click="proceedToPayment"
            style="background-color: #1fb9b3; color: white"
            class="btn px-5 py-2"
          >
            استكمال
          </button>
        </div>
      </div>
    </div>
    <!-- <div>
      <b-button>Launch demo modal</b-button>

      <b-modal class="baby" id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div> -->
  </div>
  <!-- end -->
</template>

<script>
import PaymentApi from "@/services/api/payment";
import networkAPI from "@/services/api/network";
import Modal from "@/components/Modal-network.vue";

export default {
  props: {
    itemId: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    price: {
      type: [String, Number],
    },
    type_subscribe: {
      type: String,
    },
    typeSectionSub: {
      type: String,
    },
    pack: {
      type: [Array, Object],
    },
    features: {
      type: [Array, Object],
    },
    subscribed: {
      // type: [Array, Object]
      type: [String, Number],
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      packageType: "",
      selected_package: true,
      selectedPackage: "",
      openModal: false,
      selectedProvider: null,
    };
  },
  methods: {
    selected(evt) {
      evt.preventDefault();

      if (this.type_subscribe == "مجانا") {
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
    handleClose() {
      this.openModal = false;
    },

    async proceedToPayment() {
      if (this.selectedPackage.type == "free") {
        try {
          let { data } = await networkAPI.checkoutPackageFree({
            package_id: this.selectedPackage.id,
          });
          if (data.success) {
            console.log("itsfree", data.data);
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
            let { data } = await PaymentApi.PayPackageTammara({
              package_id: this.selectedPackage.id,
              type: "package",
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
              package_id: this.selectedPackage.id,
              type: "package",
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
        case "myfatoorah":
          try {
            let { data } = await PaymentApi.PayPackageMyFatoorah({
              package_id: this.selectedPackage.id,
              type: "package",
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
  },
  mounted() {
    this.packageType = this.$route.meta.type;
    this.checkTypePackage();
  },
  created() {},
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
