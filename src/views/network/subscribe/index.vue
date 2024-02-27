<template>
  <div class="overflow-x-hidden overflow-x-none">
    <SectionHeader style="margin-top: 85px" />

    <div class="row mt-4">
      <ul class="nav nav-pills mb-3 justify-content-center text-center">
        <li class="nav-item nav-not-active" style="width: 150px">
          <router-link
            :to="{ name: 'network-subscribe' }"
            class="nav-link active border t-c"
          >
            الشبكه
          </router-link>
        </li>
        <li class="nav-item nav-not-active" style="width: 150px">
          <router-link
            :to="{ name: 'academy-subscribe' }"
            class="nav-link border t-c"
          >
            الاكاديميه
          </router-link>
        </li>

        <li class="nav-item nav-not-active" style="width: 150px">
          <router-link
            :to="{ name: 'incubator-subscribe' }"
            class="nav-link border t-c"
          >
            الحاضنه
          </router-link>
        </li>
      </ul>
    </div>

    <div class="container p-5 mt-3">
      <div class="row mb-3 mt-2">
        <h1>شبكة رياديات: وسع دائرة معارفك</h1>
        <h5 style="color: #888">
          رياديات شبكة تضم نخبة من رائدات الأعمال والمستثمرات والشركاء، وتهدف
          إلى إلهام وتمكين وجمع رائدات الأعمال معًا على منصة واحدة ليساعد بعضهن
          البعض الآخر على النجاح في أعمالهن. ويمكن من خلالها الحصول على المساعدة
          والتشجيع للدخول في مجال ريادة الأعمال من خلال مجموعة من الخدمات
          والمزايا، وقد صممت لمساعدة رائدات الأعمال على التعلم وزيادة نمو
          أعمالهن والتواصل مع الرياديات
        </h5>
      </div>
      <div class="text-center">
        <h1>اختر الخطة هذا مناسب لك</h1>
        <p style="color: #888">
          اختر الخطة التي تناسبك، فلا تتردد في الاتصال بنا
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <button
            :class="{ 'current-tab': tab === 0 }"
            @click="switchTab(tab)"
            style="color: black; background-color: white; border: none"
            class="px-5 rounded-2 shadow py-2"
          >
            الافراد
          </button>
          <button
            :class="{ 'current-tab': tab === 1 }"
            @click="switchTab(tab)"
            style="color: black; background-color: white; border: none"
            class="px-5 rounded-2 shadow py-2"
          >
            الشركات
          </button>
        </div>
      </div>
      <!-- <form-wizard
        color="#49b483ff"
        step-size="xs"
        @on-complete="proceedToPayment"
        ref="normalSteps"
        nextButtonText="التالى"
        backButtonText="السابق"
        finishButtonText="الدفع و التأكيد "
      > -->
      <!-- <tab-content
          class="row position-relative"
          :before-change="beforeChange"
          title=" الباقه "
        > -->
      <div class="row position-relative">
        <div
          v-for="(pack, p) in packages"
          :key="p"
          class="mt-2 col-md-4 col-12"
        >
          <SectionCompany
            class="mb-4"
            v-if="pack && pack.name.includes('شرك')"
          />
          <div class="">
            <div class="mb-4">
              <NetworkSubCard
                :itemId="pack.name"
                :pack="pack"
                :title="pack.name"
                :price="pack.price"
                :features="pack.options.map((c) => c.name_ar)"
                :type-subscribe="pack.name"
                @chosed="choose"
                :subscribed="subscribedType"
                :typeSectionSub="'network'"
              >
              </NetworkSubCard>
            </div>
          </div>
        </div>
      </div>

      <CardFeatures />
      <div class="my-5">
        <BigProject />
      </div>
      <div class="my-5">
        <NetworkCreditCard />
      </div>
      <div class="my-5 container-fluid">
        <Learning />
      </div>
      <!-- </tab-content> -->
      <!-- <tab-content title="  اختيار طريقة الدفع "> -->
      <!-- <h3 class="my-4">اختيار طريقة الدفع</h3> -->
      <!-- <div class="mt-4 p-3 d-flex gap-4">
        <div class="card border-info mb-3" style="width: fit-content">
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

        <div class="card border-info mb-3" style="width: fit-content">
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

        <div class="card border-info mb-3" style="width: fit-content">
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
      </div> -->
      <!-- </tab-content> -->
      <!-- </form-wizard> -->
    </div>
  </div>
</template>
<style scoped>
ul li {
  background-color: #eee;
}

ul li.active {
  background: var(--pc);
  color: white;
}
</style>
<script>
import BigProject from "@/components/big-project.vue";
import Learning from "@/views/incubator/home/parts/section-continue-learning/index.vue";
import CardVue from "@/components/cards/incubator-dept-circle.vue";
import CardFeatures from "@/components/section-network-features.vue";
import NetworkSubCard from "@/components/network-sub-card.vue";
import NetworkCreditCard from "@/components/network-credit-card.vue";
import networkAPI from "@/services/api/network.js";
import SectionHeader from "./parts/section-header/index.vue";
import SectionCompany from "./parts/section-company/index.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import PaymentApi from "@/services/api/payment";

export default {
  name: "network-subscribe",
  components: {
    NetworkSubCard,
    Learning,
    CardVue,
    SectionHeader,
    SectionCompany,
    FormWizard,
    TabContent,
    CardFeatures,
    NetworkCreditCard,
    BigProject,
  },
  data: () => ({
    fieldIds: [],
    packages: [],
    subscribedType: "",
    selectedPackage: "",
    selectedProvider: null,
    tab: 0,
  }),
  methods: {
    getTypePackage(data) {
      switch (data.type) {
        case "free":
          return this.$t("free");
        case "month":
          return this.$t("monthly");
        case "year":
          return this.$t("annually");
        default:
          return "N/A";
      }
    },
    switchTab(n) {
      n === 1 ? (this.tab = 0) : (this.tab = 1);
      console.log(this.tab);
    },

    beforeChange() {
      if (
        this.$refs.normalSteps.activeTabIndex == 0 &&
        (!this.selectedPackage || this.selectedPackage == "")
      ) {
        window.errorMsg("اختار الباقه");
        return false;
      } else {
        return true;
      }
    },

    choose(pack) {
      this.selectedPackage = pack;
    },

    async loadPackages() {
      try {
        // Define your parameters object
        const params = {
          // Add your parameters here
          // For example:
          type_company: this.tab,
          // Another parameter:
          // And so on...
        };

        // Call the getPackages method with the params object
        let { data } = await networkAPI.getPackages(params);

        if (data.success) {
          this.packages = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    // async loadPackages() {
    //   try {
    //     let { data } = await networkAPI.getPackages();
    //     if (data.success) {
    //       this.packages = data.data;
    //     }
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // },
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
    this.loadPackages();
    this.checkTypePackage();
  },
  watch: {
    tab(newValue, oldValue) {
      // Check if the new value is different from the old value
      if (newValue !== oldValue) {
        // Call your function here
        this.loadPackages();
      }
    },
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

.custom-ul ul li {
  background-color: #eee;
}
.nav-not-active {
  background-color: white !important;
}

.custom-ul ul li.active {
  background: var(--pc);
  color: white;
}
.current-tab {
  background: #1fb9b3 !important;
  color: white !important;
}
</style>
