<template>
  <div>
    <!-- <div class="row mt-4">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'network-subscribe' }" class="nav-link active border t-c ">
                        الشبكه
                    </router-link>
                </li>
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'academy-subscribe' }" class="nav-link  border t-c ">
                        الاكاديميه
                    </router-link>
                </li>

                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'incubator-subscribe' }" class="nav-link  border t-c ">
                        الحاضنه
                    </router-link>
                </li>
            </ul>
        </div> -->

    <div class="container p-5 mt-3">
      <div
        class="mb-3 mt-2 flex-column justify-content-center align-items-center d-flex"
      >
        <h1>اختر الخطه المناسبه لك</h1>
        <br />
        <span> اختر الخطه التى تناسبك, لا تتردد فى الاتصال بنا </span>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 col-12">
          <SubscribeCard1 />
        </div>
        <div class="col-md-4 col-12">
          <SubscribeCard2 />
        </div>
        <div class="col-md-4 col-12">
          <SubscribeCard3 />
        </div>
      </div>
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
import SubscribeCard1 from "./subscribe-card1.vue";
import SubscribeCard2 from "./subscribe-card2.vue";
import SubscribeCard3 from "./subscribe-card3.vue";
import CardVue from "@/components/cards/incubator-dept-circle.vue";
import networkAPI from "@/services/api/network.js";
import SectionHeader from "./parts/section-header/index.vue";
import SectionCompany from "./parts/section-company/index.vue";

export default {
  name: "network-subscribe",
  components: {
    SubscribeCard1,
    SubscribeCard2,
    SubscribeCard3,
    CardVue,
    SectionHeader,
    SectionCompany,
  },
  data: () => ({
    fieldIds: [],
    packages: [],
    subscribedType: "",
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
    async choose(selectedPackage) {
      if (selectedPackage.type == "free") {
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
      } else {
        try {
          let { data } = await networkAPI.PayPackageSelect({
            package_id: selectedPackage.id,
            user_id: this.user.id,
          });
          if (data.success) {
            window.location.href = data.data.payment_url;
          } else {
            window.SwalError(data.message);
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    },

    async loadPackages() {
      try {
        let { data } = await networkAPI.getPackages();
        if (data.success) {
          this.packages = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
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
  },
  mounted() {
    this.loadPackages();
    this.checkTypePackage();
  },
};
</script>
