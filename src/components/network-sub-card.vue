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
              v-if="typeSubscribe === 'مجانا' && pack.id !== subscribed"
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
      style="top: 0; left: 0; z-index: 99999; width: 100%; height: 100%"
      v-if="openModal"
      class="position-absolute"
    >
      <!-- <Modal
        :selectedProvider="selectedProvider"
        @payNow="proceedToPayment"
        @closeModal="handleEmit"
      /> -->
      <div style="background-color: white; height: 100%" class="container">
        <div class="text-end px-5">
          <button @click="handleClose" class="btn" style="color: red">X</button>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="text-center">
            <h3 class="my-4">اختيار طريقة الدفع</h3>
          </div>

          <div
            class="card border-info mx-1 col-md-4 col-12 mb-3"
            style="width: fit-content"
          >
            <div class="card-body">
              <div class="form-check">
                <label class="form-check-label" for="tamara"
                  >Tamara
                  <input
                    type="radio"
                    class="form-check-input"
                    id="tamara"
                    value="tamara"
                    v-model="selectedProvider"
                  />
                </label>
              </div>
            </div>
          </div>

          <div
            class="card border-info mx-1 col-md-4 col-12 mb-3"
            style="width: fit-content"
          >
            <div class="card-body">
              <div class="form-check">
                <label class="form-check-label" for="hyperbill"
                  >HyperBill
                  <input
                    type="radio"
                    class="form-check-input"
                    id="hyperbill"
                    value="hyperbill"
                    v-model="selectedProvider"
                  />
                </label>
              </div>
            </div>
          </div>

          <div
            class="card border-info mx-1 col-md-4 col-12 mb-3"
            style="width: fit-content"
          >
            <div class="card-body">
              <div class="form-check">
                <label class="form-check-label" for="myfatoorah"
                  >MyFatoorah
                  <input
                    type="radio"
                    class="form-check-input"
                    id="myfatoorah"
                    value="myfatoorah"
                    v-model="selectedProvider"
                  />
                </label>
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
  </div>
  <!-- end -->
</template>

<script>
import PaymentApi from "@/services/api/payment";
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
    typeSubscribe: {
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

      if (this.typeSubscribe == "مجانا") {
        try {
          window.axios.defaults.baseURL = "https://api.riadiat.sa/";
          window.axios
            .get(
              `payments/myfatoorah/callback?package_id=${this.pack.id}&package_type=${this.packageType}&user_id=${this.user.id}`
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
            package_id: selectedPackage.id,
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
</style>
