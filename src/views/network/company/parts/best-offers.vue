<template>
  <div class="container mt-5 p-3">
    <div class="">
      <div class="d-flex justify-content-between align-items-center container">
        <h1>أهم العروض</h1>
        <div>
          <!-- <button @click="addOffer" class="btn bg-main text-white p-2">
            أضف عرض او خصم
          </button> -->
        </div>
      </div>
      <d-swiper
        v-if="!loading"
        :items="items"
        is-auto
        :slides-per-view="3"
        :space-between="35"
      >
        <template v-slot="{ item }">
          <div class="mt-2">
            <CouponCard
              :img="item.image"
              :title="item.name_company"
              :discount="item.discount"
              :date="item.start_date"
              :during="item.day"
              :name="item.code"
              :tag="item.category ? item.category.name : null"
              :id="item.id"
              :sowDetails="true"
            />
          </div>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import OffersApi from "@/services/api/offers.js";
import CouponCard from "./best-offer-card.vue";
export default {
  name: "corpon-section",
  components: {
    CouponCard,
  },
  data: () => ({
    loading: true,
    items: [],
    // addOffers: false,
  }),
  methods: {
    addOffer() {
      if (this.userPartner) {
        this.router_push("network-offers-dashboard");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة عروض او خصومات",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و  عروضك و خصوماتك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "سجل كشركه",
              action: () => this.router_push("register-networking"),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },
    // checkSubscriptionOptions() {
    //   for (let index = 0; index < this.user.subscription_options.length; index++) {
    //     const element = this.user.subscription_options[index];
    //     if (element.key == "add_offers") {
    //       this.addOffers = true
    //     }
    //   }
    // },
    async getRecents() {
      this.loading = true;
      try {
        let { data } = await OffersApi.getRecent();
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.getRecents();
    this.checkSubscriptionOptions();
  },
};
</script>

<style></style>
